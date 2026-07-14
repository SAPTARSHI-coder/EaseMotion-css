# Animated Card Hover Stack

### What does this do?

It presents a set of overlapping cards as a deck that fans out on hover, and brings any card to the front when it is clicked, using only CSS.

### How is it used?

```html
<div class="card-stack">
  <a class="stack-card card-1" id="card-1" href="#card-1">
    <h3>Featured Project</h3>
    <p>A CSS animation showcase</p>
  </a>
  <a class="stack-card card-2" id="card-2" href="#card-2">
    <h3>Design System</h3>
    <p>Component library</p>
  </a>
  <a class="stack-card card-3" id="card-3" href="#card-3">
    <h3>Case Study</h3>
    <p>UX research findings</p>
  </a>
</div>
```

Hovering the `.card-stack` fans the cards out with a spring easing. Each card is an anchor, so clicking it sets `:target` and lifts it above the others. No JavaScript is used.

### Why is it useful?

Card stacks present multiple items in a compact, tactile way that suits portfolio showcases, featured articles, or deal cards. This implementation leans on transforms, layered shadows, and a spring transition for a riffling feel, and it stays accessible: cards are keyboard focusable with a visible focus ring, and the animation is disabled under `prefers-reduced-motion: reduce`. That fits the animation-first philosophy of EaseMotion CSS.
