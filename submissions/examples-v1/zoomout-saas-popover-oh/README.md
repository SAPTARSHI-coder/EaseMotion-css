# Zoom-Out SaaS Showcase Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for SaaS Showcase layouts with quick actions, workflow management, and SaaS-optimized UI.

## How is it used?
```html
<div class="popover-container">
  <button class="saas-btn" aria-label="More options">
    <svg>...</svg>
    Actions
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-header">
      <span class="zoom-icon">
        <svg>...</svg>
      </span>
      <div class="zoom-info">
        <h4>Quick Actions</h4>
        <p>Manage your workflow</p>
      </div>
    </div>
    <div class="zoom-actions">
      <a href="#" class="zoom-action" style="--delay: 0s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Create New</span>
      </a>
      <a href="#" class="zoom-action" style="--delay: 0.05s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Search</span>
      </a>
      <a href="#" class="zoom-action" style="--delay: 0.1s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Projects</span>
      </a>
      <a href="#" class="zoom-action" style="--delay: 0.15s">
        <span class="action-icon">
          <svg>...</svg>
        </span>
        <span>Settings</span>
      </a>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with SaaS reveals
- **SaaS Showcase optimized** with quick actions and workflow management
- **Multiple animation variants** (scale, pulse, bounce) for different UX needs
- **Theme options** (indigo, emerald, rose) to match SaaS branding
- **Workflow ready** structure with actions and icons
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.scale` | Scale bounce zoom |
| `.pulse` | Pulse opacity zoom |
| `.bounce` | Spring bounce zoom |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #4f46e5 (default) |
| Emerald | `.theme-emerald` | #059669 |
| Rose | `.theme-rose` | #e11d48 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ SaaS Showcase styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Quick actions structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
