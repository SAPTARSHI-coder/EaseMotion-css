# ease-range-pr

Custom styled range input slider with fill progress, thumb hover effects, and value display.

## Features

- Cross-browser custom styling (Webkit + Firefox)
- Smooth thumb with hover scale and shadow
- Focus ring for keyboard accessibility
- 2 size variants: default and large
- 4 color variants: primary, success, warning, error
- Wrapper with label, value display, and min/max labels

## Files

- `style.css` — the range slider styles
- `demo.html` — working demo with volume, brightness, price, rating
- `README.md` — usage documentation

## Usage

```html
&lt;div class="range-pr-wrapper"&gt;
  &lt;div class="range-pr-header"&gt;
    &lt;label class="range-pr-label" for="slider"&gt;Label&lt;/label&gt;
    &lt;span class="range-pr-value"&gt;50%&lt;/span&gt;
  &lt;/div&gt;
  &lt;input type="range" id="slider" class="range-pr" min="0" max="100" value="50"&gt;
  &lt;div class="range-pr-footer"&gt;
    &lt;span&gt;Min&lt;/span&gt;
    &lt;span&gt;Max&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;