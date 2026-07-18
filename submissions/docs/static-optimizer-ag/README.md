# EaseMotion Static Optimizer

A standalone Node.js proof-of-concept demonstrating static HTML/JSX analysis for dead keyframe elimination in EaseMotion CSS.

## Features
- Scans a mock project directory containing `.html` and `.jsx` files.
- Extracts `ease-[animation]` utility classes using regex-based extraction.
- Maps detected classes to their corresponding CSS `@keyframes`.
- Outputs a minified CSS bundle with all unreferenced keyframes stripped out.
- Benchmarks parsing speed, memory footprint, and CSS payload reduction.

## Architecture
This PoC follows a 5-stage pipeline:
1. **Source Discovery**: Recursively reads `.html` and `.jsx` mock files.
2. **Utility Extraction**: Matches `ease-*` definitions natively.
3. **Animation Mapping**: Maps extracted identifiers to `@keyframes`.
4. **CSS Analysis**: Parses the CSS string to strip orphaned `@keyframes` and class selectors.
5. **Reporting**: Outputs memory usage and bundle savings.

## Setup & Running
1. `node benchmark.js` or `node optimizer.js`
2. View the stripped output file in `output/optimized.css`.

## Edge Cases Handled
- JSX class interpolation (`className={'ease-fade-in'}`).
- Multiple classes per attribute.
- Orphaned keys gracefully skipped.

## Limitations & Production Recommendations
Because runtime-generated class names (e.g., `className={"ease-" + var}`) cannot always be detected through static analysis, production implementations should expose a **safelist configuration** (e.g. `safelist: ['ease-bounce']`) to force-keep specified keyframes.

For a final framework implementation (outside of this PoC), an AST-based parser such as PostHTML, PostCSS, and Babel is recommended over Regular Expressions to completely eliminate false positives found in javascript strings or HTML comments.
