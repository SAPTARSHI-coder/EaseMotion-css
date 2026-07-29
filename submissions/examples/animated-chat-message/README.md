# Animated Chat Message

A responsive animated chat message component with sender/receiver
bubbles, staggered entry animations, hover effects, and a typing
indicator — pure HTML and CSS.

## Structure
animated-chat-message/
├── demo.html
├── style.css
└── README.md
## Usage

```html
<!-- Receiver message -->
<div class="chat-row receiver">
  <div class="chat-avatar">A</div>
  <div class="chat-bubble receiver-bubble">
    <p>Hey! How's the project going?</p>
    <span class="chat-time">9:41 AM</span>
  </div>
</div>

<!-- Sender message -->
<div class="chat-row sender">
  <div class="chat-bubble sender-bubble">
    <p>Going great!</p>
    <span class="chat-time">9:42 AM</span>
  </div>
  <div class="chat-avatar">R</div>
</div>

<!-- Typing indicator -->
<div class="chat-row receiver">
  <div class="chat-avatar">A</div>
  <div class="chat-bubble typing-bubble">
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  </div>
</div>
```

## Classes

| Class | Purpose |
|---|---|
| `chat-row receiver` | Incoming message row |
| `chat-row sender` | Outgoing message row |
| `chat-bubble receiver-bubble` | Dark incoming bubble |
| `chat-bubble sender-bubble` | Gradient outgoing bubble |
| `typing-bubble` | Animated typing indicator |
| `chat-avatar` | Circular avatar |
| `chat-time` | Timestamp inside bubble |

## Features
- Pure HTML & CSS — no JavaScript
- Slide-up + scale entry animation on each bubble
- Staggered delays for sequential message appearance
- Bouncing typing indicator dots
- Hover scale effect on bubbles
- Responsive layout
- Respects `prefers-reduced-motion`

## Use Cases
- Messaging app UI demos
- Support chat interfaces
- Collaborative platform mockups
- Portfolio showcases