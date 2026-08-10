# CSS Liquid Metal Typography

## Overview

A metallic typography effect created entirely with CSS.

The design uses multiple sweeping `linear-gradient()` layers,
transparent text clipping, contrast and brightness filters, and
animated background movement to create a reflective liquid-metal
appearance.

## Features

- Pure CSS implementation
- Reflective metallic typography
- Multiple gradient overlays
- Animated light sweeps
- CSS contrast and brightness filters
- Responsive typography
- Floating metallic decorative elements
- No JavaScript
- No external assets
- Reduced-motion support

## Files

- `demo.html` — Self-contained demonstration
- `style.css` — Typography effect and animations
- `README.md` — Documentation

## How It Works

The metallic appearance is produced by applying a wide gradient to
the text and clipping the gradient to the text shape:

```css
background: linear-gradient(
    110deg,
    #222222,
    #ffffff,
    #777777,
    #eeeeee,
    #333333,
    #ffffff
);

-webkit-background-clip: text;
background-clip: text;