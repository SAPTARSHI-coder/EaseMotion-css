# Fix Accordion Smooth Transition

## What does this do?

Adds a smooth expand/collapse CSS transition to `.ease-accordion` panels.
Previously the panel snapped open or closed instantly with no animation.

## How is it used?

```html
<details class="ease-accordion" open>
  <summary class="ease-accordion__header">
    Panel Title
    <svg class="ease-accordion__icon" ...><!-- chevron --></svg>
  </summary>
  <div class="ease-accordion__panel">
    <div class="ease-accordion__panel-inner">
      <p>Panel content here.</p>
    </div>
  </div>
</details>
```

## Why is it useful?

Without a transition, the accordion toggle is jarring. Users have no visual
feedback that the panel is responding — especially important for users who rely
on motion cues. This fix uses the **grid-template-rows** interpolation trick
(`0fr` → `1fr`) to achieve a smooth, performant CSS-only animation that works
in all modern browsers without any height calculation in JavaScript.

The chevron icon also rotates 180° on toggle, giving a clear affordance.

Fixes: #35016
