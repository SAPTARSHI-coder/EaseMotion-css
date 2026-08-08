# Idempotency Request Ledger KP

## What does this do?

Idempotency Request Ledger KP adds a responsive operational component for tracing how repeated API writes resolve to one safe response. It includes status filters, animated request-to-key flows, processed and replayed states, ledger metrics, and a compact mobile layout.

## How is it used?

Use semantic radio inputs to drive the ledger filters, then compose each request from a summary, resolution flow, and footer.

```html
<input type="radio" name="request-filter" id="filter-replayed" />

<span class="filter-tabs" role="group" aria-label="Filter requests">
  <label for="filter-replayed">Replayed <i>1</i></label>
</span>

<article class="request-row request-row--replayed">
  <span class="resolution-flow">
    <span class="flow-node">Received again</span>
    <span class="flow-line flow-line--replay" aria-hidden="true"><i></i></span>
    <span class="flow-node flow-node--key">Matching key</span>
    <span class="flow-line flow-line--replay" aria-hidden="true"><i></i></span>
    <span class="flow-node flow-node--replay">Cached response</span>
  </span>
</article>
```

## Why is it useful?

The component turns an abstract backend guarantee into an inspectable UI pattern. Motion clarifies request resolution, color distinguishes new and replayed responses, and semantic controls preserve keyboard focus while CSS-only filtering, responsive layouts, and reduced-motion support keep the example practical.
