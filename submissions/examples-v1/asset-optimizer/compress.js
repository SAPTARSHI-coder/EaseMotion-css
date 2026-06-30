import sharp from "sharp";
import path from "path";
import fs from "fs";

// Grab the path argument from: node compress.js --path <file-path>
const args = process.argv.slice(2);
const pathIdx = args.indexOf("--path");
const targetFile = pathIdx !== -1 ? args[pathIdx + 1] : null;

if (!targetFile) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    "❌ Error: Please specify a file path using --path. Example:"
  );
  console.log("node compress.js --path ../your-folder/preview.png");
  process.exit(1);
}

const resolvedPath = path.resolve(targetFile);

if (!fs.existsSync(resolvedPath)) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    `❌ Error: File not found at ${resolvedPath}`
  );
  process.exit(1);
}

async function optimizeImage() {
  const ext = path.extname(resolvedPath).toLowerCase();
  const tmpPath = `${resolvedPath}.tmp`;

  try {
    console.log(`⚡ Optimizing asset: ${path.basename(resolvedPath)}...`);

    let pipeline = sharp(resolvedPath);

    if (ext === ".png") {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality: 80, progressive: true });
    } else if (ext === ".gif") {
      // Process animated frameworks with sharp
      pipeline = pipeline.gif({ optimizationLevel: 3 });
    } else {
      console.log(
        "\x1b[33m%s\x1b[0m",
        "⚠️ Unsupported format. Only PNG, JPG, and GIF are supported."
      );
      return;
    }

    await pipeline.toFile(tmpPath);

    // Replace original with the compressed variant
    fs.renameSync(tmpPath, resolvedPath);
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✅ Optimization complete! Asset overwritten successfully with lower payload footprint."
    );
  } catch (error) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      "❌ Optimization process failed:",
      error.message
    );
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  }
}

optimizeImage();
