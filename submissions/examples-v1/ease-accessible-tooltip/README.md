# ease-accessible-tooltip

A CSS-only accessible tooltip pattern with keyboard focus, ARIA attributes, and screen-reader support.

## Accessibility pattern

An accessible tooltip requires all of the following:

1. **Focusable trigger** — Use a `<button>`, `<a>`, or an element with `tabindex="0"`. Keyboard users must be able to reach the trigger via Tab.
2. **`aria-describedby`** — The trigger references the tooltip element's `id` so assistive technology can announce the description.
3. **`role="tooltip"`** — The tooltip content element uses `role="tooltip"` with a matching `id`.
4. **`:focus-within` visibility** — Show the tooltip on both `:hover` and `:focus-within` so keyboard users see the same content as mouse users.
5. **`.ease-sr-only` for icon-only buttons** — Icon buttons need a visible `aria-label` and/or an `.ease-sr-only` span so screen readers get a clear name.

## Complete HTML pattern

```html
<div class="ease-tooltip-wrapper">
  <button type="button" aria-describedby="tooltip-save">Save document</button>
  <span id="tooltip-save" role="tooltip" class="ease-tooltip">
    Saves your current progress
  </span>
</div>
```

## Why the trigger must be focusable

Keyboard users navigate with Tab and Enter/Space — they cannot hover. A plain `<div>` without `tabindex="0"` is not in the tab order and will never receive focus, so the tooltip stays hidden and `aria-describedby` is never meaningfully exposed. Always use a semantic interactive element (`<button>`, `<a>`) or add `tabindex="0"` when no better element fits.

## Reduced motion

Inside `@media (prefers-reduced-motion: reduce)`, tooltip slide/fade transitions are disabled. The tooltip still appears on hover and focus, but without animated movement.
