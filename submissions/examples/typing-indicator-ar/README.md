# Chat Typing Indicator

## What does this do?
This adds an animated "typing indicator" — the familiar three bouncing dots seen in chat applications that signal someone is composing a message. The three dots bounce one after another in a smooth wave sequence using staggered CSS animation delays.

## How is it used?
Apply `.typing-indicator` alongside `.chat-bubble` to a container holding three `<span class="dot">` elements.

Example:
```html
<div class="chat-bubble typing-indicator">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
```

## Why is it useful?
- Demonstrates the power of staggered `animation-delay` — a single shared `@keyframes bounce` is applied to all three dots, but offset by `0s`, `0.18s`, and `0.36s` to produce a natural wave effect.
- Requires **zero JavaScript** — the animation loops infinitely using pure CSS.
- Includes a `prefers-reduced-motion` override so the dots remain visible but static for users who prefer reduced motion, ensuring full accessibility.
