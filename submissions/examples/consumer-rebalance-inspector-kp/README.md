# Consumer Rebalance Inspector KP

## What does this do?

Consumer Rebalance Inspector KP adds an operational component for inspecting how a streaming consumer group redistributes partitions when a member joins. It includes a coordinator phase rail, partition ownership lanes, lag meters, event context, and live-to-stable state simulation.

## How is it used?

Use a semantic checkbox to switch the component from the active rebalance to its settled assignment. Build the sequence from phase nodes and the ownership plan from consumer lanes.

```html
<input type="checkbox" id="settle-rebalance" />
<label for="settle-rebalance">Complete rebalance</label>

<article class="consumer-lane">
  <span class="consumer-id">consumer-01</span>
  <span class="partition-track">
    <span class="partition partition--stable">P0</span>
    <span class="partition partition--moving">P1</span>
  </span>
  <span class="lag-meter"
    ><i><b></b></i
  ></span>
</article>
```

## Why is it useful?

The component turns an abstract coordinator protocol into an inspectable flow. Motion communicates phase progress and ownership movement, while semantic controls, keyboard focus, responsive phase orientation, compact operational states, and reduced-motion support make the example practical.
