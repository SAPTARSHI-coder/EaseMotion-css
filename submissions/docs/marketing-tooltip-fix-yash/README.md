# Marketing Tooltip Position Fix

## What does this do?

It fixes the mismatched arrow (indicator tip) color of the marketing-themed tooltips (`[data-theme="marketing"]`) when used in non-default positions (`bottom`, `left`, `right`).

## How is it used?

The fix overrides the border colors of the tooltip arrow (`::before` pseudo-element) to align with the adjacent edge of the indigo-to-purple background gradient (`linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`):

```css
/* Bottom Position (Arrow points up, touching top edge of gradient) */
.ease-tooltip[data-theme="marketing"][data-position="bottom"]::before {
  border-bottom-color: #6366f1;
}

/* Left Position (Arrow points right, touching right edge of gradient) */
.ease-tooltip[data-theme="marketing"][data-position="left"]::before {
  border-left-color: #8b5cf6;
}

/* Right Position (Arrow points left, touching left edge of gradient) */
.ease-tooltip[data-theme="marketing"][data-position="right"]::before {
  border-right-color: #6366f1;
}
```

## Why is it useful?

It ensures visual consistency and design polish across all placement options of the marketing tooltip system. Without this fix, the arrow remains dark gray or white, clashing with the violet gradient body of the tooltip.
