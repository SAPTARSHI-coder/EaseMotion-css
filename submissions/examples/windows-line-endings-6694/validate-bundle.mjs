import { spawnSync, execSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../../");
const bundlePath = path.join(rootDir, "easemotion.min.css");

// Skip validation in CI if the changed files do not affect the CSS bundle.
// This prevents unnecessary bundle conflicts for example/sandbox PRs.
if (process.env.GITHUB_ACTIONS === "true") {
  try {
    const baseBranch = process.env.GITHUB_BASE_REF || "main";
    execSync(`git fetch origin ${baseBranch} --depth=1`, { stdio: "ignore" });

    const changedFiles = execSync(`git diff --name-only origin/${baseBranch}`, {
      encoding: "utf8",
    })
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const affectsBundle = changedFiles.some(
      (file) =>
        file === "easemotion.css" ||
        file.startsWith("core/") ||
        file.startsWith("components/") ||
        file.startsWith("easemotion/")
    );

    if (!affectsBundle) {
      console.log(
        "No core, component, or entrypoint files modified. Skipping bundle validation."
      );
      process.exit(0);
    }
  } catch (err) {
    console.warn(
      "Could not determine changed files from git diff, running full validation:",
      err.message
    );
  }
}

const originalBundle = await readFile(bundlePath, "utf8").catch(() => "");
const build = spawnSync(process.execPath, ["scripts/build-minified-css.mjs"], {
  cwd: rootDir,
  encoding: "utf8",
});

if (build.stdout) process.stdout.write(build.stdout);
if (build.stderr) process.stderr.write(build.stderr);

if (build.error || build.status !== 0) {
  if (build.error) console.error(build.error.message);
  process.exit(build.status ?? 1);
}

const rebuiltBundle = await readFile(bundlePath, "utf8");

// Normalize line endings to LF before comparison to prevent false positives on Windows
const normalize = (str) => str.replace(/\r\n/g, "\n");

if (normalize(originalBundle) !== normalize(rebuiltBundle)) {
  await writeFile(bundlePath, originalBundle, "utf8");
  throw new Error(
    `${path.relative(rootDir, bundlePath)} is stale. Run \`npm run build\` and commit the regenerated bundle.`
  );
}

console.log("easemotion.min.css is up to date.");
