# Scroll Morph (ease-morph-scroll)

### 1. What does this do?
This component morphs an element's outline from circular (`border-radius: 50%`) to a rounded rectangle/square (`border-radius: 16px`) dynamically, driven by the element's intersection ratio as it scrolls into position in the viewport.

### 2. How is it used?
Wrap your reveal content inside a morph target card:
```html
<div class="ease-morph-scroll-card observer-target" id="my-card">
  <div class="ease-morph-image-wrapper">
    <img src="reveal-image.jpg" alt="Reveal image">
  </div>
</div>
```

Set up an `IntersectionObserver` in JavaScript with fine thresholds (e.g. 100 steps) and map `intersectionRatio` directly to the custom property `--ease-morph-progress` on the target card element:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Map visibility percentage directly as custom variable progress (0 to 1)
    entry.target.style.setProperty('--ease-morph-progress', entry.intersectionRatio);
  });
}, {
  threshold: Array.from({ length: 101 }, (_, i) => i / 100)
});

// Observe target cards
document.querySelectorAll('.observer-target').forEach((el) => {
  observer.observe(el);
});
```

Customize card radius ranges using custom CSS variables (defaulting to 50% maximum and 16px minimum):
```css
.ease-morph-scroll-card {
  --ease-max-radius: 50%;
  --ease-min-radius: 20px;
}
```

### 3. Why is it useful?
It provides an organic, responsive reveal effect for images, galleries, and layout blocks that responds directly to user scroll progress. Since it utilizes CSS variable mapping within the `border-radius` calculation, the actual repaint triggers are extremely light, preserving browser performance. It also natively supports `prefers-reduced-motion: reduce` preference checks to skip scale/radius transitions, ensuring a static accessible fallback.
