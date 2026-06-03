import { spawnSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const bundlePath = path.join(rootDir, "easemotion.min.css");

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

if (originalBundle !== rebuiltBundle) {
  await writeFile(bundlePath, originalBundle, "utf8");
  throw new Error(
    `${path.relative(rootDir, bundlePath)} is stale. Run \`npm run build\` and commit the regenerated bundle.`,
  );
}

console.log("easemotion.min.css is up to date.");
