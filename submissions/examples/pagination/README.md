# Pagination Component

A responsive, accessible pagination component with expanded and compact variants. Built with pure CSS — no JavaScript required.

## Demo

Open `index.html` in any modern browser.

## Features

- ✅ Pure CSS — zero JavaScript
- ✅ **Expanded variant** — numbered pages with ellipsis
- ✅ **Compact variant** — minimal prev/next with page info
- ✅ Active page highlighting
- ✅ Hover effects on all interactive elements
- ✅ Disabled state support
- ✅ First/Last edge links option
- ✅ Rounded style variant
- ✅ Dark mode support (`prefers-color-scheme`)
- ✅ Responsive — adapts to small screens
- ✅ Accessible — proper ARIA labels

## Usage

### Expanded Pagination

```html
&lt;nav class="pagination pagination--expanded" aria-label="Page navigation"&gt;
  &lt;a href="#" class="pagination__arrow pagination__arrow--prev" aria-label="Previous page"&gt;
    &lt;!-- SVG arrow icon --&gt;
  &lt;/a&gt;
  
  &lt;a href="#" class="pagination__page"&gt;1&lt;/a&gt;
  &lt;a href="#" class="pagination__page"&gt;2&lt;/a&gt;
  &lt;a href="#" class="pagination__page pagination__page--active" aria-current="page"&gt;3&lt;/a&gt;
  &lt;a href="#" class="pagination__page"&gt;4&lt;/a&gt;
  &lt;span class="pagination__ellipsis"&gt;...&lt;/span&gt;
  &lt;a href="#" class="pagination__page"&gt;12&lt;/a&gt;
  
  &lt;a href="#" class="pagination__arrow pagination__arrow--next" aria-label="Next page"&gt;
    &lt;!-- SVG arrow icon --&gt;
  &lt;/a&gt;
&lt;/nav&gt;