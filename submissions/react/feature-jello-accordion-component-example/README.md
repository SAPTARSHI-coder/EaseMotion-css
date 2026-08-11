# Jello Accordion Component

## Overview

The **Jello Accordion Component** is a reusable React accordion that demonstrates a smooth jello-style entrance animation using EaseMotion CSS utilities. It provides an accessible, responsive, and lightweight accordion suitable for FAQs, documentation, settings panels, and expandable content sections.

The component is built with React and follows accessibility best practices while respecting users who prefer reduced motion.

---

## Features

- 🎭 Smooth jello entrance animation
- ⚛️ Built with React
- 📱 Responsive layout
- ♿ Accessible with semantic HTML and ARIA attributes
- 🌙 Supports `prefers-reduced-motion`
- 🎨 Easily customizable with CSS

---

## Folder Structure

```
feature-jello-accordion-component-cv/
├── JelloAccordion.jsx
├── style.css
└── README.md
```

---

## Usage

```jsx
import JelloAccordion from "./JelloAccordion";

function App() {
  return (
    <JelloAccordion title="What is EaseMotion CSS?">
      EaseMotion CSS is a collection of reusable animation components and examples.
    </JelloAccordion>
  );
}

export default App;
```

---

## Accessibility

- Uses semantic HTML elements.
- Includes appropriate ARIA attributes.
- Keyboard accessible.
- Honors `prefers-reduced-motion: reduce` for users who prefer minimal animations.

---

## Technologies Used

- React
- CSS3
- EaseMotion CSS animation utilities

---

## Browser Compatibility

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

This component demonstrates how interactive UI elements can be enhanced with expressive animations while remaining accessible, responsive, and reusable. The jello entrance effect provides a playful visual cue without compromising usability.

---

## Related Issue

Closes #50773
