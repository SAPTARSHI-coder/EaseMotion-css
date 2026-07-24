# Wizard Step Progress

### What does this do?

It renders a horizontal step progress indicator for multi step forms and checkouts. Each step is a numbered circle joined by a connector, and steps show a done, active, or upcoming state. Done steps display a check mark and a filled connector.

### How is it used?

```html
<ol class="steps">
  <li class="is-done">Cart</li>
  <li class="is-active" aria-current="step">Payment</li>
  <li>Review</li>
</ol>
```

Add `is-done` to completed steps and `is-active` to the current one. The step numbers come from a CSS counter, so you never hand write them.

### Why is it useful?

Multi step flows like checkout and onboarding need a clear progress header. This renders a step progress bar with three states driven by simple classes, using only CSS and a counter for the numbers. The active step carries `aria-current` for assistive tech.
