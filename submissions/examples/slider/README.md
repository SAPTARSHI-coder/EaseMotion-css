# Dark Mode Dual Range Slider Documentation

An accessible, dual-thumb range slider implementation tailored for dark theme contrast compliance, keyboard navigation, and custom CSS token integration.

## Table of Contents
- [HTML Markup Example](#html-markup-example)
- [CSS Properties & Customization](#css-properties--customization)
- [Modifier Classes](#modifier-classes)
- [Accessibility Guidance (a11y)](#accessibility-guidance-a11y)
- [Keyboard Controls](#keyboard-controls)

---

## HTML Markup Example

```html
<div class="dual-range-slider">
  <div class="slider-track-bg"></div>
  <div class="slider-track-highlight" id="slider-track"></div>

  <!-- Minimum Thumb -->
  <input 
    type="range" 
    id="slider-min" 
    class="slider-thumb slider-thumb--min" 
    min="0" 
    max="1000" 
    value="200" 
    step="10"
    aria-label="Minimum Range Value"
    aria-valuemin="0"
    aria-valuemax="1000"
    aria-valuenow="200"
  />

  <!-- Maximum Thumb -->
  <input 
    type="range" 
    id="slider-max" 
    class="slider-thumb slider-thumb--max" 
    min="0" 
    max="1000" 
    value="800" 
    step="10"
    aria-label="Maximum Range Value"
    aria-valuemin="0"
    aria-valuemax="1000"
    aria-valuenow="800"
  />
</div>
