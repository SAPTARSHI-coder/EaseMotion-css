# Trend Badges

### What does this do?

It shows small trend badges that present a metric change as an up, down, or flat pill with a directional arrow and a percent. The color and arrow are driven by a single tone class.

### How is it used?

```html
<span class="trend is-up"><svg>...</svg>8.4%</span>
<span class="trend is-down"><svg>...</svg>2.1%</span>
<span class="trend is-flat"><svg>...</svg>0.0%</span>
```

Swap the tone class between `is-up`, `is-down`, and `is-flat` to set the color and the matching arrow icon. The badge sits inline, so it pairs well with a stat value or a table cell.

### Why is it useful?

Dashboards and stat cards need a compact way to show whether a number rose or fell. This renders up, down, and flat trend badges with a matching arrow and color from one class, using only CSS and inline SVG so there are no external assets.
