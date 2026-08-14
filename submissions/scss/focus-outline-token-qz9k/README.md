# focus-outline-token-qz9k

A single focus-ring mixin (plus an inset variant) meant to be the one
source of truth for what a keyboard focus ring looks like across an entire
codebase.

## Usage

```scss
@use 'focus-outline-token' as *;

button, a, input, [tabindex] {
  @include focus-outline;
}

.chip-in-scrollable-row {
  @include focus-outline-inset;
}
```

| Param | Default | Description |
|---|---|---|
| `$color` | `#4c6ef5` | Ring colour. |
| `$width` | `2px` | Ring thickness. |
| `$offset` | `2px` | Gap between the element and the ring (outline variant only). |

## Why is it useful?

Without a shared mixin, every component in a codebase that needs custom
focus styling tends to declare its own `:focus-visible` rule with slightly
different colours, widths, or offsets — sometimes matching the design
system's actual focus-ring spec, sometimes an approximation from memory,
sometimes forgotten entirely on a newer component. The result is a subtly
inconsistent focus experience across the app: some buttons get a crisp
2px blue ring, others a fuzzier default browser outline, others none at
all. Routing every focus style through this one mixin means the actual
ring appearance lives in exactly one place — changing the design system's
focus colour is a single-line edit here, rather than a codebase-wide
find-and-replace across every component that happened to hard-code the old
colour.

Both variants explicitly set `outline: none` on plain `:focus` (not
`:focus-visible`) first, so a mouse click doesn't show the outline at all —
only `:focus-visible` triggers the ring, which browsers already restrict to
keyboard/programmatic focus in most cases, but declaring it explicitly here
keeps the two mixins self-contained rather than depending on inherited
`outline` behavior from elsewhere in the stylesheet cascade.

The inset variant exists because a positive `outline-offset` value can be
visually clipped by an ancestor's `overflow: hidden` (common for chips or
pills inside a horizontally-scrollable row) — an outline's offset can
render outside the element's own box, into space the clipping ancestor
doesn't reserve for it, while an inset `box-shadow` stays entirely within
the element's own bounds and is never affected by ancestor clipping.

## Deciding which variant a component needs

As a rule of thumb: reach for `focus-outline` (the default, offset
variant) unless a specific component has demonstrated the clipping
problem the inset variant solves. The offset variant reads as more
distinctly "detached" from the element, which most design systems prefer
as the default focus treatment; the inset variant is the deliberate
exception for components known to sit inside a clipping ancestor, not a
general-purpose alternative to reach for by default.

```scss
// Default case: most buttons, links, form fields.
.btn, a, input { @include focus-outline; }

// Exception: a chip that lives inside a horizontally-scrollable filter row.
.filter-chip { @include focus-outline-inset; }
```

## Contrast against varied component backgrounds

A single hard-coded `$color` works well when every focusable element
sits on a similar background, but a component whose background varies
significantly (a chip that can be light or dark depending on its own
category colour) may need `$color` overridden per-instance to maintain
sufficient contrast between the ring and its own background:

```scss
.filter-chip--dark-bg {
  @include focus-outline-inset($color: #fff);
}
```

This mixin doesn't attempt to compute a contrasting ring colour
automatically from the element's own background — that decision is left
explicit, similar to how the `tag-pill` and `color-swatch-grid` examples in
this set handle background-dependent foreground colours: passed in
deliberately by whoever authors that specific component's styles, rather
than derived implicitly.

## Interaction with browser and OS-level forced colors

Under `forced-colors: active`, most browsers already substitute their own
system focus indicator regardless of author-specified `outline`/`box-shadow`
styles, which is generally the correct behavior for accessibility (a user
who has enabled forced colors has typically also configured a focus
indicator they can reliably perceive). This mixin doesn't attempt to
override that system behavior, and shouldn't — deferring to the user's
own forced-colors focus treatment is the right default here, unlike some
of the other mixins in this set that do provide explicit forced-colors
overrides for their primary visual treatment.
