# ease-zoom-in-up-pp

An entrance animation combining scaling (zoom-in) and moving upwards simultaneously with smooth ease-out.

## What does this do?

This animation fades an element in while zooming it in (scaling up) and sliding it up from a lower offset. This combined motion makes entrance transitions feel modern and smooth.

---

## How is it used?

Simply apply the `.ease-zoom-in-up` class to any HTML element:

```html
<div class="ease-zoom-in-up">Hello World</div>
```

### Custom Variables

You can customize the initial scale and slide distance directly using CSS custom variables:

- `--ease-zoom-in-up-scale`: The starting scale factor (default: `0.5`).
- `--ease-zoom-in-up-distance`: The starting translateY offset (default: `40px`).

```css
.my-hero-card {
  --ease-zoom-in-up-scale: 0.75;
  --ease-zoom-in-up-distance: 80px;
}
```

```html
<div class="ease-zoom-in-up my-hero-card">Custom Hero Card</div>
```

### Speed Modifiers

Adjust the duration using standard EaseMotion speed helper classes:

- `.ease-zoom-in-up-fast` (500ms duration)
- _(default)_ (800ms duration)
- `.ease-zoom-in-up-slow` (1200ms duration)

---

## Why is it useful?

This combination is a highly popular pattern in modern landing page design for hero headings, call-to-actions, and content grids. It draws focus cleanly and dynamically as elements resolve into place.

---

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

---

## Accessibility

Respects user preferences for motion sensitivity: if `prefers-reduced-motion` is active, the animation is skipped and the element immediately displays statically.

---

## Preview

Open `demo.html` directly in your browser to experience the live playground.
