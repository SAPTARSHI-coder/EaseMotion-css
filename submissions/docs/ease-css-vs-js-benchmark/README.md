# Abstract

This performance benchmark integration showcase evaluates the structural efficiency and runtime execution profile of **Pure CSS Animations** versus **JavaScript-driven Motion Engines** within the EaseMotion-css CI pipeline (Issue #82105).

JavaScript motion libraries introduce heavy bundle sizes, continuous main-thread evaluation loops (`requestAnimationFrame`), script parsing/compilation delays, and frequent layout thrashing caused by style mutations. Conversely, GPU-accelerated CSS keyframe animations leverage composited properties (`transform`, `opacity`), offloading frame interpolation directly to dedicated display hardware while eliminating main-thread blocking.

## What does this do?
Compares Pure CSS animation efficiency against JavaScript motion engines through static payload analysis and runtime main-thread parse profiling.

## How is it used?
Open `demo.html` in a web browser to view the side-by-side performance comparison, or run `node submissions/docs/ease-css-vs-js-benchmark/benchmark.mjs` to execute the automated CI benchmark gatekeeper.

## Why is it useful?
Proves the architectural superiority of hardware-accelerated CSS over heavy JS animation libraries, enforcing strict bundle size and main-thread latency limits for the framework.

## Main-Thread Bottlenecks vs GPU Compositing

Modern browser rendering pipelines process layout and paint stages on the main UI thread. JavaScript motion engines rely on active event loops that execute script logic on every frame (16.6ms frame budget at 60 FPS):

1. **JavaScript Engine Overhead:**
   - **Script Download & Parse:** Heavy initial payload sizes (~45 KB baseline).
   - **JIT Compilation & Garbage Collection:** Periodic execution pauses causing dropped frames (jank).
   - **Layout Thrashing:** Reading DOM geometry (`offsetHeight`, `getBoundingClientRect`) interleaved with inline style updates triggers forced synchronous reflows.

2. **Pure CSS Compositing Advantage:**
   - **Zero Main-Thread Script Execution:** Interpolation occurs asynchronously on the compositor thread.
   - **Declarative Syntax:** Keyframes are parsed once during stylesheet compilation.
   - **Hardware Acceleration:** Properties optimized with `will-change: transform, opacity` bypass Layout and Paint steps, committing directly to GPU texture memory (`DirectComposition` / `Skia`).

## CI Pipeline Enforcement

The automated Node.js benchmark script (`benchmark.mjs`) functions as an automated CI gatekeeper in pull requests:

- **Static Payload Analysis:** Measures exact byte lengths using `Buffer.byteLength()` to ensure CSS assets stay under strict file size constraints while tracking payload savings relative to JavaScript baseline libraries.
- **Main-Thread Execution Profiling:** Measures simulated parse and style-resolution latency using high-resolution timers (`performance.now()`).
- **Automated Gatekeeping:** Returns exit code `0` on successful budget compliance, or fails the CI build with exit code `1` if any file size or execution metric breaches configured bounds in `budget.json`.

### Local Execution Command

To run the performance benchmark integration test locally:

```bash
node submissions/docs/ease-css-vs-js-benchmark/benchmark.mjs
```

## Execution Thresholds

The CI gatekeeper enforces strict limits defined in `budget.json`:

| Metric Parameter | Limit / Value | Description |
| :--- | :--- | :--- |
| `maxCssBundleSizeBytes` | `5120` bytes (5 KB) | Hard ceiling for total CSS keyframe bundle size |
| `maxMainThreadExecutionMs` | `15` ms | Upper bound allowed for style resolution & main-thread execution |
| `targetFps` | `60` FPS | Target rendering rate guaranteed via GPU compositor layer |
| `jsEngineBaselineBytes` | `45000` bytes (45 KB) | Reference baseline size for standard JS motion engine libraries |
