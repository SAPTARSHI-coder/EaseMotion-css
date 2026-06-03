import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const dirs = ["core", "components"];
const classPattern = /^\.([a-zA-Z0-9_-]+)\s*\{/;
const keyframePattern = /@keyframes\s+(\S+)/;

async function findDuplicates() {
  const classes = {};
  const keyframes = {};

  for (const dir of dirs) {
    const dirPath = path.join(rootDir, dir);
    let entries;
    try {
      entries = await readdir(dirPath, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".css")) continue;

      const filePath = path.join(dirPath, entry.name);
      const content = await readFile(filePath, "utf8");
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const cm = line.match(classPattern);
        if (cm) {
          if (!classes[cm[1]]) classes[cm[1]] = [];
          classes[cm[1]].push(`${dir}/${entry.name}:${i + 1}`);
        }

        const km = line.match(keyframePattern);
        if (km) {
          if (!keyframes[km[1]]) keyframes[km[1]] = [];
          keyframes[km[1]].push(`${dir}/${entry.name}:${i + 1}`);
        }
      }
    }
  }

  let exitCode = 0;

  for (const [name, locations] of Object.entries(classes)) {
    if (locations.length > 1) {
      console.log(`Duplicate class .${name}:`);
      locations.forEach((loc) => console.log(`  ${loc}`));
      exitCode = 1;
    }
  }

  for (const [name, locations] of Object.entries(keyframes)) {
    if (locations.length > 1) {
      console.log(`Duplicate @keyframes ${name}:`);
      locations.forEach((loc) => console.log(`  ${loc}`));
      exitCode = 1;
    }
  }

  if (exitCode === 0) {
    console.log("No duplicate class names or @keyframes found.");
  }

  process.exit(exitCode);
}

findDuplicates().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
