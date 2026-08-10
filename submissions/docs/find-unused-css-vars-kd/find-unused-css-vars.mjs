import fs from "node:fs";
import path from "node:path";

// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Helper to remove comments while preserving position and newlines
function stripCommentsPreservePositions(source) {
  let result = "";
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    // Handle strings to avoid stripping content inside quotes
    if (ch === '"' || ch === "'") {
      const quote = ch;
      result += ch;
      i++;

      while (i < source.length) {
        const c = source[i];
        result += c;

        if (c === "\\") {
          i++;
          if (i < source.length) {
            result += source[i];
            i++;
          }
          continue;
        }

        if (c === quote) {
          i++;
          break;
        }

        i++;
      }

      continue;
    }

    // Handle multi-line comments /* ... */
    if (ch === "/" && source[i + 1] === "*") {
      result += "  ";
      i += 2;

      while (i < source.length) {
        if (source[i] === "*" && source[i + 1] === "/") {
          result += "  ";
          i += 2;
          break;
        }

        if (source[i] === "\n") {
          result += "\n";
        } else if (source[i] === "\r") {
          result += "\r";
        } else {
          result += " ";
        }
        i++;
      }

      continue;
    }

    result += ch;
    i++;
  }

  return result;
}

// Recursively find all CSS files in a directory
function findCssFiles(dirPath) {
  const results = [];

  if (!fs.existsSync(dirPath)) return results;
  const stat = fs.statSync(dirPath);
  if (stat.isFile()) {
    if (dirPath.endsWith(".css")) {
      results.push(dirPath);
    }
    return results;
  }

  const list = fs.readdirSync(dirPath);
  for (const file of list) {
    const filePath = path.join(dirPath, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      // Exclude common non-source directories if they happen to be in sub-paths
      const name = path.basename(filePath);
      if (
        [
          "node_modules",
          ".git",
          "dist",
          "submissions",
          "tests",
          "benchmarks",
        ].includes(name)
      ) {
        continue;
      }
      results.push(...findCssFiles(filePath));
    } else if (filePath.endsWith(".css")) {
      results.push(filePath);
    }
  }

  return results;
}

// CLI usage message
function printUsage() {
  console.log(`Usage: node scripts/find-unused-css-vars.mjs [options] [files/directories...]

Options:
  -h, --help           Show this help message
  --fix                Automatically remove unused variable declarations from source CSS files
  -i, --ignore <vars>  Comma-separated list of variables to ignore
  --json               Output findings in JSON format
  --silent             Suppress non-error logging
`);
}

