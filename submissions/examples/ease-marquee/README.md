# ease-marquee

Infinite scrolling ticker/marquee component for logos, announcements, and testimonials. Pure CSS, zero JavaScript.

## Usage

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
  </div>
  <!-- Duplicate track for seamless loop -->
  <div class="ease-marquee-track" aria-hidden="true">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
  </div>
</div>
```

Duplicate the `.ease-marquee-track` div (with `aria-hidden="true"`) for a seamless infinite loop — no JS needed.

## Direction Variants

| Class on `.ease-marquee` | Direction |
|---|---|
| (none) | Left to right scroll (default) |
| `ease-marquee-rtl` | Right to left |
| `ease-marquee-vertical` | Scroll upward |
| `ease-marquee-vertical ease-marquee-down` | Scroll downward |

## Speed Variants

| Class | Duration |
|---|---|
| `ease-marquee-xfast` | 8s |
| `ease-marquee-fast` | 15s |
| (default) | 30s |
| `ease-marquee-slow` | 60s |
| `ease-marquee-xslow` | 90s |

## Gap Variants

| Class | Gap between items |
|---|---|
| `ease-marquee-gap-sm` | 1rem |
| (default) | 2rem |
| `ease-marquee-gap-lg` | 4rem |
| `ease-marquee-gap-xl` | 6rem |

## Feature Variants

| Class | Description |
|---|---|
| `ease-marquee-pause` | Pauses scroll on hover |
| `ease-marquee-fade` | Fades edges with mask-image |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-marquee-speed` | `30s` | Animation duration |
| `--ease-marquee-gap` | `2rem` | Gap between items |
| `--ease-marquee-height` | `200px` | Height for vertical variant |

## Use Cases

- Logo / brand carousels
- News / announcement tickers
- Testimonial loops
- Sponsor walls
- Feature highlights

## How It Works

Two identical `.ease-marquee-track` divs are placed side by side inside the container. The track animates from `translateX(0)` to `translateX(-50%)` — exactly one full track width — then loops seamlessly. The duplicate (with `aria-hidden="true"`) fills the gap, creating the illusion of infinite content.

## Accessibility

- Duplicate track uses `aria-hidden="true"` to avoid screen reader repetition
- `prefers-reduced-motion` disables animation and wraps items inline

## Submission

- **Author:** sudha09-git
- **Issue:** #51324
- **Files:** `style.css`, `demo.html`
