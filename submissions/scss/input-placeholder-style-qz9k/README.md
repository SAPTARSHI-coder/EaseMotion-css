# input-placeholder-style-qz9k

A Sass mixin for cross-browser placeholder text styling, writing each
vendor-prefixed variant as its own separate rule block.

## Usage

```scss
@use 'input-placeholder-style' as *;

.search-input {
  @include placeholder-style(#94a3b8, 0.75);
}
```

| Param | Default | Description |
|---|---|---|
| `$color` | `#8b93a3` | Placeholder text colour. |
| `$opacity` | `1` | Placeholder opacity (Firefox defaults placeholder opacity below 1; this normalizes it). |

## Why is it useful?

`::placeholder` is the modern standard pseudo-element, but
`::-webkit-input-placeholder`, `::-moz-placeholder`, and
`:-ms-input-placeholder` still need to be declared for full legacy
coverage — and critically, they must be written as **separate rule
blocks**, each with its own selector and declaration body, not combined
into one comma-separated selector list
(`::placeholder, ::-webkit-input-placeholder { ... }`). Per the CSS
specification, if a browser doesn't recognize even one selector in a
comma-separated list, it's permitted to (and older engines commonly did)
discard the *entire* rule as invalid — meaning a single unsupported vendor
pseudo-element in a combined selector could silently drop placeholder
styling in every browser, including ones that support the other selectors
in the same list. Writing each vendor variant as its own independent rule
means an unsupported selector in one browser has zero effect on any other
browser's rule.

The explicit `$opacity` parameter exists because Firefox has historically
applied its own reduced default opacity to placeholder text (unlike other
engines, which default to full opacity), so relying on each browser's
default produces visibly inconsistent placeholder contrast across
browsers unless `opacity` is set explicitly to the same value everywhere.

## Why separate blocks, illustrated

To make the failure mode concrete, compare the two approaches:

```scss
// Risky: one unsupported selector can invalidate the whole rule in
// engines that follow the strict interpretation of invalid selector lists.
input::placeholder, input:-ms-input-placeholder {
  color: #8b93a3;
}

// Safe: each selector's validity is independent of the others.
input::placeholder {
  color: #8b93a3;
}
input:-ms-input-placeholder {
  color: #8b93a3;
}
```

Modern evergreen browsers are generally more forgiving about this than
older engines were, but writing separate rules costs nothing at
compile time (Sass duplicates the declaration block automatically via the
mixin) and removes the risk entirely rather than depending on how
strictly a given browser version happens to interpret invalid selectors
in a list.

## Placeholder styling and accessibility

Placeholder text is not a replacement for a real `<label>` — it disappears
the moment the user starts typing and isn't reliably announced by every
screen reader the way label text is, so it should only ever supplement a
visible label (a format hint like "MM/DD/YYYY"), never serve as the
field's only accessible name. This mixin only addresses the *visual*
styling of placeholder text; it doesn't change or improve on that
underlying accessibility guidance, which applies regardless of how the
placeholder is styled.

## Combining with the input-reset mixin

This mixin pairs naturally with the `input-reset-qz9k` mixin elsewhere in
this set — `input-reset` normalizes cross-browser input behavior
(autofill background, iOS zoom, focus padding), while this one specifically
handles placeholder text colour, covering two commonly-needed but
independent pieces of cross-browser input styling.
