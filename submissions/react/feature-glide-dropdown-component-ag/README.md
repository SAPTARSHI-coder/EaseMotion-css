# Glide Dropdown Component

## Overview

This submission provides a reusable **Glide Dropdown Component** built with React and CSS. The component features a smooth glide animation for opening and closing, interactive hover effects, keyboard accessibility, and support for reduced motion preferences. It is fully self-contained, lightweight, and requires no external UI libraries.

---

## Technologies Used

- React (JSX)
- CSS3
- React Hooks (`useState`, `useEffect`, `useRef`)
- CSS Transitions
- CSS Transforms
- Media Query (`prefers-reduced-motion`)
- Semantic HTML & ARIA attributes

---

## Features

- Smooth glide-down opening animation
- Smooth glide-up closing animation
- Click outside to close the dropdown
- Escape key closes the dropdown
- Rotating dropdown indicator
- Keyboard accessible
- Accessible ARIA attributes
- Responsive and lightweight
- No external dependencies
- Supports reduced-motion accessibility preferences

---

## Component Appearance

- Modern rounded dropdown button
- Indigo primary button styling
- Smooth glide and fade animation
- Rotating dropdown arrow
- Elevated dropdown menu with subtle shadow
- Hover-highlighted menu items
- Clean and reusable UI

---

## Usage

Import the component:

```jsx
import GlideDropdown from "./GlideDropdown";
```

Render it inside your application:

```jsx
<GlideDropdown />
```

---

## Why is it useful?

This component provides a clean, reusable dropdown with modern motion effects while maintaining accessibility and performance. It aligns with EaseMotion CSS's animation-first philosophy by demonstrating smooth UI interactions using lightweight CSS transitions and React without relying on external libraries.

---

## Accessibility

- Uses semantic button elements
- Includes `aria-expanded`
- Includes `aria-haspopup`
- Includes `aria-controls`
- Supports keyboard interaction
- Closes with the Escape key
- Respects `prefers-reduced-motion`

---

## Files Included

- `GlideDropdown.jsx` – React component implementation
- `style.css` – Component styling and animations
- `README.md` – Documentation and usage guide