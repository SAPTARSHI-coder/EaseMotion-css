# Weather Forecast

### What does this do?

It shows a weather panel with the current conditions and a five day forecast strip. Each day has its name, an inline SVG weather icon (sun, partly cloudy, cloud, rain, or storm), and a high and low temperature. Days highlight on hover.

### How is it used?

```html
<div class="fc-day">
  <span class="fc-dn">Thu</span>
  <svg class="ic rain" viewBox="0 0 24 24"><path class="cl" d="..." /><g class="drops">...</g></svg>
  <span class="fc-hi">19&deg;</span><span class="fc-lo">14&deg;</span>
</div>
```

The forecast is a five column grid. Each day holds a small SVG icon whose class (`sun`, `partly`, `cloud`, `rain`, `storm`) selects which parts are colored, plus high and low temperature spans.

### Why is it useful?

Weather widgets and travel apps show a multi day outlook, not just the current temperature. This provides that forecast strip with self contained SVG icons and pure CSS styling, no icon font or image.
