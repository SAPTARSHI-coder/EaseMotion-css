# Live Chat Widget

This is a self-contained example demonstrating how to create a modern, animated live chat widget with floating bubble, message history, typing indicator, quick replies, and smooth animations using minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 💬 **Floating Chat Bubble:** Animated pulse effect with unread message badge.
- 🎨 **Smooth Transitions:** Scale and fade animations for open/close.
- 💭 **Message Bubbles:** Distinct styles for sent and received messages.
- ⌨️ **Typing Indicator:** Animated dots showing agent is typing.
- ⚡ **Quick Replies:** Pre-defined response buttons for common queries.
- 📎 **Attachment & Emoji Buttons:** Ready for file upload and emoji picker integration.
- 🟢 **Online Status:** Animated status indicator showing agent availability.
- 📱 **Fully Responsive:** Adapts to mobile screens with full-height chat window.
- 🔔 **Unread Badge:** Notification badge for new messages.
- ⬇️ **Minimize Functionality:** Collapse chat to header only.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 🚫 **Minimal JavaScript:** Only for state management and message handling.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the chat widget HTML structure.
4. Include the JavaScript class at the bottom of your page.
5. Initialize: `const chatWidget = new ChatWidget();`
6. Click the chat bubble to open the conversation.

## HTML Structure

### Chat Bubble
```html
<button class="chat-bubble" id="chatBubble" aria-label="Open chat">
  <div class="chat-bubble__pulse"></div>
  <div class="chat-bubble__icon">
    <svg class="chat-icon"><!-- Chat icon --></svg>
    <svg class="close-icon"><!-- Close icon --></svg>
  </div>
  <div class="chat-bubble__badge" id="chatBadge">2</div>
</button>