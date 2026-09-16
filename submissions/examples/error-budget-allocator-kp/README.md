# Error Budget Allocator KP

## What does this do?

Error Budget Allocator KP is an advanced CSS-only reliability planning console for visualizing launch, steady, burn, and freeze modes. It includes semantic radio controls, animated matrix cells, a conic remaining-budget ring, responsive policy cards, and reduced-motion support.

## How is it used?

Use radio inputs as the allocator mode controller. Labels switch the selected budget mode while sibling selectors update ring pressure, matrix intensity, and the active policy card.

```html
<input type="radio" name="budget" id="budget-burn" />
<label for="budget-burn">Burn</label>
<article class="policy-card card-burn">
  <h2>Burn response</h2>
</article>
```

## Why is it useful?

Reliability docs and platform dashboards often need to explain error budget policy without JavaScript. This example demonstrates advanced CSS state orchestration, clear operational motion, responsive layout, and accessible controls.
