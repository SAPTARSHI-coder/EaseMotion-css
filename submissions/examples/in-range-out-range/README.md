# :in-range / :out-of-range

## Description
Demonstrates the `:in-range` and `:out-of-range` pseudo-classes for number inputs with `min`/`max` constraints. Four examples — age (18–120), rating (1–10), temperature (-20–50), and discount (0–100) — show green borders and backgrounds for valid values and red borders with a shake animation for invalid entries.

## Usage
Open `demo.html` and type values into the number inputs. Enter a value within the specified range to see green styling. Enter a value outside the range to see red styling with a shake effect. The hint text below each input also changes color to match the state.

## Browser Support
`:in-range` and `:out-of-range` are supported in Chrome 53+, Firefox 50+, Safari 10.1+, Edge 79+, and Opera 40+. They apply to `<input>` elements with `min`/`max` attributes. The shake animation respects `prefers-reduced-motion` by disabling itself.
