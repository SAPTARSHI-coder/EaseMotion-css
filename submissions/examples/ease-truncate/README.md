# ease-truncate Text Overflow Utilities

## What does it do?
Provides text truncation utilities for single-line ellipsis
and multi-line clamping using `-webkit-line-clamp`.

## How is it used?
```html
<!-- Single line ellipsis -->
<p class="ease-truncate">Very long text that gets cut off...</p>

<!-- Clamp to 2 lines -->
<p class="ease-clamp-2">Multi-line text clamped to 2 lines...</p>

<!-- Clamp to 3 lines -->
<p class="ease-clamp-3">Multi-line text clamped to 3 lines...</p>
```

## Classes
- `.ease-truncate` — single-line ellipsis
- `.ease-clamp-2` — clamp to 2 lines
- `.ease-clamp-3` — clamp to 3 lines
- `.ease-clamp-4` — clamp to 4 lines
- `.ease-clamp-5` — clamp to 5 lines
- `.ease-truncate-none` — disable truncation

## Tech Stack
- CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.