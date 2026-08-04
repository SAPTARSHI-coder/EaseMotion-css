# Scrollbar Customization

## What does it do?
A pure-CSS demo showing the `scrollbar-width` and `scrollbar-color` properties for customizing scrollbar appearance — no JavaScript required.

## Features
- **Default (auto)** — standard scrollbar width
- **Thin with custom colors** — `scrollbar-width: thin` + `scrollbar-color`
- **Custom colors only** — color change without width reduction
- Content overflow with scrollable boxes

## Properties
| Property | Values | Description |
|----------|--------|-------------|
| `scrollbar-width` | `auto`, `thin`, `none` | Controls scrollbar thickness |
| `scrollbar-color` | `<color> <color>` | Thumb and track colors |

## Usage
```css
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rebeccapurple #1a1a1a;
}
```

## Browser Support
- `scrollbar-width` — Firefox 64+, Chrome 121+
- `scrollbar-color` — Firefox 64+, Chrome 121+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
