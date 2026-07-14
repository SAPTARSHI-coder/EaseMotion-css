# Animated Logo Carousel / Client Cloud

A horizontal, auto-scrolling logo carousel for "Trusted By" / client-logo
sections on landing pages. Logos scroll continuously in a seamless loop
and pause on hover or keyboard focus.

Addresses issue **"[FEATURE] Animated Logo Carousel / Client Cloud."**

## How the seamless loop works

The logo list is **duplicated once** in the markup (the second copy is
marked `aria-hidden="true"` so screen readers don't announce it twice).
The track is then animated with `transform: translateX(-50%)` —
because the track is exactly twice as wide as one logo set, moving it by
precisely half its width scrolls through one full set and lands exactly
where the animation started, with no visible seam or jump.

```css
.logo-track {
  animation: ease-scroll-logos 24s linear infinite;
}

@keyframes ease-scroll-logos {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## Features

- **Seamless infinite loop** — no jump cut, no gap.
- **Pause on interaction** — `animation-play-state: paused` on `:hover`
  and `:focus-within`, so users can stop the motion to read a logo.
- **Edge fade mask** — a CSS `mask-image` gradient fades logos in/out at
  the container edges instead of a hard clip.
- **Grayscale-to-color hover** — individual logos brighten on
  hover/focus for a subtle interactive touch.
- **Reduced motion support** — under `prefers-reduced-motion: reduce`,
  the animation is disabled and logos wrap into a static grid instead.

## Usage

```html
<div class="logo-carousel" tabindex="0" aria-label="Client logos, scrolling">
  <div class="logo-track">
    <div class="logo-item"><img src="logo1.svg" alt="Client 1"></div>
    <div class="logo-item"><img src="logo2.svg" alt="Client 2"></div>
    <div class="logo-item"><img src="logo3.svg" alt="Client 3"></div>
    <div class="logo-item"><img src="logo4.svg" alt="Client 4"></div>

    <!-- Duplicate the same set, marked aria-hidden, for the seamless loop -->
    <div class="logo-item" aria-hidden="true"><img src="logo1.svg" alt=""></div>
    <div class="logo-item" aria-hidden="true"><img src="logo2.svg" alt=""></div>
    <div class="logo-item" aria-hidden="true"><img src="logo3.svg" alt=""></div>
    <div class="logo-item" aria-hidden="true"><img src="logo4.svg" alt=""></div>
  </div>
</div>
```

### Customization

Two CSS custom properties control speed and spacing, scoped to
`.logo-carousel` so multiple carousels on the same page can be tuned
independently:

```css
.logo-carousel {
  --carousel-speed: 24s;  /* full loop duration — lower = faster */
  --carousel-gap: 3rem;   /* spacing between logos */
}
```

## Accessibility

- `tabindex="0"` and `aria-label` on the container let keyboard users
  focus the carousel, which also pauses the scroll via `:focus-within`.
- The duplicated logo set is marked `aria-hidden="true"` so assistive
  technology only announces each client name once.
- `prefers-reduced-motion: reduce` disables the animation and switches
  to a static wrapped grid layout.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Working demo with 6 placeholder client logos. |
| `style.css` | The `.logo-carousel` / `.logo-track` / `.logo-item` component styles, plus demo-page-only presentation at the bottom of the file. |
| `README.md` | This file. |

## Notes for reviewer

- No files outside `submissions/` were modified.
- This does not duplicate an existing EaseMotion CSS class.
- Naming (`.logo-carousel`, `.logo-track`, `.logo-item`) is left
  un-prefixed as submitted; happy to rename to `.ease-*` conventions
  during standardization, per the issue's checklist.
