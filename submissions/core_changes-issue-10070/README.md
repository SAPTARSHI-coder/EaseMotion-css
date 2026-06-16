# .ease-reveal-* Convenience Classes

Adds single-class scroll-reveal convenience classes that bundle `.ease-reveal` with a built-in animation direction, reducing the common two-class pattern to one.

## Problem

Currently, users must write two classes for any scroll-reveal effect:
```html
<div class="ease-reveal ease-slide-up">Content</div>
```

This confuses new contributors: "Do I need both? What does each one do?"

## Solution

New single-class convenience variants:
```html
<div class="ease-reveal-slide-up">Content</div>
```

### Proposed CSS to Add to `core/animations.css`

After the existing `.ease-reveal` block:

```css
/* Convenience single-class reveal variants */
.ease-reveal-fade { animation-name: ease-kf-fade-in; }
.ease-reveal-slide-up { animation-name: ease-kf-slide-up; transform: translateY(2rem); }
.ease-reveal-slide-down { animation-name: ease-kf-slide-down; transform: translateY(-2rem); }
.ease-reveal-slide-left { animation-name: ease-kf-slide-in-left; transform: translateX(2rem); }
.ease-reveal-slide-right { animation-name: ease-kf-slide-in-right; transform: translateX(-2rem); }
.ease-reveal-zoom { animation-name: ease-kf-zoom-in; transform: scale(0.9); }
.ease-reveal-blur { animation-name: ease-kf-blur-to-focus; filter: blur(6px); }
```

Add the convenience classes to the base inactive state selector:
```css
.ease-reveal,
.ease-reveal-fade, .ease-reveal-slide-up, .ease-reveal-slide-down,
.ease-reveal-slide-left, .ease-reveal-slide-right,
.ease-reveal-zoom, .ease-reveal-blur {
  opacity: 0;
  will-change: transform, opacity, filter;
  transition:
    opacity 0.7s var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    transform 0.7s var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    filter 0.7s var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
}
```

Add convenience classes to the active state selector:
```css
.ease-reveal.ease-reveal-active,
.ease-reveal-fade.ease-reveal-active,
.ease-reveal-slide-up.ease-reveal-active,
.ease-reveal-slide-down.ease-reveal-active,
.ease-reveal-slide-left.ease-reveal-active,
.ease-reveal-slide-right.ease-reveal-active,
.ease-reveal-zoom.ease-reveal-active,
.ease-reveal-blur.ease-reveal-active {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
  filter: blur(0);
}
```

### Usage

```html
<!-- Before: two classes -->
<div class="ease-reveal ease-slide-up" data-delay="200">Hello</div>

<!-- After: one class -->
<div class="ease-reveal-slide-up">Hello</div>
<div class="ease-reveal-fade">Fade in</div>
<div class="ease-reveal-zoom">Zoom in</div>
<div class="ease-reveal-blur">Blur to focus</div>
<div class="ease-reveal-slide-left">Slide from left</div>
```

Composition is preserved — users can still write:
```html
<div class="ease-reveal ease-slide-up ease-delay-200">Hello</div>
```

## Files
- `README.md` — this file
- `demo.html` — interactive demo page
- `style.css` — CSS for reveal convenience classes
