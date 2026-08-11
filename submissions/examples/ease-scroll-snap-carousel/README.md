# Native CSS Scroll-Snapping Carousel

Horizontal image carousels for mobile historically required dragging in massive 30KB+ JavaScript swiping libraries like Swiper.js to handle the physics, momentum, bounds-checking, and snapping. This causes severe Main Thread blocking, increased Time to Interactive (TTI), and jittery scrolling on lower-end Android devices.

This submission demonstrates how to build a completely JavaScript-free carousel utilizing the native CSS `scroll-snap` APIs. It provides a flawless, momentum-based swiping experience that runs at native OS frame rates.

---

## 🏛️ The Architecture

### 1. The Scroll Track
We start by creating a `.carousel-track` container. We apply `overflow-x: auto` to enable horizontal scrolling, and hide the ugly native scrollbar using `scrollbar-width: none`.

```css
.carousel-track {
    display: flex;
    overflow-x: auto;
    
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}
.carousel-track::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
}
```

### 2. The Native CSS Snapping
To enable the "magnetic" snapping feel, we use the `scroll-snap` API. 
On the parent track, we define the axis (`x`) and the strictness (`mandatory`):
```css
.carousel-track {
    scroll-snap-type: x mandatory;
}
```

On the individual child slides, we tell the browser *where* to snap to. We use `center` so the image always perfectly aligns in the middle of the screen. We also apply `scroll-snap-stop: always` to prevent a fast swipe from accidentally skipping over multiple slides!
```css
.carousel-slide {
    scroll-snap-align: center;
    scroll-snap-stop: always;
}
```

### 3. Native Smooth Anchor Scrolling
We added a simple CSS-only navigation menu with standard `<a>` tags pointing to the IDs of the slides (`#slide-1`, etc.).
Normally, clicking these instantly jerks the page. By adding a single line of CSS to the `body`, the browser natively calculates a smooth, eased scroll to the anchor!
```css
body {
    scroll-behavior: smooth;
}
```

---

## 💻 Usage

Copy the HTML structure and the `scroll-snap` CSS properties. You do not need to import any external JS files or initialize any libraries.

```html
<div class="carousel-track">
    <div class="carousel-slide">Slide 1</div>
    <div class="carousel-slide">Slide 2</div>
    <div class="carousel-slide">Slide 3</div>
</div>
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. Completely bypasses Swiper.js, Slick Carousel, or Glide.js.
- **Main Thread Blocking:** `0ms`.
- **Physics Engine:** Because it relies entirely on the native OS scrolling engine, the momentum, friction, and bounce physics feel identical to native iOS/Android apps!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that safely strips the `scroll-behavior: smooth` to prevent motion sickness during anchor jumping.
