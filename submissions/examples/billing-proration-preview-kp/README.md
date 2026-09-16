# Billing Proration Preview KP

## What does this do?

Billing Proration Preview KP adds an accessible plan-change preview with effective-date controls, animated alternate invoices, and transparent prorated cost details.

## How is it used?

Add the effective-date radio controls, then place the matching `charge-preview` panels inside a `preview-stack`.

```html
<div class="effective-picker__options">
  <input type="radio" id="effective-today" name="effective" checked />
  <label for="effective-today">
    <strong>Change today</strong>
    <small>Apply a prorated credit</small>
  </label>

  <input type="radio" id="effective-renewal" name="effective" />
  <label for="effective-renewal">
    <strong>Next renewal</strong>
    <small>Start on Aug 18</small>
  </label>
</div>
```

## Why is it useful?

It gives EaseMotion CSS a practical billing pattern where motion clarifies alternate charge states while preserving semantic controls, keyboard focus, responsive behavior, and reduced-motion support.
