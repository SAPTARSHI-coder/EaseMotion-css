# Image Comparison Slider — EaseMotion CSS

**Issue:** [#30309 — Add Image Comparison Slider (Before/After) component](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30309)

A CSS-first image comparison slider for before/after image comparisons. Uses `<input type="range">` for drag interaction, CSS `clip-path` for the reveal, and CSS variables for positioning.

## Structure

```
submissions/docs/core_changes-issue-30309/
├── demo.html       # Demo page showing horizontal, vertical, and static variants
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-compare` | Container (position: relative, overflow: hidden) |
| `.ease-compare-before` | Before image (full width) |
| `.ease-compare-after` | After image (clipped via `clip-path` driven by `--ease-compare-pos`) |
| `.ease-compare-handle` | Draggable divider line with circular grip and grab icon |
| `.ease-compare-range` | Hidden `<input type="range">` for drag interaction |
| `.ease-compare-label` | Overlay label (before/after) |
| `.ease-compare-label--before` | Positioned top-left |
| `.ease-compare-label--after` | Positioned top-right |
| `.ease-compare-vertical` | Vertical split mode (top/bottom instead of left/right) |

## Features

- **Interactive:** Uses `<input type="range">` with `oninput` to update `--ease-compare-pos`
- **CSS-only mode:** Hardcode `--ease-compare-pos` as a fixed value for static display
- **Horizontal split:** Default left/right comparison
- **Vertical split:** `.ease-compare-vertical` for top/bottom comparison
- **Draggable handle:** White line with circular grip and ⇔/⇕ grab icon
- **Labels:** "Before" / "After" overlay with backdrop blur
- **Responsive:** Images scale with container width
- **Accessible:** Range input is keyboard navigable and screen-reader friendly
- **Customizable:** `--ease-compare-pos` controls split position (0–100%)
