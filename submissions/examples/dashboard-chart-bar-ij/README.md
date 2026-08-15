# Dashboard Chart Bar

1. What does this do? A CSS-only bar chart where each bar animates from 0 to its target height using the `--ease-bar-height` CSS custom property. Bars have staggered transition delays (80ms apart) for a cascading entrance effect.

2. How is it used? Add a `.chart-container` with `.bar-group` children. Set the target height via `--ease-bar-height` as an inline style (e.g., `style="--ease-bar-height: 65%;"`). The `.bar-fill` div reads the variable and transitions from 0 to the specified height.

3. Why is it useful? Pure CSS bar charts are lightweight and performant. The staggered animation gives a polished dashboard feel without JavaScript, and the CSS variable approach makes it easy to set arbitrary heights from a CMS or API.
