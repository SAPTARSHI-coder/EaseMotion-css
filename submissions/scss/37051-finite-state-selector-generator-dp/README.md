# Finite-State Selector Generator

## 1. What does this do?

Generates `[data-state]` / `[data-next]` CSS selectors from a declarative list of states and transitions, instead of hand-writing each one.

## 2. How is it used?

```scss
$states: (idle, loading, success, error);

.button {
  @include finite-state($states: $states) using ($state) {
    @if $state == loading {
      pointer-events: none;
    }
  }
}
```

Applied in markup as:

```html
<button class="button" data-state="loading">Save</button>
```

## 3. Why is it useful?

States are declared once and selectors are derived automatically, keeping state-driven styling consistent, DRY, and compile-time only — in line with EaseMotion CSS's philosophy of generating plain, framework-agnostic CSS from small, declarative SCSS utilities.
