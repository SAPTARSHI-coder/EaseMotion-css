# Magnetic Sibling Dim Hover

A premium UX pattern commonly used on pricing tiers, feature grids, or team pages. When a user hovers over a grid of cards, all the *other* cards gracefully dim and blur slightly to make the hovered one "pop".

### Usage
```html
<div class="ease-sibling-dim-container">
    <div class="ease-sibling-card">Card 1</div>
    <div class="ease-sibling-card">Card 2</div>
    <div class="ease-sibling-card">Card 3</div>
</div>
```

### Why is it useful?
Historically, achieving this "magnetic focus" effect required JavaScript. Developers would have to attach `onMouseEnter` and `onMouseLeave` event listeners to every card, update a state manager with the currently hovered ID, and re-render the sibling components with an inactive CSS class.

This submission implements a flawless pure CSS alternative using basic CSS selector cascading. 
1. When the `.ease-sibling-dim-container` (parent) is hovered, a CSS rule dims *every* `.ease-sibling-card` inside it.
2. Simultaneously, a more specific rule targets `.ease-sibling-card:hover`, overriding the parent's dimming effect and restoring full brightness (and optionally scaling it up) exclusively for the card the user is actively hovering.

This achieves a highly complex, state-driven visual effect natively in the browser with absolutely zero JavaScript overhead.
