# Chat Message Input Component

This submission implements the `ease-chat-input` component — a chat-style message input with a fading character counter, an animated send button (scale + rotate), and a success flash after sending.

---

## Features

- **Character Counter**: Fades in from `opacity: 0` to `opacity: 1` the moment the user starts typing, and turns amber when approaching the 280-character limit.
- **Send Button Animation**: On click, the arrow icon rotates 45° and scales to 0.8 (a subtle loading indicator). After the message is appended the button flashes green with an elastic bounce via `@keyframes successFlash`.
- **Message Bubble Entrance**: Newly appended bubbles animate in with `bubbleIn` (fade + slight upward slide + scale).
- **Keyboard Submit**: Pressing `Enter` (without `Shift`) sends the message; `Shift+Enter` creates a newline.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click in the textarea and type — verify the character counter fades in.
3. Type 241+ characters — verify the counter turns amber.
4. Press **Send** or hit `Enter` — verify:
   - The send icon briefly rotates.
   - A new bubble appears with a slide-in animation.
   - The button flashes green.
5. Enable `prefers-reduced-motion` — verify all animations are suppressed and counter is immediately visible.
