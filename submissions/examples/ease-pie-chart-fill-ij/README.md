# Pie Chart Fill

An animated SVG pie chart where segments fill in one by one with a staggered delay. Hover to highlight individual segments. Includes a legend with color indicators and a replay button.

## Features

- SVG circle segments using `stroke-dasharray` / `stroke-dashoffset` animation
- Segments appear sequentially with 0.2s stagger delay
- Hover highlight with increased stroke width and brightness
- Legend items sync with chart segments on hover
- Replay button to re-trigger the fill animation
- Fully customizable via `:root` CSS custom properties

## Usage

Open `demo.html` in any modern browser. Hover over segments or legend items to highlight. Click "Replay" to re-animate the fill.

## Customization

Edit `:root` in `style.css`:

```css
:root {
    --pcf-duration: 1.2s;
    --pcf-segment-1: #f97316;
    --pcf-segment-2: #3b82f6;
    --pcf-segment-3: #10b981;
    --pcf-segment-4: #a855f7;
    --pcf-bg: #1e293b;
}
```

| Variable           | Purpose                     |
|--------------------|-----------------------------|
| `--pcf-duration`   | Animation duration per segment |
| `--pcf-segment-1`  | Segment 1 color (Product A)   |
| `--pcf-segment-2`  | Segment 2 color (Product B)   |
| `--pcf-segment-3`  | Segment 3 color (Product C)   |
| `--pcf-segment-4`  | Segment 4 color (Product D)   |
| `--pcf-bg`         | Background ring color         |

## Files

| File        | Purpose            |
|-------------|--------------------|
| `demo.html` | Entry page         |
| `style.css` | Styles & animation |
