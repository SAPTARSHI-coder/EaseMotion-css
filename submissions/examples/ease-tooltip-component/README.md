# EaseMotion Tooltip Component

A modern, highly customizable tooltip component for EaseMotion CSS. This component provides contextual hints and additional information when users hover over or focus on an element, improving usability and reducing UI clutter.

## Overview

The Tooltip Component is designed to be lightweight, accessible, and easy to integrate. It uses clean CSS classes for styling and requires absolutely no JavaScript. It is designed to look great out-of-the-box with a modern SaaS-style dashboard aesthetic.

## Features

- **Smooth Animations**: Includes subtle fade-in and slide effects for tooltips.
- **Hover & Focus**: Automatically shows on hover or focus-within for accessibility.
- **Delay Control**: Built-in delay to prevent flashing when moving the mouse quickly across elements.
- **Responsive & Dynamic**: Uses relative positioning to stay attached to the target element.
- **Reusable CSS Classes**: Built with a modular CSS architecture using variables for easy theming.
- **No Dependencies**: Uses 100% vanilla CSS. No JavaScript required.

## Variants

1. **Positions**: `ease-tooltip-top` (default), `ease-tooltip-bottom`, `ease-tooltip-left`, `ease-tooltip-right`.
2. **Styles**: 
   - Dark (default)
   - `ease-tooltip-light`: Light background with border.
   - `ease-tooltip-gradient`: Modern gradient background.
   - `ease-tooltip-minimal`: Text-only minimal design.
3. **Modifiers**:
   - `ease-tooltip-multiline`: Allows text to wrap for longer tooltips.
   - `ease-tooltip-no-delay`: Removes the hover delay.

## Tooltip Types & Use Cases

- **Simple Text Tooltips**: Quick hints on truncated text or standard buttons.
- **Icon Tooltips**: Explaining what an action icon does (e.g., settings, help, delete).
- **Form Field Tooltips**: Providing validation rules (e.g., password requirements) next to form labels.
- **Button Tooltips**: Explaining the consequence of an action before clicking.

## Usage Example

### HTML Structure

Wrap your trigger element (button, icon, text) inside a container with `ease-tooltip-target`. Place the tooltip `div` alongside it.

```html
<div class="ease-tooltip-target">
  <button class="btn">Hover Me</button>
  <div class="ease-tooltip ease-tooltip-top">
    This is a top tooltip
  </div>
</div>
```

### Multiline Tooltip

```html
<div class="ease-tooltip-target">
  <svg class="icon">...</svg>
  <div class="ease-tooltip ease-tooltip-right ease-tooltip-multiline">
    Need help? Click here to read our comprehensive guide.
  </div>
</div>
```

## Customization

You can easily customize the tooltips by overriding the CSS variables defined in `:root`:

```css
:root {
  --tooltip-bg-dark: #1f2937;
  --tooltip-text-dark: #f9fafb;
  --tooltip-bg-light: #ffffff;
  --tooltip-text-light: #111827;
  --tooltip-radius: 6px;
  --tooltip-delay: 0.3s;
  /* Add more overrides here */
}
```
