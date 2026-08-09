# Candlestick Chart

### What does this do?

It shows a stock candlestick chart. Each candle has a thin wick (the high to low range) and a thicker body (the open to close range), placed with four custom properties. Up sessions are green and down sessions are red, over a gridded plot with a ticker header.

### How is it used?

```html
<span class="cd-candle up"
  style="--wtop: 5.6%; --wh: 41.6%; --btop: 11.1%; --bh: 30.6%;"></span>
```

Each candle is one element. Its `::before` draws the wick from `--wtop` for `--wh`, and its `::after` draws the body from `--btop` for `--bh`, all as percentages of the plot height. Add `up` or `down` to color the candle.

### Why is it useful?

Trading and finance dashboards rely on candlestick charts to show price action. This renders one from pure CSS pseudo elements positioned by custom properties, with no canvas or charting script.
