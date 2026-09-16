# CSS Multi-select Checkbox List

A checkbox list with a "select all" toggle and an animated count badge
showing how many items are currently selected.

## Files

- `demo.html` — standalone demo page
- `style.css` — all styles (prefixed with `ease-`)

## How it works (CSS-only parts)

- **Custom checkbox styling**: each `<input type="checkbox">` is
  visually hidden; its `<label>` renders a styled box with an SVG
  checkmark that fades/scales in via `:checked + .ease-item-label`.
- **Live count badge**: a CSS counter (`ease-checked-count`) is reset
  on the list container and incremented once per checked item. The
  badge — positioned later in the DOM — reads the accumulated total
  with `content: counter(ease-checked-count)`, giving a live "N
  selected" count with zero JavaScript.
- **Badge visibility & animation**: `:has()` hides the badge when
  nothing is selected, and a `@keyframes` pop animation plays when its
  content changes.
- **Footer summary**: the same counter renders "N of 5 items selected".

## The one place JavaScript is used

A small (~15-line) script in `demo.html` handles what's genuinely
impossible in HTML/CSS: making "select all" check/uncheck the other
boxes, and setting the native `.indeterminate` property (there's no
CSS/HTML way to express "some but not all checked"). Every visual
effect — checkmark animation, badge, row highlight, focus rings —
stays pure CSS.

## Accessibility

- Every checkbox has a real `<label for="">`.
- The list lives in a `<form>` labelled via `aria-labelledby`.
- The count badge is `role="status" aria-live="polite"`.
- Decorative checkmark SVGs are `aria-hidden="true"`.
- Visible `:focus-visible` outlines throughout.
- All animation disabled under `prefers-reduced-motion: reduce`.

## Responsive behavior

Caps at 420px wide; item "meta" text hides under `max-width: 420px`.

## Customization

| Property | Purpose |
|---|---|
| `--ease-accent` | Checked-state / badge color |
| `--ease-border` | Border color |
| `--ease-text` | Primary text color |
| `--ease-muted` | Secondary text color |