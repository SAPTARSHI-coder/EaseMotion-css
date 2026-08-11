# ease-pagination-pr

Pagination component with active, disabled, and hover states for navigating page numbers.

## Features

- Previous/next arrows with disabled state
- Numbered pages with active highlight
- Hover effect on clickable items
- Ellipsis (`…`) for skipped pages
- 3 size variants: small, default, large
- Accessible with `aria-label` and `aria-current`

## Files

- `style.css` — the pagination styles
- `demo.html` — working demo with 3 size variants
- `README.md` — usage documentation

## Usage

```html
&lt;&lt;nav aria-label="Pagination"&gt;
  &lt;ul class="pagination-pr"&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;a href="#" class="pagination-pr-link pagination-pr-disabled" aria-label="Previous page"&gt;←&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;a href="#" class="pagination-pr-link"&gt;1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;a href="#" class="pagination-pr-link pagination-pr-active" aria-current="page"&gt;2&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;a href="#" class="pagination-pr-link"&gt;3&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;span class="pagination-pr-ellipsis"&gt;…&lt;/span&gt;
    &lt;/li&gt;
    &lt;li class="pagination-pr-item"&gt;
      &lt;a href="#" class="pagination-pr-link" aria-label="Next page"&gt;→&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;