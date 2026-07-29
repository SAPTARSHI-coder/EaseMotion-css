import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

try {
  console.log("Resolving merge conflict in easemotion.min.css...");

  // 1. Clear Git conflict state by checking out our version of the minified CSS
  execSync("git checkout --ours easemotion.min.css", { cwd: rootDir, stdio: "inherit" });

  // 2. Rebuild the CSS bundle from the merged source files
  console.log("Rebuilding CSS bundle from merged source files...");
  execSync("node scripts/build-minified-css.mjs", { cwd: rootDir, stdio: "inherit" });

  // 3. Stage the rebuilt file
  console.log("Staging resolved easemotion.min.css...");
  execSync("git add easemotion.min.css", { cwd: rootDir, stdio: "inherit" });

  console.log("\n✅ Success: Conflict in easemotion.min.css resolved and staged successfully!");
  console.log("You can now run 'git commit' to complete your merge/rebase.");
} catch (error) {
  console.error("❌ Failed to resolve conflict automatically:", error.message);
  process.exit(1);
}
