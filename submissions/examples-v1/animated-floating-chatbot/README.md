# Animated Floating Chatbot Widget

A sleek, modern, and fully responsive **Floating Chatbot Widget** perfect for customer support, lead generation, and user engagement. This example demonstrates how to combine **EaseMotion CSS** for a pulsing floating action button, smooth window morphing transitions, and bouncy quick-reply chips to create an engaging, interactive support experience.

## 🚀 Features

- **Pulsing Floating Button**: The chat FAB uses `ease-pulse` to continuously draw the user's attention, complete with a notification badge.
- **Smooth Window Transition**: The chat window scales and fades in smoothly from the bottom right using CSS transitions.
- **Staggered Message Entrances**: Bot messages and quick replies fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Bouncy Quick Replies**: Suggestion chips pop in using `ease-bounce-in` with staggered delays for a playful feel.
- **Interactive Hover States**: Uses `ease-hover-grow` on buttons for satisfying tactile feedback.
- **Simulated Chat Logic**: Includes JavaScript to handle sending messages and simulating bot replies.
- **Fully Responsive**: On mobile devices, the chat widget expands to fill almost the entire screen for a better mobile UX.

## 📂 File Structure

```text
submissions/examples/animated-floating-chatbot/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for widget layout, transitions, and responsive behavior
└── README.md    # Documentation