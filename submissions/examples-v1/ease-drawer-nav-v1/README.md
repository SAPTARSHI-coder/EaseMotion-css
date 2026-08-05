# ease-drawer-nav

Submission for Issue #51342

## What this adds

A reusable slide-in side drawer navigation panel with animated
overlay, hamburger trigger, and multiple variants — left, right,
dark theme, push-content. Zero JavaScript required.

## HTML Structure

```html
<!-- 1. Hidden checkbox toggle -->
<input type="checkbox" id="drawer-toggle" class="ease-drawer-toggle" />

<!-- 2. Drawer panel (must immediately follow the checkbox) -->
<div class="ease-drawer-nav">
  <div class="ease-drawer-header">
    <span class="ease-drawer-title">Navigation</span>
    <label for="drawer-toggle" class="ease-drawer-close" aria-label="Close">✕</label>
  </div>

  <div class="ease-drawer-body">
    <ul class="ease-drawer-nav-list">
      <li><a href="#" class="active">
        <span class="ease-drawer-nav-icon">🏠</span>Home
      </a></li>
      <li><a href="#">
        <span class="ease-drawer-nav-icon">📊</span>Dashboard
      </a></li>
    </ul>
  </div>

  <div class="ease-drawer-footer">Footer content</div>
</div>

<!-- 3. Overlay (click to close) — must follow the drawer -->
<label for="drawer-toggle" class="ease-drawer-overlay"></label>

<!-- 4. Trigger button (anywhere on page) -->
<label for="drawer-toggle">Open Menu</label>
```

## Classes

### Core
| Class | Element | Description |
|---|---|---|
| `ease-drawer-toggle` | `<input type="checkbox">` | Hidden toggle — drives all state |
| `ease-drawer-nav` | `<div>` | Left-side drawer panel |
| `ease-drawer-nav-right` | `<div>` | Right-side drawer panel |
| `ease-drawer-overlay` | `<label>` | Full-screen backdrop, click to close |
| `ease-drawer-trigger` | `<label>` | Animated hamburger ☰ → ✕ |

### Drawer Inner
| Class | Description |
|---|---|
| `ease-drawer-header` | Top bar with title + close button |
| `ease-drawer-title` | Drawer heading text |
| `ease-drawer-close` | Close button (link to toggle) |
| `ease-drawer-body` | Scrollable content area |
| `ease-drawer-footer` | Bottom bar |

### Nav List
| Class | Description |
|---|---|
| `ease-drawer-nav-list` | `<ul>` nav link list |
| `ease-drawer-nav-link` | Standalone nav link |
| `ease-drawer-nav-icon` | Icon prefix `<span>` |
| `ease-drawer-nav-section` | Section heading label |
| `ease-drawer-nav-divider` | Horizontal rule |

### Width Variants
| Class | Width |
|---|---|
| `ease-drawer-nav--sm` | 200px |
| default | 280px |
| `ease-drawer-nav--lg` | 360px |
| `ease-drawer-nav--full` | 100vw |

### Theme Variants
| Class | Theme |
|---|---|
| default | Light |
| `ease-drawer-nav--dark` | Dark slate |

### Speed Variants
| Class | Duration |
|---|---|
| `ease-drawer-nav--fast` | 0.18s |
| default | 0.35s |
| `ease-drawer-nav--slow` | 0.6s |

### Push Content Variant
Wrap your page content in `.ease-drawer-push-wrap` — it shifts
right when the drawer opens, instead of overlapping:

```html
<input type="checkbox" id="drawer-toggle" class="ease-drawer-toggle" />
<div class="ease-drawer-nav">...</div>
<label for="drawer-toggle" class="ease-drawer-overlay"></label>
<div class="ease-drawer-push-wrap">
  <!-- your page content here -->
</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--drawer-width` | `280px` | Panel width |
| `--drawer-duration` | `0.35s` | Slide speed |
| `--drawer-ease` | smooth cubic-bezier | Easing function |
| `--drawer-bg` | `#ffffff` | Panel background |
| `--drawer-overlay` | `rgba(0,0,0,0.45)` | Overlay color |
| `--drawer-shadow` | drop shadow | Panel box-shadow |
| `--drawer-z` | `200` | z-index |

## How It Works

A hidden `<input type="checkbox">` drives everything via
`:checked` CSS sibling selectors. The drawer panel must
immediately follow the checkbox in the DOM. The overlay
`<label>` closes the drawer when clicked (toggles checkbox off).

## Accessibility

- Keyboard: `<label>` trigger is focusable, `Enter` toggles
- `aria-label` on close button and trigger
- `:focus-visible` rings (inherited from browser defaults on labels)
- `prefers-reduced-motion`: all transitions disabled

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| CSS sibling selectors | all | all | all | all |
| CSS transitions | all | all | all | all |
| `:has()` (push variant) | 105+ | 105+ | 121+ | 15.4+ |
