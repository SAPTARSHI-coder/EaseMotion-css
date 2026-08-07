# CSS Elastic-Slide Tabs (Cyberpunk Neon Layouts)

A pure CSS implementation of a tabbed interface featuring an elastic sliding indicator and cyberpunk-inspired neon styling.

## Features
- **Pure CSS / HTML**: Built using the radio button hack, completely avoiding JavaScript.
- **Elastic Slider**: Uses a custom `cubic-bezier` transition to create a bouncy, elastic slide effect for the active tab indicator.
- **Cyberpunk Theme**: Styled with neon glows, dark panels, and futuristic monospaced typography.
- **Smooth Panel Transitions**: Tab content smoothly slides up and fades in when activated.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion`.

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
- `--bg-dark`: Page background (default: `#09090b`)
- `--bg-panel`: Tabs container background (default: `#111115`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
