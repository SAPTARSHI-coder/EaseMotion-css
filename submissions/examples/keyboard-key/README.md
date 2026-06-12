# Keyboard Key Styling Component

A CSS-only mechanical keycap component featuring a fluid pressed downward motion layout.

## Features
- Mechanical "pressed" animation effect using CSS transitions.
- Automatic `+` symbol generation for keyboard shortcuts.
- Support for both Light and Dark themes.

## Usage
1. Link the `style.css` file in your HTML `<head>`.
2. Use the following structure for your shortcuts:
   ```html
   <span class="shortcut">
       <kbd class="ease-kbd">Ctrl</kbd>
       <kbd class="ease-kbd">C</kbd>
   </span>