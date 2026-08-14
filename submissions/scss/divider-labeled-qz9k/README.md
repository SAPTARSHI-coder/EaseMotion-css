# divider-labeled-qz9k

A Sass mixin for a labeled divider (the "OR" between two login options, a
"New messages" separator in a feed) built from two flex lines flanking real
text content.

## Usage

```scss
@use 'divider-labeled' as *;

.login-divider {
  @include divider-labeled;
}
```

```html
<div class="login-divider">or continue with</div>
```

| Param | Default | Description |
|---|---|---|
| `$line-color` | `#dfe3ec` | Divider line colour. |
| `$gap` | `0.9rem` | Space between the lines and the label text. |

## Why is it useful?

A labeled divider needs the label centered between two lines that stretch
to fill whatever space remains on either side — a fixed-width line on each
side doesn't reliably center the label across containers of different
widths, while a single full-width line with the label overlaid via
absolute positioning requires a solid background behind the label to
visually "cut" the line, which breaks the moment the divider sits over a
non-solid or varying background. Making the divider a flex container with
two `flex: 1` pseudo-element lines and the label as the element's real text
content solves both: the lines always expand to fill available space
regardless of container width, and there's no positioning trick needed
since the label is simply flowed inline between the two flex children.

Keeping the label as real, selectable text (rather than CSS
`content: "OR"` on a pseudo-element) means it participates normally in
page search, text selection, and screen reader reading order — a
CSS-generated label is invisible to all three, which matters for a divider
whose text ("or continue with Google", "3 new replies") sometimes carries
real information beyond pure decoration.

## Vertical dividers

The same technique adapts to a vertical labeled divider by swapping the
flex direction and using width instead of height for the lines:

```scss
@mixin divider-labeled-vertical($line-color: #dfe3ec, $gap: 0.6rem) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap;
  color: #8b93a3;
  font-size: 0.85rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    width: 1px;
    background: $line-color;
  }
}
```

This isn't included in the base mixin since horizontal is by far the more
common orientation, but the underlying flex/pseudo-element pattern
transfers directly.

## Semantic markup consideration

For a divider that's purely visual (separating two equally-valid options,
like "or continue with Google"), a `<div>` carrying this mixin is
appropriate — there's no list or section boundary being represented. If
the divider instead marks a genuine thematic break in content (separating
distinct sections of an article, say), `<hr>` combined with a visually
hidden or `::before`-only label may be more semantically accurate, since
`<hr>` specifically communicates a thematic break to assistive technology
in a way a styled `<div>` does not.

## Accessible name when the label is decorative-only

If a divider's label is genuinely just decorative repetition of context
already clear from surrounding content (rare, but possible), consider
`aria-hidden="true"` on the divider element — otherwise a screen reader
reads every divider's label as part of the linear page content, which is
usually desired (the label carries real information) but worth confirming
case by case rather than assuming.
