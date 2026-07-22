# ease-stagger

Resolves #52047 — automatic staggered entrance delays for a list of children,
without hand-adding `delay-100`, `delay-200`, etc. to every element.

## Problem

The Layout demo faked a staggered entrance by manually applying a different
`delay-*` class to each child. That doesn't scale: every time an item is
added, removed, or reordered, someone has to re-number all the delay classes.

## Solution

A single container class, `ease-stagger`, applied to the **parent**. Each
direct child automatically receives an incrementing `animation-delay` based
on its position, via a pre-generated `:nth-child(1..30)` chain multiplying a
CSS custom property (`--ease-stagger-step`) by the child's index. No JS, no
build step — matches the framework's "link one file and it works" philosophy.

## Usage

```html
<div class="ease-stagger">
  <div class="ease-fade-in">First</div>
  <div class="ease-fade-in">Second</div>
  <div class="ease-fade-in">Third</div>
</div>
```

Each child still supplies its own entrance animation class
(`ease-fade-in`, `ease-slide-up`, etc.) — `ease-stagger` only adds the delay.

### Modifiers

```html
<!-- Adjust the per-child step -->
<div class="ease-stagger ease-stagger-fast">...</div>  <!-- 40ms  -->
<div class="ease-stagger">...</div>                    <!-- 80ms  (default) -->
<div class="ease-stagger ease-stagger-slow">...</div>   <!-- 160ms -->

<!-- Delay the whole group before it starts staggering -->
<div class="ease-stagger ease-stagger-delay-md">...</div>
```

Or override the CSS variables directly for full control:

```css
.my-list {
  --ease-stagger-step: 120ms;
  --ease-stagger-start: 250ms;
}
```

## Notes / limitations

- Covers up to 30 direct children out of the box (a generated `:nth-child`
  chain, same technique used for `delay-*`). Beyond that, extra children
  simply keep the delay of the 30th item — extendable by adding more rules
  if a use case needs it.
- `animation-fill-mode: both` is set on `.ease-stagger > *` so children stay
  hidden/unanimated during their delay instead of flashing visible first.
- Purely additive: doesn't change any existing class, so it's safe to drop
  into `core/animations.css` or `core/utilities.css` alongside the existing
  `delay-*` utilities.

## Files

- `style.css` — the utility (drop-in, framework-scoped with `ease-` prefix)
- `demo.html` — before/after comparison, opens directly in a browser
