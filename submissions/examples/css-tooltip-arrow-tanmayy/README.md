# CSS Tooltip Arrow

A pure-CSS, zero-JavaScript tooltip system. It features smooth fade-and-slide entrance animations, robust positioning for all four cardinal directions (top, bottom, left, right), and mathematically aligned directional arrows using the classic CSS border triangle hack.

## 📋 Mandatory Questions

### 1. What does this do?

This component attaches a hidden, floating tooltip to any inline or block element. The text content of the tooltip is dynamically pulled directly from the HTML `data-tooltip` attribute. When a user hovers over or focuses the parent element, the tooltip and its directional pointer arrow fade in and subtly slide into place.

### 2. How is it used?

The implementation relies entirely on CSS pseudo-elements (`::before` for the bubble, `::after` for the arrow). You simply add the `.tooltip` class alongside a directional class (`.tooltip-top`, `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right`), and provide the text in the `data-tooltip` attribute. 

```html
<!-- Example: Top Tooltip -->
<button 
  class="tooltip tooltip-top" 
  data-tooltip="This is the tooltip content!"
  aria-label="Action description"
>
  Hover Me
</button>
```

**Customization via CSS Properties:**
You can easily adjust the colors, sizing, and animation physics via root variables:

```css
:root {
  --tooltip-bg: #1e293b; 
  --tooltip-padding: 8px 12px;
  --tooltip-arrow-size: 6px; /* Size of the directional pointer */
  --tooltip-distance: 10px; /* Offset distance from the parent element */
  --transition-speed: 0.2s;
}
```

### 3. Why is it useful?

Tooltips are often implemented using bloated JavaScript libraries (like Popper.js) to calculate positioning coordinates dynamically. While necessary for extremely complex, collision-aware enterprise applications, 95% of standard web tooltips do not require JS. By utilizing CSS `position: absolute`, `attr()`, and `calc()`, this pure CSS implementation achieves the same premium, animated visual result with zero JavaScript execution time, perfect accessibility (`:focus-visible` support), and immediate browser rendering. Furthermore, it inherently supports `prefers-reduced-motion` by automatically neutralizing the slide animations for users with vestibular disorders.
