# Cache Stampede Guard KP

## What does this do?

Cache Stampede Guard KP adds an operational component for visualizing how a burst of concurrent cache misses can overload an origin and how single-flight request coalescing prevents it. It includes a request fan-in, leader election, origin pressure chart, impact metrics, and live-to-protected simulation.

## How is it used?

Use a semantic checkbox to switch from the unprotected burst to the guarded state. Build the request path from flow stages and animated links.

```html
<input type="checkbox" id="enable-guard" />
<label for="enable-guard">Enable guard</label>

<section class="request-flow">
  <article class="flow-stage flow-stage--requests">184 requests</article>
  <span class="flow-link flow-link--fanin" aria-hidden="true"><i></i></span>
  <article class="flow-stage flow-stage--flight">Single-flight gate</article>
  <span class="flow-link flow-link--origin" aria-hidden="true"><i></i></span>
  <article class="flow-stage flow-stage--origin">Pricing origin</article>
</section>
```

## Why is it useful?

The component makes an invisible concurrency failure visible. Motion communicates request fan-in and leader resolution, while semantic controls, keyboard focus, responsive flow orientation, compact performance states, and reduced-motion support keep the example accessible and practical.
