# Bouncing Typing Indicator (Chat Bubble)

## 1. What does this do?
An animated three-dot bouncing typing indicator displayed inside
a chat bubble, showing that someone is currently typing a message.

## 2. How is it used?

```html
<div class="chat-bubble">
  <div class="typing-indicator">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
```

Each dot bounces in sequence using staggered CSS animation delays,
creating the familiar "someone is typing" effect.

## 3. Why is it useful?
Typing indicators are a universal pattern in chat and messaging UIs.
This implementation uses a single CSS keyframe animation with staggered
delays — no JavaScript needed for the animation — fitting perfectly with
EaseMotion CSS's philosophy of lightweight, pure-CSS animation utilities.