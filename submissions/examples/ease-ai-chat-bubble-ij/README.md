# Ease: AI Chat Bubble

A chat interface component with message bubbles that slide up with a spring animation. Includes a typing indicator with staggered dot pulses and a send button with feedback.

## Features

- User and AI message bubbles with translateY + opacity entrance
- Typing indicator with staggered scale-pulsing dots
- Send button scale feedback on click
- Auto-scroll to latest message
- Simulated AI response delay
- Custom properties for theme control

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--aich-duration` | `0.3s` | Bubble entrance duration |
| `--aich-user-bg` | `#4f46e5` | User message bubble background |
| `--aich-ai-bg` | `#ffffff` | AI message bubble background |
| `--aich-text-color` | `#1e1e2e` | Text color |
| `--aich-radius` | `18px` | Bubble border radius |
| `--aich-shadow` | `0 2px 12px rgba(0,0,0,0.08)` | Bubble box shadow |

## Usage

```html
<div class="chat-messages">
  <div class="message user"><div class="bubble">Hello</div></div>
  <div class="message ai"><div class="bubble">Hi there!</div></div>
</div>
<div class="typing-indicator" id="typingIndicator">...</div>
```

Add `.visible` to `typing-indicator` to show dots. Append new `.message` divs with a `.bubble` child. Import `style.css` and ensure Inter font is available.