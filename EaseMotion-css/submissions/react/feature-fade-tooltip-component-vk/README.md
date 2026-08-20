# Fade Tooltip Component

A lightweight and accessible React tooltip component that displays additional information using a smooth fade animation. This example demonstrates how to build a reusable tooltip with React while respecting accessibility and reduced-motion preferences.

## Features

- Smooth fade-in and fade-out animation
- Built with React
- Keyboard accessible
- Uses semantic HTML and ARIA attributes
- Respects `prefers-reduced-motion`
- Lightweight and reusable

## Folder Structure

```
feature-fade-tooltip-component-vk/
├── FadeTooltip.jsx
├── style.css
└── README.md
```

## Usage

Import the component:

```jsx
import FadeTooltip from "./FadeTooltip";
```

Example:

```jsx
<FadeTooltip text="This is a tooltip">
  <button>Hover Me</button>
</FadeTooltip>
```

## Accessibility

- Uses `role="tooltip"`
- Associates the tooltip with its trigger using `aria-describedby`
- Supports keyboard navigation using `Tab`
- Tooltip appears on hover and keyboard focus

## Reduced Motion

The component respects the user's motion preferences by disabling animations when `prefers-reduced-motion: reduce` is enabled.

## Why Use This Component?

Fade tooltips provide contextual information without interrupting the user's workflow. They offer a clean, subtle animation while remaining accessible and easy to integrate into React applications.