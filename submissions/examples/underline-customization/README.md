# Underline Customization

## What does it do?
A pure-CSS demo showing `text-underline-offset` and `text-decoration-thickness` for fine-grained underline control — no JavaScript required.

## Features
- **text-underline-offset** — moves underline from 0px to 12px away from baseline
- **text-decoration-thickness** — controls underline weight from 1px to 5px
- **Combined** — offset + thickness + color for complete control

## Properties
| Property | Values | Description |
|----------|--------|-------------|
| `text-underline-offset` | `auto`, `<length>` | Distance from underline to baseline |
| `text-decoration-thickness` | `auto`, `<length>` | Thickness of the underline |

## Usage
```css
.custom-underline {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  text-decoration-color: rebeccapurple;
}
```

## Browser Support
- `text-underline-offset` — Chrome 87+, Firefox 70+, Safari 12.1+
- `text-decoration-thickness` — Chrome 87+, Firefox 70+, Safari 12.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
