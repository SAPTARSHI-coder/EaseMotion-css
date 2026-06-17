# Text Truncation Utilities

Adds single-line and multi-line text truncation with ellipsis for cards, tables, and constrained containers.

## Problem

Long text in constrained containers wraps awkwardly or breaks layouts. No utility classes exist for consistent truncation at 1, 2, or 3 lines.

## Proposed CSS to Add to `core/utilities.css`

```css
.ease-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ease-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ease-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ease-truncate-none {
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
  display: block;
  -webkit-line-clamp: unset;
}
```

## Usage

```html
<!-- Single line -->
<p class="ease-truncate">Very long title that should not wrap to the next line of the container</p>

<!-- Two lines -->
<h3 class="ease-truncate-2">Card title that should clamp at two lines maximum before showing ellipsis</h3>

<!-- Three lines -->
<p class="ease-truncate-3">Description text that can span up to three lines before being truncated with an ellipsis at the end</p>

<!-- Reset -->
<p class="ease-truncate-none">Remove truncation and show full content</p>
```

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed CSS
