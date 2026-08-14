# Shimmer-Sweep Carousel

A pure HTML/CSS carousel that combines scroll snapping with a restrained diagonal shimmer sweep for minimalist technology interfaces.

## What does this do?

The demo presents four responsive content cards. Each card receives an independent CSS shimmer sweep while the carousel uses native horizontal scrolling and CSS scroll snapping.

## How is it used?

Place the component markup inside a page and link the stylesheet:

```html
<link rel="stylesheet" href="style.css">

<section class="carousel" aria-label="Technology showcase carousel">
  <div class="carousel__track">
    <article class="card">
      <h2>Signal</h2>
      <p>Subtle motion draws attention without competing with content.</p>
    </article>
  </div>
</section>
```

The visual sweep is created with the `.card::before` pseudo-element and the `shimmer-sweep` keyframe. No JavaScript, external libraries, or framework dependencies are required.

### CSS custom properties

| Property | Purpose | Default |
| --- | --- | --- |
| `--surface` | Page background | `#0a0d12` |
| `--surface-raised` | Raised surface token | `#11161e` |
| `--accent` | Accent text color | `#b8c7ff` |
| `--card-width` | Responsive card width | `min(76vw, 380px)` |
| `--gap` | Space between cards | `clamp(1rem, 2vw, 1.5rem)` |
| `--radius` | Card corner radius | `1.5rem` |
| `--duration` | Shimmer cycle duration | `4.8s` |

Override these variables at the component or page level to match a product's visual system.

## Accessibility and performance

- Uses semantic `article` elements and an accessible carousel label.
- Works with keyboard and touch scrolling through native overflow behavior.
- Includes `prefers-reduced-motion: reduce` so the shimmer and transitions are effectively disabled for users who request less motion.
- Uses CSS-only animation; no JavaScript or external dependencies are needed.
- Uses `scroll-snap-type` to keep cards aligned during touch or trackpad scrolling.

## Why it fits EaseMotion CSS

The component keeps motion human-readable and lightweight: one clear keyframe controls the shimmer, native CSS scrolling provides carousel behavior, and all styling is self-contained. It demonstrates a polished animation pattern without adding runtime dependencies.
