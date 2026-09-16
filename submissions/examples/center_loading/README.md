# Centered Button Loading Spinner

Fixes off-center spinner alignment in loading buttons. The spinner is
now centered both horizontally and vertically, regardless of button
size or width.

## Usage

1. Include `style.css`.
2. Add the `ease-btn-loading-centered` class to any button:

```html
<button class="ease-btn ease-btn-primary ease-btn-loading-centered">Loading</button>
```

## How it works

- Button text is hidden (`color: transparent`) instead of removed, so the button keeps its original width.
- The spinner is absolutely positioned at `top/left: 50%` with a negative margin equal to half its size, centering it regardless of button dimensions.
- `pointer-events: none` disables interaction while loading.

## Demo

Open `demo.html` to see the spinner centered across different button sizes and widths.

## Customization

- Spinner size: change `1em` (`width`/`height`) — it scales with font-size
- Spinner speed: change `0.6s` in the animation
- Spinner color: change the `color` value in `.ease-btn-loading-centered::after`