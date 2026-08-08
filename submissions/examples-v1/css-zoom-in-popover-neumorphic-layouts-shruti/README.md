# Zoom-In Popover – Neumorphic Soft

A responsive **pure CSS Zoom-In Popover** inspired by modern Neumorphic Soft UI.

## Features

- Pure CSS (No JavaScript)
- Smooth Zoom-In animation
- Soft neumorphic shadows
- Keyboard accessible
- Responsive layout
- Easily customizable through CSS variables

## Files

```
demo.html
style.css
README.md
```

## Customization

```css
:root{
  --ease-popover-duration:0.35s;
  --ease-popover-easing:cubic-bezier(.22,1,.36,1);
  --ease-popover-scale:0.75;
}
```

## Accessibility

- Supports keyboard navigation using `:focus-visible`
- Uses `role="tooltip"`
- Responsive across screen sizes

## Usage

Hover or focus the button to display the Zoom-In popover.