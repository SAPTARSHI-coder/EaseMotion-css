# Chat Typing Indicator

Animated typing indicator with three bouncing dots. Dots bounce with staggered animation delays. Pure CSS animation, no JS required for the dots.

## Features

- Three dots with bouncing animation via @keyframes
- Staggered animation delays (0s, 0.2s, 0.4s)
- Smooth cubic-bezier timing
- Chat bubble context with sent/received messages
- Toggle button for visibility

## Usage

Add `.ti-dot` spans inside `.ti-bubble-typing`. CSS handles the bounce animation via `tiBounce` keyframes with staggered delays.
