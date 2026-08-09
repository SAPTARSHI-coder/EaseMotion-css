# Neumorphic React Card Component

A clean, modern Soft-UI (Neumorphic) card template built using React and vanilla CSS. It includes both extruded (outer shadow) and sunken (inset shadow) elements, alongside interactive states for buttons.

## Features
- **Pure CSS Neumorphism:** Uses precise dual `box-shadow` values for a flawless soft plastic look.
- **Interactive States:** Buttons dynamically transition from flat/extruded to inset on click (`:active`).
- **Clean Contrast:** Utilizes a calculated slate/blue tinted off-white background to ensure shadows are prominent but elegant.

## Golden Rules of Neumorphism Applied
1. **Background Contrast:** The component color *must* match the parent background color exactly. It will not work on pure white (`#fff`) or pure black (`#000`) surfaces.
2. **Dual Shadow System:** One shadow is always slightly darker than the background (bottom-right offset), and one is pure white or significantly lighter (top-left offset).

## Customization

To change the theme color, modify the CSS variables inside the `:root` block in `style.css`:

```css
:root {
  --bg-color: #e0e8f6; /* Base color of your UI */
  --shadow-dark: #beccde; /* Slightly darker shade for depth */
  --shadow-light: #ffffff; /* White or high light reflection */
}