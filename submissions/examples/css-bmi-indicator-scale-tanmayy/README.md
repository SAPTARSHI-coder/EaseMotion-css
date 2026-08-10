# CSS BMI Indicator Scale

A pure-CSS animated health indicator scale designed for dashboard and fitness application layouts. It features a continuous color-coded bar representing health zones (Underweight, Normal, Overweight, Obese) and a dynamically positioned pointer driven entirely by CSS custom properties.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a visual representation of a user's Body Mass Index (BMI). Upon loading, the black pointer arrow smoothly slides from the left edge of the scale to the exact percentage point corresponding to the user's BMI value. 

### 2. How is it used?

The structure uses CSS Flexbox to divide the scale into four color zones. The crucial interactive element is the inline CSS variable `--pointer-position` attached to the container. By setting this variable in your HTML (or updating it dynamically via a framework like React/Vue), the CSS `calc()` and `@keyframes` engines automatically handle the positioning and entrance animation.

```html
<!-- Example: BMI Scale with pointer at 40% -->
<div class="bmi-scale" style="--pointer-position: 40%;" aria-label="BMI: Normal Weight" role="meter">
  
  <div class="bmi-zones">
    <div class="bmi-zone zone-underweight">Under</div>
    <div class="bmi-zone zone-normal">Normal</div>
    <div class="bmi-zone zone-overweight">Over</div>
    <div class="bmi-zone zone-obese">Obese</div>
  </div>
  
  <div class="bmi-pointer"></div>
  
</div>
```

**Customization via CSS Properties:**
Colors and sizes can be adjusted globally:

```css
:root {
  --color-underweight: #3b82f6; 
  --color-normal: #10b981;      
  --color-overweight: #f59e0b;  
  --color-obese: #ef4444;       
  --pointer-color: #0f172a;
}
```

### 3. Why is it useful?

Progress bars and indicator scales traditionally rely on JavaScript to calculate widths and animate pointer elements using `requestAnimationFrame` or `setTimeout`. By utilizing CSS variables (custom properties) as the data source, we bridge the gap between markup data and CSS styling. The browser's native CSS engine takes over, providing a highly performant, GPU-accelerated entrance animation for the pointer. Furthermore, the component strictly respects the `prefers-reduced-motion` media query, instantly snapping the pointer to its final value for accessibility compliance.
