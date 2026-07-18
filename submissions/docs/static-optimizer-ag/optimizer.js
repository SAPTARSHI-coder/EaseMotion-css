const fs = require('fs');
const path = require('path');

const MOCK_DIR = path.join(__dirname, 'mock');
const OUTPUT_DIR = path.join(__dirname, 'output');
const CSS_FILE = path.join(MOCK_DIR, 'easemotion.css');
const OUTPUT_CSS = path.join(OUTPUT_DIR, 'optimized.css');

// Simple regex parser for POC. In production, use AST (e.g. PostHTML / Babel).
const CLASS_REGEX = /ease-([a-zA-Z0-9-]+)/g;
const KEYFRAME_REGEX = /@keyframes\s+([a-zA-Z0-9-]+)\s*\{[\s\S]*?\}(?=\s*@keyframes|\s*$)/g;
const CSS_CLASS_DEF_REGEX = /\.ease-([a-zA-Z0-9-]+)\s*\{[^}]*\}/g;

function scanFiles(dir, extensions, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanFiles(fullPath, extensions, fileList);
    } else if (extensions.some(ext => fullPath.endsWith(ext))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function runOptimizer() {
  console.log('Starting EaseMotion Static Optimizer POC...\n');
  
  const startTime = process.hrtime();
  
  // 1. Source File Discovery
  const filesToScan = scanFiles(MOCK_DIR, ['.html', '.jsx', '.tsx']);
  console.log(`Scanned ${filesToScan.length} files.`);
  
  // 2. Utility Extraction
  const usedClasses = new Set();
  filesToScan.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = CLASS_REGEX.exec(content)) !== null) {
      usedClasses.add(match[1]); // capturing group for animation name
    }
  });
  
  console.log(`Detected Used Animations: ${Array.from(usedClasses).join(', ')}`);
  
  // 3 & 4. CSS Analysis and Mapping
  if (!fs.existsSync(CSS_FILE)) {
    console.error('Mock CSS file not found.');
    return;
  }
  
  const originalCss = fs.readFileSync(CSS_FILE, 'utf8');
  const originalSize = Buffer.byteLength(originalCss, 'utf8');
  
  let optimizedCss = originalCss;
  let keyframesRemoved = 0;
  let totalKeyframes = 0;
  
  // Parse keyframes
  optimizedCss = optimizedCss.replace(KEYFRAME_REGEX, (match, keyframeName) => {
    totalKeyframes++;
    if (usedClasses.has(keyframeName)) {
      return match;
    } else {
      keyframesRemoved++;
      return '';
    }
  });

  // Cleanup orphaned class definitions
  optimizedCss = optimizedCss.replace(CSS_CLASS_DEF_REGEX, (match, className) => {
    if (usedClasses.has(className) || ['fade-in','slide-up','slide-down','pulse','glow','lift','bounce','jello','wobble','hinge','rubber-band'].indexOf(className) === -1) {
      // keep if used, or if it doesn't look like our mock classes
      return match;
    }
    return '';
  });

  // Write output
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  const finalCss = optimizedCss.trim().replace(/\n{3,}/g, '\n\n');
  fs.writeFileSync(OUTPUT_CSS, finalCss);
  
  const optimizedSize = Buffer.byteLength(finalCss, 'utf8');
  const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
  
  const [sec, nano] = process.hrtime(startTime);
  const execTime = (sec * 1000 + nano / 1e6).toFixed(2);
  
  // 5. Reporting
  console.log('\n--- Optimization Statistics ---');
  console.log(`Original CSS Size: ${originalSize} bytes`);
  console.log(`Optimized CSS Size: ${optimizedSize} bytes`);
  console.log(`Reduction: ${reduction}%`);
  console.log(`Total Keyframes: ${totalKeyframes}`);
  console.log(`Keyframes Removed: ${keyframesRemoved}`);
  console.log(`Execution Time: ${execTime} ms`);
  console.log(`Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log('-------------------------------\n');
}

runOptimizer();
