# custom-checkbox-qz9k

A Sass mixin styling a real `<input type="checkbox">` directly via
`appearance: none` plus a generated checkmark, instead of the common
hide-the-input-and-style-a-sibling-span approach.

## Usage

```scss
@use 'custom-checkbox' as *;

input[type="checkbox"] {
  @include custom-checkbox($checked-bg: #34a853);
}
```

```html
<input type="checkbox" />
<input type="checkbox" indeterminate />
```

| Param | Default | Description |
|---|---|---|
| `$size` | `1.15rem` | Box dimensions. |
| `$border` | `#b7bdcb` | Unchecked border colour. |
| `$checked-bg` | `#4c6ef5` | Checked/indeterminate fill colour. |
| `$radius` | `0.3rem` | Corner radius. |

## Why is it useful?

The common custom-checkbox pattern visually hides the real input (`opacity:
0` or a clip-based visually-hidden technique) and styles an adjacent
`<span>` to represent checked/unchecked state via a sibling combinator —
which works, but doubles the markup per checkbox and requires manually
keeping the span in sync with `:checked`/`:indeterminate`/`:disabled` via
CSS combinators for every state. `appearance: none` lets the real input
itself become the visual box directly: `:checked`, `:indeterminate`,
`:disabled`, and `:focus-visible` all apply straight to the one element
already carrying that state, with no combinator indirection and no second
element to keep synchronized.

`:indeterminate` gets its own distinct treatment (a dash, not a checkmark)
since it's a real, separately-styleable pseudo-class — typically set via
JS for a "select all" checkbox representing a partially-selected group —
and conflating it visually with `:checked` would misrepresent that state to
the user.
