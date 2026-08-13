# Unused CSS Class Extraction & Purge Efficiency Audit

## Abstract
This benchmark provides automated static analysis tooling for EaseMotion CSS to evaluate class extraction and purge efficiency in CI pipelines. The audit enforces strict limits on dead CSS bloat, total bundle byte size, and audit execution overhead to prevent dead selector accumulation across component releases.

## Static Analysis Extraction
The audit runner (`audit.mjs`) parses HTML markup and CSS stylesheets using regex-based extraction rules:
- **HTML Extraction**: Scans DOM templates using `/class="([^"]+)"/g` to capture all active class tokens.
- **CSS Extraction**: Parses CSS rules using `/\.([a-zA-Z0-9_-]+)/g` to capture declared class selectors.
- **Diff Analysis**: Compares declared CSS selectors against active HTML tokens to identify unreferenced (unused) CSS classes.

## Purge Efficiency Enforcement
The Node.js script functions as an automated CI gatekeeper:
1. It compares extracted unused class percentages against pre-configured thresholds in `budget.json`.
2. If dead CSS ratio exceeds `maxUnusedClassPercentage`, the runner logs offending classes and triggers a pipeline failure via `process.exit(1)`.
3. If CSS bundle size exceeds `maxBundleSizeBytes`, it aborts build pipelines with `process.exit(1)`.
4. If audit execution duration exceeds `maxExecutionMs`, it enforces speed constraints with `process.exit(1)`.
5. Upon satisfying all performance criteria, it outputs a metrics telemetry report and exits cleanly with `process.exit(0)`.

## Execution Thresholds
Budget constraints are defined in `budget.json`:
- `maxUnusedClassPercentage`: Maximum allowable percentage of dead/unused CSS classes (default: 10%).
- `maxBundleSizeBytes`: Maximum permissible CSS bundle size in bytes (default: 20480 bytes / 20 KB).
- `maxExecutionMs`: Maximum allowable audit run time (default: 100 ms).
- `targetFps`: Target rendering frame rate (default: 60 FPS).

### Local Execution Command
Run the following command in your terminal to execute the audit benchmark locally:

```bash
node submissions/benchmarks/ease-purge-audit/audit.mjs
```
