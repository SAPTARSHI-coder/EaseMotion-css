# Ease Color Shift Diff Viewer

## Description
A code diff viewer styled with Neumorphism (soft, embossed shadows on a light background), showing added/removed/modified lines with a "color-shift" animation — each changed line briefly flashes a saturated highlight color before settling into its final translucent background. Lines animate in staggered on load. Includes a pure-CSS unified/split view toggle. Zero JavaScript.

## Features
- Neumorphic soft-UI styling (raised toggle button, inset diff panel)
- Color-shift animation: added/removed/modified lines pulse from a strong color to their resting translucent state
- Staggered line entrance animation
- Pure CSS unified ↔ split view toggle, driven by a hidden checkbox (`:checked` selector) — no JavaScript
- Fully keyboard accessible (native checkbox + label toggle, visible `:focus-visible` outline)
- Responsive (split view collapses back to single column on small screens)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-diff">
  <div class="diff-header">
    <span class="diff-filename">📄 your-file.js</span>
    <input type="checkbox" id="diffView" class="diff-toggle-input" />
    <label for="diffView" class="diff-toggle-label">🔀 Split View</label>
  </div>

  <div class="diff-body">
    <div class="diff-line"><span class="line-marker"> </span><span class="line-code">unchanged line</span></div>
    <div class="diff-line is-removed"><span class="line-marker">−</span><span class="line-code">removed line</span></div>
    <div class="diff-line is-added"><span class="line-marker">+</span><span class="line-code">added line</span></div>
    <div class="diff-line is-modified"><span class="line-marker">~</span><span class="line-code">modified line</span></div>
  </div>

  <div class="diff-legend">
    <span><span class="legend-dot added"></span>Added</span>
    <span><span class="legend-dot removed"></span>Removed</span>
    <span><span class="legend-dot modified"></span>Modified</span>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--diff-duration` | `0.5s` | Line entrance animation duration |
| `--diff-stagger` | `0.08s` | Delay increment between lines |
| `--diff-added` | `#22c55e` | Added line accent color |
| `--diff-removed` | `#ef4444` | Removed line accent color |
| `--diff-modified` | `#f59e0b` | Modified line accent color |
| `--diff-bg` | `#e4e9f0` | Neumorphic base background |
| `--diff-radius` | `18px` | Outer container corner rounding |

## Files
- `demo.html` — live working example with unified/split toggle
- `style.css` — component styles and all animations
- `README.md` — this file