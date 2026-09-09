# Mobile-Truncated Breadcrumb

## What does this do?

A breadcrumb trail that shows every crumb on wide viewports, but collapses
to just Home, an ellipsis, and the current page on narrow ones — entirely
via a CSS media query, with no JavaScript measuring available width or
deciding which crumbs fit.

## How is it used?

```html
<ol class="btm-list">
  <li class="btm-item btm-item--home"><a href="#">Home</a></li>
  <li class="btm-item btm-item--mid"><a href="#">Electronics</a></li>
  <li class="btm-item btm-item--mid"><a href="#">Computers</a></li>
  <li class="btm-item btm-item--mid"><a href="#">Laptops</a></li>
  <li class="btm-item btm-item--ellipsis" aria-hidden="true">&hellip;</li>
  <li class="btm-item"><span class="btm-current" aria-current="page">14-inch Ultrabook Pro</span></li>
</ol>
```

`.btm-item--ellipsis` is always present in markup but `display: none` by
default; a `max-width` media query simultaneously hides every
`.btm-item--mid` crumb and reveals the ellipsis.

## Why is it useful?

A long breadcrumb trail on a narrow mobile viewport either wraps onto
multiple lines (eating vertical space and looking cluttered) or overflows
horizontally, neither of which is desirable for what's meant to be a
compact navigational aid. A JS-based truncation approach that measures
each crumb's rendered width and decides how many fit is more flexible in
principle, but adds real complexity — it has to re-run on resize, handle
font-loading shifts that change measured widths after the fact, and
generally introduces a layout-measurement dependency for what a media
query can express as a static rule. Marking the middle crumbs with a
single shared class and hiding that class below a breakpoint keeps the
truncation behavior declarative and resize-safe for free, since CSS media
queries already re-evaluate automatically on viewport change with no JS
listener needed.

The ellipsis is `aria-hidden="true"` since it's a purely visual truncation
indicator carrying no navigable content of its own — a screen reader user
on a narrow viewport still reaches Home and the current page in the
breadcrumb, just without the (also skipped, via the same media query) mid
crumbs' links.
