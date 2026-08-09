# Text Truncate Utility (`text-truncate-hr18`)

A lightweight, reusable utility class that truncates overflowing
single-line text with an ellipsis, built for issue
[#55875](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55875).

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) don't match this
repo's actual enforced submission convention — `demo.html` + `style.css`
+ `README.md`. This submission uses that convention instead. Per the
issue's own checklist ("I understand my naming will be standardized by
the maintainer"), the class is named `ease-text-truncate-hr18` — the
`-hr18` suffix is only there to avoid colliding with any other
contributor's submission for this issue; the maintainer is free to
rename it to whatever the framework's final convention should be.

## What it does

```css
.ease-text-truncate-hr18 {
  display: block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.4;
}
```

This is the exact technique the issue itself specifies, with two small
additions: `max-width: 100%` so the class behaves predictably as a flex
or grid item without needing an extra wrapper, and a slightly taller
`line-height: 1.4` — at very tight line-heights, this technique can read
as clipping the descenders of letters like *g*, *y*, and *p* right at the
ellipsis; a touch of breathing room avoids that without changing the
truncation behavior itself.

A second, related class is included as a natural companion:

```css
.ease-text-clamp-hr18 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--ease-clamp-lines-hr18, 2);
  overflow: hidden;
}
```

`ease-text-clamp-hr18` truncates after a configurable number of *lines*
instead of stopping at a single line — useful for card descriptions,
comment previews, and similar multi-line text that still needs a hard
cutoff. The line count is genuinely per-use data (2 lines in one card,
3 in another), so it's exposed as `--ease-clamp-lines-hr18` rather than
baked into a fixed set of `.clamp-2` / `.clamp-3` classes.
`-webkit-line-clamp` carries a vendor prefix in its name for historical
reasons but is supported in all current evergreen browsers.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<div style="width: 220px;">
  <p class="ease-text-truncate-hr18">
    This is a very long line of text that will automatically be truncated
    with an ellipsis when it exceeds the available width.
  </p>
</div>

<p class="ease-text-clamp-hr18" style="--ease-clamp-lines-hr18: 3;">
  A longer passage that will be cut off cleanly after exactly three lines,
  wherever that ends up falling, with an ellipsis appended.
</p>
```

The demo applies `ease-text-truncate-hr18` across the exact contexts the
issue names — a card title, a button label, navigation links, a table
cell, and a badge — to confirm it behaves correctly across each one, plus
one example of the multi-line clamp companion.

## Accessibility notes

- Truncating text visually does not remove it from the accessible tree —
  screen readers still read the full, untruncated text content, which is
  the correct behavior (the full text simply isn't visible on screen).
- Where the truncated text is the *only* content of an interactive
  element (e.g. a nav link), consider pairing it with a `title` attribute
  or `aria-label` carrying the full text, so sighted mouse users can also
  see the complete string via a native tooltip on hover. This wasn't added
  to the demo's own example markup by default, since whether a native
  title tooltip is wanted is a per-project decision, not something the
  utility class should force.

## Why this fits EaseMotion CSS

Exactly the kind of small, composable, zero-JavaScript utility the issue
describes — solving a common layout problem with two plain CSS classes,
no custom styling required per project, consistent with the framework's
readable-class philosophy.

The class name and the folder itself use a `-hr18` suffix to avoid
colliding with any other contributor's submission under
`submissions/examples/`.
