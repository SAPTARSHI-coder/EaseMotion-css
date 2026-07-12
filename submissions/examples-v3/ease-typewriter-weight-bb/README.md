# Typewriter Loop with Variable Weight Shift

A responsive typographic loop shifting weights dynamically during execution.

## What does this do?
It types characters sequentially inside a terminal-like HUD display module, while dynamically interpolating the variable font-weight metrics (`200` to `800`) relative to typing progression limits.

## How is it used?
Configure standard containers with the typewriter classes and apply the active character output triggers:

```html
<div class="typewriter-box">
  <span class="mono-prefix">> dev.status: </span>
  <span class="dynamic-text" id="typewriter-text"></span>
  <span class="cursor-blink">|</span>
</div>
```

## Why is it useful?
It creates modern developer status monitors and interactive hero headers, leveraging variable weight fonts to convey tactile terminal feedback.
