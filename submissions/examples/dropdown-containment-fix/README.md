# Sandbox Layout Fix: Dropdown Menu Component Isolation Pass

## Overview
A performance and layout stability patch for floating menus and multi-select filters to drop global layout recalculation delays and isolate sub-pixel paint tremors entirely inside an isolated sandbox path.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive configuration layout setting a dropdown list directly over a standard text form block to test boundary stabilization.
* `style.css` — Scoped modifier style file declaring modern layout boundaries linked back to global tokens.

## 🐛 The Bug Resolved
Previously, appending options or switching active states (like clicking checkboxes) inside an absolute floating list caused a jarring rendering bug on Chromium (Blink) engines. Even though the menu panel uses an absolute positioning context, checking items forces the browser's engine to initiate a global layout check. Sub-pixel rendering round-offs would bleed into the surrounding elements, causing neighboring forms or text segments to shake horizontally or vertically by 1–2 pixels during active selections.

## 🛠️ The Solution
The canvas recalculation tree is optimized. By wrapping the structural selection system in a container set to `contain: layout style;`, you notify the browser engine that elements inside will never alter the geometric constraints of external layout layers. This cancels recursive structural lookups upfront, locking the nearby inputs down perfectly during high-speed state cycles.
