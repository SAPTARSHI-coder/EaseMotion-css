## What

Single-page navigation demo using `scroll-behavior: smooth` for animated anchor-link scrolling, a sticky nav bar, `scroll-margin` to offset section targets behind the nav, and `:target` styling to highlight the active section.

## How

The `<html>` element sets `scroll-behavior: smooth`. Each `<section>` has an `id` matching a nav anchor. `scroll-margin-block-start: calc(var(--nav-h) + 16px)` ensures no content is hidden under the `70px` sticky nav. The `:target` pseudo-class applies a left border accent and colors the section heading.

## Why

Smooth scrolling improves perceived navigation quality without JavaScript. `scroll-margin` solves the overlap problem that fixed/sticky headers inevitably create. `:target` provides a lightweight, CSS-only way to indicate the user's current location, avoiding the need for intersection-observer scroll-spy scripts.
