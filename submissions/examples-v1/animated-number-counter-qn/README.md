# Animated Number Counter

## Description

A modern, visually striking statistics counter component with smooth fade-in and scale animations. Each stat card features a gradient background, a large animated number, and a descriptive label. The cards appear in a staggered sequence on page load with a bouncy scale effect. Built entirely with pure CSS using `@keyframes`, requiring absolutely zero JavaScript.

**Note:** True number counting (incrementing from 0 to target) requires JavaScript. This CSS-only version simulates the effect with a smooth scale and fade animation. For actual counting functionality, you would need to add a small JavaScript snippet.

## Files

- `demo.html`: Contains the HTML structure for the stats grid with four stat cards.
- `style.css`: Contains the gradient styling, staggered fade-in animations, and scale effects.

## How to use

1. Open `demo.html` in your browser to see the smooth cascading card animations.
2. Copy the HTML and CSS into your project.
3. Wrap your stat cards inside a `.stats-grid-qn` container.
4. **Customization:**
   - **Gradient Colors:** Change the `background` in `.stat-card-qn` to use different gradient colors.
   - **Animation Speed:** Adjust the `2s` duration in `count-up-qn` and the `0.6s` in `fade-in-up-qn`.
   - **Stagger Timing:** Modify the `animation-delay` values on `.stat-card-qn:nth-child()` to change the cascading effect.
   - **Card Size:** Adjust the `padding` and `font-size` values to make the cards larger or smaller.
   - **Grid Layout:** Change the `grid-template-columns` in `.stats-grid-qn` to show more or fewer columns.

## Adding JavaScript for True Counting

To make the numbers actually count up from 0 to the target value, add this JavaScript:

```javascript
const counters = document.querySelectorAll(".stat-number-qn");
const speed = 200; // Lower = faster

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
```
