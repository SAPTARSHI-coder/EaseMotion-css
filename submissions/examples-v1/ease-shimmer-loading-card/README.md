# ease-shimmer-loading-card

## What does this do?
Displays a skeleton placeholder card — an avatar circle and two text lines — with a continuous left-to-right shimmering shine effect driven entirely by a CSS `linear-gradient` animation.

## How is it used?

Add `ease-shimmer-loading-card` to any wrapper element, then place the shaped placeholder blocks inside:

```html
<div class="ease-shimmer-loading-card" aria-busy="true" aria-label="Loading content">

  <!-- Avatar circle + two text lines (required layout) -->
  <div class="shimmer-avatar-row">
    <span class="shimmer-block shimmer-avatar"></span>
    <div class="shimmer-text-group">
      <span class="shimmer-block shimmer-line-primary"></span>
      <span class="shimmer-block shimmer-line-secondary"></span>
    </div>
  </div>

</div>
```

### Class reference

| Class | Role |
|---|---|
| `ease-shimmer-loading-card` | Card shell — sets background, border, padding, shadow |
| `shimmer-block` | Base shimmer element; attach to any `<span>` or `<div>` to give it the animated highlight |
| `shimmer-avatar` | 52 × 52 px circle (avatar placeholder) |
| `shimmer-avatar-row` | Flex row that aligns the avatar and text group side by side |
| `shimmer-text-group` | Column wrapper for the two text lines |
| `shimmer-line-primary` | Wide line (~65 % width) — represents a name or title |
| `shimmer-line-secondary` | Narrow line (~40 % width) — represents a handle or subtitle |

You can extend the card freely: any `<span class="shimmer-block">` with custom `height` and `width` inline styles will inherit the shimmer animation automatically.

## Why is it useful?
Skeleton screens reduce perceived load time by giving users an instant visual signal that content is on its way. This component fits EaseMotion CSS's philosophy of pure-CSS, zero-dependency effects — no JavaScript is needed, it works offline, and it respects `prefers-reduced-motion` by disabling the animation for users who have requested less motion. The shimmer uses `transform: translateX()` only, keeping it on the compositor thread and avoiding any layout or paint cost.

## Tech stack
- HTML
- CSS (no frameworks, no JavaScript, no external fonts)

## Preview
Open `demo.html` directly in any browser — no build step or server required.

## Accessibility notes
- The card element carries `aria-busy="true"` and a descriptive `aria-label` so screen readers announce it as loading content.
- Shimmer `<span>` elements carry `aria-hidden="true"` to keep them out of the accessibility tree.
- The `@media (prefers-reduced-motion: reduce)` block disables the animation entirely for users who have enabled that system preference.

## Contribution notes
- Class naming was chosen by the contributor following the `ease-` convention suggested by the issue.
- The maintainer may rename or adjust class names before merging per the standard curation workflow.
