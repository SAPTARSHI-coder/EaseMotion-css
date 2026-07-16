# Sandbox Component Showcase: Pure-CSS Expandable Recursive Multi-Tier Tree Explorer Panel

## Overview
A zero-dependency, pure-CSS interactive expandable recursive tree explorer sidebar panel and file system directory tree widget component isolated within an examples subdirectory. It coordinates horizontal child alignment indentations, indicator rotation indicators, and cascading structural row expansions natively via hidden form checkbox states, running fluid multi-tier workspace transitions smoothly without JavaScript lifecycles.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained presentation user cockpit hosting nested lists, checkbox inputs, label triggers, and file item variants to test expansion mechanics.
* `style.css` — Scoped layout modifier asset layer specifying native CSS Grid row fraction transitions ($0\text{fr} \rightarrow 1\text{fr}$) linked back to shared tokens.

## 🚀 Key Layout Mechanics
1. **The Grid Variable Height Hack:** Overcomes the standard CSS transition limitation—where layout rendering engines cannot evaluate height scaling loops targeted at flexible parameters (`height: auto;`)—by wrapping recursively nested list elements inside an explicit CSS Grid track layout wrapper (`display: grid;`). Mutating the track row fraction metrics (`grid-template-rows: 0fr -> 1fr`) lets the browser compute the exact vertical footprint necessary to unwrap variable child arrays cleanly.
2. **Hidden Input State Orchestration:** Eliminates the necessity for performance-heavy click listeners or state tracking scripts by mounting an un-rendered checkbox field directly above each directory item row. Sibling selectors monitor state changes natively, flipping column highlight colors and expanding grid tracks: `.alm-tree-state-input:checked ~ .alm-tree-grid-drawer`.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/recursive-tree-explorer/`.
