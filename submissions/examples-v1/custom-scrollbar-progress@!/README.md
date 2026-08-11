# Custom Scrollbar & Reading Progress Bar

This is a self-contained example demonstrating how to create a custom styled scrollbar, reading progress indicator, and back-to-top button using pure CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **Custom Scrollbar:** Thin, gradient-styled scrollbar matching the design theme.
- 📊 **Reading Progress Bar:** Dynamic progress indicator at the top of the page.
- ⬆️ **Back to Top Button:** Smooth scroll-to-top button with fade-in animation.
- 🌈 **Gradient Animations:** Animated gradient effects for visual appeal.
- ⚡ **Optimized Performance:** Uses `requestAnimationFrame` for smooth animations.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and includes proper ARIA labels.
- 📱 **Responsive Design:** Adapts to all screen sizes.
- 🖨️ **Print-Friendly:** Hides interactive elements when printing.
- 🚫 **Minimal JavaScript:** Only for scroll calculations and smooth scrolling.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Add the reading progress bar HTML at the top of your `<body>`.
4. Add the back-to-top button before the closing `</body>` tag.
5. Include the JavaScript at the bottom of your page.

## HTML Structure

### Reading Progress Bar
```html
<div class="reading-progress" id="readingProgress">
  <div class="reading-progress__bar"></div>
</div>