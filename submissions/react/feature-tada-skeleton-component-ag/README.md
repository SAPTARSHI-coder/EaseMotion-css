# Tada Skeleton Component (React)

## Description
A playful React Skeleton component that uses a "Tada" Entrance Animation. When it mounts, the skeleton performs a cheerful shaking and scaling entrance. Once the 0.8s tada animation finishes, it smoothly transitions into a standard continuous opacity pulse typical of loading skeletons.

## Files
- `TadaSkeletonAG.jsx`: The React component.
- `style.css`: Contains the entrance and pulsing `@keyframes`.

## Usage
```jsx
import TadaSkeletonAG from './TadaSkeletonAG';

function LoadingState() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TadaSkeletonAG width="60%" height="32px" borderRadius="8px" />
      <TadaSkeletonAG width="100%" height="16px" />
      <TadaSkeletonAG width="80%" height="16px" />
    </div>
  );
}
```

## Accessibility
- Uses `role="status"` and `aria-live="polite"` to correctly announce the loading state to screen readers without aggressively interrupting the user.
- **Reduced Motion**: Disables the bouncy `tada-skeleton-in-ag` entrance animation. The skeleton bypasses the entrance completely and goes straight to a gentle, accessible opacity pulse (`skeleton-pulse-ag`).
