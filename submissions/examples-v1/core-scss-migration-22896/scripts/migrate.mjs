import fs from 'fs/promises';
import path from 'path';

const rootDir = path.resolve(process.cwd());
const submissionDir = path.join(rootDir, 'submissions', 'core-scss-migration-22896');
const scssDir = path.join(submissionDir, 'scss');
const dirsToMigrate = ['core', 'components'];

async function processDirectory(dirName) {
  const sourcePath = path.join(rootDir, dirName);
  const targetPath = path.join(scssDir, dirName);
  
  const files = await fs.readdir(sourcePath);
  const cssFiles = files.filter(f => f.endsWith('.css') && !f.endsWith('.min.css'));
  
  const forwards = [];
  
  for (const file of cssFiles) {
    const baseName = path.basename(file, '.css');
    // Prefix with underscore for SCSS partials
    const scssFileName = `_${baseName}.scss`;
    
    // In our new SCSS structure, we use @use and @forward, but existing css might not use @import.
    // If they do, they are handled by the build script, but since they are raw css, 
    // it's likely they just have standard CSS syntax. 
    // We just rename them to .scss and save them in the new structure.
    
    let content = await fs.readFile(path.join(sourcePath, file), 'utf8');
    
    // Replace any remaining local CSS imports with SCSS @use if any exist
    // E.g. @import url("base.css"); -> @use 'base';
    content = content.replace(/@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g, (match, p1) => {
      // If it's an external import, keep it
      if (p1.startsWith('http')) return match;
      const importedBase = path.basename(p1, '.css');
      return `@use '${importedBase}';`;
    });
    
    await fs.writeFile(path.join(targetPath, scssFileName), content);
    
    // Add to index
    forwards.push(`@forward '${baseName}';`);
  }
  
  // Write the index file for this directory
  const indexContent = `// Auto-generated module index for ${dirName}\n\n` + forwards.join('\n') + '\n';
  await fs.writeFile(path.join(targetPath, '_index.scss'), indexContent);
}

async function migrate() {
  try {
    for (const dir of dirsToMigrate) {
      await processDirectory(dir);
      console.log(`Migrated /${dir} to SCSS modules.`);
    }
    
    // Generate root _index.scss
    const rootIndex = `// EaseMotion SCSS Modular Entry Point\n\n@forward 'core';\n@forward 'components';\n`;
    await fs.writeFile(path.join(scssDir, '_index.scss'), rootIndex);
    
    console.log('Migration complete.');
  } catch (err) {
    console.error('Migration failed:', err);
  }
}

migrate();
