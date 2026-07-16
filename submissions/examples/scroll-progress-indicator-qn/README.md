# Animated Scroll Progress Indicator

## Description
A modern, smooth scroll progress indicator that displays a gradient progress bar at the top of the viewport, filling as the user scrolls down the page. This provides excellent visual feedback for long-form content, articles, and documentation. Built entirely with pure CSS using the modern `animation-timeline: scroll()` feature, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains a sample article layout with multiple sections to demonstrate the scroll progress effect.
- `style.css`: Contains the fixed progress bar styling, scroll-driven animation, and responsive design.

## How to use
1. Open `demo.html` in your browser and scroll down to see the progress bar fill smoothly.
2. Copy the HTML and CSS into your project.
3. Add the `.scroll-progress-qn` div as the first child of your `<body>` element.
4. **Customization:**
   - **Colors:** Change the gradient colors in the `background` property of `.scroll-progress-qn`.
   - **Height:** Adjust the `height: 4px` to make the bar thicker or thinner.
   - **Glow Effect:** Modify or remove the `box-shadow` to change the glow intensity.
   - **Position:** Change `top: 0` to `bottom: 0` to move the progress bar to the bottom of the viewport.

## Browser Support
This component uses the modern CSS `animation-timeline: scroll()` feature, which is supported in:
- Chrome 115+
- Edge 115+
- Opera 101+

For browsers that don't support this feature, a fallback is included that hides the progress bar entirely. For full cross-browser support, you would need to add a small JavaScript snippet:

```javascript
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress-qn').style.transform = `scaleX(${scrolled / 100})`;
});