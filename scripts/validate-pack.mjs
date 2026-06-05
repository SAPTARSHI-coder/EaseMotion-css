import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const manifest = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

const pack = spawnSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
  shell: process.platform === "win32",
});

if (pack.error || pack.status !== 0) {
  if (pack.stdout) process.stdout.write(pack.stdout);
  if (pack.stderr) process.stderr.write(pack.stderr);
  if (pack.error) console.error(pack.error.message);
  process.exit(pack.status ?? 1);
}

let entries;
try {
  entries = JSON.parse(pack.stdout);
} catch (error) {
  console.error(`Unable to parse npm pack output: ${error.message}`);
  process.exit(1);
}

const files = entries[0]?.files?.map((file) => file.path) ?? [];
const allowed = new Set(["package.json"]);
const allowedDirectories = [];

for (const item of manifest.files ?? []) {
  if (item.endsWith("/")) {
    allowedDirectories.push(item);
  } else {
    allowed.add(item);
  }
}

const unexpected = files.filter(
  (file) => {
    if (allowed.has(file)) return false;
    if (allowedDirectories.some((directory) => file.startsWith(directory))) return false;
    if (/^(README|LICENSE|CHANGELOG)\b/i.test(file)) return false;
    return true;
  }
);

if (unexpected.length > 0) {
  console.error("npm pack includes unexpected files:");
  for (const file of unexpected) {
    console.error(`  ${file}`);
  }
  process.exit(1);
}

const required = [
  "package.json",
  "easemotion.css",
  "easemotion.min.css",
  "core/variables.css",
  "core/base.css",
  "core/animations.css",
  "core/utilities.css",
  "components/buttons.css",
  "components/cards.css",
  "components/chip.css",
  "components/footer.css",
  "components/masonry.css",
  "components/navbar.css",
  "components/scroll-progress.css",
  "components/sidebar.css",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
];

const missing = required.filter((file) => !files.includes(file));

if (missing.length > 0) {
  console.error("npm pack is missing required files:");
  for (const file of missing) {
    console.error(`  ${file}`);
  }
  process.exit(1);
}

console.log(`npm pack dry-run validated ${files.length} files.`);
