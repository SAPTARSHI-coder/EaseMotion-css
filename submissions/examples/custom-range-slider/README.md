# Custom Cross-Browser Animated Range Slider

A fully custom-styled, premium animated `<input type="range">` component designed for modern web applications. It provides a consistent, high-quality visual experience across Chrome, Safari, Edge, and Firefox.

## Features

- **Premium Aesthetics:** Dark mode glassmorphism container, vibrant gradient track, and a clean glowing thumb.
- **Dynamic Track Fill:** The track visually fills up to the thumb's current position.
- **Micro-animations:** The thumb scales and its glow intensifies smoothly on hover and focus.
- **Cross-Browser Consistency:** Carefully targeted pseudo-elements ensure the slider looks identical across all major browsers.

## Cross-Browser Quirks & Solutions

Native range sliders are notoriously difficult to style consistently because different browser engines implement them using entirely different internal Shadow DOM structures. Here is how we solved the major quirks:

### 1. Removing Native Appearance
We start by stripping the default OS styling from the input element:
```css
.custom-range {
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
}
```

### 2. Track Styling
- **Webkit/Blink (Chrome, Safari, Edge):** Uses `::-webkit-slider-runnable-track`. Webkit does not have a native way to color just the "filled" portion of the track. To solve this, we use a CSS `linear-gradient` background combined with a CSS Custom Property (`--val`). A tiny inline JavaScript snippet (`oninput="this.style.setProperty('--val', this.value)"`) updates this variable, allowing the gradient to dynamically stop exactly at the thumb's location.
- **Gecko (Firefox):** Uses `::-moz-range-track` for the track background. Firefox provides a dedicated pseudo-element `::-moz-range-progress` specifically for the filled portion of the track, making dynamic filling much easier and purely CSS-driven without needing the CSS variable trick (though they are styled to match visually).

### 3. Thumb Styling
- **Webkit/Blink:** Uses `::-webkit-slider-thumb`. It requires `-webkit-appearance: none` again. Crucially, in Webkit, the thumb needs a negative `margin-top` to perfectly center it vertically over the track if the track and thumb have different heights.
- **Gecko:** Uses `::-moz-range-thumb`. Firefox generally centers the thumb automatically, so the negative `margin-top` is not required. Furthermore, Firefox sometimes includes borders in dimensions differently, so setting explicit widths/heights ensuring `box-sizing: border-box` helps maintain consistency.

## Usage

Simply copy the HTML structure from `demo.html` and the styles from `style.css` into your project.

```html
<!-- Example Usage -->
<input 
    type="range" 
    class="custom-range" 
    min="0" 
    max="100" 
    value="50"
    oninput="this.style.setProperty('--val', this.value)"
    style="--val: 50"
>
```
