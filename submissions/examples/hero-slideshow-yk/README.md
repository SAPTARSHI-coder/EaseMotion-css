# Hero Slideshow

## 1. What does this do?

A fully interactive, cross-fading hero image carousel built entirely without JavaScript that features a CSS radio-button state machine, synchronized text animations, a responsive full-width variant, and dynamic image backgrounds injected via inline CSS variables.

## 2. How is it used?

Wrap hidden radio inputs, your slides (`.slide-yk`), and navigation labels (`.nav-dot-yk`) inside `.hero-slideshow-yk` (or `.hero-slideshow-fw-yk` for an edge-to-edge layout), and apply your background images directly in HTML using the `--bg-image` CSS variable on each slide.

```html
<div class="hero-slideshow-fw-yk">

  <!-- State machine: one radio per slide -->
  <input type="radio" name="hero-slider" id="slide-1" checked>
  <input type="radio" name="hero-slider" id="slide-2">

  <div class="slides-wrapper-yk">

    <!-- Apply your image directly in the HTML via CSS variable -->
    <div class="slide-yk slide-content-1" style="--bg-image: url('image-1.jpg')">
      <div class="slide-text-yk">
        <h2>Fluid Motion</h2>
        <p>Seamless transitions built entirely without JavaScript.</p>
      </div>
    </div>

    <div class="slide-yk slide-content-2" style="--bg-image: url('image-2.jpg')">
      <div class="slide-text-yk">
        <h2>The Radio Hack</h2>
        <p>CSS sibling selectors drive the entire interaction.</p>
      </div>
    </div>

  </div>

  <!-- Dots: labels wired to the radio inputs -->
  <div class="slider-nav-yk">
    <label for="slide-1" class="nav-dot-yk"></label>
    <label for="slide-2" class="nav-dot-yk"></label>
  </div>

</div>
```

## 3. Why is it useful?

EaseMotion CSS is animation-first and pure CSS. This component proves that complex, stateful interactive UI—traditionally requiring JavaScript frameworks—can be achieved elegantly through CSS architecture alone. It fits the philosophy perfectly by providing:
- **A real-world pattern for CSS state machines** using `:checked` sibling selectors (a technique applicable to tabs, accordions, and modals).
- **Easy to use classes** this slideshow is very efficient and lightweight and classes can be used easily by beginners.
- **Dynamic content management** by allowing users to inject custom background images directly in HTML without touching or fighting the stylesheet.
- **Built-in accessibility** that automatically honors user `prefers-reduced-motion` preferences.
