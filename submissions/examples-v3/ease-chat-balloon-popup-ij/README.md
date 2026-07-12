# Chat Balloon Popup

A chat message component with balloon-style messages that pop up with a scale and opacity entrance animation.

## Features

- Messages animate in with scale + translateY effect
- Alternating left/right alignment (user vs. other)
- Send button to add new messages dynamically
- Scrollable chat container

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--chat-duration` | `0.4s` | Duration of the popup animation |
| `--chat-user-bg` | `#4f8ef7` | Background color of user messages |
| `--chat-other-bg` | `#e8e8e8` | Background color of other messages |
| `--chat-text-color` | `#333333` | Text color for messages |
| `--chat-radius` | `18px` | Border radius of chat bubbles |

## Usage

Include `style.css` and `demo.html` in your project. Messages use `.chat-message.user` or `.chat-message.other` for alignment.
