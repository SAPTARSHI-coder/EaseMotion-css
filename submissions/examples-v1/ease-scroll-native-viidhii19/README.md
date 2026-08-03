## Zero-JS Scroll-Driven Animations (ease-scroll-native-viidhii19)

### 1. What does this do?
This is a proof-of-concept that replaces JavaScript-based scroll animations (such as those relying on `IntersectionObserver`) with the native CSS `@scroll-timeline` and `view()` APIs.

### 2. How is it used?
Apply the `.ease-view-reveal-viidhii19` class to any HTML element you want to animate on scroll:
```html
<div class="ease-view-reveal-viidhii19">
  This content will smoothly fade and slide up as it enters the viewport!
</div>
```

### 3. Why is it useful?
It provides perfectly smooth, hardware-accelerated scroll animations without any main-thread blocking, which perfectly aligns with EaseMotion's "Zero Dependency" (Zero-JS) philosophy.

---

### Technical Overview
This implementation demonstrates why `animation-timeline: view()` is superior to `IntersectionObserver`:
- **Performance:** Animations powered by `animation-timeline` run directly on the browser's compositor thread. This means they remain buttery smooth and can achieve 120Hz, completely independent of the main thread.
- **Zero JavaScript:** No event listeners, no observers, and zero runtime scripting overhead.
- **Organic Scrolling:** The animation state is intrinsically linked to the scroll position. It seamlessly scrubs forward and backward in direct sync with the user's scrolling interactions.

### Understanding `animation-range` Mathematics

In `style.css`, we use the following declaration:
`animation-range: entry 10% cover 30%;`

Here is exactly what that means:
- **`entry 10%` (Start):** The animation begins when the element has entered `10%` of its own height past the bottom edge of the viewport.
- **`cover 30%` (End):** The animation reaches its 100% keyframe state when the element has traversed `30%` of the viewport's total height from the bottom up.
