# CSS Container Query Component

## What does this do?
This component provides a responsive card layout that adapts its structure based on the width of its parent container using CSS container queries (`@container`), rather than traditional viewport media queries (`@media`).

## How is it used?
Wrap the card inside a container element with the `cq-card-container` class. The `.cq-card` will automatically adjust its layout (transitioning from a stacked layout to a side-by-side layout) when the container reaches certain width thresholds (500px and 750px in this demo).

```html
<div class="cq-card-container">
    <article class="cq-card">
        <div class="cq-card-image" role="img" aria-label="Image description"></div>
        <div class="cq-card-content">
            <h3 class="cq-card-title">Card Title</h3>
            <p class="cq-card-text">Card description goes here.</p>
            <button class="cq-card-btn">Action</button>
        </div>
    </article>
</div>
```

## Why is it useful?
Container queries allow developers to create truly modular, portable UI components. A component can style itself based on the space it's given within its container layout context. This means the exact same card HTML can be used in a narrow sidebar or a wide main content grid, and it will perfectly adapt its layout autonomously without relying on complex, context-dependent media queries or JavaScript resizer observers. This aligns perfectly with EaseMotion's goal of providing powerful, dependency-free modern CSS solutions.
