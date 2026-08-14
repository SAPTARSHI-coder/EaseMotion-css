# Glassmorphic User Profile Status Switcher

A modern glassmorphic user profile status switcher built using pure HTML and CSS. The component features a frosted glass profile card, animated status indicators, a smooth dropdown menu, and customizable status options while maintaining accessibility and responsive design.

---

## Features

- Pure HTML5 and CSS3
- Glassmorphic profile card with backdrop blur
- Animated pulsing status indicator
- CSS-only dropdown interaction
- Status options: Online, Busy, Away, and Invisible
- Dynamic avatar status ring using CSS custom properties
- Custom status message input
- Fully responsive layout
- Lightweight and easy to customize
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
glassmorphic-user-status-switcher-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Click the profile avatar or dropdown arrow to open the status menu.
3. Select a status to update the profile status indicator.
4. Enter a custom status message using the input field.

---

## CSS Custom Properties

```css
:root{
    --status-color:#22c55e;
    --radius:20px;
    --shadow:0 8px 32px rgba(0,0,0,.4);
}
```

The active status color automatically changes based on the selected profile status.

---

## Accessibility

- Keyboard-friendly controls using native HTML inputs and labels.
- High-contrast status indicators for improved visibility.
- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Semantic HTML structure for better accessibility.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.