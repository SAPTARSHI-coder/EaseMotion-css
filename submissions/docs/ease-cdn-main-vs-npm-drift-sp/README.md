# jsDelivr `@main` vs npm Version Drift Visualizer

An interactive documentation demo that compares EaseMotion CSS class availability between the moving jsDelivr GitHub `@main` build and the latest published npm version.

## What does this do?

This tool fetches both CSS sources, extracts all `ease-*` class selectors, and computes:

- classes present on jsDelivr `@main` but missing from npm
- classes present on npm but missing from jsDelivr `@main`
- classes shared by both sources

It also provides a clear "pin for production" policy panel so contributors and users can understand freshness risk.

## How is it used?

1. Open `demo.html` in a browser with internet access.
2. Click **Run Drift Check** (or use auto-run on page load).
3. Review summary counters and drift risk.
4. Use search to filter class names quickly.
5. Copy a recommended pinned npm CDN link for production usage.

## Why is it useful?

- Makes source drift visible before it causes production issues.
- Helps contributors explain "freshest vs stable" tradeoffs.
- Encourages pinned production URLs instead of unpinned `@main`.
- Works as a self-contained docs showcase without changing core files.

## Files

- `demo.html` - drift visualizer UI + JavaScript comparison logic
- `style.css` - layout, cards, risk states, and responsive styling
- `README.md` - feature overview and usage guidance
