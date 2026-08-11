# React Context Menu Popup with Scale & Fade Entrance

A reusable React context menu component featuring a smooth scale-and-fade entrance animation built with React Hooks and pure CSS.

## Features

- Smooth zoom-in and fade animation
- Built with React Hooks
- Keyboard accessible (Escape key closes the menu)
- Responsive layout
- Customizable using CSS variables
- No external dependencies

## Installation

Copy the component folder into your project.

```jsx
import ContextMenuPopup from "./ContextMenuPopup";
```

## Usage

```jsx
<ContextMenuPopup />
```

## CSS Variables

```css
:root {
  --popup-scale: 0.85;
  --popup-duration: 0.25s;
  --popup-easing: cubic-bezier(.22,1,.36,1);
  --popup-radius: 14px;
}
```

## Files

- ContextMenuPopup.jsx
- style.css
- README.md