const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../../../core/easemotion.css');
const outputPath = path.join(__dirname, '../../../docs/easemotion.min.css');

const source = fs.readFileSync(sourcePath, 'utf8');
const output = new CleanCSS({ level: 2 }).minify(source);

fs.writeFileSync(outputPath, output.styles);
console.log('✅ Minification complete: Synced source to easemotion.min.css');