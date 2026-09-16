import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const rootDir = path.resolve(process.cwd());
const submissionDir = path.join(rootDir, 'submissions', 'core-scss-migration-22896');
const scssDir = path.join(submissionDir, 'scss');
const distDir = path.join(submissionDir, 'dist');
const componentsDir = path.join(scssDir, 'components');

async function compileSass(inputFile, outputFile) {
  try {
    const cmd = `npx sass ${inputFile} ${outputFile} --style=compressed --no-source-map`;
    await execAsync(cmd, { cwd: rootDir });
    console.log(`Compiled: ${path.basename(outputFile)}`);
  } catch (error) {
    console.error(`Error compiling ${inputFile}:`, error.message);
  }
}

async function build() {
  await fs.mkdir(distDir, { recursive: true });

  // 1. Build the monolithic easemotion.css
  const mainInput = path.join(scssDir, '_index.scss');
  const mainOutput = path.join(distDir, 'easemotion.css');
  await compileSass(mainInput, mainOutput);

  // 2. Build individual component chunks
  const componentFiles = await fs.readdir(componentsDir);
  for (const file of componentFiles) {
    if (file.endsWith('.scss') && file !== '_index.scss') {
      const baseName = path.basename(file, '.scss').replace(/^_/, ''); // remove leading underscore
      const inputFile = path.join(componentsDir, file);
      const outputFile = path.join(distDir, `components`, `${baseName}.css`);
      
      // We must ensure the components directory exists inside dist
      await fs.mkdir(path.dirname(outputFile), { recursive: true });
      await compileSass(inputFile, outputFile);
    }
  }

  console.log('Build completed successfully.');
}

build();
