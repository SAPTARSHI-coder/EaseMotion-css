# Animated Chat Messages (`ease-chat-xyz`)

A zero-dependency, CSS-only animated chat/messaging component designed for the **EaseMotion CSS** framework. Perfect for messaging interfaces with smooth message animations, typing indicators, and read receipts.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and CSS animations.
- **Animation-First**: Smooth message slide-in, typing indicator bounce, status pulse, and image hover effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Message Types**: Sent and received messages with distinct bubble styles.
- **Typing Indicator**: Animated bouncing dots showing when someone is typing.
- **Read Receipts**: Visual indicators for message delivery and read status.
- **Image Messages**: Support for image attachments with hover zoom.
- **Group Chat**: Avatar group display and sender identification.
- **Online Status**: Pulsing status indicator for online users.
- **Date Separators**: Visual dividers for message dates.
- **Accessible**: Proper ARIA labels and semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Chat Container
```html
<div class="ease-chat-xyz">
  <!-- Header -->
  <div class="ease-chat-xyz-header">
    <div class="ease-chat-xyz-avatar">
      <img src="avatar.jpg" alt="User">
      <span class="ease-chat-xyz-status"></span>
    </div>
    <div class="ease-chat-xyz-info">
      <h3 class="ease-chat-xyz-name">User Name</h3>
      <span class="ease-chat-xyz-status-text">Online</span>
    </div>
  </div>

  <!-- Body -->
  <div class="ease-chat-xyz-body">
    <!-- Messages go here -->
  </div>

  <!-- Input -->
  <div class="ease-chat-xyz-input-area">
    <input type="text" class="ease-chat-xyz-input" placeholder="Type a message...">
    <button class="ease-chat-xyz-send" aria-label="Send">
      <!-- Send icon -->
    </button>
  </div>
</div>