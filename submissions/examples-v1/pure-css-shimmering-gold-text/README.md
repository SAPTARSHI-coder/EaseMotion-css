# Pure CSS Shimmering Gold Text

A luxurious, high-end gold text effect designed for modern UIs, built purely with HTML and CSS. This component uses an infinite shifting linear gradient clipped to text to achieve a fluid shimmering/metallic light-reflection effect without any JavaScript overhead.

## Features
- **Zero Dependencies:** Built with pure HTML and CSS.
- **Performant:** Utilizes native hardware-accelerated CSS animations.
- **Fully Responsive:** Adapts seamlessly across desktop, tablet, and mobile screens.
- **Cross-Browser Compatible:** Uses standard `-webkit-` prefixes ensuring broad browser support.

## How It Works
The effect works by utilizing a wide linear gradient consisting of multiple gold and highlight stops (`#b88728`, `#e1b85f`, `#fff6cc`). 
1. `background-size: 200% auto` stretches the gradient background.
2. `background-clip: text` confines the gradient rendering strictly inside the text layout.
3. An infinite `@keyframes` shift shifts the `background-position` continuously from `0%` to `200%` across the X-axis.

## Usage

### HTML
```html
<h1 class="shimmer-gold">Your Text Here</h1>