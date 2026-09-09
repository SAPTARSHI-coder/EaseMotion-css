# safe-print-qz9k

A Sass mixin providing sane print-stylesheet defaults: strips dark
backgrounds and shadows that waste ink, appends link destinations as
visible text, and hides UI that only makes sense on screen.

## Usage

```scss
@use 'safe-print';
```

Including the partial applies its `@media print` block globally — there's
no per-element opt-in needed, since every one of its fixes is a safe
default for any page. Opt individual elements out with `.no-print` or a
`data-print-hide` attribute.

```html
<nav class="no-print">...</nav>
```

## Why is it useful?

A page styled only for screen tends to print badly in three specific,
recurring ways: dark-themed cards and shadows print as heavy ink blocks
that waste toner and reduce legibility on paper, hyperlinks are
meaningless once printed since the destination URL is invisible on the
page, and fixed/sticky headers or floating action buttons repeat on every
printed page, overlapping content instead of scrolling out of the way like
they do on screen.

Appending `attr(href)` after every link's text (skipping in-page anchors
and `javascript:` pseudo-links, which have no meaningful printed
destination) means a printed page retains the information a hyperlink
represents even once its clickability is gone. `!important` is used
deliberately here — a print stylesheet exists specifically to override
whatever the screen stylesheet already decided, so it needs to reliably win
that fight rather than depend on selector specificity matching everywhere
the mixin is included.
