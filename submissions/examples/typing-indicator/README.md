# Typing Indicator Dots

## 1. What does this do?
Three animated bouncing dots, commonly used as a typing indicator in chat applications, inside a styled chat bubble.

## 2. How is it used?
Add a `.chat-bubble` with a `.typing-dots` container holding three `.dot` elements. Each dot needs a `--i` value (0, 1, 2) for staggering.
```html
<div class="chat-bubble">
  <div class="typing-dots">
    <span class="dot" style="--i: 0"></span>
    <span class="dot" style="--i: 1"></span>
    <span class="dot" style="--i: 2"></span>
  </div>
</div>
```

## 3. Why is it useful?
A lightweight, pure-CSS typing indicator with staggered bounce animation. The chat bubble styling makes it ready-to-use. Respects `prefers-reduced-motion`.
