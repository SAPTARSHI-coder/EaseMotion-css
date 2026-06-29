# ease-features

## What does this do?

Provides a **feature grid section component** — the classic multi-column features-with-icons layout used on SaaS landing pages, product pages, and marketing sites.

## How is it used?

```html
<div class="ease-features ease-features-3 ease-features-card">
  <div class="ease-feature">
    <div class="ease-feature-icon">⚡</div>
    <h3 class="ease-feature-title">Lightning Fast</h3>
    <p class="ease-feature-desc">Optimized for performance.</p>
  </div>
  <div class="ease-feature">
    <div class="ease-feature-icon">🎨</div>
    <h3 class="ease-feature-title">Beautiful Design</h3>
    <p class="ease-feature-desc">Modern and clean aesthetics.</p>
  </div>
  <div class="ease-feature">
    <div class="ease-feature-icon">🔒</div>
    <h3 class="ease-feature-title">Secure</h3>
    <p class="ease-feature-desc">Enterprise-grade security.</p>
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-features` | Grid container |
| `.ease-features-2` | 2-column grid |
| `.ease-features-3` | 3-column grid |
| `.ease-features-4` | 4-column grid |
| `.ease-features-card` | Card variant with border, shadow, hover lift |
| `.ease-features-minimal` | Minimal variant (transparent, no shadow) |
| `.ease-feature` | Individual feature item |
| `.ease-feature-icon` | Icon container (circular, primary color) |
| `.ease-feature-title` | Feature title |
| `.ease-feature-desc` | Feature description |

### Variants

| Variant | Description |
|---------|-------------|
| **Card** (`.ease-features-card`) | White background, border, shadow, hover lift effect |
| **Minimal** (`.ease-features-minimal`) | Transparent background, no shadow, compact padding |

### Column Options

| Class | Columns | Best for |
|-------|---------|----------|
| `.ease-features-2` | 2 | Feature comparisons, side-by-side content |
| `.ease-features-3` | 3 | Standard SaaS feature sections |
| `.ease-features-4` | 4 | Icon grids, compact feature lists |

### Animation

Items use `ease-reveal ease-slide-up` for scroll-triggered stagger entrance. Add `ease-reveal-delay-1` through `ease-reveal-delay-3` for sequenced delays.

### Responsive

- Single column on mobile (<768px)
- 2 columns on tablet (769-1024px) for 4-column layout
- Standard grid on desktop (1025px+)

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-space-8` | `2rem` | Feature padding |
| `--ease-space-3` | `0.75rem` | Feature internal gap |
| `--ease-space-16` | `4rem` | Section padding |
| `--ease-space-6` | `1.5rem` | Section horizontal padding |
| `--ease-radius-lg` | `1rem` | Feature border radius |
| `--ease-radius-full` | `9999px` | Icon circle radius |
| `--ease-shadow-sm` | `0 1px 3px...` | Card shadow |
| `--ease-shadow-lg` | `0 10px 30px...` | Hover shadow |
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Title color |
| `--ease-color-neutral-500` | `#64748b` | Description color |
| `--ease-color-primary-light` | `#a09af8` | Icon background |

Fixes #25568
