#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const defaultTheme = {
  primaryColor: '#6c63ff',
  secondaryColor: '#8b5cf6',
  surfaceColor: '#ffffff',
  mutedSurfaceColor: '#f1f5f9',
  textColor: '#1e293b',
  borderRadius: '1rem',
  shadowDefault: '0 4px 6px -1px rgba(0, 0, 0, 0.10)',
  durationFast: '150ms',
  durationMedium: '300ms'
};

const questions = [
  { key: 'primaryColor', query: `Primary Color [default: ${defaultTheme.primaryColor}]: ` },
  { key: 'secondaryColor', query: `Secondary Color [default: ${defaultTheme.secondaryColor}]: ` },
  { key: 'surfaceColor', query: `Surface Color [default: ${defaultTheme.surfaceColor}]: ` },
  { key: 'mutedSurfaceColor', query: `Muted Surface Color [default: ${defaultTheme.mutedSurfaceColor}]: ` },
  { key: 'textColor', query: `Text Primary Color [default: ${defaultTheme.textColor}]: ` },
  { key: 'borderRadius', query: `Border Radius [default: ${defaultTheme.borderRadius}]: ` },
  { key: 'shadowDefault', query: `Default Shadow [default: ${defaultTheme.shadowDefault}]: ` },
  { key: 'durationFast', query: `Fast Animation Duration [default: ${defaultTheme.durationFast}]: ` },
  { key: 'durationMedium', query: `Medium Animation Duration [default: ${defaultTheme.durationMedium}]: ` },
];

const answers = {};
let currentQuestionIndex = 0;

function askQuestion() {
  if (currentQuestionIndex < questions.length) {
    const q = questions[currentQuestionIndex];
    rl.question(q.query, (answer) => {
      answers[q.key] = answer.trim() || defaultTheme[q.key];
      currentQuestionIndex++;
      askQuestion();
    });
  } else {
    generateTheme();
  }
}

function generateTheme() {
  const css = `:root {
  --ease-color-primary: ${answers.primaryColor};
  --ease-color-secondary: ${answers.secondaryColor};
  --ease-color-surface: ${answers.surfaceColor};
  --ease-color-muted: ${answers.mutedSurfaceColor};
  --ease-color-text: ${answers.textColor};
  --ease-radius-md: ${answers.borderRadius};
  --ease-shadow-md: ${answers.shadowDefault};
  --ease-speed-fast: ${answers.durationFast};
  --ease-speed-medium: ${answers.durationMedium};
}
`;

  const outputPath = path.join(process.cwd(), 'easemotion-theme.css');
  try {
    fs.writeFileSync(outputPath, css, 'utf8');
    console.log(`\n✅ Theme generated successfully at: ${outputPath}`);
    console.log('\nHTML Usage Snippet:');
    console.log('-------------------');
    console.log('<link rel="stylesheet" href="easemotion.min.css" />');
    console.log('<link rel="stylesheet" href="easemotion-theme.css" />\n');
  } catch (err) {
    console.error(`\n❌ Error writing file: ${err.message}\n`);
  }
  rl.close();
}

console.log('==================================================');
console.log('      🎨 EaseMotion CSS - Theming CLI Wizard      ');
console.log('==================================================');
console.log('Leave blank and press Enter to use default values.\n');

askQuestion();
