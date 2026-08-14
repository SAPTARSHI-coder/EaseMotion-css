# Pure CSS Dynamic Anchor Tooltips

Tooltips are notoriously difficult to position dynamically. If a tooltip is too close to the edge of the screen, it clips out of view. Fixing this collision logic historically required heavy JS calculation libraries like Popper.js or Floating UI.

This submission utilizes the brand new, highly advanced CSS Anchor Positioning API to automatically tether and flip tooltips natively in the browser without a single line of JavaScript.

### Usage
```html
<!-- The Anchor Element -->
<button class="ease-anchor-btn">Hover Me</button>

<!-- The Tooltip Element -->
<div class="ease-tooltip-popover">
    I flip automatically if I hit the edge!
</div>
```

### Why is it useful?
Historically, dynamically positioning a tooltip required JavaScript to read the `getBoundingClientRect()` of the button, read the `window.innerHeight`, calculate the collision boundaries, and dynamically apply inline `top` or `bottom` pixel styles to the DOM.

With the new CSS Anchor Positioning API, we simply declare our button as an anchor using `anchor-name: --tooltip-anchor`. We then tether our tooltip absolute position using `bottom: calc(anchor(top) + 8px)`. 

The most powerful feature is `position-try-fallbacks: flip-block`. We instruct the browser's CSS engine: *"Try to position the tooltip above the button. If it collides with the edge of the viewport, automatically flip it to the block-axis opposite (below the button)."* The browser handles the complex collision math internally, completely removing the need for heavy JS tooltip libraries.

> **Note:** As CSS Anchor Positioning is a cutting-edge specification, support is currently rolling out across modern browsers (Chrome 125+). It represents the future of native UI development.
