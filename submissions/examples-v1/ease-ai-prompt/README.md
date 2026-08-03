# ease-ai-prompt

A modern AI-style prompt input box featuring an auto-resizing textarea, attachment button, and an animated send button that activates once text is entered — inspired by modern AI chat applications.

## Features

- Rounded pill-style container with glowing focus ring
- Auto-resizing textarea (grows with content, caps at max height)
- Attachment button with playful rotate-on-hover
- Send button that transitions from muted to gradient-active state as text is typed
- Pop animation when send button activates
- Enter to send, Shift+Enter for new line
- Fully responsive

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-ai-prompt` markup structure from `demo.html`.
3. Include the JS block for auto-resize and send-button activation logic.

```html
<div class="ease-ai-prompt">
  <button class="ease-ai-prompt__attach" aria-label="Attach file">📎</button>
  <textarea class="ease-ai-prompt__textarea" rows="1" placeholder="Message the assistant..."></textarea>
  <button class="ease-ai-prompt__send" aria-label="Send message">↑</button>
</div>