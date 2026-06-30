# Animated AI Chat Conversation Component

Closes #22562 — A modern animated AI chat interface inspired by ChatGPT,
Claude, and Gemini built with pure HTML and CSS plus minimal vanilla JS.

## Features

| Feature                  | Detail                                            |
| ------------------------ | ------------------------------------------------- |
| Glassmorphism UI         | backdrop-filter blur with semi-transparent panels |
| Animated message bubbles | cubic-bezier spring entrance with stagger delays  |
| Typing indicator         | 3-dot bounce animation synced to fake AI reply    |
| Hover effects            | Bubbles lift on hover with smooth box-shadow      |
| Status indicator         | Pulsing online dot in header                      |
| Avatar pulse glow        | Header bot avatar glows on loop                   |
| Quick suggestions        | Chip buttons that auto-fill the input             |
| Live send                | Type + Enter or click send to add messages        |
| Auto-scroll              | Chat body scrolls to latest message               |
| Responsive               | Adapts to mobile with 92vh height                 |

## CSS Animations Used

| Animation     | Element                       |
| ------------- | ----------------------------- |
| messageIn     | Every chat bubble (staggered) |
| typing-bounce | Typing indicator dots         |
| avatar-pulse  | Bot avatar glow               |
| blink         | Online status dot             |

## Files

- demo.html - fully interactive chat demo
- style.css - all glassmorphism, bubble, and animation styles
- README.md - this file

## Usage

Add class `message ai` for AI bubbles and `message user` for user bubbles.
Wrap in `.chat-container` with `.chat-header`, `.chat-body`, `.chat-footer`.
prefers-reduced-motion is fully respected.
