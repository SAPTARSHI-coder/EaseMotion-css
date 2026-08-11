# Sandbox Layout Fix: Navigation Text `font-weight` Hover Reflow & Advance Width Shift Resolution

## Overview
A high-performance CSS layout stabilization patch for navigation bars, tab controls, and links that transition `font-weight` on hover. It completely eliminates horizontal layout shifts, prevents adjacent item twitching, and locks container widths during font weight state changes.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a navigation bar with zero-reflow font weight link transitions.
* `style.css` — Scoped layout modifier asset layer specifying `attr(data-text)` pseudo-element width pre-allocations.

## 🐛 The Bug Resolved
Previously, hovering over navigation links or tab labels that transition font weight from normal to bold (`font-weight: 400` $\rightarrow$ `700`) caused link text to expand horizontally, pushing adjacent navigation items sideways and triggering noticeable layout reflows. Changing font weight alters the glyph advance width in standard typefaces, triggering a horizontal layout reflow pass across surrounding elements.

## 🛠️ The Solution
The layout advance widths are pre-reserved in the initial paint pass. By attaching a `data-text` attribute to each link and rendering a hidden, bold `::after` pseudo-element (`content: attr(data-text); font-weight: 700; height: 0; visibility: hidden;`), the browser calculates the link's intrinsic container width using the bold text string. Hovering over links transitions visual weight cleanly without shifting adjacent navigation elements.
