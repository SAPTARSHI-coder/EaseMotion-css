# CSS-Only Hover Tooltip Card

A lightweight tooltip card component that appears on hover using only CSS. It utilizes hover states, `absolute` positioning, and pseudo-elements to create a useful UI pattern without relying on any JavaScript.

## Files
- `demo.html` - Contains the demo structure.
- `style.css` - Contains the core utility classes.

## Usage
Add the nested structure to any text element:
```html
<span class="em-tooltip">
  Hover me
  <span class="em-tooltip-text">Simple tooltip info</span>
</span>