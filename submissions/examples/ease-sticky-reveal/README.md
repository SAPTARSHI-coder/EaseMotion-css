# ease-sticky-reveal

A reusable sticky scroll utility for progressive storytelling layouts. `ease-sticky-reveal` keeps sections pinned while reveal animations trigger as the user scrolls.

## Overview

This utility enables modern landing pages and documentation layouts by keeping each section sticky and revealing content progressively through scroll position. It supports fade, slide up, slide left, and scale animations.

## Installation

1. Copy `demo.html` and `style.css` into `submissions/examples/ease-sticky-reveal/`.
2. No `script.js` is required for this implementation.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="submissions/examples/ease-sticky-reveal/style.css" />
```

## Usage examples

Wrap story sections in the `.ease-sticky-reveal` container and apply `.ease-sticky-content` to reveal blocks.

```html
<main class="ease-sticky-reveal" data-ease-sticky-duration="0.6s" data-ease-sticky-offset="110px">
  <section class="sticky-section" data-section-name="Intro" data-reveal-type="fade">
    <div class="ease-sticky-content">...</div>
  </section>
</main>
```

## Customization options

Use CSS custom properties on the container to adjust duration and reveal offset:

```css
.ease-sticky-reveal {
  --ease-sticky-transition-duration: 0.8s;
  --ease-sticky-offset: 140px;
}
```

Supported reveal types:

- `fade`
- `slide-up`
- `slide-left`
- `scale`

## Browser compatibility

Designed for modern browsers with support for:

- `position: sticky`
- CSS custom properties
- CSS transforms
- `prefers-reduced-motion`

## Accessibility considerations

- Respects `prefers-reduced-motion` by disabling reveal animation transforms and showing content immediately.
- Uses semantic section labels and headings to preserve structure.
- Keeps sticky sections from interfering with keyboard navigation by ensuring content remains visible and readable.

## Limitations

- The demo uses inline JavaScript for scroll updates; the core effect is CSS-centric but requires JS to calculate reveal progress.
- Deep nested or complex content may need additional tuning for sticky offsets and spacing.
- `position: sticky` has limited behavior inside transformed parents.

## Future enhancements

- Add optional declarative classes for reveal delays and easings.
- Support horizontal sticky storytelling layouts.
- Add a dedicated `ease-sticky-progress` utility for scroll-linked progress bars.
- Add a no-JS fallback that reveals content based on section visibility only.

---

Submitted by: @your-github-username
