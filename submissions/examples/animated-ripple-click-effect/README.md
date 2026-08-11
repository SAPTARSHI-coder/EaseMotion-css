# Ripple Click Effect

A Material-style ripple that expands from the exact click point on a button and fades out.

## What it does
On click, a small circle element is created at the pointer's position, animated to scale up and fade via CSS keyframes, then removed after the animation ends.

## How to use it
1. Add `ripple` class and `data-ripple` attribute to any button.
2. Include the click-handler JS snippet — it works for any number of `[data-ripple]` elements.

```html
<button class="btn ripple" data-ripple>Click Me</button>