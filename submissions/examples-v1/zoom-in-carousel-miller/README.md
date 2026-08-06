# Zoom-In Carousel — Dashboard Analytics

A pure CSS animated carousel using the checkbox hack (radio inputs + sibling selectors). The active slide zooms to full scale while adjacent slides scale down and fade — creating a clear focal point without any JavaScript.

## How it works

The technique uses radio `<input>` elements placed before the carousel in the DOM. CSS sibling selectors (`input:checked ~ .track`) drive both the track translation and the active slide's scale/opacity:

```css
/* Active slide zooms in */
#slide-1:checked ~ .ease-zoom-carousel-track .ease-zoom-slide:nth-child(1) {
  transform: scale(var(--carousel-scale-active));
  opacity: 1;
}

/* Track slides to show the active card */
#slide-2:checked ~ .ease-zoom-carousel-track {
  transform: translateX(calc(-1 * (60% + var(--carousel-gap))));
}
```

## Usage

```html
<!-- Inputs BEFORE the carousel (required for sibling selector approach) -->
<input class="carousel-input" type="radio" name="my-carousel" id="slide-1" checked />
<input class="carousel-input" type="radio" name="my-carousel" id="slide-2" />
<input class="carousel-input" type="radio" name="my-carousel" id="slide-3" />

<div class="ease-zoom-carousel" role="region" aria-label="Analytics carousel">
  <div class="ease-zoom-carousel-track">
    <div class="ease-zoom-slide" tabindex="0">Slide 1 content</div>
    <div class="ease-zoom-slide" tabindex="0">Slide 2 content</div>
    <div class="ease-zoom-slide" tabindex="0">Slide 3 content</div>
  </div>
  <div class="ease-zoom-carousel-dots">
    <label class="carousel-dot dot-1" for="slide-1" role="tab" tabindex="0" aria-label="Slide 1"></label>
    <label class="carousel-dot dot-2" for="slide-2" role="tab" tabindex="0" aria-label="Slide 2"></label>
    <label class="carousel-dot dot-3" for="slide-3" role="tab" tabindex="0" aria-label="Slide 3"></label>
  </div>
</div>
```

## CSS Custom Properties

| Property | Default | Controls |
|---|---|---|
| `--carousel-scale-active` | `1` | Active slide scale |
| `--carousel-scale-inactive` | `0.88` | Inactive slide scale |
| `--carousel-opacity-inactive` | `0.45` | Inactive slide opacity |
| `--carousel-duration` | `0.45s` | Transition speed |
| `--carousel-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing |
| `--carousel-gap` | `16px` | Gap between slides |
| `--carousel-accent` | `#7c3aed` | Active border + dot color |
| `--carousel-bg` | `#0f172a` | Carousel background |
| `--carousel-card-bg` | `#1e293b` | Slide card background |

## Accessibility
- `role="region"` + `aria-label` on the carousel wrapper
- Each slide has `tabindex="0"` + `role="group"` + `aria-label`
- Dot labels have `role="tab"` + `tabindex="0"` + descriptive `aria-label`
- Tab to dots, Space/Enter to activate
- `prefers-reduced-motion` disables all transitions

## Slides in the demo
4 dashboard analytics cards: Monthly Revenue sparkline, Traffic Sources donut, Conversion Funnel progress bars, KPI Summary stat grid — all dark theme, matching dashboard UI aesthetics.

## Why it fits EaseMotion CSS?
The zoom transition IS the component — scale + opacity + border-color all driven by CSS custom properties with spring easing. Human-readable classes (`ease-zoom-carousel`, `ease-zoom-slide`, `ease-zoom-carousel-track`) compose naturally. Zero JavaScript, zero dependencies.
