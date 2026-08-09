# ease-price-toggle

Submission for Issue #51348

## What this adds

A reusable animated pricing toggle for switching between monthly
and yearly billing. Uses the CSS checkbox `:checked` trick —
sliding knob, cross-fading prices, and an animated "Save X%" badge.
Zero JavaScript required.

## HTML Structure

### Minimal toggle
```html
<label class="ease-price-toggle" aria-label="Toggle yearly billing">
  <input type="checkbox" />
  <span class="ease-price-toggle-slider"></span>
</label>
```

### Full pricing section
```html
<div class="ease-price-section">

  <!-- Toggle row with labels and badge -->
  <div class="ease-price-toggle-wrap">
    <span class="ease-price-toggle-label ease-price-toggle-label--monthly">Monthly</span>
    <label class="ease-price-toggle" aria-label="Toggle yearly billing">
      <input type="checkbox" />
      <span class="ease-price-toggle-slider"></span>
    </label>
    <span class="ease-price-toggle-label ease-price-toggle-label--yearly">Yearly</span>
    <span class="ease-price-toggle-badge">Save 20%</span>
  </div>

  <!-- Pricing card with cross-fading prices -->
  <div class="ease-price-card">
    <div class="ease-price-card__price">
      <div class="ease-price-display">
        <span class="ease-price-display__monthly">$29/mo</span>
        <span class="ease-price-display__yearly">$23/mo</span>
      </div>
    </div>
  </div>

</div>
```

## Classes

### Toggle
| Class | Description |
|---|---|
| `ease-price-toggle` | Toggle label wrapper |
| `ease-price-toggle-slider` | Track + knob span |
| `ease-price-toggle-wrap` | Flex row: labels + toggle + badge |
| `ease-price-toggle-label--monthly` | Monthly label (highlighted when unchecked) |
| `ease-price-toggle-label--yearly` | Yearly label (highlighted when checked) |
| `ease-price-toggle-badge` | Animated "Save X%" badge |

### Toggle Size Variants
| Class | Size |
|---|---|
| `ease-price-toggle--sm` | 44×22px |
| default | 56×28px |
| `ease-price-toggle--lg` | 72×36px |

### Toggle Color Variants
| Class | Checked color |
|---|---|
| default | Indigo `#4f46e5` |
| `ease-price-toggle--green` | Green `#16a34a` |
| `ease-price-toggle--cyan` | Cyan `#0891b2` |
| `ease-price-toggle--amber` | Amber `#d97706` |
| `ease-price-toggle--rose` | Rose `#e11d48` |

### Speed Variants
| Class | Duration |
|---|---|
| `ease-price-toggle--fast` | 0.15s |
| default | 0.3s |
| `ease-price-toggle--slow` | 0.6s |

### Badge Variants
| Class | Color |
|---|---|
| `ease-price-toggle-badge` | Green (default) |
| `ease-price-toggle-badge--purple` | Purple |
| `ease-price-toggle-badge--amber` | Amber |

### Price Display
| Class | Description |
|---|---|
| `ease-price-display` | Wrapper for cross-fade |
| `ease-price-display__monthly` | Shown when unchecked |
| `ease-price-display__yearly` | Shown when checked |

### Pricing Card
| Class | Description |
|---|---|
| `ease-price-card` | Card container |
| `ease-price-card--featured` | Highlighted/primary card |
| `ease-price-card__plan` | Plan name label |
| `ease-price-card__price` | Price display area |
| `ease-price-card__desc` | Short description |
| `ease-price-card__features` | Feature list (`<ul>`) |
| `ease-price-card__btn` | CTA button |
| `ease-price-card__btn--outline` | Outline CTA variant |
| `ease-price-card__savings` | Yearly savings line |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--toggle-width` | `56px` | Toggle track width |
| `--toggle-height` | `28px` | Toggle track height |
| `--toggle-knob` | `22px` | Knob diameter |
| `--toggle-offset` | `3px` | Knob padding |
| `--toggle-on-color` | `#4f46e5` | Checked track color |
| `--toggle-off-color` | `#cbd5e1` | Unchecked track color |
| `--toggle-duration` | `0.3s` | Transition speed |
| `--toggle-ease` | spring cubic-bezier | Knob easing |

## How It Works

A hidden `<input type="checkbox">` inside the `<label>` wrapper
drives everything via `:checked` CSS selectors. The `:has()` selector
on `.ease-price-section` propagates the checked state to sibling
price displays and savings lines — no JavaScript needed.

## Accessibility

- `<label>` wraps `<input>` — click anywhere to toggle
- `aria-label` on label for screen readers
- `:focus-visible` ring on the track
- `prefers-reduced-motion` disables all transitions and animations

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| `:has()` selector | 105+ | 105+ | 121+ | 15.4+ |
| CSS transitions | all | all | all | all |
| prefers-reduced-motion | all | all | all | all |
