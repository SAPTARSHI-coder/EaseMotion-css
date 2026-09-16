/**
 * Carousel FPS Benchmark Demo
 *
 * Simulates a simple benchmark report for a continuously
 * animated carousel. This example is intended for the
 * submissions/examples folder.
 */

const PERFORMANCE_BUDGET = {
  minimumFPS: 55,
  maximumExecutionMs: 100,
  maximumBundleBytes: 150000
};

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function simulateBenchmark() {

  const fps = Number(random(57, 60).toFixed(2));
  const executionMs = Number(random(18, 65).toFixed(2));

  const bundleBytes = 98742;

  const passed =
    fps >= PERFORMANCE_BUDGET.minimumFPS &&
    executionMs <= PERFORMANCE_BUDGET.maximumExecutionMs &&
    bundleBytes <= PERFORMANCE_BUDGET.maximumBundleBytes;

  const report = {
    timestamp: new Date().toISOString(),

    metrics: {
      fps,
      executionMs,
      bundleBytes
    },

    budget: PERFORMANCE_BUDGET,

    result: passed ? "PASS" : "FAIL"
  };

  console.clear();

  console.log("====================================");
  console.log(" EaseMotion Carousel FPS Benchmark ");
  console.log("====================================");

  console.table(report.metrics);

  console.log("Performance Budget");
  console.table(report.budget);

  console.log(`Overall Result: ${report.result}`);

  return report;
}

window.addEventListener("load", simulateBenchmark);