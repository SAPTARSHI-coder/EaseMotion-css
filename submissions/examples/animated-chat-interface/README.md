# Animated Chat Interface

A clean, modern, and fully responsive **Chat/Messaging UI**. This example demonstrates how to use **EaseMotion CSS** to create smooth, directional message entrances and a continuous pulsing typing indicator, making the messaging interface feel alive and responsive without writing custom JavaScript animations.

## 🚀 Features

- **Directional Message Entrances**: Uses `ease-slide-in-left` for received messages and `ease-slide-in-right` for sent messages to simulate a natural conversation flow.
- **Staggered Load Sequence**: Uses `ease-delay-*` classes so the messages cascade in sequentially, mimicking a real-time chat loading.
- **Continuous Typing Indicator**: Uses `ease-pulse` with staggered delays on three dots to create a smooth, wave-like "user is typing" effect.
- **Interactive Elements**: Uses `ease-hover-grow` on header icons and the send button for tactile feedback.
- **Modern Messaging Aesthetic**: Features distinct bubble colors, rounded corners, and a clean input area.
- **Fully Responsive**: Expands to a full-screen mobile app layout on smaller devices.

## 📂 File Structure

```text
submissions/examples/animated-chat-interface/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, bubbles, and responsive behavior
└── README.md    # Documentation