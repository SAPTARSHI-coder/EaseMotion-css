# Floating Orbit Tooltip - Accessible Web Layouts

A CSS tooltip component with floating orbit animation effect designed for accessible web interfaces.

## Files

- `demo.html` - Demo page showing accessible UI with tooltips
- `style.css` - Tooltip styles and animations

## Usage

Open `demo.html` in a browser and hover over interactive elements to see the floating orbit tooltip animation.

## Features

### Floating Orbit Animation
- Tooltip gently floats up and down on hover
- Green gradient with shadow effect
- Smooth continuous animation loop

### Accessibility Components
- Input fields with help tooltips
- Navigation items with descriptions
- Action buttons (submit, cancel, help)
- Icon buttons for accessibility settings

### Design System
- Clean accessible design
- High contrast text
- Clear focus indicators
- ARIA attributes support

## Classes

| Class | Description |
|-------|-------------|
| `ease-floating-tooltip-sb` | Floating orbit tooltip |
| `ease-orbit-btn-sb` | Help button with tooltip |
| `ease-input-accessible-sb` | Accessible input field |
| `ease-nav-item-sb` | Navigation item |
| `ease-access-btn-sb` | Accessible action button |
| `ease-icon-btn-sb` | Icon-only button |

## Accessibility Features

- ARIA labels for screen readers
- High contrast colors
- Clear visual focus indicators
- Keyboard navigable
- Descriptive tooltips

## Usage

Add `data-tooltip="Your text"` attribute to any element with `ease-floating-tooltip-sb` class:

```html
<button class="ease-floating-tooltip-sb" data-tooltip="Submit your form">
  Submit
</button>
```

Closes #46335
