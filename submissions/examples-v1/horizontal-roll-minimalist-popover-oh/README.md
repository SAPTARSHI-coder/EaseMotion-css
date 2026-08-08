# Horizontal Roll Minimalist Tech Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Minimalist Tech layouts with clean lines, subtle transitions, and minimal UI.

## How is it used?
```html
<div class="popover-container">
  <button class="tech-btn" aria-label="More options">
    <svg>...</svg>
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-items">
      <div class="roll-item" style="--delay: 0s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Documents</span>
      </div>
      <div class="roll-item" style="--delay: 0.05s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Presentations</span>
      </div>
      <div class="roll-item" style="--delay: 0.1s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Downloads</span>
      </div>
      <div class="roll-item" style="--delay: 0.15s">
        <span class="roll-icon">
          <svg>...</svg>
        </span>
        <span>Search</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with clean minimal reveals
- **Minimalist Tech optimized** with subtle transitions and clean lines
- **Multiple animation variants** (reveal, drift, swoosh) for different UX needs
- **Theme options** (slate, zinc, neutral) to match minimalist aesthetic
- **File management ready** structure with icons and labels
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.reveal` | Reveal with opacity roll |
| `.drift` | Drift slide roll |
| `.swoosh` | Swoosh skew roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Slate | `.theme-slate` | #64748b |
| Zinc | `.theme-zinc` | #71717a |
| Neutral | `.theme-neutral` | #a3a3a3 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--min-duration` | `0.4s` | Animation duration |
| `--min-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Minimalist Tech styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ File management structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
