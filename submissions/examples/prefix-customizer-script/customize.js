const fs = require('fs');
const path = require('path');

/**
 * EaseMotion Prefix Customizer
 * 
 * This script demonstrates how developers can customize the default `.em-` prefix
 * in the pre-compiled `easemotion.min.css` file to match their own design system,
 * avoiding naming collisions with other libraries (like Tailwind or Bootstrap).
 * 
 * Usage: node customize.js <new-prefix>
 * Example: node customize.js myapp-
 */

function customizePrefix() {
    // 1. Get the new prefix from command line arguments
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('❌ Error: Please provide a new prefix.');
        console.log('💡 Example: node customize.js custom-');
        process.exit(1);
    }
    
    const newPrefix = args[0];
    
    // 2. Define paths
    // We are looking for the compiled CSS file in the root directory
    const sourcePath = path.resolve(__dirname, '../../../easemotion.min.css');
    const outputPath = path.resolve(__dirname, 'easemotion.custom.css');
    
    console.log(`🔍 Reading source file: ${sourcePath}`);
    
    try {
        // 3. Read the original CSS file
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Source file not found at ${sourcePath}`);
        }
        
        let cssContent = fs.readFileSync(sourcePath, 'utf8');
        
        // 4. Perform the Regex replacement
        // We are looking for classes that start with .em- (or inside attribute selectors)
        // Note: EaseMotion core classes always start with .em-
        
        const defaultPrefix = '.em-';
        const newClassPrefix = `.${newPrefix}`;
        
        // Replace standard classes (e.g., .em-fade-in -> .custom-fade-in)
        const regexStandard = new RegExp('\\.em-', 'g');
        let newCssContent = cssContent.replace(regexStandard, newClassPrefix);
        
        // Also handle potential CSS variables (e.g., --em-duration -> --custom-duration)
        const regexVars = new RegExp('--em-', 'g');
        newCssContent = newCssContent.replace(regexVars, `--${newPrefix}`);
        
        // 5. Write the output
        fs.writeFileSync(outputPath, newCssContent, 'utf8');
        
        console.log(`✅ Success! Customized CSS generated at:`);
        console.log(`   ${outputPath}`);
        console.log(`\n🎉 You can now use classes like: .${newPrefix}fade-in`);
        
    } catch (err) {
        console.error('❌ Failed to customize CSS:', err.message);
    }
}

customizePrefix();
