# Laptop Mockup Slider

Device mockup with a browser frame and screen content that slides horizontally. The laptop has a subtle 3D perspective effect. Navigate slides with prev/next buttons or dot indicators.

## Features

- Laptop device mockup with perspective transform
- Browser chrome frame with traffic light dots and URL bar
- Screen content slides with translateX transition
- Navigation via prev/next buttons and dot indicators
- Configurable via `--lms-duration`, `--lms-frame-bg`, `--lms-screen-bg`, `--lms-nav-color`, `--lms-radius`

## Usage

Set `--lms-slide` (0–2) on `.lms-device` to navigate slides. The track translates using CSS custom property. Active dot receives `.active` class for styling.
