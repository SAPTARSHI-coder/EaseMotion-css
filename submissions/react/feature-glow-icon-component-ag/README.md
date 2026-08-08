# Glow Icon Component (React)

## Description
A React component that implements a "Glow" Interactive State for an icon button. When hovered or focused, a blurred, colored pseudo-element behind the icon expands and fades in, creating a glowing backlight effect, while the icon itself changes color to contrast against the glow.

## Files
- `GlowIconAG.jsx`: Renders an accessible button wrapping the provided SVG icon component.
- `style.css`: Implements the `filter: blur()` and `transform: scale()` transitions on the `::after` pseudo-element to create the glowing effect.

## Usage
```jsx
// Example using a simple SVG component
const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

<GlowIconAG 
  icon={StarIcon} 
  label="Favorite this item" 
  onClick={() => alert('Favorited!')} 
/>
```

## Accessibility
- Wraps the icon in a semantic `<button>` tag for proper keyboard interaction.
- Uses `aria-label` and `title` to provide screen readers and mouse users with the icon's purpose.
- Hides the purely decorative SVG from screen readers using `aria-hidden="true"`.
- **Reduced Motion**: Disables the expanding scaling transition of the button and the glow. Replaces it with an instantaneous, smaller static background glow state on hover/focus to prevent distracting movement.
