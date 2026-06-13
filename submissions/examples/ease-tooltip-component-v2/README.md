<<<<<<< HEAD
# Ease Tooltip Component

## What does this do?
A modern, pure-CSS **Tooltip Component** designed to provide lightweight, high-performance contextual help, action hints, or input label details without writing any JavaScript. It features 8 coordinate placements, 10 aesthetic themes (including gradient support), smooth entry slide-in transitions, and keyboard focus states for accessibility.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Basic Tooltip
Add the trigger class `ease-tooltip-trigger`, specify a placement class (e.g., `ease-tooltip-top`), and include a `data-ease-tooltip` attribute:
```html
<button class="ease-tooltip-trigger ease-tooltip-top" data-ease-tooltip="Contextual details here">
  Hover or Focus Me
</button>
```

### 2. Sizing and Placement Options
You can configure the tooltip to display in 8 different directions:
- `.ease-tooltip-top` (Above center)
- `.ease-tooltip-top-start` (Above, aligned left)
- `.ease-tooltip-top-end` (Above, aligned right)
- `.ease-tooltip-bottom` (Below center)
- `.ease-tooltip-bottom-start` (Below, aligned left)
- `.ease-tooltip-bottom-end` (Below, aligned right)
- `.ease-tooltip-left` (Left center)
- `.ease-tooltip-right` (Right center)

Example for a right-aligned tooltip:
```html
<button class="ease-tooltip-trigger ease-tooltip-right" data-ease-tooltip="Aligned to the right side">
  Right Positioned
</button>
```

### 3. Themed Color Modifiers
Color variables can be customized using these classes:
- `.ease-tooltip-primary`
- `.ease-tooltip-secondary`
- `.ease-tooltip-success`
- `.ease-tooltip-warning`
- `.ease-tooltip-danger`
- `.ease-tooltip-info`
- `.ease-tooltip-light`
- `.ease-tooltip-dark`
- `.ease-tooltip-gradient`

Example for a success theme:
```html
<button class="ease-tooltip-trigger ease-tooltip-top ease-tooltip-success" data-ease-tooltip="Action completed successfully!">
  Success Check
</button>
```

## Features

- **No JavaScript Needed**: Pure CSS implementation using attributes and pseudo-elements.
- **Full Placements**: Top, bottom, left, right, and corner alignments covered.
- **A11y (Accessibility) Compliant**: Automatically triggers tooltips on keyboard `:focus-visible` (e.g. tabbing) as well as `:hover`.
- **Arrow Anchors**: Triangle arrow pointers align to match their placement background.
- **Hardware Accelerated**: Transforms and opacity properties drive the slide-in transition smoothly.
- **Flexible Styling**: Fully customized via CSS custom properties (`--tooltip-bg`, `--tooltip-color`, `--tooltip-arrow-color`).

## Tech Stack
- HTML
- CSS (Custom properties, transitions, absolute positioning offsets, borders for arrows)

## Preview
Open `demo.html` directly in your browser to test tooltip alignments, check color states, and verify accessibility tab navigation!

## Contribution Notes
- Class naming was handled by the contributor.
- Maintainer will rename to ease-* convention before merging.
=======
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
>>>>>>> 3da21299d8b2db0f7683beb1742d945c200efeb7
