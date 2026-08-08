# Wiggle Modal Component (React)

## Description
A React modal component demonstrating a "Wiggle" entrance animation. When the modal mounts, it slides in while swinging back and forth, settling smoothly into the center of the screen.

## Files
- `WiggleModalAG.jsx`: Manages the open/close state, rendering the backdrop and dialog.
- `style.css`: Uses `@keyframes wiggle-in-ag` to chain rotation and translation transforms for the entrance.

## Usage
```jsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Open Modal</button>

<WiggleModalAG isOpen={isOpen} onClose={() => setIsOpen(false)} title="Wiggle Effect">
  <p>The modal wiggled into view!</p>
</WiggleModalAG>
```

## Accessibility
- Uses standard modal ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).
- **Reduced Motion**: Disables the multi-step rotating wiggle entrance entirely. Safely replaces it with a simple, short opacity/translate fade-in (`simple-fade-in-ag`) to prevent motion-induced discomfort.
