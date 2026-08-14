# scrollbar-gutter-safe-qz9k

A Sass mixin applying `scrollbar-gutter: stable` (reserving space for a
scrollbar whether or not one is currently needed) with an `overflow-y:
scroll` fallback for engines without support.

## Usage

```scss
@use 'scrollbar-gutter-safe' as *;

html {
  @include scrollbar-gutter-safe;
}

.modal-content {
  @include scrollbar-gutter-safe('stable both-edges');
}
```

| Param | Default | Description |
|---|---|---|
| `$mode` | `stable` | Any valid `scrollbar-gutter` value, e.g. `'stable both-edges'` for symmetric layouts. |

## Why is it useful?

Without a reserved scrollbar gutter, page content shifts horizontally the
moment a vertical scrollbar appears or disappears — a page that starts
short enough to fit without scrolling, then grows past the viewport height
(more content loads, a collapsed section expands), suddenly has its
scrollbar's width subtracted from the content area, causing every element
to shift left by that amount. This is a common, jarring layout shift bug,
and `scrollbar-gutter: stable` fixes it directly: the space a scrollbar
would occupy is reserved permanently, whether the scrollbar is currently
showing or not, so the content width never changes based on scroll state.

The fallback (`overflow-y: scroll`, forcing the scrollbar to always
render) is a deliberate imperfect tradeoff for engines without
`scrollbar-gutter` support — it shows an empty scrollbar track on pages
that don't actually need to scroll, which is a real but minor visual cost,
traded for eliminating the layout-shift bug entirely on those engines
rather than leaving it unaddressed. `'stable both-edges'` reserves gutter
space on both the left and right sides symmetrically, useful for
centered-content layouts where an asymmetric single-sided reservation would
visually un-center the content relative to the viewport.

## Where to apply it

`scrollbar-gutter` is typically applied to `html` (or `body`) for the
page's main scrollbar, since that's the scrollbar whose appearance and
disappearance causes the most visible layout shift — but any independently
scrollable container (a sidebar, a modal body, a chat panel) that can grow
past its own height benefits from the same treatment:

```scss
.chat-messages {
  @include scrollbar-gutter-safe;
  overflow-y: auto;
  max-height: 30rem;
}
```

## When the fallback's tradeoff isn't acceptable

The `overflow-y: scroll` fallback shows an empty scrollbar track
permanently on non-scrolling content, which is a real visual cost some
designs won't accept even in exchange for avoiding layout shift. For
those cases, an alternative fallback is measuring the scrollbar width in
JS (`window.innerWidth - document.documentElement.clientWidth`) and
setting it as a CSS custom property consumed as padding — more accurate
(no phantom scrollbar track) but requires JavaScript, which this
CSS-only mixin deliberately doesn't reach for, keeping its scope to what's
achievable in pure CSS.

## Interaction with custom scrollbar styling

If a page also uses custom scrollbar styling (the `scrollbar-style-advk`
mixin elsewhere in this repo, for instance), `scrollbar-gutter` and
scrollbar *appearance* styling are independent and compose without
conflict — one reserves layout space, the other controls how the
scrollbar looks within that space. Applying both together is the
common case for a polished scrolling experience, not a redundant
combination.
