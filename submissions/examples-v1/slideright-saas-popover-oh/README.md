# Slide-Right SaaS Showcase Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for SaaS Showcase layouts with quick actions, workflow management, and SaaS-optimized UI.

## How is it used?
```html
<div class="popover-container">
  <button class="saas-btn" aria-label="More options">
    <svg>...</svg>
    Actions
  </button>
  <div class="slide-popover" role="tooltip">
    <div class="slide-header">
      <span class="slide-icon">
        <svg>...</svg>
      </span>
      <div class="slide-info">
        <h4>Quick Actions</h4>
        <p>Manage your workflow</p>
      </div>
    </div>
    <div class="slide-actions">
      <a href="#" class="slide-action" style="--delay: 0s">
        <span class="action-icon"><svg>...</svg></span>
        <span>Create New</span>
      </a>
      <a href="#" class="slide-action" style="--delay: 0.05s">
        <span class="action-icon"><svg>...</svg></span>
        <span>Search</span>
      </a>
      <a href="#" class="slide-action" style="--delay: 0.1s">
        <span class="action-icon"><svg>...</svg></span>
        <span>Projects</span>
      </a>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with SaaS reveals
- **SaaS Showcase optimized** with quick actions and workflow management
- **Multiple animation variants** (slide, pulse, sweep) for different UX needs
- **Theme options** (indigo, emerald, rose) to match SaaS branding
- **Workflow ready** structure with actions and icons
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.pulse` | Pulse scale animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #4f46e5 (default) |
| Emerald | `.theme-emerald` | #059669 |
| Rose | `.theme-rose` | #e11d48 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ SaaS Showcase styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Quick actions structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
