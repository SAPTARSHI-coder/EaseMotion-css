# Wiggle Tooltip Example

A lightweight and accessible tooltip component that performs a smooth wiggle animation when triggered. This example demonstrates how to create an engaging tooltip using only HTML and CSS.

## Features

- Smooth wiggle animation on hover and keyboard focus
- Pure HTML and CSS implementation
- Accessible using semantic HTML
- Supports keyboard navigation
- Respects `prefers-reduced-motion`
- Responsive and lightweight

## Folder Structure

```
feature-wiggle-tooltip-example-vk/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a web browser.
2. Hover over or focus on the button.
3. The tooltip appears with a smooth wiggle animation.

## Accessibility

- Uses a semantic `<button>` element.
- Tooltip uses `role="tooltip"`.
- Associates the tooltip using `aria-describedby`.
- Includes visible keyboard focus styles.
- Disables animations when users prefer reduced motion.

## Browser Support

Compatible with all modern browsers that support CSS animations and `prefers-reduced-motion`.