# ease-slide-up-hero

Submission for Issue #54630

## What this adds

A CSS Slide-Up Hero Section for creative portfolio layouts.
All content elements (nav, role tag, title lines, divider,
subtitle, CTAs, image panel, stats bar) animate upward with
staggered delays on page load. Fully responsive.

## HTML Structure

```html
<section class="ease-slide-up-hero" aria-label="Portfolio hero">

  <!-- Optional background circles -->
  <div class="ease-slide-up-hero__bg-circle ease-slide-up-hero__bg-circle--1" aria-hidden="true"></div>

  <!-- Navbar -->
  <nav class="ease-slide-up-hero__nav">
    <div class="ease-slide-up-hero__logo">name<span>.</span></div>
    <ul class="ease-slide-up-hero__nav-links">
      <li><a href="#">Work</a></li>
    </ul>
    <a href="#" class="ease-slide-up-hero__nav-cta">Hire Me</a>
  </nav>

  <!-- Body -->
  <div class="ease-slide-up-hero__body">

    <div class="ease-slide-up-hero__left">
      <span class="ease-slide-up-hero__role">Your Role</span>
      <h1 class="ease-slide-up-hero__title">
        <span class="ease-slide-up-hero__title-line">Line One</span>
        <span class="ease-slide-up-hero__title-line"><em>Line</em> Two</span>
      </h1>
      <span class="ease-slide-up-hero__divider" aria-hidden="true"></span>
      <p class="ease-slide-up-hero__subtitle">Your tagline here.</p>
      <div class="ease-slide-up-hero__ctas">
        <a href="#" class="ease-slide-up-hero__btn ease-slide-up-hero__btn--primary">CTA →</a>
        <a href="#" class="ease-slide-up-hero__btn ease-slide-up-hero__btn--ghost">Secondary</a>
      </div>
    </div>

    <div class="ease-slide-up-hero__right">
      <div class="ease-slide-up-hero__image-wrap">
        <img src="photo.jpg" alt="Your photo" />
        <div class="ease-slide-up-hero__image-badge">
          <span class="ease-slide-up-hero__image-badge-title">Available</span>
          <span class="ease-slide-up-hero__image-badge-sub">Open to work</span>
        </div>
      </div>
    </div>

  </div>

  <!-- Stats bottom bar -->
  <div class="ease-slide-up-hero__bottom">
    <div class="ease-slide-up-hero__stats">
      <div>
        <span class="ease-slide-up-hero__stat-value">48+</span>
        <span class="ease-slide-up-hero__stat-label">Projects</span>
      </div>
    </div>
  </div>

</section>
```

## Animation Sequence

| Element | Delay | Animation |
|---|---|---|
| Navbar | 0.1s | slide down from top |
| Role badge | 0.2s | slide up + scale |
| Title line 1 | 0.3s | slide up + fade |
| Title line 2 | 0.42s | slide up + fade |
| Title line 3 | 0.54s | slide up + fade |
| Divider line | 0.6s | width expand |
| Subtitle | 0.65s | slide up + fade |
| CTA buttons | 0.75s | slide up + fade |
| Social links | 0.85s | slide up + fade |
| Image panel | 0.4s | slide up + scale |
| Stats bottom bar | 1.0s | slide up + fade |
| Scroll indicator | 1.1s | fade-in |

## Classes

### Layout
| Class | Description |
|---|---|
| `ease-slide-up-hero` | Default split layout (left text, right image) |
| `ease-slide-up-hero--center` | Centered stacked layout |

### Accent Colors
`--blue`, `--purple`, `--pink`, `--orange`, `--white`

### Speed
| Class | Duration |
|---|---|
| `--fast` | 0.45s |
| default | 0.8s |
| `--slow` | 1.2s |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--hero-height` | 100vh | Section height |
| `--hero-accent` | #4ade80 | Accent color |
| `--hero-bg` | #0a0f1e | Background color |
| `--hero-duration` | 0.8s | Animation duration |

## Responsive Breakpoints

- Desktop (>900px): Side-by-side split layout
- Tablet/Mobile (≤900px): Stacked column layout, nav links hidden
- Mobile (≤480px): Full-width stacked CTA buttons

## Accessibility

- `aria-label` on `<section>` and `<nav>`
- `aria-hidden="true"` on decorative elements
- `prefers-reduced-motion`: all slides replaced with fade-in

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
