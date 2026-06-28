# ease-tooltip-pr

Pure CSS tooltip component using `data-tooltip` attribute and pseudo-elements.

## Features

- No JavaScript required — uses `::before` and `::after` pseudo-elements
- 4 positions: top (default), bottom, left, right
- Fade-in animation on hover and focus
- Arrow pointer matching tooltip position
- Accessible with keyboard focus

## Files

- `style.css` — the tooltip styles
- `demo.html` — working demo with all 4 positions
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Default position (top) --&gt;
&lt;button class="tooltip-pr" data-tooltip="Tooltip text"&gt;
  Hover Me
&lt;/button&gt;

&lt;!-- Specific position --&gt;
&lt;button class="tooltip-pr" data-tooltip="Bottom tooltip" data-tooltip-pos="bottom"&gt;
  Bottom
&lt;/button&gt;