# Fade Tooltip Component (React)

## Description
A React component demonstrating a "Fade" animation for a tooltip that can also act as a loading indicator. The tooltip smoothly fades in on hover/focus. When the `isLoading` prop is true, the tooltip continually pulses its opacity, indicating an ongoing process (like saving).

## Files
- `FadeTooltipAG.jsx`: Manages the visibility of the tooltip based on mouse and keyboard events.
- `style.css`: Uses `@keyframes fade-tooltip-in-ag` for the entrance and `tooltip-pulse-ag` for the continuous loading pulse.

## Usage
```jsx
const [isLoading, setIsLoading] = useState(false);

<FadeTooltipAG isLoading={isLoading} message="Click to save">
  <button onClick={() => setIsLoading(true)}>Save Data</button>
</FadeTooltipAG>
```

## Accessibility
- Implements `tabIndex={0}` on the trigger wrapper (or relies on the child being focusable).
- Tooltip is associated with the trigger via `aria-describedby`.
- Tooltip sets `role="status"` and `aria-live="polite"` to announce dynamic loading changes.
- **Reduced Motion**: Disables the continuous pulsating opacity animation when in the loading state, keeping the initial fade-in but remaining statically visible thereafter to prevent motion sickness.
