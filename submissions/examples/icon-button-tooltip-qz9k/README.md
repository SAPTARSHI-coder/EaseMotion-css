# Icon Button with Tooltip

## What does this do?

A toolbar of icon-only buttons where each button's hover/focus tooltip is
generated CSS content reading directly from `data-tooltip` via `attr()` —
the same string that also names the button for assistive technology
through `aria-label`, so there's exactly one authored string per button,
not two that could drift apart.

## How is it used?

```html
<button class="ibt-btn" aria-label="Bold" data-tooltip="Bold">
  <svg aria-hidden="true">...</svg>
</button>
```

```css
.ibt-btn::after {
  content: attr(data-tooltip);
  /* positioning + hover/focus visibility */
}
```

## Why is it useful?

Icon-only buttons need an accessible name (via `aria-label`, since there's
no visible text for a screen reader to read) and, separately, sighted
users benefit from a tooltip confirming what the icon means before they
click. Authoring these as two independent strings — `aria-label="Bold"`
and a separately-typed tooltip element containing "Bold" elsewhere — means
a future edit to one (renaming the label to be more specific, say) can
silently miss updating the other, leaving the visible tooltip and the
screen-reader-announced name saying different things for the same button.
Deriving the tooltip's CSS content from `attr(data-tooltip)` reads it
straight from markup, and using the same value for both `aria-label` and
`data-tooltip` means editing a button's label always keeps both in sync,
since there's structurally only one place that value lives.

The tooltip appears identically on `:hover` and `:focus-visible`, so
keyboard users tabbing through the toolbar get the same confirmation
sighted mouse users do — a tooltip that only responds to `:hover` would
leave keyboard-only users with icon-only buttons and no visible
confirmation of what each one does before activating it.
