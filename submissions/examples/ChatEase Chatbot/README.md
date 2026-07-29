# 🤖 ChatEase — Chatbot UI Demo (EaseMotion CSS)

Welcome to **ChatEase**, a highly responsive, modern chatbot UI built exclusively with HTML, CSS, and Vanilla JavaScript. This project serves as a masterclass demonstration of constructing a complex application layout without relying on heavy external frameworks. 

It implements the conceptual **EaseMotion CSS** utility framework for fluid micro-interactions and transitions.

## 🌟 Key Features

1. **Fluid Chat Interface**
   - User and Bot message bubbles with distinct styling.
   - Intelligent auto-scrolling to keep the newest messages in view.
   - Smooth `ease-fade-up` entrance animations for every message.

2. **Smart Input System**
   - Auto-resizing `<textarea>` that grows as you type.
   - "Enter to send, Shift+Enter for newline" logic built-in.
   - Send button state management (disables when empty).

3. **Fake AI Response Engine (Vanilla JS)**
   - No backend required! The application features a built-in knowledge base.
   - NLP-style intent matching (detects keywords within phrases).
   - Simulates processing delay dynamically based on response length.
   - Animated typing indicator (`ease-pulse` dots) while the bot "thinks."
   - Supports basic markdown formatting (Bold and Code Blocks).

4. **EaseMotion CSS Integration**
   - A custom-built utility animation system integrated into `style.css`.
   - Reusable classes: `.ease-fade-in`, `.ease-fade-up`, `.ease-pulse`, and `.ease-scale`.
   - Button micro-interactions using specific bounce easing curves.

5. **Advanced State Management**
   - **Dark Mode Toggle:** Flawlessly swaps CSS variables and persists user choice via `localStorage`.
   - **Clear Chat functionality:** Triggered via a custom-built, animated confirmation modal overlay.

6. **Fully Responsive (Mobile-First)**
   - Desktop uses a fixed sidebar layout.
   - Mobile uses a smooth slide-in drawer triggered by a hamburger menu.

## 📁 File Structure

```text
chatbot-ui/
│
├── demo.html      # The Core App: HTML structure + inline SVGs + Vanilla JS Engine
├── style.css      # The Styling Engine: CSS Reset + EaseMotion Framework + Layout styles
└── README.md      # Project Documentation