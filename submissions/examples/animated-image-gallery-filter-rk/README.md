# Animated Image Gallery Filter

A responsive, accessible image gallery with category filter buttons and
smooth fade + scale animations when switching filters. Built with plain
HTML, CSS, and a small amount of vanilla JavaScript — no frameworks, no
build step, no CDNs.

## 1. What this example does

- Displays a responsive grid of 10 sample photos (auto-generated inline
  SVG placeholders, so the demo works fully offline).
- Provides five filter buttons — **All, Nature, City, Animals, Food** —
  that show or hide gallery items based on their category.
- Filtering is animated: items that leave the current filter fade out and
  scale down, while items that enter fade in and scale up, using CSS
  `opacity` and `transform` transitions.
- The active filter button is visually highlighted and marked with
  `aria-pressed="true"` for assistive technology.
- Gallery cards have a modern hover effect: the card lifts with a soft
  shadow and the image gently zooms.
- Layout reflows for mobile: the grid collapses to smaller columns and the
  filter bar wraps neatly on narrow screens.

## 2. How to use it

1. Open `demo.html` directly in any modern browser — no server, build
   tools, or CDN links are required.
2. Click any filter button (**All / Nature / City / Animals / Food**) to
   filter the gallery. The currently active filter is highlighted, and a
   live status message (`#filter-status`) announces how many photos are
   showing — useful for screen reader users.
3. To reuse this pattern in your own project:
   - Copy `style.css` and the gallery markup from `demo.html`.
   - Each gallery item is a `<li class="gallery-item" data-category="...">`
     inside `#galleryGrid`. Add or remove items and set `data-category`
     to match one of your filter button values.
   - Each filter button is a `<button class="filter-btn" data-filter="...">`.
     Add a new button with a new `data-filter` value to introduce a new
     category — no JavaScript changes are needed, since the script reads
     categories dynamically from the DOM.

## 3. Why it is useful in EaseMotion CSS

EaseMotion CSS is about expressive motion with clean, readable markup.
This example demonstrates a common real-world UI pattern — a filterable
media gallery — using the same principles the framework values:

- **Motion with purpose**: fade + scale transitions make filtering feel
  smooth and intentional instead of an abrupt content swap.
- **Zero dependencies**: everything runs from two files with vanilla CSS
  transitions and minimal JS, matching EaseMotion's no-build-tool
  philosophy.
- **Accessibility first**: semantic list markup, `aria-pressed` on filter
  buttons, an `aria-live` status region, and `prefers-reduced-motion`
  support are included out of the box.
- **Responsive by default**: the CSS Grid layout and mobile breakpoint
  make the gallery usable from small phones to large desktops without
  extra configuration.

This gives contributors and users a ready-to-copy reference for building
animated, filterable content grids (galleries, portfolios, product grids)
using EaseMotion CSS's motion-first approach.