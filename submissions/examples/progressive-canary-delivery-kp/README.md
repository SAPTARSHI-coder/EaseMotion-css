# Progressive Canary Delivery KP

## What does this do?

Progressive Canary Delivery KP is an advanced CSS-only release control example for explaining gradual rollout stages. It uses semantic radio controls, animated traffic lanes, a conic rollout gauge, stateful health cards, responsive layout, and reduced-motion support.

## How is it used?

Use radio inputs as the rollout controller. Labels switch the active stage, while sibling selectors update the traffic gauge, lane animation, and active health card.

```html
<input type="radio" name="rollout" id="rollout-50" />
<label for="rollout-50">50%</label>
<article class="health-card card-balance">
  <h2>Balanced split</h2>
</article>
```

## Why is it useful?

Release notes, platform docs, and internal dashboards often need to show staged rollout behavior without shipping JavaScript. This example demonstrates advanced CSS orchestration for progressive delivery, health gates, traffic splitting, and rollback visibility.
