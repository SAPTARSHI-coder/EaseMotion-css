# CSS-only Animated Camera Shutter Component

An interactive, animated camera shutter component built entirely with CSS. No JavaScript required.

## Overview

This component features a sleek camera design with an internal shutter mechanism. When hovered, the camera slightly scales up, and its 6-blade aperture smoothly opens to reveal the camera sensor underneath. Clicking on the camera triggers a quick shutter snap (closing and reopening) accompanied by a simulated flash, offering a realistic photographic interaction.

## Features

- ✨ **100% CSS-only**: No JavaScript logic used for the animations or interactions.
- 📷 **Aperture Animation**: Smoothly animating shutter blades created using `transform` properties.
- ⚡ **Interactive Flash**: Uses the `:active` pseudo-class to trigger a flash animation and snap the shutter closed.
- 🎨 **Modern Aesthetics**: Built with depth, realistic gradients, and box-shadows.

## Files

- `demo.html`: The HTML structure of the camera body and shutter mechanism.
- `style.css`: The CSS styling and complex keyframe/transform animations.

## Usage

Simply copy the HTML structure and link the CSS file to use this component in your projects. The `.ease-camera-container` acts as the interactive wrapper. The aperture effect scales perfectly based on the container size.

## Customization

You can easily customize the aesthetics by changing the variables and properties in `style.css`:

- **Shutter Blades**: Modify `.ease-shutter-blade`'s `background-color` or `transform: translateX(...)` values to control how far they open.
- **Camera Body**: Adjust the `linear-gradient` inside `.ease-camera-body`.
- **Flash**: Adjust the `box-shadow` of `.ease-camera-flash::after` to intensify or tone down the flash effect.
