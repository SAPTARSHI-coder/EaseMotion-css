# Flip Icon Component (React)

## Description
A React component demonstrating a "Flip" exit animation for an icon. When the `isExiting` prop is true, the icon flips 180 degrees backwards in 3D space (`rotateY`) and fades out, before unmounting itself.

## Files
- `FlipIconAG.jsx`: Manages the exiting state and unmounts the component after the animation completes.
- `style.css`: Provides the 3D perspective and transition for `transform: rotateY(180deg)` and opacity.

## Usage
```jsx
const [show, setShow] = useState(true);

<FlipIconAG isExiting={!show} onExited={() => console.log('Done')}>
  <MySvgIcon />
</FlipIconAG>
```

## Accessibility
- Wrapper sets `aria-hidden="true"` as this component focuses purely on visual decoration of an icon.
- **Reduced Motion**: Disables the 3D flip animation entirely, replacing it with a simple opacity fade-out before unmounting.
