# Collapsing Breadcrumb

## What does this do?

A breadcrumb trail that collapses its middle levels behind an expander on narrow
screens, always keeping the root and the current page visible.

## How is it used?

```html
<nav class="bcc" aria-label="Breadcrumb">
  <ol>
    <li><a href="#r">Docs</a></li>
    <li class="bcc-mid"><a href="#a">Components</a></li>
    <li class="bcc-x">
      <input class="bcc-in" type="checkbox" id="more" />
      <label class="bcc-lbl" for="more" aria-label="Show hidden breadcrumb levels">…</label>
    </li>
    <li><span aria-current="page">Current</span></li>
  </ol>
</nav>
```

## Why is it useful?

Deep breadcrumbs wrap onto three lines on a phone, which wastes the vertical
space the page most needs. The usual fixes are worse than the problem: truncating
with `text-overflow` leaves unreadable stubs, and hiding the middle entirely
removes navigation targets with no way to get them back.

Collapsing behind an expander keeps every level reachable while showing only the
two that matter by default — where you are, and the way home.

The `:has()` selector is what makes it work without script: a checkbox later in
the list can reveal items that come *before* it, which no forward-only sibling
combinator could do. That is a genuine capability gap `:has()` closes.

The expander carries an `aria-label` rather than relying on the ellipsis glyph,
which a screen reader would otherwise announce as punctuation or skip entirely.
`aria-current="page"` marks the final crumb so its role is communicated rather
than merely styled bold.
