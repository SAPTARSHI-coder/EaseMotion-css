# Ease Scan Animation Bar

A reusable CSS scanning-bar utility for EaseMotion CSS. It simulates a document/image scan effect with a glowing bar that sweeps up and down across the content, useful for scan, verification, or processing states.

## Features

- Smooth up-and-down scanning animation
- Glowing gradient bar with soft shadow
- Lightweight and reusable
- Pure HTML & CSS
- Responsive design
- Suitable for document previews, ID/image verification, and processing screens

## Folder Structure

ease-scan-animation-bar-ij/
├── demo.html
├── style.css
└── README.md

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Wrap your content in a positioned container and add the scan bar as a sibling element:

```html
<div class="scan-frame">
    <!-- your content here -->
    <div class="ease-scan-animation-bar"></div>
</div>
```

Note: the parent container needs `position: relative; overflow: hidden;` for the bar to animate within its bounds.

## Customization

You can adjust:

- Animation duration and easing
- Bar color and glow intensity
- Bar thickness
- Scan range (via the container height)

## Author

Developed for the EaseMotion CSS project.