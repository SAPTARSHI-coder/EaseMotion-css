# SaaS Live Chat Widget

## Issue
**Issue #20907**: Advanced: SaaS Landing — Live Chat Widget

## Description
This submission implements a beautifully animated, fully responsive Live Chat Widget suitable for a modern SaaS landing page. It operates entirely without JavaScript, utilizing the hidden checkbox technique to manage the open/close state of the chat window.

## Implementation Details
- **HTML (`demo.html`)**: The widget structure includes the floating action button (FAB), the hidden checkbox, and the chat window (header, message body, input area).
- **CSS (`style.css`)**: 
  - CSS state transitions on the `#chat-toggle:checked` pseudo-class handle the modal popup animation.
  - The chat icon dynamically morphs into a close ("X") icon using rotation and scale transforms.
  - Chat messages feature delayed `cubic-bezier` pop-in animations that only trigger when the chat window is opened.
  - An infinite `@keyframes typingBounce` animation creates a realistic "agent is typing" indicator.

## Verification
Open `demo.html` in your browser. Click the floating chat bubble at the bottom right. Notice the smooth window scale-in and the sequential pop-in of the chat messages. Click the "X" button on the floating action button or in the chat header to dismiss it.
