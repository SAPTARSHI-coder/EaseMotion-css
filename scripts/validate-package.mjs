import { readFile } from "node:fs/promises";

const manifestPath = new URL("../package.json", import.meta.url);
const requiredScripts = [
  "build",
  "test",
  "lint:duplicates",
  "validate:manifest",
  "validate:bundle",
  "validate:pack",
  "release:check",
];
const requiredFiles = [
  "easemotion.css",
  "easemotion.min.css",
  "core/",
  "components/",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
];

function fail(message) {
  console.error(`package.json validation failed: ${message}`);
  process.exit(1);
}

const rawManifest = await readFile(manifestPath, "utf8");
let manifest;

try {
  manifest = JSON.parse(rawManifest);
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}

if (manifest.name !== "easemotion-css") {
  fail('expected package name to be "easemotion-css"');
}

if (!manifest.repository?.url?.includes("SAPTARSHI-coder/EaseMotion-css")) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}

for (const script of requiredScripts) {
  if (!manifest.scripts?.[script]) {
    fail(`missing required script "${script}"`);
  }
}

for (const file of requiredFiles) {
  if (!manifest.files?.includes(file)) {
    fail(`missing required package file entry "${file}"`);
  }
}

if (manifest.scripts.test.includes("No tests yet")) {
  fail("test script must run real validation");
}

console.log("package.json is valid and release scripts are configured.");
