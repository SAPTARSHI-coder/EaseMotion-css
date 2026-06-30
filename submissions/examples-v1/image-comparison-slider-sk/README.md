# Image Comparison Slider

A reusable, accessible before/after image comparison slider that integrates perfectly with EaseMotion CSS utilities. This pattern is ideal for photography portfolios, image editing apps, and before/after product showcases.

## Features

- 🖱️ **Draggable Handle:** Smooth horizontal dragging interaction to reveal the differences between two images.
- ⌨️ **Keyboard Accessibility:** Fully navigable using `Arrow` keys, `Home`, and `End` when focused.
- 📱 **Touch Support:** Native-feeling touch gesture support for mobile devices.
- 🎨 **Customizable:** Handle size, colors, and line width are all easily configurable via CSS variables.
- ♿ **Prefers-Reduced-Motion:** Built-in support to disable transition animations if the user prefers reduced motion.
- ⚡ **EaseMotion Integration:** Uses standard EaseMotion animation utility classes like `.fade-in-up` out of the box.

## Usage

1. Copy the HTML structure from `demo.html` into your project. Make sure you have included the EaseMotion CDN link.
2. Include the rules from `style.css` to provide the layout and aesthetics for the slider components.
3. Include `script.js` to enable the interactive dragging, touch gesture swiping, and keyboard accessibility.
4. Replace the `<img>` `src` paths inside `.comparison-before` and `.comparison-after` with your actual before and after images.

## Configuration

You can easily tweak the slider's appearance by adjusting these variables at the top of the CSS file:

```css
:root {
  --slider-handle-size: 44px;
  --slider-handle-bg: #ffffff;
  --slider-handle-color: #333333;
  --slider-line-width: 4px;
  --slider-line-color: #ffffff;
  --transition-speed: 0.3s;
}
```

## Accessibility Considerations

- The slider container implements `role="slider"`.
- It keeps `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes updated automatically.
- Smooth CSS transitions are disabled via a `@media (prefers-reduced-motion: reduce)` block to ensure compliance with user OS-level accessibility preferences.

## Contributed by 
- Man1ac-1773
