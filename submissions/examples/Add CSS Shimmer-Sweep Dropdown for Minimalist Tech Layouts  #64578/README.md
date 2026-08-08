# CSS Shimmer-Sweep Dropdown

A sleek, minimalist dropdown menu utilizing pure CSS. It features a modern, fluid entrance animation for the menu itself, and a sophisticated shimmer-sweep effect on hover over individual list items.

## 🚀 Features

- **Pure CSS / HTML:** No JavaScript required. Uses the `:hover` and `:focus-within` pseudo-classes to manage state and accessibility.
- **Fluid Entrance Animation:** The dropdown menu scales and fades in from the top origin for a natural feel.
- **Shimmer-Sweep Hover Effect:** Hovering over a list item triggers a glossy light sweep across the element using a skewed linear gradient.
- **Glassmorphic / Dark Mode Aesthetic:** Designed primarily for dark minimalist tech themes.
- **Accessible:** Includes `:focus-within` for keyboard navigation support and fully supports `prefers-reduced-motion` to disable animations.

## 📂 File Structure

- `demo.html`: The structural markup including the dropdown container, button, and list.
- `style.css`: All logic, styling, hover states, and shimmer sweep animations.
- `README.md`: Component documentation.

## 🎨 Custom Properties (Variables)

Adjust colors and transition speeds easily from the `:root` variables to match your project's brand.

```css
:root {
    --bg-color: #0f172a;
    --dropdown-bg: #1e293b;
    --hover-bg: #334155;
    --accent: #38bdf8;
    --shimmer-color: rgba(255, 255, 255, 0.1);
}
```

## 🛠 Usage

1. Copy the markup from `demo.html` to your project. Ensure the `.dropdown-wrapper` wraps both the trigger button and the `.dropdown-menu`.
2. Link the `style.css` stylesheet.
3. Apply the `.shimmer-sweep` class to any list items where you want the hover sweep effect to occur.
4. The dropdown will open on both mouse hover and keyboard focus due to `.dropdown-wrapper:focus-within`.

## ♿ Accessibility

The CSS utilizes `:focus-within` on the wrapper, meaning if a user tabs to the button, the dropdown will open and they can tab through the links. Users with `prefers-reduced-motion` enabled will see immediate state changes without the scaling or shimmering animations.
