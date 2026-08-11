# CSS Scroll-Driven Animations

This submission implements a pure CSS-only Scroll-Driven Animation showcase to demonstrate modern scroll-linked interactive visual behaviors.

---

## Technical Overview

Native CSS scroll-driven animations bind standard keyframe animations directly to scroll containers (using `scroll()`) or element-in-viewport boundaries (using `view()`), completely removing the requirement for heavy JS scroll listener code.

### 1. Reading Progress Bar
A full-width top progress bar is bound to the document's scrolling root:
```css
.ease-scroll-progress {
  transform-origin: left;
  transform: scaleX(0);
  animation: growProgress linear;
  animation-timeline: scroll(root);
}
```

### 2. View-Linked Entrances
Content cards automatically transition, scaling up and sliding forward into view as they cross the viewport:
```css
.entrance-trigger {
  animation: slideUpView linear;
  animation-timeline: view();
  animation-range: entry 10% cover 40%;
}
```

### 3. Parallax Background Scaling
The hero image shifts and scales down gracefully as its parent moves through view, producing parallax depth.

---

## Verification Steps

1. Open `demo.html` in a browser supporting Scroll-Driven animations (e.g. Chrome, Edge, Opera, or Safari 17+).
2. Scroll down slowly — observe the progress bar fill purple and cyan across the top.
3. Observe Section 3's elements scaling up and fading in as they move into view.
4. Enable `prefers-reduced-motion` in your system preferences — verify all animations stop and elements load in static states.
