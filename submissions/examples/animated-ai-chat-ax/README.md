# Animated AI Chat Conversation Component

A modern animated AI chat interface inspired by ChatGPT, Claude, and Gemini. Built with pure HTML + CSS + minimal vanilla JS. No dependencies, no build step.

## Features
- Glassmorphism UI with backdrop-filter blur
- Animated message bubbles with spring cubic-bezier + stagger delays
- 3-dot typing indicator with bounce animation
- Pulsing online status dot and avatar glow
- Hover lift effect on all bubbles
- Quick suggestion chips that auto-fill the input
- Live send — type + Enter or click button
- Fake AI reply with typing delay
- Auto-scroll to latest message
- Fully responsive (mobile 92vh layout)
- prefers-reduced-motion respected

## CSS Animations Used
| Animation | Element |
|-----------|---------|
| messageIn | Every chat bubble (staggered) |
| typing-bounce | Typing indicator dots |
| avatar-pulse | Bot avatar glow |
| blink | Online status dot |

## Files
- demo.html – fully interactive chat demo
- style.css – all glassmorphism, bubble, and animation styles
- README.md – this file

## Usage
Add class `message ai` for AI bubbles and `message user` for user bubbles.
Wrap in `.chat-container` with `.chat-header`, `.chat-body`, `.chat-footer`.