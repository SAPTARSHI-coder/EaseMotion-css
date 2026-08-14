# Back to Top Animated

A smooth, animated "back to top" button that bounces in when the user scrolls past a threshold and scrolls the page back up on click.

## Usage

1. Include `style.css` in your page.
2. Add the HTML button with `id="backToTop"` and classes `btt hidden`.
3. Include the JS snippet at the bottom of `body` (or adapt as needed).

## Customization

Override the following CSS custom properties on `:root`:

| Variable            | Default   | Description                         |
|---------------------|-----------|-------------------------------------|
| `--btt-duration`    | `0.4s`    | Animation duration                  |
| `--btt-size`        | `3rem`    | Button width and height             |
| `--btt-bg`          | `#2563eb` | Background color                    |
| `--btt-hover-bg`    | `#1d4ed8` | Hover background color              |
| `--btt-color`       | `#ffffff` | Icon color                          |
| `--btt-threshold`   | `400px`   | Scroll distance before button shown |

## Demo

Open `demo.html` in a browser.
