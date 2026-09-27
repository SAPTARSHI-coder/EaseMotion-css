# Dark Mode Dual Range Slider - Theming & Documentation

A complete guide for integrating, styling, and customizing the Dark Mode Dual Range Slider component with custom CSS custom properties, modifier classes, and built-in accessibility.

---

## 1. HTML Markup Example

```html
<div class="range-slider range-slider--dark" role="group" aria-labelledby="slider-label">
  <span id="slider-label" class="range-slider__label">Price Range</span>
  
  <div class="range-slider__track-container">
    <div class="range-slider__track"></div>
    <div class="range-slider__range" style="left: 20%; right: 30%;"></div>
    
    <input 
      type="range" 
      class="range-slider__input range-slider__input--min" 
      min="0" 
      max="100" 
      value="20" 
      aria-label="Minimum Value"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="20"
    />
    
    <input 
      type="range" 
      class="range-slider__input range-slider__input--max" 
      min="0" 
      max="100" 
      value="70" 
      aria-label="Maximum Value"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="70"
    />
  </div>

  <div class="range-slider__values" aria-live="polite">
    <span class="range-slider__value-min">$20</span>
    <span class="range-slider__value-max">$70</span>
  </div>
</div>
