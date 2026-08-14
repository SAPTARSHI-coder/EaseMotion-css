# State Machine Orchestrator KP

## What does this do?

State Machine Orchestrator KP adds a CSS-only workflow control surface for visualizing a release pipeline. It uses radio inputs, animated timeline progress, active nodes, and focused state cards to show queue, validation, execution, and recovery phases.

## How is it used?

Use semantic radio controls with labels to switch the workflow state. The timeline runner and cards respond entirely through sibling selectors.

```html
<input type="radio" name="machine-state" id="state-execute" />

<nav class="state-tabs" aria-label="Workflow states">
  <label for="state-execute">Execute</label>
</nav>

<div class="timeline" aria-hidden="true">
  <span class="runner"></span>
  <span class="node node-execute"></span>
</div>
```

## Why is it useful?

Complex products often need to explain state transitions, retries, and rollback routes without adding JavaScript to every documentation page. This example demonstrates advanced CSS state orchestration, responsive timeline direction changes, clear focus states, and reduced-motion support while keeping the markup portable.
