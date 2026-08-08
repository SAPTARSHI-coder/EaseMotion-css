# Image Zoom Hover Utility

A single reusable CSS class that adds a smooth zoom-in effect when a
user hovers over an image. Built for image cards, galleries,
portfolios, and product previews.

## How it works

The effect needs two pieces working together:

1. **A clipping container** (`.image-container`) with `overflow: hidden`.
   Without this, a scaled-up image would spill past its own corners
   and shift surrounding layout.
2. **The utility class** (`.image-zoom-hover`) on the `<img>` itself,
   which sets a `transition` on `transform` and defines the resting
   scale (`scale(1)`).

The zoom is triggered by `:hover` (and `:focus-within`, for keyboard
users) on the **container**, not the image directly — that way the
effect still fires correctly even if a caption or overlay sits on top
of the image.

```css
.image-container {
  overflow: hidden;
}

.image-zoom-hover {
  transform: scale(1);
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.image-container:hover .image-zoom-hover,
.image-container:focus-within .image-zoom-hover {
  transform: scale(1.12);
}
```

## Usage

```html
<div class="image-container">
  <img
    class="image-zoom-hover"
    src="your-image.jpg"
    alt="Description"
  >
</div>
```

That's the whole API — one wrapper div, one utility class.

## Customizing the zoom

Three CSS custom properties control the feel of the effect. Override
them on `.image-container` or a parent scope:

```css
.image-container {
  --zoom-scale: 1.2;      /* how much the image scales up */
  --zoom-duration: 250ms; /* speed of the zoom */
  --zoom-ease: ease-out;  /* easing curve */
}
```

For a rounded/circular frame (e.g. an avatar-style image), add the
`.image-container--rounded` modifier, which sets `border-radius: 999px`
and locks the container to a 1:1 aspect ratio.

## Why it fits EaseMotion CSS

It's a single, composable utility class — attach it to any image
inside any layout without extra markup or JavaScript. The motion is
driven entirely by native CSS transforms and transitions, matching
EaseMotion's animation-first, human-readable philosophy.

## Accessibility

- `:focus-within` on the container mirrors the hover effect for
  keyboard navigation, so the interaction isn't mouse-only.
- `@media (prefers-reduced-motion: reduce)` removes the transition
  entirely — the image still displays normally, it simply doesn't
  animate.

## Files

- `demo.html` — a small gallery showing the utility on four sample
  images, including a rounded variant.
- `style.css` — the utility itself, plus demo layout styling.
- `README.md` — this file.
