# CSS 3D Glass Credit Card Form

An incredibly interactive, zero-JavaScript checkout form component. This demo showcases how modern CSS pseudo-classes can be used to track form interaction state and trigger hardware-accelerated 3D object manipulation natively on the browser.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully responsive checkout experience consisting of two main parts: a standard payment form, and a 3D glassmorphism credit card visualization. As the user navigates the form, the visualization remains static. However, the moment the user clicks or focuses the "Security Code (CVV)" input field, the 3D credit card physically flips over in 3D space to reveal the magnetic strip and the CVV signature box on the back of the card. 

### 2. How is it used?

The magic behind this interaction relies completely on the modern CSS `:has()` pseudo-class, avoiding the need for any JavaScript event listeners (like `onFocus` or `onBlur`).

**The 3D Engine:**
The `.card-scene` wrapper applies a massive `perspective: 1200px` value. Inside it, the `.card-inner` wrapper controls the physical flipping motion using `transform-style: preserve-3d`. The Front and Back faces of the card are positioned absolutely on top of each other, with the Back face pre-rotated (`transform: rotateY(180deg)`) and both faces using `backface-visibility: hidden` to ensure you only ever see the correct side.

**The Interaction Trigger:**
We wrap both the Form and the Card inside a parent container (`.checkout-wrapper`). We then instruct the CSS to watch the parent wrapper; if it *contains* a CVV input field that currently has `:focus`, we apply a 180-degree flip to the card.

```css
/* If the checkout-wrapper HAS a focused #cc-cvv input inside it... */
.checkout-wrapper:has(#cc-cvv:focus) .card-inner {
  /* ...find the .card-inner and physically flip it backwards! */
  transform: rotateY(180deg);
}
```

### 3. Why is it useful?

Connecting visual animations to form states typically requires binding custom React hooks or plain JavaScript `addEventListener('focus')` scripts. This can lead to race conditions, memory leaks if not cleaned up properly, and unnecessary bundle bloat. 

By utilizing the CSS `:has()` relational pseudo-class, we create a direct, native, and robust state machine directly in the styling layer. Because the interaction modifies a `transform` property, the browser executes the entire flip animation on the GPU compositor thread, guaranteeing 60fps performance without ever interrupting the main thread where the user is actively typing their payment details.
