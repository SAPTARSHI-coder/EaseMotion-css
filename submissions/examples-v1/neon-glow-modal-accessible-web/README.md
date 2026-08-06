# CSS Neon Glow Modal — Accessible Web Layout

A pure CSS modal with a subtle, low-amplitude cyan glow accent, designed to bring the "neon glow" aesthetic to a high-contrast, light-mode, accessibility-first context.

## CSS Custom Properties

| Property                     | Default   | Description                          |
|--------------------------------|-----------|------------------------------------------|
| `--ease-modal-neon-color`      | `#22d3ee` | Accent glow color (cyan)                   |
| `--ease-modal-neon-duration`   | `0.4s`    | Open/close transition duration              |
| `--ease-modal-neon-easing`     | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-modal-bg`              | `#ffffff` | Modal background color                     |
| `--ease-modal-text`            | `#0f172a` | Modal title text color                     |
| `--ease-modal-radius`          | `14px`    | Modal corner radius                        |
| `--ease-modal-max-width`       | `440px`   | Maximum modal width                        |
| `--ease-modal-focus-ring`      | `#0ea5e9` | Focus outline color                        |

## Usage

```html
<button class="ease-modal-trigger" id="openModalBtn">Open Modal</button>

<div class="ease-modal-overlay" id="modalOverlay" role="dialog" aria-modal="true">
  <div class="ease-modal" tabindex="-1">
    <!-- modal content -->
  </div>
</div>
```

## Accessibility

This variant treats accessibility as the core design constraint, not an afterthought:

- **High-contrast light theme** — dark text on white background rather than the typical dark-mode neon look, keeping text contrast well above WCAG AA.
- **Low-amplitude glow** — the pulse animation shifts glow opacity only slightly (0.35 → 0.55), avoiding the harsh, high-contrast flashing common in neon effects.
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` on the overlay.
- Full focus trap while open, focus returns to trigger on close.
- `Escape` key and backdrop click both close the modal.
- Visible `:focus-visible` outlines on all interactive elements.
- `prefers-reduced-motion: reduce` fully disables the glow pulse.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for theming, consistent with the framework's philosophy — while showing that "animation-first" and "accessibility-first" aren't in tension when effects are calibrated thoughtfully.
