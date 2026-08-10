# ease-count-up-scroll — Scroll-Triggered Counter Demo (Pure CSS)

A counter that animates from 0 to a target value only as it scrolls into view — built entirely with CSS Scroll-Driven Animations (`animation-timeline: view()`), with no JavaScript at all.

## Why this differs from the existing `scroll-triggered-counter` submission

That submission uses `IntersectionObserver` + `requestAnimationFrame` in vanilla JS. This one reuses the `@property --ease-count` and `ease-kf-count-up` keyframe already defined in `core/animations.css` for `.ease-count-up`, but swaps the animation's timeline from the default document timeline to `view()`, so the existing count-up infrastructure becomes scroll-triggered for free.

## How it works

```css
.ease-count-up-scroll {
  counter-reset: n var(--ease-count);
  animation: ease-kf-count-up var(--ease-speed-slow, 600ms) var(--ease-ease) both;
}
.ease-count-up-scroll::after {
  content: counter(n);
}

@supports (animation-timeline: view()) {
  .ease-count-up-scroll {
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }
}
```

## Usage

```html
<span class="ease-count-up-scroll" style="--ease-count-target: 1500;">0</span>
```

## Browser support

| Browser | Behavior |
|---------|----------|
| Chrome / Edge 115+ | Counts up as the element scrolls into view |
| Firefox, Safari | Falls back to the existing `.ease-count-up` on-load behavior — still animates, just on page load |

## Why it fits EaseMotion CSS

`core/animations.css` already ships the `@property --ease-count` integer and `ease-kf-count-up` keyframe used by `.ease-count-up`. This demo extends that exact infrastructure with a scroll-driven timeline instead of duplicating counter logic in JavaScript, staying consistent with the framework's CSS-first philosophy.

Closes #11295
