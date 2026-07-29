# ease-zoom-in-hero

Submission for Issue #54631

## What this adds

A CSS Zoom-In Hero Section for creative portfolio layouts.
The background image zooms from scale(1.18) to scale(1) on
page load, while headline, subtitle, badge, CTAs, and stats
animate in sequentially with staggered delays.
Fully responsive across desktop, tablet, and mobile.

## HTML Structure

```html
<section class="ease-zoom-in-hero" aria-label="Hero section">

  <!-- Background (zooms in) -->
  <div class="ease-zoom-in-hero__bg"
       style="background-image: url('hero.jpg')"
       aria-hidden="true"></div>

  <!-- Optional grain texture -->
  <div class="ease-zoom-in-hero__grain" aria-hidden="true"></div>

  <!-- Overlay -->
  <div class="ease-zoom-in-hero__overlay" aria-hidden="true"></div>

  <!-- Content -->
  <div class="ease-zoom-in-hero__content">
    <span class="ease-zoom-in-hero__badge">✦ Available for work</span>
    <h1 class="ease-zoom-in-hero__title">Creative <em>Design</em></h1>
    <p class="ease-zoom-in-hero__subtitle">Your tagline here.</p>
    <div class="ease-zoom-in-hero__ctas">
      <a href="#" class="ease-zoom-in-hero__btn ease-zoom-in-hero__btn--primary">View Work →</a>
      <a href="#" class="ease-zoom-in-hero__btn ease-zoom-in-hero__btn--secondary">Contact</a>
    </div>
    <div class="ease-zoom-in-hero__stats">
      <div class="ease-zoom-in-hero__stat">
        <span class="ease-zoom-in-hero__stat-value">48+</span>
        <span class="ease-zoom-in-hero__stat-label">Projects</span>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="ease-zoom-in-hero__scroll" aria-hidden="true">
    <div class="ease-zoom-in-hero__scroll-line"></div>
    <span class="ease-zoom-in-hero__scroll-label">Scroll</span>
  </div>

</section>
```

## Classes

### Core
| Class | Description |
|---|---|
| `ease-zoom-in-hero` | Hero wrapper |
| `ease-zoom-in-hero__bg` | Zoom-in background layer |
| `ease-zoom-in-hero__bg--parallax` | Scroll-driven parallax background |
| `ease-zoom-in-hero__overlay` | Dark overlay |
| `ease-zoom-in-hero__overlay--gradient` | Bottom-weighted gradient overlay |
| `ease-zoom-in-hero__overlay--vignette` | Radial vignette overlay |
| `ease-zoom-in-hero__grain` | Animated film grain texture |
| `ease-zoom-in-hero__content` | Content container |
| `ease-zoom-in-hero__scroll` | Scroll indicator |

### Layout
| Class | Effect |
|---|---|
| default | Center-aligned content |
| `--left` | Left-aligned content |

### Accent Colors
`--blue`, `--purple`, `--pink`, `--orange`, `--white`

### Speed
| Class | Zoom Duration |
|---|---|
| `--fast` | 0.6s |
| default | 1.2s |
| `--slow` | 2s |

### Overlay Intensity
| Class | Overlay |
|---|---|
| `--light-overlay` | rgba(10,15,30,0.3) |
| default | rgba(10,15,30,0.55) |
| `--dark-overlay` | rgba(0,0,0,0.75) |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--hero-height` | 100vh | Hero section height |
| `--hero-bg` | #0a0f1e | Fallback background color |
| `--hero-overlay` | rgba(10,15,30,0.55) | Overlay opacity/color |
| `--hero-duration` | 1.2s | Zoom animation duration |
| `--hero-accent` | #4ade80 | Accent color (badge, title em, btn) |
| `--hero-text` | #f1f5f9 | Primary text color |

## Animation Sequence

| Element | Delay | Animation |
|---|---|---|
| Background | 0s | scale(1.18) → scale(1) |
| Badge | 0.2s | slide-in from left |
| Title | 0.4s | slide-up + fade |
| Subtitle | 0.6s | slide-up + fade |
| CTAs | 0.8s | slide-up + scale pop |
| Stats | 1.0s | slide-up + fade |
| Scroll indicator | 1.2s | fade-in |

## Responsive Breakpoints

- Desktop (>768px): Full layout with large typography
- Tablet (≤768px): Reduced stats gap, smaller buttons
- Mobile (≤480px): Stacked CTAs, full-width buttons

## Accessibility

- `aria-label` on section element
- `aria-hidden="true"` on all decorative elements
- Fully respects `prefers-reduced-motion` — zoom and slides
  replaced with simple fade-in, grain and bounce disabled

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
