# Style Recalculation Duration Audit for Accordions (#82107)

## Abstract

This benchmark sub-system provides a automated CI integration test for auditing style recalculation duration and rendering pipeline efficiency in EaseMotion accordion components. Accordion expand/collapse animations are historically prone to performance bottlenecks when CSS transition properties force repeated geometry recalculations and forced synchonous reflows on the main browser thread. This audit enforces strict static quality gates in CI to prevent layout thrashing and maintain target 60 FPS performance.

## Static Analysis & Layout Thrashing

Style recalculation spikes occur when animating CSS layout properties such as `height`, `max-height`, `margin`, or `padding`. When transitioning `height` or `max-height`, the browser rendering engine is forced to re-evaluate element box models, layout geometry, and sibling node positioning across every single animation frame (Reflow).

The Node.js static analyzer (`audit.mjs`) scans target component stylesheets against a list of banned properties (`transition: max-height`, `transition: height`, `transition: all`). If any CPU-bound transition property is identified, the audit triggers an immediate failure.

### GPU-Accelerated Alternatives

To pass the audit, components must utilize non-layout-triggering or modern CSS layout grid primitives:
1. **Grid Fractional Rows**: Utilizing `grid-template-rows: 0fr` to `1fr` transitions allows clean height expansion without fixed height constraints or JavaScript layout measurements.
2. **GPU Compositing**: Utilizing `transform: scaleY(...)` combined with `opacity` shifts layout workloads entirely to the GPU compositor layer, bypassing the CPU style recalculation pipeline.

## CI Pipeline Enforcement

The static analyzer script (`audit.mjs`) functions as an automated CI gatekeeper in the pipeline:
1. **Parsing Budget**: Imports `budget.json` to extract execution limits, size limits, and forbidden CSS properties.
2. **AST / Regex Scanning**: Performs static inspection of CSS declarations for layout-thrashing anti-patterns.
3. **Bundle Size Validation**: Ensures total CSS payload size remains within the target budget limit (`maxBundleSizeBytes`).
4. **Execution Performance Gate**: Verifies that the audit execution completes within strict timing constraints (`maxExecutionMs`).
5. **Exit Code Signal**: Emits `process.exit(1)` upon detecting any prohibited properties or threshold violations, stopping pull-request merging until resolved. Emits `process.exit(0)` when all performance constraints are satisfied.

## Execution Thresholds

The performance parameters monitored by the audit pipeline are defined in `budget.json`:

| Metric | Budget Limit | Description |
| :--- | :--- | :--- |
| `maxBundleSizeBytes` | `15360` (15 KB) | Maximum permissible CSS stylesheet payload size |
| `maxExecutionMs` | `50 ms` | Maximum allowed CPU time for static audit execution |
| `maxRecalculationScore` | `10` | Maximum allowable style recalculation risk index |
| `targetFps` | `60 FPS` | Target rendering frame rate target |
| `bannedProperties` | `["transition: max-height", "transition: height", "transition: all"]` | Prohibited layout-thrashing CSS properties |

### Local Execution & Testing

To execute the audit locally, run the following Node.js command from the repository root:

```bash
node submissions/benchmarks/ease-accordion-recalc-audit/audit.mjs
```
