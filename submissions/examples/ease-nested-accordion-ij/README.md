# Nested Accordion

A CSS component for expandable accordion panels with nested child sections and smooth height transitions.

## Features

- Parent panels expand to reveal nested child sections
- Unlimited nesting depth
- Smooth `grid-template-rows` transition for height animation
- Arrow icons rotate on expand
- Accessible with `aria-expanded` attributes
- Multiple independent panel groups

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<div class="na-panel">
  <button class="na-header" aria-expanded="false">
    <span>Parent Title</span>
    <span class="na-icon" aria-hidden="true">▸</span>
  </button>
  <div class="na-content">
    <div class="na-inner">
      <!-- nested panels or list items -->
    </div>
  </div>
</div>
```

Toggle a panel by toggling the `aria-expanded` attribute on the header and the `.open` class on the content element.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--na-duration` | `0.35s` | Transition duration for expand/collapse |
| `--na-header-bg` | `#1a1a2e` | Header background color |
| `--na-header-hover` | `#25254a` | Header hover background color |
| `--na-content-bg` | `#12121e` | Content area background color |
| `--na-border-color` | `#2a2a4a` | Border color for panels |
| `--na-radius` | `8px` | Border radius for panels |

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge).

## Demo

Open `demo.html` in a browser to try the interactive demo.
