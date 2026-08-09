# Customizable Scroll Progress Bar (`ease-scroll-bar-has`)

### 1. What does this do?
This is a fixed-position horizontal progress bar that fills up dynamically across the top of the viewport to display the user's scroll depth.

### 2. How is it used?
Add the indicator HTML layout at the top level of your body tag:
```html
<div class="scroll-progress-container">
  <div class="scroll-progress-bar" id="progressBar"></div>
</div>
```

Calculate and set the percentage scroll depth dynamically via windows scroll event:
```javascript
const scrolled = (winScroll / height) * 100;
progressBar.style.width = scrolled + '%';
```

### 3. Why is it useful?
It provides contextual navigation guidance for long articles or dashboard sections, providing readable and sleek scroll feedback that is zero-dependency and performance-optimized.
