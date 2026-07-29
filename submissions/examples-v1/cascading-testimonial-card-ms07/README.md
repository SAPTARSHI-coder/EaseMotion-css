# Cascading Testimonial Card

Testimonial cards styled like social media posts (avatar, handle,
verified badge, quote, engagement row) that enter in a staggered
cascade — each card fades and slides up slightly after the previous
one. A single animation, delayed per card via a CSS custom property.
Pure CSS, zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ Single animation (`ease-cascade-in`): fade + slide-up
- ✅ Staggered per card via the `--ease-i` custom property, so any number
     of cards can cascade in sequence without extra keyframes
- ✅ Social-media-post styling: circular initials avatar, verified badge,
     `@handle`, quote, and a like/repost/comment engagement row
- ✅ Timing, easing, stagger delay, and travel distance exposed as CSS
     custom properties
- ✅ Respects `prefers-reduced-motion`
- ✅ Responsive grid layout
- ✅ Semantic, accessible markup (`<figure>`, `<blockquote>`,
     `<figcaption>`)
- ✅ No external dependencies — avatars are CSS-only initials, no images
     required

## Files

```
cascading-testimonial-card-ms07/
├── demo.html   # Standalone demo with 4 cascading testimonial cards
├── style.css   # Component styles and the cascade keyframe
└── README.md   # This file
```

## Usage

Include `style.css`, then add one `.ease-testimonial` card per
testimonial, giving each an incrementing `--ease-i` value (0, 1, 2, 3...)
to control its position in the cascade:

```html
<div class="ease-testimonial-grid">

  <figure class="ease-testimonial" style="--ease-i: 0;">
    <div class="ease-testimonial__header">
      <div class="ease-testimonial__avatar" style="--ease-avatar-color: #4285f4;" aria-hidden="true">AR</div>
      <div class="ease-testimonial__identity">
        <figcaption class="ease-testimonial__name">
          Aarav Rao
          <span class="ease-testimonial__badge" title="Verified">✓</span>
        </figcaption>
        <p class="ease-testimonial__handle">@aarav.builds</p>
      </div>
    </div>
    <blockquote class="ease-testimonial__quote">
      EaseMotion CSS made adding polish to our landing page so much easier.
    </blockquote>
    <div class="ease-testimonial__footer">
      <span>❤ 128</span>
      <span>🔁 24</span>
      <span>💬 9</span>
    </div>
  </figure>

  <figure class="ease-testimonial" style="--ease-i: 1;">
    ...
  </figure>

</div>
```

- `--ease-i` is multiplied by `--ease-stagger` to compute each card's
  `animation-delay`, so card `0` starts immediately, card `1` starts
  120ms later, card `2` 240ms later, and so on.
- `--ease-avatar-color` (optional, per card) tints the initials avatar;
  it falls back to `--ease-accent` if omitted.
- Swap the two initials in `.ease-testimonial__avatar` for any name —
  no image assets needed.

## Customization

All motion values are CSS custom properties, overridable globally on
`:root` or per-instance via inline `style`:

```html
<div class="ease-testimonial-grid" style="--ease-stagger: 200ms; --ease-distance: 40px;">
  ...
</div>
```

| Variable            | Default                              | Description                              |
|-----------------------|------------------------------------------|-----------------------------------------------|
| `--ease-duration`    | `600ms`                                 | Duration of each card's entrance animation      |
| `--ease-easing`      | `cubic-bezier(0.16, 1, 0.3, 1)`          | Entrance easing curve                           |
| `--ease-stagger`     | `120ms`                                 | Delay added per card, multiplied by `--ease-i`  |
| `--ease-distance`    | `26px`                                  | Vertical distance the card slides up            |
| `--ease-card-bg`     | `#ffffff`                               | Card background color                           |
| `--ease-card-border` | `#e5e7eb`                               | Card border color                               |
| `--ease-card-radius` | `14px`                                  | Card corner radius                              |
| `--ease-accent`      | `#4285f4`                               | Default avatar/badge accent color               |

## Accessibility

- Each testimonial uses `<figure>` with `<figcaption>` for the author
  name and `<blockquote>` for the quote — proper semantic structure for
  assistive technology.
- Avatars are decorative CSS-generated initials marked `aria-hidden="true"`,
  since the author's name is already available as visible, readable text
  right next to them.
- The cascade entrance is a one-time animation, not a looping or
  attention-grabbing motion, and is disabled entirely under
  `prefers-reduced-motion: reduce` (cards render immediately, fully
  visible).

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties and `@keyframes` — no vendor
prefixes required for modern browsers.

## Checklist

- [x] Uses EaseMotion CSS conventions (`ease-*` classes and keyframes)
- [x] Works without JavaScript (pure CSS)
- [x] Includes a live demo in `demo.html`
- [x] Includes `README.md`
- [x] Responsive and accessible