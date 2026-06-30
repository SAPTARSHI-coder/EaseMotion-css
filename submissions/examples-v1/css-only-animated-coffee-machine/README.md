# CSS-only Animated Coffee Machine Component

A charming and fully interactive espresso machine component built entirely with CSS. No JavaScript required.

## Overview

This component features a beautifully layered coffee machine. On hover, the machine initiates a brewing sequence: the status indicator turns green, liquid physically pours from the spout, the coffee level dynamically rises inside the cup complete with a crema layer, and realistic steam billows out from the hot coffee.

## Features

- ✨ **100% CSS-only**: Complex multi-stage animation sequence using only CSS `transition` and `@keyframes`.
- ☕ **Dynamic Pouring & Filling**: The liquid stream drops down quickly and the cup fills slowly, perfectly synchronized with `transition-delay`.
- 💨 **Rising Steam**: Multi-layered blurring elements that gracefully float upwards and fade out.
- 🎨 **Rich Detailing**: Realistic depth using intricate gradients, inset shadows, and custom cup handle masking.

## Files

- `demo.html`: The HTML structure forming the machine body, spout, tray, cup, and liquid/steam elements.
- `style.css`: The styling rules, shadows, and interactive hover animations that bring the brewing process to life.

## Usage

Simply copy the HTML structure and link the CSS file to use this component. Hover anywhere over `.ease-coffee-container` to trigger the brewing animation.

## Customization

- **Machine Colors**: Adjust the `linear-gradient` in `.ease-machine-body` to change the chassis color (e.g., to a bright red or matte black).
- **Brew Speed**: Modify the `transition` timing on `.ease-coffee-fill` to make the cup fill faster or slower. Ensure you update the `animation-delay` on the `.ease-steam` elements to match.
- **Coffee Color**: Change the `background-color` of `.ease-liquid` and `.ease-coffee-fill` to match your beverage of choice (e.g., green for matcha).
