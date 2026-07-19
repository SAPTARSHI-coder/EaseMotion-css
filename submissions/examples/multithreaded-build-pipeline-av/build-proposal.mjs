/**
 * Multithreaded Build Pipeline Architecture Proposal
 * Demonstrates utilizing Node.js 'worker_threads' and parallel execution 
 * to drastically reduce GitHub Actions CI time.
 */

import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// ❌ BAD: Legacy Sequential Execution (Violently blocks the main thread)
/*
async function runLegacySequentialBuild() {
  console.log('Running legacy sequential build...');
  await runCSSValidation();      // Takes 5s
  await runCSSMinification();    // Takes 5s
  await runDuplicationCheck();   // Takes 5s
  // Total Time: 15 seconds (Massive CI Bottleneck)
}
*/

// ✅ GOOD: Modern Parallel Execution using Worker Threads
if (isMainThread) {
  console.log('🚀 Initiating Modern Multithreaded CI Pipeline...\n');

  const runWorker = (taskName) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: { taskName } });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };

  async function executeParallelBuild() {
    const startTime = Date.now();

    try {
      // Fires all heavily intensive Node.js tasks across multiple CPU cores simultaneously!
      await Promise.all([
        runWorker('CSS AST Validation'),
        runWorker('CSS Minification'),
        runWorker('Duplication Check')
      ]);

      const timeElapsed = (Date.now() - startTime) / 1000;
      console.log(`\n✅ Build completed flawlessly in ${timeElapsed} seconds! (Parallelized)`);
    } catch (err) {
      console.error('\n❌ Build failed:', err);
    }
  }

  executeParallelBuild();

} else {
  // This physically runs inside the isolated parallel worker threads
  const { taskName } = workerData;
  console.log(`[Worker Started] Processing ${taskName}...`);
  
  // Simulate heavy CSS AST parsing or minification compute work
  setTimeout(() => {
    console.log(`[Worker Finished] ${taskName} completed successfully.`);
    parentPort.postMessage('Done');
  }, 2000); 
}
