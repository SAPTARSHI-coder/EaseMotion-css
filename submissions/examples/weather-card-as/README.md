# Weather Card

### What does this do?

It shows a weather card with the current temperature, an inline SVG condition icon, a high and low, and a strip of the next four days with their icons and temps.

### How is it used?

```html
<article class="weather">
  <div class="wx-place"><span>San Francisco</span><span class="tag">Now</span></div>
  <div class="wx-now"><svg>...</svg><span class="wx-temp">24°</span></div>
  <div class="wx-meta"><span>H: <b>27°</b></span><span>L: <b>18°</b></span></div>
  <div class="wx-forecast">
    <div class="wx-day sun"><span>Tue</span><svg>...</svg><b>25°</b></div>
  </div>
</article>
```

Each forecast day gets a condition class (`sun`, `cloud`, `rain`) that tints its icon. The forecast is a four column grid.

### Why is it useful?

Dashboards and home screens show a weather widget. This lays out a weather card with a big temperature, a condition icon, and a compact forecast strip, using only CSS and inline SVG so there are no external assets.
