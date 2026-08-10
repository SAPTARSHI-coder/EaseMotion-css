# Pivot Popover

## What does this do?
A React popover component that reveals its panel with a smooth "pivot" animation — a combined rotate + scale from the trigger's corner — instead of a plain fade or slide.

## How is it used?
```jsx
import PivotPopover from './PivotPopover';

<PivotPopover trigger={<span>Open menu</span>}>
  <p>Popover content goes here.</p>
</PivotPopover>

// Disabled state
<PivotPopover trigger={<span>Open menu</span>} disabled>
  <p>This won't open.</p>
</PivotPopover>
```

## Why is it useful?
Most popover libraries only fade or slide in. The pivot effect gives menus and tooltips a bit more personality while staying subtle and fast (250ms). The component is self-contained, keyboard-accessible (Escape to close, click-outside to close), uses proper ARIA attributes (`aria-haspopup`, `aria-expanded`, `role="dialog"`), and respects `prefers-reduced-motion`.

## Accessibility
- `aria-haspopup`, `aria-expanded`, and `aria-controls` on the trigger button
- `role="dialog"` on the popover panel
- Closes on `Escape` key and on click outside
- Disabled state removes interactivity via native `disabled` + `aria-disabled`
- Animation is skipped entirely under `prefers-reduced-motion: reduce`
