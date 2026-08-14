# Ease Search Highlight Text

## Description
A pure CSS text-highlight animation for emphasizing search matches or keywords within text — the highlighted background sweeps in from left to right, with optional pulse and fade-in variants. Zero JavaScript.

## Variants
- **Default (`.ease-highlight`)** — background sweeps in left-to-right on load
- **`.highlight-pulse`** — highlight gently pulses in opacity, useful for indicating a "live" or active search match
- **`.highlight-fade`** — highlight simply fades in, no sweep motion

## Usage
```html
<p>
  The <span class="ease-highlight">EaseMotion CSS</span> framework is
  <span class="ease-highlight highlight-pulse">animation-first</span>.
</p>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--highlight-color` | `rgba(250, 204, 21, 0.45)` | Highlight background color |
| `--highlight-duration` | `0.6s` | Sweep/fade animation duration |
| `--highlight-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Timing function |
| `--highlight-radius` | `3px` | Corner rounding of the highlight background |

Example override:
```html
<span class="ease-highlight" style="--highlight-color: rgba(56,189,248,0.4);">
  Custom colored highlight
</span>
```

## Accessibility & Motion
Highlight is a purely visual background effect and doesn't affect text readability or semantics. Respects `prefers-reduced-motion` by skipping directly to the fully-visible highlight state.

## Files
- `demo.html` — live working example with all three variants
- `style.css` — component styles
- `README.md` — this file