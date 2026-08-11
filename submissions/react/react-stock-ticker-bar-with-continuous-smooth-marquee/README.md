# Stock Ticker Bar with Continuous Smooth Marquee

A horizontally auto-scrolling stock ticker bar that loops seamlessly using a duplicated-content marquee technique, with color-coded price change indicators.

## Props

| Prop           | Type    | Default | Description                                                        |
|----------------|---------|---------|-----------------------------------------------------------------------|
| `items`        | array   | —       | Array of `{ symbol, price, change }` objects (`change` is a percent) |
| `speed`        | number  | `30`    | Duration in seconds for one full scroll loop (lower = faster)         |
| `pauseOnHover` | boolean | `true`  | Pause the scroll animation while hovered                              |

## Installation

Copy `StockTickerBar.jsx` and `style.css` into your project. No external dependencies beyond React.

## Usage

```jsx
import StockTickerBar from './StockTickerBar';

const items = [
  { symbol: 'AAPL', price: '$214.32', change: 1.24 },
  { symbol: 'TSLA', price: '$248.77', change: -2.13 },
];

<StockTickerBar items={items} speed={20} />
```

## Behavior

- The item list is duplicated internally and animated with a `translateX` keyframe from `0` to `-50%`, creating a seamless infinite loop with no visible seam or reset jump.
- Positive `change` values render a green up-arrow; negative values render a red down-arrow.
- Hovering pauses the scroll (toggle via `pauseOnHover`) and slightly scales up the change badge for the hovered item.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and the framework's spring-style `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve on the hover interaction, consistent with existing submissions. Zero dependencies beyond React.
