# ease-redo-undo-button

## Overview

**What does this do?** A pure-CSS undo/redo button pair — a grouped history control with subtle hover, press, and focus motion, a disabled state, an icon-only variant, and automatic dark-mode support.

**How is it used?** Wrap two buttons in `.ease-redo-undo-group` (see [Usage](#usage) below).

**Why is it useful?** Undo/redo controls appear in every editor-style UI, and this pair delivers them in EaseMotion's animation-first, zero-JS style: readable class names, design-token theming, and purposeful micro-motion that respects `prefers-reduced-motion`.

## Features

- Undo + redo buttons in a single grouped control with a hairline divider
- Hover/focus tint with a directional icon nudge (undo left, redo right)
- Press feedback: `scale(0.97)` plus a playful icon "wind" rotation
- Entrance motion reuses the framework's `ease-kf-slide-up` keyframe
- Keyboard accessible with a visible `:focus-visible` ring — hover cues are mirrored on focus
- Disabled state, icon-only variant, and labels that collapse to screen-reader-only text below 480px
- Light/dark theming via EaseMotion design tokens with self-contained fallbacks

## Folder Structure

```
ease-redo-undo-button/
├── demo.html   – self-contained demo (default, icon-only, disabled)
├── style.css   – component styles + demo scaffolding
└── README.md
```

## Usage

```html
<div class="ease-redo-undo-group" role="group" aria-label="History controls">
  <button type="button" class="ease-redo-undo-btn">
    <svg class="ease-redo-undo-icon" ...>…</svg>
    <span class="ease-redo-undo-label">Undo</span>
  </button>
  <button type="button" class="ease-redo-undo-btn">
    <span class="ease-redo-undo-label">Redo</span>
    <svg class="ease-redo-undo-icon" ...>…</svg>
  </button>
</div>
```

Add `ease-redo-undo-btn--icon` and an `aria-label` for icon-only buttons; add `disabled` when there is nothing to undo/redo.

## Customization

All values resolve through EaseMotion design tokens, so the component themes itself when loaded alongside the framework. Standalone, override the component tokens:

| Property | Default | Description |
|---|---|---|
| `--erb-accent` | `var(--ease-color-primary, #6c63ff)` | Hover/focus accent color |
| `--erb-accent-soft` | `var(--ease-color-primary-alpha, …)` | Hover/focus background tint |
| `--erb-surface` | `var(--ease-color-surface, #ffffff)` | Group background |
| `--erb-border` | `var(--ease-color-neutral-200, #e2e8f0)` | Group border and divider |
| `--erb-radius` | `var(--ease-radius-md, 0.5rem)` | Group corner radius |
| `--erb-speed` | `var(--ease-speed-fast, 150ms)` | Transition duration |

## Accessibility

- Semantic `<button type="button">` elements inside a `role="group"` with an `aria-label`
- Decorative SVGs are `aria-hidden="true"`; icon-only buttons carry an `aria-label`
- Hover styles are duplicated on `:focus-visible`, plus a 2px offset focus ring
- 44px minimum touch targets
- `prefers-reduced-motion: reduce` removes all movement while keeping color and focus feedback

## Browser Support

Works in all modern evergreen browsers (Chrome, Firefox, Safari, Edge, Opera). Uses flexbox, CSS custom properties, transitions, and keyframes only — no JavaScript.

## Preview

A centered card shows three states of the control: the default labeled pair, a compact icon-only pair, and a pair with redo disabled. The group slides up on load; hovering or focusing a button tints it in the primary color and nudges its arrow toward its direction of travel, and pressing it winds the arrow with a gentle bounce.
