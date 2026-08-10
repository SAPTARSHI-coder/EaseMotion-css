# Zoom-In Scrollbar Flicker Fix

## 1. What does this do?

This submission serves as a developer guide documenting the Chrome-specific vertical scrollbar flicker bug that occurs on page load when applying `.ease-zoom-in` animations to full-width/hero section background elements, and details the standard workaround to prevent it.

## 2. Why does the flicker happen?

When an element is animated with a scale-down effect (e.g. starting at `scale(1.3)` and returning to `scale(1)`), the element's rendered boundaries at the start frame are 130% of its normal layout size. If the parent container does not explicitly restrict its boundary box, this scale overflow is treated as off-screen scrollable space, causing Chrome to momentarily display a vertical/horizontal scrollbar, resulting in a brief, low-quality flicker.

---

## 3. How to Fix It (Required Usage Pattern)

The recommended solution is to apply `overflow: hidden` directly to the section wrapper enclosing the zoomed background element:

```html
<!-- ✅ Fixed Layout Wrapper -->
<section class="hero-section" style="overflow: hidden; position: relative;">
  <!-- Background element animating with zoom-in -->
  <div
    class="hero-bg ease-zoom-in"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  >
    <!-- Background image/color -->
  </div>

  <!-- Content overlay (safe from clipping) -->
  <div class="hero-content" style="position: relative; z-index: 10;">
    <h1>Welcome to EaseMotion CSS</h1>
  </div>
</section>
```

---

## 4. Why is it useful?

Full-width backgrounds and hero banners are key visual anchors of modern landing pages. Ensuring that zoom entrances play cleanly without layout shifting or browser scrollbar flicker maintains visual stability and a premium feel.
