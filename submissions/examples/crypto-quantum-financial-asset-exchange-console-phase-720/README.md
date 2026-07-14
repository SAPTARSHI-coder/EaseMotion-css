# Crypto-Quantum Financial Asset Exchange Console — Phase #720

**EaseMotion CSS Showcase** · `submissions/examples/crypto-quantum-financial-asset-exchange-console-phase-720/`

A high-frequency trading UI showcase representing a quantum-secured crypto asset exchange console. Features CSS-rendered live candlestick charts, animated order book depth bars, scrolling market ticker tape, and flashing trade executions.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/crypto-quantum-financial-asset-exchange-console-phase-720/demo.html
```

---

## Design Theme

Fintech, quantum cryptography, dark trading terminals, high-frequency markets.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#050505` | Void Black background |
| `--clr-up` | `#22c55e` | Trade Green / Buy / Positive |
| `--clr-down` | `#ef4444` | Trade Red / Sell / Negative |
| `--clr-qblue` | `#3b82f6` | Quantum Blue / Accent |
| `--clr-neon` | `#a855f7` | Neon Purple / Depth Grid |

---

## Component Breakdown

### 1. Quantum Candlestick Chart (Center View)
- Each `.candle-col` contains a `.wick` (a narrow full-height bar) and a `.body` (the price range box).
- `.bull` candles use `--clr-up` (green) and `.bear` candles use `--clr-down` (red).
- The `.body` elements use `transform-origin: bottom` and scale from `scaleY(0)` to `scaleY(1)` via the `plot-candle` keyframe. Each candle has a staggered `animation-delay`, creating a sequential "plotting" effect as the chart renders.
- A `.trend-line` is positioned absolutely across the chart, using a `linear-gradient` glow in `--clr-qblue`, with a subtle `line-pulse` keyframe that fades it in and out.
- `.vol-area` contains volume bars positioned at the bottom of the chart at reduced opacity.

### 2. Order Book (Left Sidebar)
- `.order-row` elements use CSS Grid (`grid-template-columns: 1fr 1fr 1fr`) to align price, amount, and total.
- **Depth Bars**: Each row has an `::before` pseudo-element positioned absolutely behind the content. Different `.depth-N` classes set different `width` values, visually representing the cumulative volume at each price level. Ask rows use red, bid rows use green.
- **Flash Animations**: `.flash-up` and `.flash-down` utility classes trigger a brief background color flash (`bg-flash-up`, `bg-flash-down` keyframes) to simulate a live order book update.

### 3. Market Ticker Tape (Right Sidebar)
- A `.ticker-tape` inner div scrolls continuously upward using the `scroll-ticker` keyframe (`translateY(0)` → `translateY(-100px)`).
- The `.ticker-wrap` parent clips overflow with `overflow: hidden`.

### 4. Quantum Grid Background
- `body::before` creates a faint blue grid using `linear-gradient` lines at 40px spacing.
- `body::after` projects a neon purple radial glow from below using a CSS `perspective` and `rotateX(60deg)` transform to create a dramatic, receding 3D floor effect.

---

## File Structure

```
crypto-quantum-financial-asset-exchange-console-phase-720/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
