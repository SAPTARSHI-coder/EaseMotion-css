# Form Input Variants

A collection of styled input variants with floating labels, different sizes, border styles, and states. Includes default, success, error, disabled, readonly, and with-icon variants.

## Features

- Floating label technique using the `+` adjacent sibling selector
- Six visual variants: default, success, error, disabled, readonly, with-icon
- Three input sizes: small, default, large
- Border style variations on focus
- Dark theme with accessible contrast ratios
- `prefers-reduced-motion` support disabling transitions

## Usage

Open `demo.html` in any modern browser. All styles are self-contained in `style.css`. To integrate, copy the CSS and adapt the markup pattern — each input group uses a `<div class="input-group">` wrapper with a `<label>` and `<input>` or a `<div class="input-with-icon">` for the icon variant.

## Customization

Override CSS variables like `--bg-primary`, `--border-focus`, or `--accent` in your own stylesheet to match your brand. The `--transition` variable controls all animation timing. Set `data-size="sm"` or `data-size="lg"` on the input group to change sizes.
