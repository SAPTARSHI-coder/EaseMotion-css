# Skeleton Loading List

## What does this do?
A pure CSS shimmer skeleton for a vertical list of content items (feeds, comment threads, notification lists) that placeholders content while it loads, with no JavaScript required for the animation itself.

## How is it used?
Wrap the list in a status region for accessibility, then repeat `.skeleton-item` for as many rows as you need:

```html
<div role="status" aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading list content, please wait…</span>

  <ul class="skeleton-list" aria-hidden="true">
    <li class="skeleton-item">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line--title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line skeleton-line--short"></div>
      </div>
    </li>
    <!-- repeat .skeleton-item for as many rows as needed -->
  </ul>
</div>
```

Once real data arrives, hide/remove the skeleton list, render your actual content in its place, and set `aria-busy="false"` on the wrapper.

Available classes:
- `.skeleton-list` — the vertical list container (flex column)
- `.skeleton-item` — one row (avatar + text lines)
- `.skeleton-avatar` — circular image placeholder
- `.skeleton-content` — stacked line container
- `.skeleton-line` — a text-line placeholder (add `--title` or `--short` modifiers for varied widths)

See `demo.html` for a full working example, including an optional (clearly-commented, demo-only) JS toggle that swaps the skeleton for sample content to illustrate the intended before/after state.

## Why is it useful?
It expands EaseMotion CSS's ready-to-use animation/component collection with a very common loading pattern, letting developers drop in a polished, accessible skeleton state without writing JS or pulling in a separate loading-state library. It's responsive out of the box, respects `prefers-reduced-motion` with a static pulse fallback instead of forcing motion on everyone, and uses proper ARIA (`role="status"`, `aria-live="polite"`, `aria-busy`, `aria-hidden` on decorative placeholders, and screen-reader-only loading text) so it fits the framework's philosophy of accessible-by-default components.
