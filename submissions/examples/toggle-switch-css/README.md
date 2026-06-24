# toggle-switch-css

Pure CSS toggle switch built with `<input type="checkbox">`, `:checked`, and `::before`/`::after` pseudo-elements. Zero JavaScript.

## How It Works

Hidden checkbox drives the toggle state. `::before` renders the track, `::after` renders the thumb. `:checked` shifts the thumb via `translateX()` and swaps track color. Multiple color variants (blue, green, red, purple, amber) are controlled via a `--toggle-color` custom property.

## Usage

Open `demo.html` and click any toggle. Smooth `cubic-bezier` transition animates the thumb. The `prefers-reduced-motion` media query disables all transitions. Labels update visually via `:checked` adjacency.
