# Chat Message Input (ease-chat-input)

Chat input field with character counter and animated send button state.

## Files

- demo.html - Interactive demo
- style.css - Chat input styles
- README.md - Documentation

## Features

- 📝 Input + send button
- 📊 Character counter fades in when typing
- 🚀 Send button: scale + rotate on submit
- ✨ Success flash after send
- ⌨️ Enter key to send
- 📱 Auto-resize textarea

## Usage

```html
<div class="chat-input-container">
  <div class="chat-input-wrapper">
    <textarea class="chat-input" id="chatInput" maxlength="500"></textarea>
    <button class="send-btn" id="sendBtn">
      <span class="send-icon">➤</span>
    </button>
  </div>
  <div class="input-footer">
    <div class="character-counter" id="charCounter">
      <span id="charCount">0</span> / 500
    </div>
  </div>
</div>
```
