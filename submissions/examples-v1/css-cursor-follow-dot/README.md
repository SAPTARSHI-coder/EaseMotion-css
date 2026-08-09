# CSS-only Cursor Follow Dot

## What does this do?
A dot that appears on hover using `:hover` + `::after` pseudo-element on a 
container, simulating a cursor follow effect with zero JavaScript.

## How is it used?
Wrap any content in a `.cursor-zone`:

```html
<div class="cursor-zone">
  <span class="cursor-zone-label">Hover me</span>
</div>
```

Variants:
- Colour: `cursor-dot-pink`, `cursor-dot-green`, `cursor-dot-orange`
- Style: `cursor-dot-ring` (outline), `cursor-dot-sm`, `cursor-dot-lg`
- Position: `cursor-zone-corner` (anchors dot to top-right)

## Why is it useful?
Demonstrates the boundary of pure CSS cursor interaction — useful for
portfolios, landing pages, and interactive cards without any JS overhead.

## Tech Stack
- HTML
- CSS only (`:hover`, `::after`, transitions)

## Preview
Open `demo.html` directly in your browser.