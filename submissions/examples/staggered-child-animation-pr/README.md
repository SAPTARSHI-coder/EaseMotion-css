# staggered-child-animation-pr

## 1. What does this do?

Provides a set of pure CSS utility classes that animate sibling child elements one after another — a "stagger" effect — using only `animation-delay` on `:nth-child` selectors, with no JavaScript.

## 2. How is it used?

Add **two** classes to a container element:

1. An **animation class** — controls *how* children appear:
   - `stagger-fade-up` — fades in while sliding up
   - `stagger-fade-in` — fades in while scaling up
   - `stagger-slide-right` — slides in from the left

2. A **delay class** — controls the time gap between each child:
   - `stagger-100` — 100 ms between each child
   - `stagger-150` — 150 ms between each child
   - `stagger-200` — 200 ms between each child

### Example — card grid (100 ms stagger)

```html
<div class="card-grid stagger-fade-up stagger-100">
  <div class="card">Card 1 — animates at 100ms</div>
  <div class="card">Card 2 — animates at 200ms</div>
  <div class="card">Card 3 — animates at 300ms</div>
  <div class="card">Card 4 — animates at 400ms</div>
  <div class="card">Card 5 — animates at 500ms</div>
  <div class="card">Card 6 — animates at 600ms</div>
</div>
```

### Example — list items (150 ms stagger)

```html
<ul class="stagger-list stagger-slide-right stagger-150">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>
```

### Example — delay comparison (200 ms stagger)

```html
<div class="stagger-fade-in stagger-200">
  <div>Step 1</div>
  <div>Step 2</div>
  <div>Step 3</div>
</div>
```

The utility supports up to **6 children** out of the box (easily extensible by adding more `:nth-child` rules).

## 3. Why is it useful?

EaseMotion CSS is built around the idea that rich, meaningful motion should be available through simple class composition — not custom JavaScript per component. Staggered animations are one of the most commonly requested UI patterns (navigation menus, card grids, feature lists, onboarding steps), yet they almost always require a script in existing frameworks.

This utility fills that gap:

- **Zero JS** — motion is declarative and lives entirely in CSS
- **Composable** — any animation style × any delay step, mix and match freely
- **Accessible** — a `prefers-reduced-motion` media query disables all animations for users who prefer reduced motion, with no extra markup
- **Responsive** — no layout breakpoints required; works with any display model (grid, flex, block)
- **Lightweight** — three keyframe blocks + 18 `animation-delay` rules; fits well inside EaseMotion's utility-first architecture
