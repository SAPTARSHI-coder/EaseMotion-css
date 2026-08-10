import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../..');

// Helper to remove CSS comments
function removeCSSComments(source) {
  let result = '';
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '"' || ch === "'") {
      const quote = ch;
      result += ch;
      i++;

      while (i < source.length) {
        const c = source[i];
        result += c;

        if (c === '\\') {
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

    if (ch === '/' && source[i + 1] === '*') {
      i += 2;
      while (i < source.length) {
        if (source[i] === '*' && source[i + 1] === '/') {
          i += 2;
          break;
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

// Helper to minify CSS
function minifyCss(css) {
  return removeCSSComments(css)
    .replace(/\r\n/g, '\n')
    .replace(/\n+/g, '\n')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\)\s+\{/g, '){')
    .trim();
}

async function build() {
  console.log('🤖 Starting EaseMotion Modular Custom Build...');

  // 1. Resolve configuration file path
  let configPath = path.join(projectRoot, 'easemotion.config.json');
  if (!existsSync(configPath)) {
    console.log('⚠️  easemotion.config.json not found in project root. Falling back to local example config.');
    configPath = path.join(__dirname, 'easemotion.config.json');
  }

  console.log(`📄 Reading config from: ${path.relative(projectRoot, configPath)}`);
  const configContent = await readFile(configPath, 'utf8');
  const config = JSON.parse(configContent);

  // 2. Prepare bundle file lists
  const filesToBundle = [];
  const layersHeader = '@layer easemotion-base, easemotion-components, easemotion-utilities;\n';

  // Check baseline custom properties requirement
  const hasCore = config.core && Array.isArray(config.core);
  const includesVariables = hasCore && config.core.includes('variables');

  if (!includesVariables) {
    console.log('⚠️  [Warning] core/variables is recommended for theming tokens. Prepending variables.css.');
    filesToBundle.push(path.join(projectRoot, 'core', 'variables.css'));
  }

  // A. Process Core module
  if (hasCore) {
    for (const item of config.core) {
      if (item === 'variables') {
        // Already handled above if missing, so avoid duplicate
        if (includesVariables) {
          filesToBundle.push(path.join(projectRoot, 'core', 'variables.css'));
        }
      } else {
        const file = path.join(projectRoot, 'core', `${item}.css`);
        if (existsSync(file)) {
          filesToBundle.push(file);
        } else {
          console.log(`❌ Core file not found: core/${item}.css`);
        }
      }
    }
  }

  // B. Process Components module
  if (config.components && Array.isArray(config.components)) {
    for (const item of config.components) {
      // Some components might have been named with ease- prefix in config, normalize it
      const normalizedName = item.startsWith('ease-') ? item.substring(5) : item;
      
      // Try components directory
      let file = path.join(projectRoot, 'components', `${normalizedName}.css`);
      if (!existsSync(file)) {
        // Try prefixed name
        file = path.join(projectRoot, 'components', `ease-${normalizedName}.css`);
      }

      if (existsSync(file)) {
        filesToBundle.push(file);
      } else {
        console.log(`❌ Component file not found: components/${normalizedName}.css`);
      }
    }
  }

  // C. Process Animations module
  if (config.animations && Array.isArray(config.animations)) {
    for (const item of config.animations) {
      const file = path.join(projectRoot, 'easemotion', `${item}.css`);
      if (existsSync(file)) {
        filesToBundle.push(file);
      } else {
        console.log(`❌ Animation file not found: easemotion/${item}.css`);
      }
    }
  }

  // 3. Assemble and compile source
  console.log(`📦 Bundling ${filesToBundle.length} files...`);
  let bundledSource = '';

  for (const filePath of filesToBundle) {
    const rawContent = await readFile(filePath, 'utf8');
    const relativePath = path.relative(projectRoot, filePath);
    bundledSource += `\n/* --- Start: ${relativePath} --- */\n`;
    bundledSource += rawContent;
    bundledSource += `\n/* --- End: ${relativePath} --- */\n`;
  }

  // 4. Minify compiled css
  const compiledCss = `${layersHeader}\n${bundledSource}`;
  const minifiedCss = minifyCss(compiledCss);

  // 5. Output to target locations
  const distDir = path.join(projectRoot, 'dist');
  await mkdir(distDir, { recursive: true });

  const customBundlePath = path.join(distDir, 'easemotion.custom.min.css');
  await writeFile(customBundlePath, `${minifiedCss}\n`, 'utf8');
  console.log(`✨ Custom bundle successfully written to: ${path.relative(projectRoot, customBundlePath)}`);

  // Write a copy inside the local example folder so the self-contained demo page works
  const localCopyPath = path.join(__dirname, 'easemotion.custom.min.css');
  await writeFile(localCopyPath, `${minifiedCss}\n`, 'utf8');

  // Print file size details
  const originalSize = Buffer.byteLength(compiledCss, 'utf8');
  const minifiedSize = Buffer.byteLength(minifiedCss, 'utf8');
  const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);

  console.log(`📊 Custom build statistics:`);
  console.log(`   - Raw compiled size: ${(originalSize / 1024).toFixed(2)} KB`);
  console.log(`   - Minified custom bundle size: ${(minifiedSize / 1024).toFixed(2)} KB`);
  console.log(`   - Compilation savings: ${savings}%`);
  console.log(`   - Done! Enjoy your lightweight custom EaseMotion build.`);
}

build().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exitCode = 1;
});
