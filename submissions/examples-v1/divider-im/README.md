# ease-divider

## What does this do?

A horizontal divider component with an optional centered text label — the classic "OR" divider seen between login options in auth forms. Pure CSS using flexbox with `::before`/`::after` pseudo-element lines. Also includes dashed, color, alignment, and vertical variants.

## How to use it

```html
<!-- Plain divider -->
<div class="ease-divider"></div>

<!-- With centered label -->
<div class="ease-divider"><span>OR</span></div>

<!-- Dashed variant -->
<div class="ease-divider ease-divider-dashed"><span>OR</span></div>

<!-- Color variants -->
<div class="ease-divider ease-divider-primary"><span>Primary</span></div>
<div class="ease-divider ease-divider-success"><span>Success</span></div>
<div class="ease-divider ease-divider-danger"><span>Danger</span></div>

<!-- Label alignment -->
<div class="ease-divider ease-divider-left"><span>Left</span></div>
<div class="ease-divider ease-divider-right"><span>Right</span></div>

<!-- Vertical divider (inside a flex row) -->
<div style="display:flex; align-items:center;">
  <span>Item one</span>
  <div class="ease-divider-vertical"></div>
  <span>Item two</span>
</div>
```

## How it works

- `.ease-divider` is a flex container; `::before`/`::after` pseudo-elements act as the lines on either side of an optional `<span>` label
- When no `<span>` is present, `:not(:has(span))` switches the lines from `border-bottom` to `border-top` so they form one continuous line instead of two stacked half-lines
- `.ease-divider-dashed` switches the border style to dashed
- `.ease-divider-left`/`-right` adjust the `flex` ratio of the two pseudo-elements to shift the label
- `.ease-divider-vertical` is a simple 1px-wide element for inline separators

## Why it fits EaseMotion CSS

A horizontal divider is a fundamental, frequently-needed primitive missing from the component library — especially the centered-label variant common in login/signup forms between auth options ("Sign in with Email" / "OR" / "Continue with Google"). Pure CSS, zero dependencies, fully composable with existing color tokens.
