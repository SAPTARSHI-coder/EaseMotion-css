# MacOS Style Magnification Dock

A horizontal navigation dock (like the macOS dock) where hovering over an icon smoothly scales it up, while also proportionally scaling the adjacent icons using pure CSS.

## Features

- **Zero JS** — relies entirely on the `:hover` state and CSS adjacent sibling combinators (`+` and `:has`)
- **Proportional Scaling** — the hovered icon gets the largest scale (`1.6`), immediate neighbors get a medium scale (`1.3`), and outer neighbors get a slight scale (`1.1`)
- **Fluid transitions** — uses `cubic-bezier` easing to make the magnification feel organic and springy
- **Transform Origins** — dynamically shifts `transform-origin` to keep the dock anchored to the bottom while expanding
- **Tooltips** — pseudo-element tooltips appear above each icon on hover

## File Structure

```
macos-magnification-dock-vl7/
├── demo.html    ← self-contained, opens directly in browser
├── style.css    ← all CSS logic, transitions, scaling
└── README.md    ← this file
```

## How It Works

This component avoids JavaScript by heavily leveraging advanced CSS combinators. 

When an item is hovered (`.dock-item:hover`), it gets the largest scale factor (`1.6`).
We target the items to its right using the adjacent sibling combinator `+`. For example:
- Right immediate neighbor: `.dock-item:hover + .dock-item` gets `1.3`
- Right outer neighbor: `.dock-item:hover + .dock-item + .dock-item` gets `1.1`

To target the items to the *left* of the hovered item, we must use the modern CSS `:has()` pseudo-class, which acts as a parent selector. We check if the container has a hovered item, and then find the specific item that is the sibling to its left:
- Left immediate neighbor: `.ease-dock:has(.dock-item:hover) .dock-item:has(+ .dock-item:hover)` gets `1.3`
- Left outer neighbor: `.ease-dock:has(.dock-item:hover) .dock-item:has(+ .dock-item + .dock-item:hover)` gets `1.1`

## Usage

```html
<div class="dock-wrapper">
  <ul class="ease-dock">
    <li class="dock-item" aria-label="Finder"><span>&#x1F4C1;</span></li>
    <li class="dock-item" aria-label="Messages"><span>&#x1F4AC;</span></li>
    <li class="dock-item" aria-label="Safari"><span>&#x1F310;</span></li>
  </ul>
</div>
```

## Browser Support

Works in all modern browsers that support the `:has()` selector (Chrome 105+, Edge 105+, Safari 15.4+, Firefox 121+). In older browsers, only the hovered element and its right siblings will scale, which provides a graceful degradation.
