# ease-marquee

Submission for Issue #51324

## What this adds

A reusable infinite scrolling marquee/ticker component for logos,
announcements, and testimonials. Supports left, right, up, and down
scroll directions with fade-edge mask, pause-on-hover, and speed
controls. Zero JavaScript required.

## How It Works

The track element is doubled in HTML (items duplicated) so when
the first set scrolls out, the second set is already in place —
creating a seamless infinite loop via `translateX(-50%)`.

```css
@keyframes ease-marquee-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## HTML Structure

```html
<div class="ease-marquee ease-marquee--mask ease-marquee--hover">
  <div class="ease-marquee__track">
    <span class="ease-marquee__item">Item 1</span>
    <span class="ease-marquee__item">Item 2</span>
    <span class="ease-marquee__item">Item 3</span>
    <!-- Duplicate items for seamless loop -->
    <span class="ease-marquee__item">Item 1</span>
    <span class="ease-marquee__item">Item 2</span>
    <span class="ease-marquee__item">Item 3</span>
  </div>
</div>
```

## Classes

### Wrapper
| Class | Description |
|---|---|
| `ease-marquee` | Base wrapper, left scroll by default |
| `ease-marquee--right` | Scroll right |
| `ease-marquee--vertical` | Vertical scroll (up) |
| `ease-marquee--down` | Vertical scroll (down) |
| `ease-marquee--mask` | Fade-edge gradient mask |
| `ease-marquee--hover` | Pause animation on hover |

### Speed
| Class | Duration |
|---|---|
| `ease-marquee--fast` | 12s |
| `ease-marquee` | 30s (default) |
| `ease-marquee--slow` | 60s |

### Gap
| Class | Gap |
|---|---|
| `ease-marquee--gap-sm` | 0.75rem |
| `ease-marquee--gap-md` | 2rem (default) |
| `ease-marquee--gap-lg` | 4rem |
| `ease-marquee--gap-xl` | 6rem |

### Item Types
| Class | Use Case |
|---|---|
| `ease-marquee__logo` | Brand/tech logo card |
| `ease-marquee__announce` | News ticker text with dot |
| `ease-marquee__card` | Testimonial card |
| `ease-marquee__sep` | Separator between items |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-marquee-speed` | 30s | Animation duration |
| `--ease-marquee-gap` | 2rem | Gap between items |
| `--ease-marquee-height` | 240px | Height for vertical variant |

## Use Cases

- Logo / brand carousels
- News / announcement tickers
- Testimonial loops
- Sponsor walls
- Tech stack displays

## Accessibility

Respects `prefers-reduced-motion` — scroll animation replaced
with gentle opacity pulse, items wrap naturally.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
