# ease-card-loading-skeleton

A card skeleton with pulsing placeholder blocks for image, title, and text.

## Features

- Pulsing opacity animation on skeleton placeholders
- JavaScript toggle between loading and loaded states
- Loaded state removes animation and shows solid backgrounds
- Customizable via CSS custom properties

## Usage

Click the "Toggle Loaded" button to switch between skeleton loading state and loaded content state.

Customize via `:root` variables:

```css
--cls-base-color: #e0e0e0;
--cls-shine-color: #f5f5f5;
--cls-duration: 1.2s;
```