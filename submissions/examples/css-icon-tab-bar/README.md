# CSS Icon Tab Bar

A pure CSS icon tab bar featuring animated icons and labels that react when selected.

## Features

- Pure CSS implementation
- Animated icon movement on selection
- Responsive layout
- Keyboard accessible radio-tab structure
- CSS custom properties for easy theming
- Light and dark mode support

## Usage

```html
<input type="radio" name="tab" id="home" checked>
<label for="home" class="tab">
  <span class="icon">🏠</span>
  <span class="text">Home</span>
</label>
```

## File Structure

```text
css-icon-tab-bar/
├── demo.html
├── style.css
└── README.md
```

## Customization

```css
:root {
  --accent: #2563eb;
  --tab-bg: #ffffff;
}
```

## Why It Fits EaseMotion CSS

This component provides an engaging navigation pattern with smooth icon animations and selection states, making it a useful addition to EaseMotion CSS's collection of interactive UI components.