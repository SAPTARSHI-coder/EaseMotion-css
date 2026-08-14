# ♿ EaseMotion Accessibility Playground

**Build motion that everyone can use.**

A dependency-free UI playground demonstrating how to build modern, motion-rich interfaces that are fully accessible and WCAG compliant. 

Unlike most animation libraries that treat accessibility as an afterthought, **EaseMotion** proves that you can have beautiful glassmorphic designs and smooth transitions without sacrificing usability for keyboard users, screen readers, or individuals who prefer reduced motion.

---

## 🌟 The Philosophy

Animations should enhance the user experience, not get in the way. 
This playground is built on three core principles:
1. **Focus is Sacred:** Keyboard users deserve beautiful, highly visible focus indicators.
2. **Respect User Preferences:** Animations must instantly disable or gracefully degrade when `prefers-reduced-motion` is detected.
3. **Semantic Motion:** Motion should guide the eye and convey state (like errors or success) while remaining invisible to screen readers, which rely on proper ARIA tags instead.

---

## 🚀 Playground Features

Explore the `demo.html` file to interact with these accessible UI patterns:

- ⌨️ **Keyboard Navigation Tracker:** Real-time visualizer showing how to navigate with `Tab`, `Space`, `Enter`, and `Escape`.
- 🛑 **Reduced Motion Toggle:** Globally scales back `transform` and `bounce` animations to simple opacity fades for vestibular safety.
- 🎨 **Color Contrast Validator:** Demonstrates AAA vs. failing contrast ratios in both light and dark modes.
- 🪟 **Focus-Trapped Modal:** A fully accessible dialog that traps keyboard focus inside and closes seamlessly with the `ESC` key.
- 📝 **Live Form Validation:** Accessible forms that gently animate errors while announcing them politely to screen readers using `aria-live`.
- 📂 **Semantic Accordions:** Grid-animated accordions fully controllable via keyboard with proper `aria-expanded` and `aria-hidden` state management.
- 🔔 **Non-Disruptive Toasts:** Toast notifications that announce themselves to screen readers without stealing keyboard focus.
- 👁️ **Screen Reader Utilities:** Examples of visually hidden text (`.sr-only`) that provide context to assistive technologies.

---

## 🛠️ Tech Stack & Structure

This project is **100% dependency-free**. No React, no Vue, no external animation libraries.

- **HTML5:** Semantic markup and ARIA attributes.
- **CSS3:** Custom properties (variables), glassmorphism, and the `EaseMotion` utility class system.
- **Vanilla JS:** Lightweight logic for focus trapping, theme toggling, and state management.

### Files
```text
├── demo.html     # The main interactive playground
├── style.css     # Separated stylesheet containing the EaseMotion a11y classes
└── README.md     # Documentation