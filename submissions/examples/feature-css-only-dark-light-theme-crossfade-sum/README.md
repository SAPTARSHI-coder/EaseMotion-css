# CSS-Only Dark/Light Theme Crossfade

Related issue: #51872

## What does this do?

A light/dark theme demo where CSS custom properties on the page root crossfade background, surface, text, border, and shadow tokens when a checkbox toggle adds a `theme-dark` class. Two stacked logo layers softly crossfade opacity instead of swapping assets. Sample cards and chips show how surfaces respond to the same token set.

## How is it used?

Open `demo.html` in a browser.

1. Use the **Dark mode** switch to toggle themes.
2. Watch page background, cards, chips, and the dual-layer logo crossfade together.
3. Enable **prefers-reduced-motion: reduce** in your OS to verify instant theme swaps.

Minimal inline JavaScript only toggles the `theme-dark` class — all visual morphing is CSS.

## Why is it useful?

Design systems need theme changes that feel cohesive rather than jarring. This pattern shows how token-driven transitions plus logo opacity crossfades create polished dark mode without JavaScript color interpolation or external theme libraries.

## Token overrides

Light theme defaults live on `:root`. Dark theme overrides apply when `.theme-page.theme-dark` is present:

| Token | Light | Dark |
| --- | --- | --- |
| `--bg-page` | `#f1f5f9` | `#0f172a` |
| `--bg-surface` | `#ffffff` | `#1e293b` |
| `--bg-elevated` | `#f8fafc` | `#334155` |
| `--text-primary` | `#0f172a` | `#f8fafc` |
| `--text-secondary` | `#64748b` | `#94a3b8` |
| `--border-subtle` | `#e2e8f0` | `#475569` |
| `--logo-light-opacity` | `1` | `0` |
| `--logo-dark-opacity` | `0` | `1` |

Shared accent tokens (`--brand-indigo`, gradients) stay consistent; soft tints like `--brand-indigo-soft` adjust per theme.

## Accessibility

- Toggle is a native checkbox with an accessible label.
- Focus ring appears on keyboard focus via `:focus-visible`.
- Under `prefers-reduced-motion: reduce`, all theme transitions are disabled for instant swaps.

## Files

```
submissions/examples/feature-css-only-dark-light-theme-crossfade-sum/
├── demo.html
├── style.css
└── README.md
```
