# Sandbox Layout Fix: Sticky Table Header Cell Border-Collapse Stabilization

## Overview
A structural rendering fix for tabular dataset modules to eliminate boundary border-clipping, pixel separation, and background row bleed artifacts during rapid vertical scrolling actions across Blink and Gecko engine viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Heavy metrics dashboard test container providing a scrolling viewport to verify line integrity.
* `style.css` — Scoped modifier block substituting native collapsed line borders with high-performance internal box shadows.

## 🐛 The Bug Resolved
Previously, applying standard sticky constraints (`position: sticky; top: 0;`) to table headers (`<th>`) combined with a global `border-collapse: collapse;` setting caused major layout degradation on Firefox and Chrome. Because collapsed lines are painted on the table base plane instead of the independent scrolling header layer, the border line would snap away, vanish, or fail to follow the cell boundaries, letting trailing body text rows uncomfortably bleed directly through the title words.

## 🛠️ The Solution
The cell separation layers are stabilized. By discarding `border-collapse` entirely, enforcing distinct cell bounding spaces via `border-spacing: 0;`, and injecting crisp boundary lines using an internal graphics mask (`box-shadow: inset 0 -2px 0 var(--border-color);`), the edge layout layers are permanently attached to the active header row. This maps the elements safely onto hardware composition layers for stutter-free scrolling loops.
