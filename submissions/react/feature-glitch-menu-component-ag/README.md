# Glitch Menu Component (React)

## Description
This is a React component that implements an interactive Glitch Menu. When a user hovers over a menu item, a digital "glitch" effect is applied, making it an excellent attention-seeker for cyberpunk or gaming-themed UI designs.

## Files
- `GlitchMenuAG.jsx`: The React component. Maps over an array of items and tracks hover state to trigger the glitch.
- `style.css`: Contains the CSS for the glitch effect using pseudo-elements, `clip-path`, `text-shadow`, and rapid translation keyframes.

## Usage

```jsx
import GlitchMenuAG from './GlitchMenuAG';

function App() {
  const menuItems = [
    { label: 'Start Game' },
    { label: 'Options' },
    { label: 'Quit' }
  ];

  return (
    <GlitchMenuAG 
      items={menuItems} 
      onSelect={(item) => console.log(item.label)} 
    />
  );
}
```

## Accessibility
- Uses semantic `<nav>`, `<ul>`, and `<button>` elements.
- **Reduced Motion**: Disables the rapid, flashing glitch animation completely via `@media (prefers-reduced-motion: reduce)`. Instead, it gracefully falls back to a simple text color change on hover.
