# Migration Lock Monitor KP

## What does this do?

Migration Lock Monitor KP adds an operational dashboard for understanding a blocked database migration. It visualizes the lock dependency chain, affected query queue, deployment gate, and the state change after a blocking transaction is cancelled.

## How is it used?

Use a semantic checkbox to switch between the live blocked state and the simulated resolved state. Compose the dependency chain from graph nodes and animated links.

```html
<input type="checkbox" id="resolve-blocker" />

<label for="resolve-blocker">Simulate cancellation</label>

<section class="lock-graph">
  <article class="graph-node graph-node--migration">CREATE INDEX</article>
  <span class="graph-link graph-link--blocked" aria-hidden="true"><i></i></span>
  <article class="graph-node graph-node--blocker">Blocking transaction</article>
  <span class="graph-link graph-link--dependents" aria-hidden="true"
    ><i></i
  ></span>
  <article class="graph-node graph-node--queries">3 queries waiting</article>
</section>
```

## Why is it useful?

The component makes an invisible database dependency visible. Motion communicates lock direction and release order, while semantic controls, keyboard focus, responsive graph orientation, compact table states, and reduced-motion support keep the pattern accessible and practical.
