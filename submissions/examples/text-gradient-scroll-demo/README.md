# ease-text-gradient-scroll — Scroll-Driven Text Gradient Demo

A text gradient effect where the gradient position is tied to scroll progress instead of time, using the CSS Scroll-Driven Animations spec (`animation-timeline: view()`). `core/utilities.css` already has `.ease-gradient-text` (static) and `.ease-gradient-text-animated` (time-based, infinite loop), but neither ties gradient motion to scroll position.

## How it works

```css
.ease-text-gradient-scroll {
  background: linear-gradient(135deg, var(--ease-color-primary), var(--ease-color-secondary));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

@supports (animation-timeline: view()) {
  .ease-text-gradient-scroll {
    animation: ease-kf-gradient-scroll linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 50%;
  }
}
```

## Usage

```html
<h1 class="ease-text-gradient-scroll">Scroll-tied gradient heading</h1>
```

No JavaScript, no `IntersectionObserver`, no scroll event listeners — the browser drives the animation directly off scroll position.

## Browser support

| Browser | Behavior |
|---------|----------|
| Chrome / Edge 115+ | Full scroll-driven gradient animation |
| Firefox, Safari | Falls back to the static `.ease-gradient-text` look via `@supports` — no broken or jumpy output |

## Why it fits EaseMotion CSS

EaseMotion CSS already has static and time-based gradient text utilities, but no scroll-position-driven variant. This demo extends the existing `-webkit-background-clip: text` pattern used in `.ease-gradient-text`/`.ease-shimmer-text` with modern scroll-driven animations, with a safe fallback for unsupported browsers.

Closes #11299
