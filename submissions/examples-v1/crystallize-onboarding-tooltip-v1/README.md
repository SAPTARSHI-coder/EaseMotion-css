# ease-crystallize-onboarding-tooltip

Submission for Issue #42419

## What this adds

A pure CSS onboarding tooltip component with crystallize spring
entrance animation, pulsing beacon dot, progress bar, and
multi-position support. Zero JavaScript required for the animation.

## HTML Structure

```html
<div class="ease-tooltip-anchor" tabindex="0">
  <!-- Target element -->
  <div class="ui-element">Hover me</div>

  <!-- Beacon pulse dot -->
  <div class="ease-tooltip-beacon"></div>

  <!-- Tooltip (top / bottom / left / right) -->
  <div class="ease-tooltip-wrap ease-tooltip-wrap--bottom">
    <div class="ease-tooltip" role="tooltip">
      <div class="ease-tooltip__header">
        <span class="ease-tooltip__title">Step Title</span>
        <span class="ease-tooltip__step">1 of 3</span>
      </div>
      <div class="ease-tooltip__progress">
        <div class="ease-tooltip__progress-bar" style="width:33%"></div>
      </div>
      <p class="ease-tooltip__body">Tooltip description text.</p>
      <div class="ease-tooltip__footer">
        <button class="ease-tooltip__btn ease-tooltip__btn--skip">Skip</button>
        <button class="ease-tooltip__btn ease-tooltip__btn--next">Next →</button>
      </div>
    </div>
  </div>
</div>
```

## Classes

### Anchor & Beacon
| Class | Description |
|---|---|
| `ease-tooltip-anchor` | Wrapper — triggers show on hover/focus |
| `ease-tooltip-beacon` | Pulsing dot indicator on target |

### Position
| Class | Direction |
|---|---|
| `ease-tooltip-wrap--top` | Tooltip above target |
| `ease-tooltip-wrap--bottom` | Tooltip below target |
| `ease-tooltip-wrap--left` | Tooltip left of target |
| `ease-tooltip-wrap--right` | Tooltip right of target |

### Color Variants (on anchor)
| Class | Gradient |
|---|---|
| default | Green → Cyan |
| `ease-tooltip--blue` | Blue → Indigo |
| `ease-tooltip--purple` | Purple → Pink |

## Accessibility

- Uses `role="tooltip"` on the tooltip card
- Triggered via `:hover` AND `:focus-within` — fully keyboard accessible
- Respects `prefers-reduced-motion` — spring entrance replaced with fade

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
