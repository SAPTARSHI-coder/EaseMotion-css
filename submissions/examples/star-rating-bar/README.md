# Sandbox Component Showcase: Pure-CSS Progressive Star Review Rating Bar

## Overview
A zero-dependency, pure-CSS interactive review ranking star indicator bar and feedback scoring selection module isolated within an examples subdirectory. It coordinates horizontal progressive highlights natively via reverse structural DOM layout tracks, executing highlight transitions smoothly without script lifecycles.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation user cockpit hosting reverse-sequenced input rows to check hover progressions.
* `style.css` — Scoped layout modifier asset layer specifying custom horizontal flex configurations linked back to global tokens.

## 🚀 Key Layout Mechanics
1. **Reverse DOM Sibling Lookup Track:** Solves the core limitation of standard CSS sibling combinators (`~`), which can only look forward down a source document tree, by nesting input nodes in reverse hierarchy order (5 down to 1). 
2. **Reverse Horizontal Flex Axis:** Re-aligns visual reading blocks perfectly from left to right on screen by deploying a `flex-direction: row-reverse;` directive on the parent row tracker container. This permits forward-hover interactions to highlight preceding cells natively.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/star-rating-bar/`.
