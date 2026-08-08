# CSS Hyper Speed Warp Drive

## Overview

A CSS-only high-speed starfield effect designed to simulate traveling
through space at extreme speed.

The effect uses a large collection of CSS `box-shadow` declarations to
generate individual stars. CSS transforms and keyframe animations then
scale the starfield outward from a central perspective point.

## Features

- Pure CSS implementation
- Algorithmic starfield using `box-shadow`
- Central 3D perspective point
- Continuous warp-speed animation
- Multiple star layers for depth
- Responsive design
- No JavaScript
- No external assets
- `prefers-reduced-motion` support

## Files

- `demo.html` — Self-contained demonstration
- `style.css` — Starfield, perspective effect, and animations
- `README.md` — Documentation

## How It Works

The starfield begins as a small collection of pixels positioned around
the center of the screen.

Each star is created using a `box-shadow`:

```css
.warp-field {
    width: 3px;
    height: 3px;
    background: #ffffff;

    box-shadow:
        12px -18px #fff,
        -34px 22px #fff,
        58px 11px #dbeafe;
}