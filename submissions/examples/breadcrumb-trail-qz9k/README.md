# Breadcrumb Trail

## What does this do?

A breadcrumb navigation trail using a real `<nav>`/`<ol>` structure, where
each separator chevron is generated content attached to the crumb before
it rather than a standalone element sitting between two links.

## How is it used?

```html
<nav class="brt-nav" aria-label="Breadcrumb">
  <ol class="brt-list">
    <li class="brt-item"><a class="brt-link" href="/">Home</a></li>
    <li class="brt-item"><a class="brt-link" href="/electronics">Electronics</a></li>
    <li class="brt-item"><span class="brt-current" aria-current="page">Laptops</span></li>
  </ol>
</nav>
```

The final crumb is a `<span aria-current="page">`, not a link — it
represents the current page, which shouldn't be a clickable link to itself.

## Why is it useful?

A breadcrumb trail with separator text/icons as their own `<li>` or inline
element between crumbs needs that separator count kept in sync by hand:
adding, removing, or conditionally hiding a crumb (e.g. collapsing a long
trail on mobile) also means adding or removing a matching separator, and
it's easy to end up with a dangling separator at either end or a doubled
one in the middle. Drawing the separator as `::after` on `.brt-item`, and
suppressing it specifically on `:last-child`, ties the separator count
structurally to the crumb count — there's no second element that has to be
kept in sync, so removing a crumb in markup (or via JS for a
dynamically-truncated trail) automatically removes exactly the right
separator with it.

Using `<nav aria-label="Breadcrumb">` around a real `<ol>` (not a `<div>` of
loose links) means the trail is announced as a distinct, ordered navigation
landmark by assistive technology, and `aria-current="page"` on the final
crumb identifies it as the current location without a link that would
otherwise reload the same page.
