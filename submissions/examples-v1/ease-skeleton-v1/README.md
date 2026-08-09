# ease-skeleton

Submission for Issue #51222

## What this adds

CSS-only skeleton loading shimmer utility using a moving
linear-gradient background-position animation. Covers text lines,
circles/avatars, cards, images, buttons, and composite layouts.
Zero JavaScript required.

## How It Works

```css
.ease-skeleton {
  background: linear-gradient(90deg, #1e293b 25%, #273548 50%, #1e293b 75%);
  background-size: 200% 100%;
  animation: ease-shimmer 1.5s linear infinite;
}

@keyframes ease-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Classes

### Base
| Class | Description |
|---|---|
| `ease-skeleton` | Base shimmer — apply to any element |

### Text Lines
| Class | Description |
|---|---|
| `ease-skeleton-text` | Text line placeholder (14px default) |
| `ease-skeleton-text--sm/md/lg/xl` | Height variants |
| `ease-skeleton-text--w-full/3\/4/2\/3/1\/2/1\/3/1\/4` | Width presets |

### Circles
| Class | Size |
|---|---|
| `ease-skeleton-circle--xs` | 24px |
| `ease-skeleton-circle--sm` | 32px |
| `ease-skeleton-circle--md` | 48px |
| `ease-skeleton-circle--lg` | 64px |
| `ease-skeleton-circle--xl` | 96px |
| `ease-skeleton-circle--2xl` | 128px |

### Shapes
| Class | Description |
|---|---|
| `ease-skeleton-card--sm/md/lg/xl` | Rect card placeholder |
| `ease-skeleton-image` | Image placeholder (200px) |
| `ease-skeleton-thumb` | 56px square thumbnail |
| `ease-skeleton-btn--sm/default/lg/full` | Button placeholder |

### Composite Layouts
| Class | Description |
|---|---|
| `ease-skeleton-profile` | Avatar + text lines row |
| `ease-skeleton-card-layout` | Full card with image + content |
| `ease-skeleton-list-item` | List row with avatar + lines + action |

### Modifiers
| Class | Description |
|---|---|
| `ease-skeleton--fast` | 0.8s shimmer |
| `ease-skeleton--slow` | 2.5s shimmer |
| `ease-skeleton--light` | Light background variant |
| `ease-skeleton--rtl` | Right-to-left shimmer direction |

## Usage

```html
<!-- Text line skeleton -->
<div class="ease-skeleton ease-skeleton-text ease-skeleton-text--w-3/4"></div>

<!-- Avatar skeleton -->
<div class="ease-skeleton ease-skeleton-circle ease-skeleton-circle--md"></div>

<!-- Profile row -->
<div class="ease-skeleton-profile">
  <div class="ease-skeleton ease-skeleton-circle ease-skeleton-circle--md"></div>
  <div class="ease-skeleton-profile__lines">
    <div class="ease-skeleton ease-skeleton-text ease-skeleton-text--w-1/2"></div>
    <div class="ease-skeleton ease-skeleton-text ease-skeleton-text--sm ease-skeleton-text--w-1/3"></div>
  </div>
</div>
```

## Accessibility

Respects `prefers-reduced-motion` — shimmer sweep replaced
with gentle opacity pulse. No layout shift when skeleton is
replaced by real content (same dimensions).

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
