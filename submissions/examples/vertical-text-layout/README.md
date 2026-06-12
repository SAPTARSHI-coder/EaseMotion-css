# Vertical Text Layout

## What does it do?

A pure-CSS demo showing how to create vertical text layouts using `writing-mode` and `text-orientation` properties — no JavaScript required.

## Features

- **Writing Mode** — `horizontal-tb`, `vertical-rl`, `vertical-lr`
- **Text Orientation** — `mixed`, `upright`, `sideways`
- **Table Headers** — compact vertical headers to save horizontal space
- **Side Labels** — vertical sidebar labels for navigation or decoration

## Usage

```html
<p class="wm-vertical-rl">Vertical text</p>
<p class="wm-vertical-rl to-upright">Vertical upright</p>
<table>
  <th class="th-vertical">Header</th>
</table>
<span class="side-label wm-vertical-rl">Label</span>
```

```css
.wm-vertical-rl {
  writing-mode: vertical-rl;
}
.to-upright {
  text-orientation: upright;
}
.th-vertical {
  writing-mode: vertical-lr;
}
```

## CSS Variables

None — all styles are defined directly via classes.

## Classes

- `.wm-horizontal` — default horizontal writing mode
- `.wm-vertical-rl` — vertical right-to-left
- `.wm-vertical-lr` — vertical left-to-right
- `.to-mixed`, `.to-upright`, `.to-sideways` — text orientation overrides
- `.th-vertical` — vertical table header cell
- `.side-label` — vertical sidebar label

## Browser Support

- `writing-mode` — Chrome 48+, Firefox 41+, Safari 10.1+
- `text-orientation` — Chrome 48+, Firefox 41+, Safari 14+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
