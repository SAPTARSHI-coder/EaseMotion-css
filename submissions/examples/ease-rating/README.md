# Ease Rating — Interactive Star Rating Component

A CSS-only, 5-star rating input built with native `<input type="radio">` elements,
`flex-direction: row-reverse`, and the `~` general sibling combinator. No JavaScript
is used — hover previews the rating and clicking a star commits the selection via
normal radio-button semantics.

## Files

- `demo.html` — standalone demo page with default, pre-selected, size, disabled,
  and custom-color variants.
- `style.css` — the component styles.

## Usage

Include `style.css` and drop in the markup, using a unique `name` per rating group:

```html
<div class="rating">
  <input type="radio" id="star5" name="rating" value="5"><label for="star5">★</label>
  <input type="radio" id="star4" name="rating" value="4"><label for="star4">★</label>
  <input type="radio" id="star3" name="rating" value="3"><label for="star3">★</label>
  <input type="radio" id="star2" name="rating" value="2"><label for="star2">★</label>
  <input type="radio" id="star1" name="rating" value="1"><label for="star1">★</label>
</div>
```

Stars must be written in **descending order (5 → 1)** in the markup. This is what
lets `flex-direction: row-reverse` display them left-to-right visually while still
letting the `~` sibling combinator highlight "this star and everything before it"
on hover.

To pre-select a rating, add `checked` to the matching input.

## How it works

1. Inputs are visually hidden (`opacity: 0`, kept in the layout for click targets
   via their `<label>`s).
2. `.rating` uses `flex-direction: row-reverse` so star 5 is first in the DOM but
   rendered last (rightmost) on screen.
3. `.rating label:hover ~ label` selects every label *after* the hovered one in
   DOM order — which, because of the reversal, corresponds to every star *before*
   it visually. That combo fills in the correct number of stars on hover.
4. `.rating input:checked ~ label` keeps the committed rating highlighted after
   the mouse leaves, using the same sibling logic against the `:checked` radio.
5. `.rating:hover input:checked ~ label` resets the checked-highlight while
   actively hovering elsewhere in the group, so users can preview a different
   rating before committing.

## Customization

Two CSS custom properties control color and can be overridden per-instance:

| Variable                  | Default   | Purpose                    |
|----------------------------|-----------|-----------------------------|
| `--ease-rating-fill`       | `#fbbf24` | Color of filled/hovered stars |
| `--ease-rating-empty`      | `#d4d4d8` | Color of empty stars        |
| `--ease-rating-focus`      | `#2563eb` | Keyboard focus ring color   |

```html
<div class="rating" style="--ease-rating-fill:#22c55e;">
  ...
</div>
```

### Size variants

- `.rating--sm` — smaller stars (1.25rem)
- `.rating--lg` — larger stars (3rem)

### Disabled state

Add `.rating--disabled` to the wrapper and `disabled` to each `<input>`:

```html
<div class="rating rating--disabled">
  <input type="radio" id="star5" name="rating" value="5" disabled>
  <label for="star5">★</label>
  ...
</div>
```

## Accessibility

- Built on native `<input type="radio">` + `<label for>` pairs, so it works with
  screen readers, keyboard navigation (Tab, Arrow keys, Space), and form
  submission out of the box.
- `:focus-visible` on the input draws an outline on its label so keyboard users
  can see which star is focused.
- Consider wrapping the group in a `<fieldset>` with a `<legend>` (e.g. "Rate this
  product") in real forms for the clearest screen-reader announcement.

## Browser support

Relies on `:has()`-free sibling selectors (`~`) and `:checked`, both supported in
all evergreen browsers and IE9+.
