# ease-testimonial-carousel-cozy

A testimonial carousel with smooth CSS slide transitions, quote formatting, star ratings, author attribution, navigation dots, and auto-play cycling.

## What does this do?

Cycles through a set of testimonial cards using a CSS `transform: translateX` slide transition — the track shifts horizontally on each navigation action. Auto-play advances slides automatically; users can manually navigate via dots, arrow buttons, or keyboard arrow keys.

## How to use it

Link `style.css` and add the markup. Minimal version (dots only):

```html
<link rel="stylesheet" href="style.css">

<div class="ease-testimonial-carousel" id="my-carousel">
  <div class="ease-testimonial-carousel__viewport">
    <div class="ease-testimonial-carousel__track" id="track-my-carousel">

      <!-- Slide 1 -->
      <div class="ease-testimonial-carousel__slide" role="group" aria-label="Testimonial 1 of 3">
        <p class="ease-testimonial-carousel__quote">
          "Your quote text goes here."
        </p>
        <div class="ease-testimonial-carousel__author">
          <div class="ease-testimonial-carousel__avatar--initials" aria-hidden="true">AB</div>
          <div class="ease-testimonial-carousel__author-info">
            <span class="ease-testimonial-carousel__author-name">Author Name</span>
            <span class="ease-testimonial-carousel__author-role">Role · Company</span>
          </div>
        </div>
      </div>

      <!-- Slide 2, 3 … repeat as needed -->

    </div>
  </div>

  <!-- Navigation dots (one per slide) -->
  <div class="ease-testimonial-carousel__dots" role="tablist" aria-label="Testimonial navigation">
    <button class="ease-testimonial-carousel__dot ease-testimonial-carousel__dot--active"
            role="tab" aria-selected="true" aria-label="Go to testimonial 1"
            onclick="goToSlide('my-carousel', 0)"></button>
    <button class="ease-testimonial-carousel__dot"
            role="tab" aria-selected="false" aria-label="Go to testimonial 2"
            onclick="goToSlide('my-carousel', 1)"></button>
    <button class="ease-testimonial-carousel__dot"
            role="tab" aria-selected="false" aria-label="Go to testimonial 3"
            onclick="goToSlide('my-carousel', 2)"></button>
  </div>
</div>
```

Then wire up the minimal JS driver:

```js
const carousels = {
  'my-carousel': { current: 0, total: 3, autoTimer: null }
};

function goToSlide(id, index) {
  const c = carousels[id];
  if (index < 0) { index = c.total - 1; }
  if (index >= c.total) { index = 0; }
  document.getElementById('track-' + id).style.transform =
    'translateX(-' + (index * 100) + '%)';
  /* Update dot active states… */
  c.current = index;
}
```

See `demo.html` for the full implementation including auto-play and keyboard navigation.

### Optional elements

| Element | Class | Notes |
|---|---|---|
| Opening quote icon | `ease-testimonial-carousel__quote-icon` | Any inline SVG |
| Star rating | `ease-testimonial-carousel__stars` | Unicode stars; add `aria-label` |
| Image avatar | `ease-testimonial-carousel__avatar` | `<img>` with `src` + `alt` |
| Initials avatar | `ease-testimonial-carousel__avatar--initials` | No image needed |
| Prev / Next arrows | `ease-testimonial-carousel__arrow--prev/next` | Position outside the carousel wrapper |

## Customization

All visual properties are exposed as CSS custom properties on `:root`:

| Property | Default | Description |
|---|---|---|
| `--tc-bg` | `#ffffff` | Page background (inherited) |
| `--tc-card-bg` | `#f8fafc` | Card background |
| `--tc-border` | `#e2e8f0` | Card border color |
| `--tc-accent` | `#6366f1` | Active dot and arrow hover color |
| `--tc-accent-light` | `#e0e7ff` | Avatar border and initials background |
| `--tc-text-primary` | `#0f172a` | Quote text color |
| `--tc-text-secondary` | `#475569` | Arrow icon color |
| `--tc-quote-icon` | `#c7d2fe` | Opening quote icon color |
| `--tc-dot-inactive` | `#cbd5e1` | Inactive dot color |
| `--tc-dot-active` | `#6366f1` | Active dot color |
| `--tc-star` | `#f59e0b` | Star rating color |
| `--tc-card-radius` | `20px` | Card border-radius |
| `--tc-card-padding` | `2.5rem` | Card inner padding |
| `--tc-max-width` | `720px` | Maximum carousel width |
| `--tc-avatar-size` | `52px` | Avatar diameter |
| `--tc-quote-size` | `1.125rem` | Quote font size |
| `--tc-slide-duration` | `0.45s` | Slide transition duration |
| `--tc-slide-easing` | `cubic-bezier(…)` | Slide transition easing |

**Example — compact variant:**

```html
<div class="ease-testimonial-carousel"
     style="--tc-card-padding:1.5rem; --tc-quote-size:1rem; --tc-max-width:500px;">
  …
</div>
```

## Accessibility

- Each slide has `role="group"` and `aria-label="Testimonial N of M"`.
- The dots container uses `role="tablist"` with each dot as `role="tab"` and `aria-selected`.
- Arrow buttons have `aria-label` text.
- Initials avatars have `aria-hidden="true"` so screen readers skip the decorative letters.
- `prefers-reduced-motion` disables the slide transition and dot animations.
- Keyboard left/right arrows navigate the main carousel in the demo.

## Why it fits EaseMotion CSS

Testimonial carousels are among the most requested UI patterns on landing pages. The entire slide effect is a single CSS `transition: transform` on a flex track — no complex JS animation, no third-party dependencies. Every visual parameter (color, radius, timing, easing) is a CSS custom property, so designers can theme it without touching markup. It ships with dark mode, responsive mobile layout, ARIA semantics, and a `prefers-reduced-motion` fallback — reflecting EaseMotion's philosophy of delivering delightful, accessible animations with minimal code.

## Browser support

Uses CSS `transform`, `transition`, `flexbox`, and CSS custom properties — supported in all current evergreen browsers.
