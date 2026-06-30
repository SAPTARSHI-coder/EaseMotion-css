# Animated Underline Link Effect

## Description

A collection of elegant, pure CSS animated underline effects for links. This includes four variations: left-to-right, center-outward, right-to-left, and a gradient underline. All effects use the `::after` pseudo-element with `transform: scaleX()` for smooth, hardware-accelerated animations. Requires zero JavaScript.

## Files

- `demo.html`: Contains multiple link examples showcasing different underline animation directions.
- `style.css`: Contains the base link styling and four different underline animation variations.

## How to use

1. Open `demo.html` in your browser and hover over the links to see the different effects.
2. Copy the HTML and CSS into your project.
3. Apply the `.link-qn` base class to your `<a>` elements.
4. Add one of the modifier classes to choose the animation style:
   - `.left-right-qn` - Underline expands from left to right
   - `.center-out-qn` - Underline expands from center outward
   - `.right-left-qn` - Underline expands from right to left
   - `.gradient-qn` - Colorful gradient underline from left to right

## Customization

- **Underline Color:** Change the `background-color` in `.link-qn::after`
- **Underline Thickness:** Adjust the `height` in `.link-qn::after`
- **Animation Speed:** Modify the `0.3s` transition duration
- **Underline Position:** Change the `bottom` value in `.link-qn::after` to move the underline up or down
- **Text Color:** Update the `color` property in `.link-qn` and add a `:hover` state if desired
