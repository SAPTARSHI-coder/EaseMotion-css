# ease-file-download-progress

A download button with a progress bar that fills using an animated stripe pattern.

## Features

- Progress bar fills with a moving diagonal stripe animation
- JavaScript simulates download progress
- Button resets after download completes
- Customizable via CSS custom properties

## Usage

Click the "Download" button to start the simulation. The bar fills with an animated stripe pattern. Click "Reset" after completion to restart.

Customize via `:root` variables:

```css
--fd-stripe-color: rgba(255, 255, 255, 0.3);
--fd-bar-color: #4caf50;
--fd-duration: 1.5s;
```