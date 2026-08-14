# Dashboard Stat Card

1. What does this do? A dashboard stat card with a count-up number animation on load. The trend arrow shows direction (up/down) with color coding (green for positive, red for negative) and a subtle bounce animation on the arrow.

2. How is it used? Add a `.stat-card` with `.stat-value` containing a `data-target` attribute for the end value. The JS animates from 0 to the target using a cubic ease-out. The `.trend` class with `.up` or `.down` controls arrow direction and color.

3. Why is it useful? Stat cards are a fundamental dashboard UI element. The count-up animation draws attention to the metric value, while the trend arrow with bounce gives immediate directional context for performance indicators.
