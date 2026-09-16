# 🏗️ Parallel Worker-Farm Test Suite Architecture

An architectural implementation guide and demonstration for refactoring the EaseMotion CSS engine test suite to run on a Node.js `worker_threads` worker farm.

## 🌟 Overview
As the animation engine grows, sequential execution of `tests/engine.test.js` creates CI/CD bottlenecks. By distributing isolated animation calculation tests across a parallel worker pool, test execution times are reduced linearly with CPU core availability.

## 📁 Files Included
- `README.md` - Technical specification and architecture documentation.
- `demo.html` - Interactive visualization comparing sequential vs. parallel worker farm execution times.
- `style.css` - Styling and layout for the architecture benchmark demo.

## ⚙️ Proposed Implementation (Node.js `worker_threads`)

```js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

if (isMainThread) {
  // Master Thread: Distribute test suites across CPU threads
  const numCores = os.cpus().length;
  console.log(`Launching worker farm across ${numCores} threads...`);
  
  // Dispatch test batches to worker farm
  const runWorker = (testBatch) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: testBatch });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  };
} else {
  // Worker Thread: Run isolated engine animation assertions
  const results = workerData.map(test => runEngineTest(test));
  parentPort.postMessage(results);
}
