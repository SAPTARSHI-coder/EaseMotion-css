# Ease Liquid Rating Stars

## Description
A star rating component where each selected star fills with an animated liquid wave (gradient motion), rather than a flat color swap. Pure CSS — driven entirely by radio inputs, `:checked`, `:hover`, and the general sibling combinator (`~`). Zero JavaScript.

## How it works
- Stars are drawn via `clip-path: polygon(...)` on a `.star-shape` element — no icon font/SVG file needed.
- A second layer, `.star-liquid`, shares the exact same clip-path and contains the animated wave gradient. It scales from `scaleY(0)` to `scaleY(1)` (bottom-anchored) to reveal the liquid fill.
- The component markup is **reversed visually** (`flex-direction: row-reverse`, radios listed 5→1 in the DOM) so the CSS `~` (general sibling) selector can select "this star and all stars after it in the DOM" to mean "this star and all stars before it visually" — the standard trick for pure-CSS star ratings.
- Hovering any star previews the fill up to that star; leaving reverts to the `:checked` selection.

## Usage
```html
<fieldset class="ease-liquid-rating">
  <legend class="sr-only">Rate this item</legend>

  <input type="radio" name="rating" id="star5" class="star-input" value="5" />
  <label for="star5" class="star-label" aria-label="5 stars">
    <span class="star-shape"></span>
    <span class="star-liquid"></span>
  </label>
  <!-- repeat for star4 down to star1, in that DOM order -->
</fieldset>
```
Add `checked` to whichever radio represents the current/default rating.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--star-size` | `44px` | Star width/height |
| `--liquid-color` | `#38bdf8` | Primary liquid fill color |
| `--liquid-color-2` | `#a78bfa` | Secondary liquid highlight color |
| `--wave-duration` | `2.2s` | Liquid wave motion cycle speed |
| `--fill-duration` | `0.5s` | Fill/unfill transition speed |
| `--fill-easing` | `cubic-bezier(0.34, 1.2, 0.64, 1)` | Fill timing function |

## Accessibility
Built on native radio inputs inside a `<fieldset>`/`<legend>`, so it's fully keyboard operable (arrow keys move selection) and screen-reader friendly out of the box. Each label has an `aria-label` stating the star count. Respects `prefers-reduced-motion` by disabling the wave animation and fill transitions.

## Files
- `demo.html` — live working example
- `style.css` — component styles and liquid wave animation
- `README.md` — this file