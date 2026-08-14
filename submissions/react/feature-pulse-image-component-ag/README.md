# Pulse Image Component (React)

## Description
A React component demonstrating a "Pulse" animation for an image in an interactive state. When `isActive` is true (e.g., when a user clicks the avatar to start recording or speaking), a pulsing ring emanates from behind the image.

## Files
- `PulseImageAG.jsx`: Manages the interactive state wrapper (`role="button"`) around the image.
- `style.css`: Uses a `::before` pseudo-element to create the infinitely expanding and fading ring via `@keyframes image-pulse-ring-ag`.

## Usage
```jsx
const [active, setActive] = useState(false);

<PulseImageAG 
  src="avatar.jpg" 
  alt="User Avatar"
  isActive={active}
  onToggle={() => setActive(!active)}
/>
```

## Accessibility
- Implements `role="button"` and `tabIndex={0}`.
- Handles keyboard events (`Enter` and `Space`) to toggle state.
- Uses `aria-pressed` to announce the active state.
- **Reduced Motion**: Replaces the expanding animation with a static, slightly scaled dashed border when active, providing a clear visual indicator without motion.
