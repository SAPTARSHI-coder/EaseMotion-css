# ease-overflow-anchor — Issue #23964

## What

Utility classes for the CSS `overflow-anchor` property, which controls **scroll anchoring** — the browser's behavior of adjusting scroll position to prevent visual jumps when content above the viewport changes.

| Class                        | Effect                                                               |
| ---------------------------- | -------------------------------------------------------------------- |
| `.ease-overflow-anchor-auto` | `overflow-anchor: auto` — enables scroll anchoring (browser default) |
| `.ease-overflow-anchor-none` | `overflow-anchor: none` — disables scroll anchoring                  |

## How

Apply to any scrollable container:

```html
<div class="ease-overflow-anchor-auto">
  <!-- scroll anchoring is active -->
</div>

<div class="ease-overflow-anchor-none">
  <!-- scroll anchoring is disabled — content changes above may shift the viewport -->
</div>
```

## Why

Scroll anchoring is a browser feature that prevents "janky" page jumps when content loads above your current scroll position (e.g., images, ads, or dynamic inserts). By default it is enabled (`auto`). However, in some cases — such as chat interfaces, infinite-scroll feeds, or real-time dashboards — you may want to disable it (`none`) to allow the scroll position to stay fixed relative to the bottom. These utilities make the property easy to apply without memorizing the keyword values.