async function main() {
  const args = process.argv.slice(2);
  let showHelp = false;
  let fix = false;
  let json = false;
  let silent = false;
  const ignoreList = new Set(["--ease-version"]);
  const customTargets = [];

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      showHelp = true;
    } else if (arg === "--fix") {
      fix = true;
    } else if (arg === "--json") {
      json = true;
    } else if (arg === "--silent") {
      silent = true;
    } else if (arg === "--ignore" || arg === "-i") {
      const next = args[i + 1];
      if (next && !next.startsWith("-")) {
        next.split(",").forEach((v) => {
          const trimmed = v.trim();
          if (trimmed) {
            ignoreList.add(trimmed.startsWith("--") ? trimmed : "--" + trimmed);
          }
        });
        i++;
      } else {
        console.error(
          "Error: --ignore requires a comma-separated list of variables"
        );
        process.exit(1);
      }
    } else if (arg.startsWith("-")) {
      console.error(`Error: Unknown option ${arg}`);
      printUsage();
      process.exit(1);
    } else {
      customTargets.push(arg);
    }
  }

  if (showHelp) {
    printUsage();
    process.exit(0);
  }

  const rootDir = process.cwd();
  let filesToScan = [];

  if (customTargets.length > 0) {
    for (const target of customTargets) {
      const targetPath = path.resolve(rootDir, target);
      if (fs.existsSync(targetPath)) {
        filesToScan.push(...findCssFiles(targetPath));
      } else {
        console.error(`Error: Path not found "${target}"`);
        process.exit(1);
      }
    }
  } else {
    // Default framework source files
    const defaultDirs = ["core", "components"];
    const defaultFiles = ["easemotion.css"];

    for (const dir of defaultDirs) {
      const dirPath = path.join(rootDir, dir);
      if (fs.existsSync(dirPath)) {
        filesToScan.push(...findCssFiles(dirPath));
      }
    }

    for (const file of defaultFiles) {
      const filePath = path.join(rootDir, file);
      if (fs.existsSync(filePath)) {
        filesToScan.push(filePath);
      }
    }
  }

  // Deduplicate files
  filesToScan = Array.from(new Set(filesToScan));

  if (filesToScan.length === 0) {
    if (!silent && !json) {
      console.log("No CSS files found to scan.");
    }
    process.exit(0);
  }

  const declaredVars = new Map(); // varName -> Array of { file, line, lineContent }
  const referencedVars = new Set();

  const declRegex = /(?:^|[{}\s;])(--[a-zA-Z0-9_-]+)\s*:/;
  const refRegex = /var\(\s*(--[a-zA-Z0-9_-]+)/g;

  // Scan files
  for (const file of filesToScan) {
    const relativePath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, "utf8");
    const cleanContent = stripCommentsPreservePositions(content);

    const lines = cleanContent.split(/\r?\n/);
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      const lineNumber = lineIdx + 1;

      // Extract declarations
      const declMatch = line.match(declRegex);
      if (declMatch) {
        const varName = declMatch[1];
        if (!declaredVars.has(varName)) {
          declaredVars.set(varName, []);
        }
        declaredVars.get(varName).push({
          file: relativePath,
          line: lineNumber,
          lineContent: content.split(/\r?\n/)[lineIdx].trim(),
        });
      }

      // Extract references
      let refMatch;
      while ((refMatch = refRegex.exec(line)) !== null) {
        referencedVars.add(refMatch[1]);
      }
    }
  }

  // Identify unused variables
  const unusedList = [];
  for (const [varName, declarations] of declaredVars.entries()) {
    if (ignoreList.has(varName)) {
      continue;
    }
    if (!referencedVars.has(varName)) {
      unusedList.push({
        variable: varName,
        declarations,
      });
    }
  }

  // Output results
  if (json) {
    console.log(JSON.stringify(unusedList, null, 2));
  } else {
    if (unusedList.length === 0) {
      if (!silent) {
        console.log("\x1b[32m✔ No unused CSS variables found.\x1b[0m");
      }
    } else {
      if (!silent) {
        console.log("\n\x1b[31mUnused CSS Variables\x1b[0m\n");
        for (const item of unusedList) {
          console.log(`\x1b[33m${item.variable}\x1b[0m`);
          for (const decl of item.declarations) {
            console.log(
              `  at \x1b[36m${decl.file}:${decl.line}\x1b[0m \x1b[90m(${decl.lineContent})\x1b[0m`
            );
          }
        }
        console.log(`\nFound ${unusedList.length} unused CSS variables.`);
      }
    }
  }

  // Handle --fix mode
  if (fix && unusedList.length > 0) {
    const filesToModify = new Map(); // file -> Set of varNames to remove

    for (const item of unusedList) {
      for (const decl of item.declarations) {
        if (!filesToModify.has(decl.file)) {
          filesToModify.set(decl.file, new Set());
        }
        filesToModify.get(decl.file).add(item.variable);
      }
    }

    let totalRemoved = 0;
    for (const [relPath, varsToRemove] of filesToModify.entries()) {
      const fullPath = path.resolve(rootDir, relPath);
      let content = fs.readFileSync(fullPath, "utf8");
      let removedCount = 0;

      for (const varName of varsToRemove) {
        const regex = new RegExp(
          `^[\\t ]*${escapeRegExp(varName)}\\s*:.*\\r?\\n?`,
          "gm"
        );
        const originalLength = content.length;
        content = content.replace(regex, "");
        if (content.length < originalLength) {
          removedCount++;
        }
      }

      if (removedCount > 0) {
        fs.writeFileSync(fullPath, content, "utf8");
        totalRemoved += removedCount;
        if (!silent && !json) {
          console.log(
            `\x1b[32m✔ Fixed ${relPath}: Removed ${removedCount} unused variables.\x1b[0m`
          );
        }
      }
    }

    if (!silent && !json) {
      console.log(
        `\x1b[32m✔ Total declarations removed: ${totalRemoved}\x1b[0m`
      );
    }
  }

  // Set exit code
  if (unusedList.length > 0 && !fix) {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
