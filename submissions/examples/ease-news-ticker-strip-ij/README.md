# News Ticker Strip

An infinite-scrolling market ticker that glides its duplicated track left with CSS animation, with a live badge and pause/resume control.

## How is it used?

Duplicate the tick items once inside `.ticker-track` and animate `translateX` by `-50%`:

```html
<div class="ticker" id="ticker">
  <div class="ticker-track">
    <span class="tick up">AAPL <b>242.16</b> <em>+1.2%</em></span>
    <!-- …first set… -->
    <span class="tick up">AAPL <b>242.16</b> <em>+1.2%</em></span>
    <!-- …duplicated set so the loop is seamless… -->
  </div>
</div>
```

```css
.ticker-track {
  animation: scroll-left 18s linear infinite;
}
@keyframes scroll-left {
  to { transform: translateX(-50%); }
}
```

Adding `.paused` to the track switches `animation-play-state` to `paused`.

## Why is it useful?

Scrolling tickers add urgency to dashboards, news sites and price pages. This component shows the classic seamless-loop trick — content duplicated exactly once, animating to `-50%` — which requires no JavaScript for the motion itself, only a small pause control. A compact, self-contained EaseMotion example.
