# Cyberpunk Code Terminal Block Component

A developer code block window styling component featuring retro CRT scanline overlays and neon blinking cursor animations.

## 1. What does this do?
Formats code snippets and documentation examples inside an interactive terminal window complete with window controls, syntax highlighting, and CRT scanline visual effects.

## 2. How is it used?
1. Link `style.css` in your HTML header.
2. Nest syntax-highlighted code lines inside `.terminal-wrapper`, `.terminal-body`, and `<pre><code>`.
3. Add the `.cursor` span at the end of code block to render the animated neon terminal prompt cursor.

## 3. Why is it useful?
- **High-Impact Dev UX**: Elevates documentation code snippet presentation with modern cyberpunk design elements.
- **Hardware Accelerated**: Uses CSS keyframe animations for the blinking cursor without layout thrashing.
- **Accessible & Focusable**: Supports keyboard focus outlines (`:focus-visible`) for full WCAG compliance.
