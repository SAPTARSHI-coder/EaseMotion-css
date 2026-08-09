# CSS-only Accordion Menu

A modern, highly accessible accordion menu built entirely with native HTML5 `<details>` and `<summary>` elements, styled and animated purely with CSS.

## Features
- **Pure HTML / CSS**: Built entirely without JavaScript. Utilizes native HTML `<details>` and `<summary>` tags which inherently provide state management.
- **Exclusive Accordion Grouping**: Implements the modern HTML `name` attribute on the `<details>` tags. Browsers supporting this feature will automatically close other accordion items when a new one is opened, mimicking classic JS accordion behavior natively.
- **Smooth Opening Animation**: Overcomes the instant-render limitation of the `<details>` tag by hooking a CSS `@keyframes` slide-and-fade animation that fires exactly when the `open` attribute is applied by the browser.
- **Custom Caret Icon**: Hides the default browser marker (`::-webkit-details-marker`) and replaces it with a clean SVG icon that rotates smoothly using `transition` when the accordion opens.
- **Accessible by Default**: By using semantic elements, the accordion inherits full keyboard navigation (`Tab`, `Enter`, `Space`) and perfectly accurate ARIA state broadcasting for screen readers out of the box. Fully respects `prefers-reduced-motion`.

## Usage

Simply drop the HTML structure into your layout. 

```html
<div class="accordion-container">
  <details class="accordion-item" name="my-accordion">
    <summary class="accordion-header">
      Heading 1
      <span class="accordion-icon">▼</span>
    </summary>
    <div class="accordion-content">
      Content goes here.
    </div>
  </details>
  <!-- Add more details elements with the same 'name' attribute -->
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--bg-color`: Page background color (default: `#f3f4f6`)
- `--acc-bg`: Accordion card background (default: `#ffffff`)
- `--acc-border`: Border and separator lines (default: `#e5e7eb`)
- `--acc-hover`: Hover state background for summary (default: `#f9fafb`)
- `--acc-active`: Active (open) state background for summary (default: `#eff6ff`)
- `--primary-color`: Highlight color for text and icons on active items (default: `#3b82f6`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge). 
*Note: The exclusive grouping feature (`name` attribute) requires Chrome 120+, Safari 17.2+, or Firefox 130+. Older browsers gracefully fallback to allowing multiple open items simultaneously.*
