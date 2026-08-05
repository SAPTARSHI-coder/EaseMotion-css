const fs = require('fs');
const path = require('path');

// Path to the core CSS directory
const coreDir = path.join(__dirname, '..', '..', '..', 'core');

// Categories
const ANIMATION_PATTERNS = /ease-(fade|slide|zoom|bounce|pulse|rotate|flip|ping|spin|shake|wobble|tada|jello|heartBeat|hinge|jackInTheBox|rollIn|rollOut|lightSpeed|swing|flash|headShake)/;
const UTILITY_PATTERNS = /ease-(container|flex|grid|text-|font-|bg-|p-|m-|gap-|w-|h-|rounded|shadow|opacity|overflow|relative|absolute|fixed|sticky|top-|bottom-|left-|right-|inset-|z-|cursor|select|pointer|hidden|block|inline|inline-block|list-|space-|justify-|items-|self-|order|col-|row-)/;
const COMPONENT_PATTERNS = /ease-(btn|card|input|badge|chip|tag|modal|tooltip|toast|navbar|sidebar|avatar|spinner|loader|progress|table|form)/;

let animationCount = 0;
let utilityCount = 0;
let componentCount = 0;

function countClassesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classRegex = /\.(ease-[\w-]+)/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(content)) !== null) {
    classes.add(match[1]);
  }

  classes.forEach(cls => {
    if (ANIMATION_PATTERNS.test(cls)) animationCount++;
    else if (COMPONENT_PATTERNS.test(cls)) componentCount++;
    else if (UTILITY_PATTERNS.test(cls)) utilityCount++;
    // Fallthrough: some classes might not match any category — we skip them
  });
}

// Scan core directory
if (fs.existsSync(coreDir)) {
  const files = fs.readdirSync(coreDir).filter(f => f.endsWith('.css'));
  files.forEach(file => {
    countClassesInFile(path.join(coreDir, file));
  });
}

// Generate shields.io badge URLs
const badges = {
  animation: `https://img.shields.io/badge/animations-${animationCount}+-blue`,
  utility: `https://img.shields.io/badge/utilities-${utilityCount}+-green`,
  component: `https://img.shields.io/badge/components-${componentCount}+-orange`
};

console.log('## README Badges\n');
console.log(`![Animation Classes](${badges.animation})`);
console.log(`![Utility Classes](${badges.utility})`);
console.log(`![Component Classes](${badges.component})`);