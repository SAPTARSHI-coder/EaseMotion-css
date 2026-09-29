# Star Rating

A pure CSS star rating control built on native radio inputs. Closes #86805.

## Files

- `demo.html`: live examples (default, small, large, read-only)
- `style.css`: the component styles
- `README.md`: this file

## Usage

```html
<link rel="stylesheet" href="style.css" />

<fieldset class="ease-star-rating-xyz">
  <legend>Rate this product</legend>
  <div class="ease-star-rating-xyz__stars">
    <input type="radio" name="rating" id="star1" value="1" />
    <label for="star1"><span aria-hidden="true">&#9733;</span><span class="sr-only-xyz">1 star</span></label>
    <!-- repeat for 2 to 5, in ascending order -->
  </div>
</fieldset>
```

Stars must stay in ascending order (1 to 5) in the HTML. Each input is followed by its label.

## Classes

| Class | Purpose |
| --- | --- |
| `ease-star-rating-xyz` | Root element (a `fieldset`) |
| `ease-star-rating-xyz__stars` | Wrapper around the inputs and labels |
| `ease-star-rating-xyz--sm` | Small stars |
| `ease-star-rating-xyz--lg` | Large stars |
| `ease-star-rating-xyz--readonly` | Shows a score, ignores hover; add `disabled` to the fieldset |
| `sr-only-xyz` | Text for screen readers only |

## Customization

Override these custom properties on the root element:

`--star-size`, `--star-gap`, `--star-off`, `--star-on`, `--star-preview`, `--star-focus`

## Accessibility

- Native radio inputs, so arrow keys, Tab and form submission work without JavaScript
- `fieldset` and `legend` give the group a name for screen readers
- Visible focus outline on keyboard focus
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## Browser support

Uses the CSS `:has()` selector, supported in current Chrome, Edge, Safari and Firefox (Firefox 121+). In older browsers the hover preview and the fill of earlier stars will not work.
