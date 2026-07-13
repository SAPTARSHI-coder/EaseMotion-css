import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

const CSS_DIRECTORIES = [
  "core",
  "components",
  "scss",
  "easemotion",
];

const IGNORE_DIRECTORIES = new Set([
  "node_modules",
  ".git",
  "dist",
  "docs",
  "examples",
  "submissions",
]);

const declarationRegex = /(--[A-Za-z0-9_-]+)\s*:/g;
const usageRegex = /var\(\s*(--[\w-]+)/g;

async function collectCssFiles(directory, files = []) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (IGNORE_DIRECTORIES.has(entry.name)) continue;

      await collectCssFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const cssFiles = [];
  const declaredVariables = new Set();
  const usedVariables = new Set();

  for (const dir of CSS_DIRECTORIES) {
    const fullDir = path.join(ROOT, dir);

    try {
      await fs.access(fullDir);
      await collectCssFiles(fullDir, cssFiles);
    } catch {
      // Skip if directory doesn't exist
    }
  }
  for (const file of cssFiles) {
  const css = await fs.readFile(file, "utf8");

  let match;
  declarationRegex.lastIndex = 0;
  usageRegex.lastIndex = 0;

  // Find declared variables
  while ((match = declarationRegex.exec(css)) !== null) {
    declaredVariables.add(match[1]);
  }
  while ((match = usageRegex.exec(css)) !== null) {
    usedVariables.add(match[1]);
}
  
}
const unusedVariables = [...declaredVariables].filter(
    variable => !usedVariables.has(variable)
);
console.log("\nScanning CSS files...\n");
console.log(`CSS Files Scanned : ${cssFiles.length}`);
console.log(`Declared Variables: ${declaredVariables.size}`);
console.log(`Referenced Variables: ${usedVariables.size}`);
console.log("\nUnused Variables:");

if (unusedVariables.length === 0) {
  console.log("✓ No unused CSS variables found.");
} else {
  for (const variable of unusedVariables.sort((a, b) => a.localeCompare(b))) {
    console.log(`- ${variable}`);
  }

  console.log(`\nTotal Unused: ${unusedVariables.length}`);
}
}
main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});