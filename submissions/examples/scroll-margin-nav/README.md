# scroll-margin-nav

## What

A single-page navigation demo that uses `scroll-margin` to offset anchor targets under a fixed sticky header. Sections are linked via smooth-scrolling anchor links, and the active section is highlighted in the nav as the user scrolls. The `scroll-margin` ensures section headings are not hidden behind the header.

## How

A sticky `<nav>` sits at the top with `position: sticky; top: 0`. Each `<section>` has an `id` matching an anchor `href`, and `scroll-margin-top: 5rem` (matching the header height). The page uses `scroll-behavior: smooth` on `html` for animated jumps. An `IntersectionObserver` tracks which section is most visible and applies an `.active` class to the corresponding nav link.

## Why

Anchor navigation is a common pattern (documentation, landing pages, help centres), but section content is easily obscured by a fixed or sticky header. The old workaround required adding invisible padding or using `:target` pseudo-class hacks. `scroll-margin` provides a native, predictable way to reserve breathing room for sticky elements, and `scroll-behavior: smooth` eliminates the need for JavaScript scroll libraries.
