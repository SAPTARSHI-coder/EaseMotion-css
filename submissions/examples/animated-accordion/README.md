# CSS-Only Smooth Animated Accordion

A modern, interactive Accordion/FAQ component that expands and collapses with smooth height and opacity transitions, built entirely without JavaScript.

## 🚀 Features

- **Pure CSS**: Uses the native `<details>` and `<summary>` HTML elements.
- **Accessible**: Built-in keyboard navigation (Tab/Space/Enter) and screen reader support without needing ARIA attributes.
- **Smooth Animation**: Utilizes modern CSS Grid (`grid-template-rows: 0fr to 1fr`) to transition the height of the content seamlessly.
- **Premium Aesthetics**: Features a sleek dark mode design, subtle glassmorphism effects, glowing borders on focus/hover, and rotating chevron icons.

## 🛠️ Implementation Details

The core of the animation logic relies on a wrapper element inside the `<details>` component:

```css
.ease-accordion .ease-accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.4s ease, opacity 0.4s ease;
}

details[open] .ease-accordion-content {
  grid-template-rows: 1fr;
  opacity: 1;
}

.ease-accordion .ease-accordion-inner {
  overflow: hidden;
}
```

This ensures that the content gracefully expands and fades in, providing a buttery-smooth user experience while adhering strictly to EaseMotion's JavaScript-free philosophy.

## 📁 File Structure

- `index.html`: The HTML structure containing the FAQ accordion.
- `style.css`: The CSS stylesheet with the `0fr` to `1fr` grid transitions and styling.
- `README.md`: Documentation for the component.
