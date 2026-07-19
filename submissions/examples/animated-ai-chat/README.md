# Modern AI Chat Conversation UI

A modern chat conversation card with distinct user/AI message bubbles, staggered message entrance animations, and an animated "typing" indicator. Pure HTML and CSS — no JavaScript required for the visuals.

## Features

- 💬 Clear visual distinction between user messages (right-aligned, gradient bubble) and AI messages (left-aligned, neutral bubble)
- ✨ Messages animate in with a staggered fade + slide-up entrance
- ⌨️ Animated three-dot "typing" indicator for AI responses in progress
- 🟢 Pulsing "Online" status indicator in the header
- 📱 Responsive — bubble widths and font sizes adapt on small screens
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css`, then build the chat card with a header, message list, and input row:

```html
<div class="chat-card">
  <div class="chat-header">
    <div class="chat-avatar">🤖</div>
    <div class="chat-header-text">
      <p class="chat-header-name">Ease Assistant</p>
      <p class="chat-header-status">Online</p>
    </div>
  </div>

  <div class="chat-messages">
    <div class="chat-row chat-row--ai">
      <div class="chat-row-avatar">🤖</div>
      <div>
        <div class="chat-bubble">Hi there! How can I help?</div>
        <span class="chat-time">10:02 AM</span>
      </div>
    </div>

    <div class="chat-row chat-row--user">
      <div class="chat-row-avatar">🧑</div>
      <div>
        <div class="chat-bubble">What are CSS keyframes?</div>
        <span class="chat-time">10:03 AM</span>
      </div>
    </div>

    <!-- Typing indicator, shown while a response is in progress -->
    <div class="chat-row chat-row--ai">
      <div class="chat-row-avatar">🤖</div>
      <div class="chat-typing" aria-label="AI is typing">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>

  <div class="chat-input-row">
    <input class="chat-input" type="text" placeholder="Type a message..." />
    <button class="chat-send-btn" aria-label="Send message">➤</button>
  </div>
</div>