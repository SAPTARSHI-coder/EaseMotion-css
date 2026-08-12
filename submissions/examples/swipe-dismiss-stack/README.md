# Sandbox Component Showcase: Pure-CSS Zero-Dependency Swipe-to-Dismiss Notification Task Stack

## Overview
A zero-dependency, pure-CSS interactive swipe-to-dismiss task notification stack, activity queue panel, and modular row clearing list component isolated within an examples subdirectory. It coordinates lateral card translation evictions, visibility cross-fades, and organic underlying row compression collapses natively via hidden form checkbox status markers, running fluid UI reflow tracks smoothly without initializing complex script lifecycles.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting stacked list rows, checkbox inputs, clear label button targets, and internal text blocks.
* `style.css` — Scoped layout modifier asset layer specifying native horizontal shifts paired with grid row fraction transitions ($1\text{fr} \rightarrow 0\text{fr}$) linked back to core tokens.

## 🚀 Key Layout Mechanics
1. **The Grid Row Fraction Collapse Hack:** Avoids standard layout stutters or sudden jumps associated with hiding elements using basic parameter reductions—where browsers struggle to compute transitions targeted at intrinsic bounds (`height: auto`). By packing independent task structures inside an explicit CSS Grid wrapper (`display: grid;`), toggling row properties downward (`grid-template-rows: 1fr -> 0fr`) prompts the layout solver to compress the row space fluidly.
2. **GPU-Accelerated Lateral Eviction:** Drives sideways card displacement vectors (`transform: translateX(120%);`) exclusively on separate graphics compositor channels. Shifting element positions away from margin parameters isolates painting passes, preventing expensive document root container reflow loops during row dismiss operations.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/swipe-dismiss-stack/`.
