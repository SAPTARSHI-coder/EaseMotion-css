# Animated Circular Progress Bar (`ease-progress-circle`)

This proposal introduces a CSS-only animated circular progress indicator (SVG-based) targeted for `components/progress-circle.css`.

## 📌 Feature Overview

Circular progress indicators are highly requested components for dashboards, profile completeness, and statistical metrics. This component builds a completely customizable, animated SVG ring powered entirely by CSS.

Features:
- Pure CSS `stroke-dashoffset` keyframe animation for the progress fill.
- Seamless control via CSS variables: `--ease-progress-value` (0-100), `--ease-progress-color`, and `--ease-progress-size`.
- Includes centered text label for percentage values.
- Dark mode compatible via CSS media queries.

Included classes:
- `.ease-progress-circle`
- `.ease-progress-circle__track`
- `.ease-progress-circle__fill`
- `.ease-progress-circle__text`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

Structure your HTML as follows:

```html
<!-- A 75% filled progress circle -->
<svg class="ease-progress-circle" style="--ease-progress-value: 75; --ease-progress-color: #3b82f6;" viewBox="0 0 100 100">
  <circle class="ease-progress-circle__track" cx="50" cy="50" r="40" />
  <circle class="ease-progress-circle__fill" cx="50" cy="50" r="40" />
  <text class="ease-progress-circle__text" x="50" y="50" alignment-baseline="middle" text-anchor="middle">75%</text>
</svg>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-progress-circle/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #13306
