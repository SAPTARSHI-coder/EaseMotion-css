# CSS Blur-Entrance Tabs (Cyberpunk Neon Layouts)

A pure CSS implementation of a tabbed interface featuring a smooth "focus-in" blur entrance animation for tab panels and cyberpunk-inspired neon styling.

## Features
- **Pure CSS / HTML**: Built using the radio button hack, completely avoiding JavaScript.
- **Blur-Entrance Animation**: Panels transition smoothly into view by animating `filter: blur()` and opacity, simulating a camera focusing on the content.
- **Cyberpunk Theme**: Styled with neon glows, dark panels, and futuristic monospaced typography.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling the blur animations.

## Usage

Use hidden radio buttons paired with labels to control the active state. 

```html
<div class="cyber-tabs">
  <input type="radio" id="tab1" name="my-tabs" checked>
  <input type="radio" id="tab2" name="my-tabs">

  <div class="tabs-header">
    <label for="tab1" class="tab-label">Tab 1</label>
    <label for="tab2" class="tab-label">Tab 2</label>
    <div class="tab-slider"></div>
  </div>

  <div class="tabs-content-container">
    <div class="tab-panel" id="panel1">Content 1</div>
    <div class="tab-panel" id="panel2">Content 2</div>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--neon-pink`: Highlight color for the active tab text and slider (default: `#ff007f`)
- `--neon-blue`: Primary border and header color (default: `#00f3ff`)
- `--neon-purple`: Secondary border color (default: `#b026ff`)
- `--bg-dark`: Page background (default: `#070709`)
- `--bg-panel`: Tabs container background (default: `#14141a`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
