# ease-stats-pr

Statistics/metric cards with trend indicators for dashboards.

## Features

- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Colored icon in rounded background
- Large value display
- Trend arrow with percentage change
- Color coding: green for up, red for down
- Hover lift effect with shadow

## Files

- `style.css` — the stats card styles
- `demo.html` — working demo with 4 metrics
- `README.md` — usage documentation

## Usage

```html
&lt;div class="stats-pr-grid"&gt;
  &lt;div class="stats-pr-card"&gt;
    &lt;div class="stats-pr-header"&gt;
      &lt;span class="stats-pr-label"&gt;Label&lt;/span&gt;
      &lt;div class="stats-pr-icon stats-pr-icon-blue"&gt;icon&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="stats-pr-value"&gt;1,234&lt;/div&gt;
    &lt;div class="stats-pr-trend stats-pr-trend-up"&gt;
      +12.5%
      &lt;span class="stats-pr-trend-text"&gt;vs last month&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;