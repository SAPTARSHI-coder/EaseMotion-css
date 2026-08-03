# Zoom Modal Component (React)

## Description
A React modal component demonstrating a "Zoom" entrance and exit animation. When opening, it scales up from a smaller size (with a slight bounce). When closing, it zooms out (scales down) and fades before unmounting.

## Files
- `ZoomModalAG.jsx`: Manages the delayed unmounting logic to allow the exit animations to finish playing.
- `style.css`: Contains the `@keyframes` for `zoom-in-ag` and `zoom-out-ag` using `transform: scale()`.

## Usage
```jsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Open Modal</button>

<ZoomModalAG isOpen={isOpen} onClose={() => setIsOpen(false)} title="Zoom Effect">
  <p>Notice the zoom entrance and exit animations!</p>
</ZoomModalAG>
```

## Accessibility
- Proper modal attributes are used: `role="dialog"`, `aria-modal="true"`.
- **Reduced Motion**: Disables the physical scaling (`zoom-in-ag` / `zoom-out-ag`). It safely falls back to standard opacity `fade-in-ag` and `fade-out-ag` animations, preventing motion sickness.
