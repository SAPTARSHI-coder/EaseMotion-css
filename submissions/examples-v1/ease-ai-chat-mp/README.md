# ease-ai-chat-mp

## What does this do?

A modern AI chat conversation UI component with animated message bubbles, avatars, timestamps, and a bouncing typing indicator — built with pure CSS, no JavaScript.

## How is it used?

```html
<div class="ease-ai-chat-mp">
  <!-- User message -->
  <div class="message user">
    <div class="avatar">U</div>
    <div class="message-wrap">
      <div class="bubble">Explain container queries in CSS.</div>
      <span class="timestamp">9:41 AM</span>
    </div>
  </div>

  <!-- AI message -->
  <div class="message ai">
    <div class="avatar">AI</div>
    <div class="message-wrap">
      <div class="bubble">
        Container queries allow components to adapt based on the size of their
        parent container.
      </div>
      <span class="timestamp">9:41 AM</span>
    </div>
  </div>

  <!-- Typing indicator -->
  <div class="message ai typing">
    <div class="avatar">AI</div>
    <div class="bubble">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</div>
```

### CSS Variables

| Variable               | Default   | Description               |
| ---------------------- | --------- | ------------------------- |
| `--chat-bg`            | `#0f0f0f` | Chat container background |
| `--chat-user-bubble`   | `#6d28d9` | User message bubble color |
| `--chat-ai-bubble`     | `#1e1e2e` | AI message bubble color   |
| `--chat-user-text`     | `#ffffff` | User message text color   |
| `--chat-ai-text`       | `#e0e0e0` | AI message text color     |
| `--chat-avatar-size`   | `2rem`    | Avatar circle diameter    |
| `--chat-border-radius` | `1rem`    | Bubble corner radius      |
| `--chat-max-bubble`    | `70%`     | Maximum bubble width      |

## Why is it useful?

AI chat interfaces are one of the most common UI patterns in modern web applications. This component provides a polished, ready-to-use conversation layout — complete with fade-in entry animations and a bouncing typing indicator — using only CSS, which aligns directly with EaseMotion CSS's philosophy of expressive, animation-first, dependency-free UI utilities.
