# EaseMotion CSS - Contract Animation Example

This directory contains a standalone example demonstrating the Contract animations available in the EaseMotion CSS framework.

## Overview

The `Contract` animations are great for creating depth, shrinking elements out of view, or adding emphasis to UI components like cards, images, and buttons. This example showcases three variants:
1. `ease-contract-image-entrance`
2. `ease-contract-bg-exit` 
3. `ease-contract-shadow-emphasis`

## Setup Instructions

1. Clone the EaseMotion CSS repository.
2. Navigate to `submissions/examples/contract-jd/`.
3. Open `demo.html` in your favorite web browser.
4. (Optional) If running from a different location, ensure the path to `easemotion.css` in the `<head>` of `demo.html` is correctly pointing to the core CSS file.

## Usage

To apply these animations, simply add the relevant class to your HTML element:

```html
<!-- Image Entrance -->
<img src="..." class="ease-contract-image-entrance" />

<!-- Background Exit -->
<div class="ease-contract-bg-exit">...</div>

<!-- Shadow Emphasis -->
<div class="ease-contract-shadow-emphasis">...</div>
```

## Customization

The animations utilize CSS variables defined in EaseMotion. You can customize the speed and easing of the animation by overriding these variables in your own stylesheet:

```css
:root {
  --ease-speed-medium: 0.4s;
  --ease-ease: cubic-bezier(0.25, 1, 0.5, 1);
}
```

## File Structure

- `demo.html`: The main HTML file containing the structural layout.
- `style.css`: Custom styles to make the demo look presentable (responsive grid, colors, typography).
- `README.md`: This documentation file.
