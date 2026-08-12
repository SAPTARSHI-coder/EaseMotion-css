# Ticker Tape Demo Component

A pure CSS Ticker Tape component featuring continuous infinite marquee scrolling loops, live pulse status indicators, zero-JS pause-on-hover & click controls, and price fluctuation badges.

## 🚀 Features

- **100% Pure CSS & HTML**: Built without any external JavaScript dependencies.
- **Seamless Marquee Loop**: Translates duplicated track elements from `0%` to `-100%` for uninterrupted infinite scrolling.
- **Bi-Directional Track Motion**: Demonstrates both leftward financial market scrolling and rightward breaking news feeds.
- **Zero-JS Motion Controls**: Leverages `:hover` and checkbox `:checked` selectors to freeze `animation-play-state: paused` instantly.
- **Live Pulse Rings**: Radial keyframe animations mimicking real-time market activity indicators.
- **Responsive & Reduced Motion**: Fluid mobile layout with WAI-ARIA hidden duplicates and explicit `@media (prefers-reduced-motion: reduce)` fallbacks.

## 🛠️ Usage

Include `style.css` in your HTML document and structure your ticker marquee tracks:

```html
<link rel="stylesheet" href="submissions/examples/ease-ticker-tape-ij/style.css">

<div class="ticker-wrapper ticker-left">
    <div class="ticker-track">
        <div class="ticker-group">
            <div class="ticker-item item-up">
                <span class="item-symbol">BTC/USD</span>
                <span class="item-price">$94,250.00</span>
                <span class="item-change change-up">+4.8% ▲</span>
            </div>
        </div>
        <!-- Duplicated track group for seamless loop -->
        <div class="ticker-group" aria-hidden="true">...</div>
    </div>
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--ticker-speed-left` | Speed duration for leftward scrolling track | `25s` |
| `--ticker-speed-right` | Speed duration for rightward scrolling track | `35s` |
| `--up-color` | Positive gain price badge color | `#34d399` |
| `--down-color` | Negative drop price badge color | `#f87171` |
| `--font-mono` | Monospace typography font family | `'JetBrains Mono'` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-ticker-tape-ij/`
- **Issue Reference**: `#75682`
- **Files Included**: `demo.html`, `style.css`, `README.md`
