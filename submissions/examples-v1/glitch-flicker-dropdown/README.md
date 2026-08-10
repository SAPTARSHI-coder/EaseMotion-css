# CSS Glitch-Flicker Dropdown

Submission for Issue #54623

## What this adds

A cyberpunk/creative-portfolio dropdown component with RGB channel-split
glitch effects, CRT scanlines, flickering trigger states, and staggered
clip-path item reveals. Pure CSS, zero JavaScript.

## HTML Structure

```html
<div class="gfd-dropdown">

  <!-- Hidden checkbox toggle -->
  <input type="checkbox" id="my-dropdown" class="gfd-toggle" />

  <!-- Backdrop (click outside to close) -->
  <label for="my-dropdown" class="gfd-backdrop"></label>

  <!-- Trigger button -->
  <label for="my-dropdown" class="gfd-trigger" data-text="Menu">
    Menu <span class="gfd-trigger-arrow">▾</span>
  </label>

  <!-- Panel -->
  <div class="gfd-panel">
    <div class="gfd-panel-header">
      <span class="gfd-cursor-blink"></span>
      <span class="gfd-panel-title">// select item</span>
      <span class="gfd-panel-badge">Badge</span>
    </div>

    <ul class="gfd-item-list">
      <li class="gfd-item">
        <a href="#" class="gfd-link" data-text="Item Name">
          <span class="gfd-item-icon">⬡</span>
          <span class="gfd-item-label">Item Name</span>
          <span class="gfd-item-tag gfd-item-tag--new">New</span>
        </a>
      </li>
    </ul>

    <div class="gfd-divider"></div>

    <div class="gfd-panel-footer">
      <div class="gfd-panel-footer-status">
        <span class="gfd-status-dot"></span>ONLINE
      </div>
      <span>ESC TO CLOSE</span>
    </div>
  </div>

</div>
```

**Important:** `data-text` on `.gfd-trigger` and `.gfd-link` must match
the visible text content — this is used by `::before`/`::after` for the
RGB channel-split glitch effect.

## Classes

### Core
| Class | Element | Description |
|---|---|---|
| `gfd-dropdown` | `<div>` | Root wrapper |
| `gfd-toggle` | `<input type="checkbox">` | Hidden state toggle |
| `gfd-backdrop` | `<label>` | Click-outside-to-close backdrop |
| `gfd-trigger` | `<label>` | Dropdown trigger button |
| `gfd-trigger-arrow` | `<span>` | Arrow rotates 180° when open |
| `gfd-panel` | `<div>` | Dropdown panel |

### Panel Inner
| Class | Description |
|---|---|
| `gfd-panel-header` | Top bar with cursor + title + badge |
| `gfd-panel-title` | Header label text |
| `gfd-panel-badge` | Small badge (count, status) |
| `gfd-cursor-blink` | Blinking terminal cursor block |
| `gfd-item-list` | `<ul>` wrapper for items |
| `gfd-item` | `<li>` individual item |
| `gfd-link` | Item anchor — add `data-text` for glitch |
| `gfd-item-icon` | Icon prefix `<span>` |
| `gfd-item-label` | Item text |
| `gfd-item-tag` | Status tag (new / hot / wip) |
| `gfd-divider` | Horizontal separator |
| `gfd-panel-footer` | Bottom status bar |
| `gfd-status-dot` | Animated online indicator dot |

### Item Tag Variants
| Class | Color |
|---|---|
| `gfd-item-tag--new` | Green (accent) |
| `gfd-item-tag--hot` | Orange |
| `gfd-item-tag--wip` | Muted gray |

## Color Theme Variants

| Class on `.gfd-dropdown` | Accent colors |
|---|---|
| (default) | Green `#00ffaa` |
| `gfd-dropdown--cyan` | Cyan `#00d4ff` |
| `gfd-dropdown--fire` | Orange-Red `#ff6b35` |
| `gfd-dropdown--purple` | Purple `#bf5fff` |

## Size Variants

| Class | Panel width |
|---|---|
| `gfd-dropdown--sm` | 200px |
| (default) | 280px |
| `gfd-dropdown--lg` | 360px |

## Alignment

| Class | Panel position |
|---|---|
| (default) | Left-aligned |
| `gfd-dropdown--right` | Right-aligned |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--gfd-bg` | `#0a0a0f` | Panel background |
| `--gfd-surface` | `#0f0f1a` | Trigger background |
| `--gfd-border` | green 30% | Border color |
| `--gfd-accent` | `#00ffaa` | Primary accent color |
| `--gfd-accent-2` | `#ff00ff` | Glitch channel 2 |
| `--gfd-accent-3` | `#00aaff` | Border trace color 3 |
| `--gfd-text` | `#e0e0e0` | Item text color |
| `--gfd-text-muted` | `#666680` | Muted/inactive text |
| `--gfd-glitch-1` | red 70% | RGB split layer 1 |
| `--gfd-glitch-2` | cyan 70% | RGB split layer 2 |
| `--gfd-duration` | `0.35s` | Panel open duration |
| `--gfd-width` | `280px` | Panel width |

## Animations

| Keyframe | Effect |
|---|---|
| `gfd-glitch-clip-1/2` | RGB channel split via `clip-path` + `translateX` |
| `gfd-glitch-skew` | Horizontal skew on trigger text |
| `gfd-flicker` | Opacity flicker on open trigger |
| `gfd-panel-in` | Panel slides + fades in with clip-path reveal |
| `gfd-item-in` | Each item reveals left-to-right with stagger |
| `gfd-border-trace` | Moving gradient border on trigger hover |
| `gfd-scanline` | Moving CRT beam across panel |
| `gfd-cursor` | Blinking terminal cursor |

## Accessibility

- Keyboard accessible — `<label>` wraps `<input>`, `Enter` toggles
- Backdrop `<label>` closes on outside click
- `prefers-reduced-motion` disables all glitch/flicker/animation effects
- `aria-label` can be added to trigger for screen readers

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| `clip-path` animation | 88+ | 88+ | 90+ | 14+ |
| CSS custom properties | all | all | all | all |
| prefers-reduced-motion | all | all | all | all |
