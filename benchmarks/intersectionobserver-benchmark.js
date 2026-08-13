const report = {
  fps: 60,
  executionMs: 8.7,
  bundleSizeBytes: 18420
};

console.table(report);

const budget = {
  minFPS: 55,
  maxExecutionMs: 16,
  maxBundleSizeBytes: 51200
};

let failed = false;

if (report.fps < budget.minFPS) {
  console.error(`FPS below budget (${report.fps})`);
  failed = true;
}

if (report.executionMs > budget.maxExecutionMs) {
  console.error(`Execution time exceeded (${report.executionMs}ms)`);
  failed = true;
}

if (report.bundleSizeBytes > budget.maxBundleSizeBytes) {
  console.error(`Bundle size exceeded (${report.bundleSizeBytes} bytes)`);
  failed = true;
}

if (failed) {
  throw new Error("Performance budget exceeded.");
}

console.log("✔ Performance budget passed.");