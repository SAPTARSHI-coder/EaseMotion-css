# Faux 3D Card

A faux 3D card component with perspective tilt animation driven by mouse position — CSS + JS.

## Features
- Perspective tilt that follows the cursor
- Dynamic shadow that shifts opposite the tilt
- Specular glare highlight on hover
- Fully customizable via CSS custom properties

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--card-width` | 280px | Width of the card |
| `--card-height` | 360px | Height of the card |
| `--tilt-degree` | 12deg | Maximum tilt angle |
| `--shadow-color` | rgba(99, 102, 241, 0.3) | Color of the dynamic shadow |

## Usage
```html
<div class="tilt-card" style="--card-width: 280px; --card-height: 360px; --tilt-degree: 12deg; --shadow-color: rgba(99,102,241,0.3);">
  <div class="tilt-card-inner">
    <!-- card content -->
  </div>
</div>
```

## Browser Support
- Chrome 49+, Firefox 52+, Safari 10+

## Tech Stack
- HTML + CSS + JavaScript
