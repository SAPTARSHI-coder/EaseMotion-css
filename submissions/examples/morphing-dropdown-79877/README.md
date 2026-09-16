# Morphing Dropdown Documentation

A responsive Morphing Dropdown component featuring smooth shape transitions, animated expansion, and modern UI styling.

## Features

- CSS-only dropdown interaction
- Morphing animation effects
- Responsive layout
- Smooth open and close transitions
- Customizable colors and sizing
- Lightweight implementation

## Files

- demo.html
- style.css

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Basic structure:

```html
<div class="dropdown">
  <button class="dropdown-toggle">
    Select Option
  </button>

  <ul class="dropdown-menu">
    <li>Dashboard</li>
    <li>Projects</li>
    <li>Settings</li>
  </ul>
</div>
```

## Customization

Change accent color:

```css
.dropdown-toggle{
  background:#6366f1;
}
```

Adjust morphing animation:

```css
transition:.4s ease;
```

## Responsive Behavior

The dropdown adapts automatically to mobile, tablet, and desktop layouts.