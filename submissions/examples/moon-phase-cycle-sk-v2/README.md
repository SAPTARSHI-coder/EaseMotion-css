# Moon Phase Cycle Indicator

## What does this do?

A lunar phase control where a shadow disc translates across a moon sphere based on a `--phase` CSS variable.

## How is it used?

```html
<div class="moon" style="--phase: 0.35;">
  <div class="moon__sphere"></div>
  <input type="range" min="0" max="100" value="35" aria-label="Moon phase" />
</div>
```

Open `demo.html` in a browser to try it.

## Why is it useful?

Readable phase visualization for calendars and night-mode UI without image assets.
