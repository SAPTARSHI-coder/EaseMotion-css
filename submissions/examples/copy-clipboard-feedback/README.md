# ease-copy-btn

A copy-to-clipboard button that morphs its icon from a copy glyph into an animated checkmark on successful copy, with a bounce feedback animation.

## What
Adds `.ease-copy-btn` — a small icon button with two stacked icon states (`icon-copy`, `icon-check`) that cross-fade/scale-morph via a `.copied` class toggle.

## How
- Both icons are absolutely stacked; CSS `opacity` + `transform` transitions handle the morph between them.
- A tiny inline `<script>` calls `navigator.clipboard.writeText()` and toggles the `.copied` class — this is the only JS, purely for the browser clipboard API which CSS cannot access; all visual animation is CSS-driven (`@keyframes ease-copy-bounce`).
- Reverts to the copy icon automatically after ~1.8s via `setTimeout`.
- Respects `prefers-reduced-motion`.

## Why
Copy buttons are ubiquitous in documentation sites, code blocks, and share links. EaseMotion CSS has button/interaction utilities but no dedicated clipboard-feedback pattern — this demonstrates a practical micro-interaction combining CSS animation with a minimal necessary JS hook.

## Files
- `demo.html` — a code snippet row with a working copy button
- `style.css` — the `ease-copy-btn` classes and keyframes
- `README.md` — this file

## Usage
\```html
<button class="ease-copy-btn" data-copy="text to copy" onclick="easeCopy(this)">
  <span class="icon-copy">⧉</span>
  <span class="icon-check">✓</span>
</button>
\```