const fs = require('fs');
const path = require('path');

/**
 * EaseMotion File Size Optimizer
 * 
 * This script demonstrates how developers can strip unnecessary legacy vendor 
 * prefixes (like -moz-, -ms-, -o-) from the pre-compiled `easemotion.min.css` file 
 * to significantly reduce the bundle size if they are only targeting modern browsers.
 * 
 * Usage: node optimize.js
 */

function optimizeCSS() {
    // 1. Define paths
    const sourcePath = path.resolve(__dirname, '../../../easemotion.min.css');
    const outputPath = path.resolve(__dirname, 'easemotion.modern.min.css');
    
    console.log(`🔍 Reading source file: ${sourcePath}`);
    
    try {
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Source file not found at ${sourcePath}`);
        }
        
        let cssContent = fs.readFileSync(sourcePath, 'utf8');
        const originalSize = Buffer.byteLength(cssContent, 'utf8');
        
        console.log(`📊 Original Size: ${(originalSize / 1024).toFixed(2)} KB`);
        
        // 2. Perform aggressive Regex replacement to strip legacy vendor prefixes
        // In a real-world scenario, you would use PostCSS and Autoprefixer, 
        // but this zero-dependency regex demonstrates the concept for the showcase.
        
        // Strip -moz- (Mozilla/Firefox old)
        cssContent = cssContent.replace(/-moz-[a-zA-Z-]+:[^;]+;/g, '');
        
        // Strip -ms- (Internet Explorer/Edge legacy)
        cssContent = cssContent.replace(/-ms-[a-zA-Z-]+:[^;]+;/g, '');
        
        // Strip -o- (Opera legacy)
        cssContent = cssContent.replace(/-o-[a-zA-Z-]+:[^;]+;/g, '');
        
        // Note: We deliberately leave -webkit- as it is still heavily required 
        // for Safari (iOS/macOS) hardware acceleration and backdrop-filters.
        
        // Clean up any double semicolons caused by replacement
        cssContent = cssContent.replace(/;;/g, ';');
        
        const newSize = Buffer.byteLength(cssContent, 'utf8');
        const savedPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
        
        // 3. Write the output
        fs.writeFileSync(outputPath, cssContent, 'utf8');
        
        console.log(`✅ Success! Modernized CSS generated at:`);
        console.log(`   ${outputPath}`);
        console.log(`📉 New Size: ${(newSize / 1024).toFixed(2)} KB`);
        console.log(`🚀 Saved: ${savedPercent}% bloat removed!`);
        
    } catch (err) {
        console.error('❌ Failed to optimize CSS:', err.message);
    }
}

optimizeCSS();
