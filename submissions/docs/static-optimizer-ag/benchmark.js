const { execSync } = require('child_process');
const path = require('path');

console.log('Running benchmark for EaseMotion Static Optimizer...');

try {
  // Execute the optimizer script
  const optimizerPath = path.join(__dirname, 'optimizer.js');
  const output = execSync(`node "${optimizerPath}"`, { encoding: 'utf-8' });
  console.log(output);
  console.log('Benchmark completed successfully.');
} catch (error) {
  console.error('Benchmark failed:', error.message);
}
