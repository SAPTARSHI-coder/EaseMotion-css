# RubberBand Avatar Component (React)

## Description
A React component that implements a "RubberBand" Loading Indicator for avatars. When the `isLoading` prop is true, the circular avatar container continuously squishes and stretches (rubberbands) to indicate activity. Once loaded, it stops animating and displays the provided image.

## Files
- `RubberBandAvatarAG.jsx`: The React component.
- `style.css`: Contains the infinite `@keyframes rubberband-loading-ag` animation.

## Usage
```jsx
import RubberBandAvatarAG from './RubberBandAvatarAG';

function UserProfile() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {/* Loading state */}
      <RubberBandAvatarAG isLoading={true} size={64} />
      
      {/* Loaded state */}
      <RubberBandAvatarAG 
        isLoading={false} 
        src="avatar.jpg" 
        alt="John Doe" 
        size={64} 
      />
    </div>
  );
}
```

## Accessibility
- Uses `role="img"` and `aria-label` to provide context even when the image isn't loaded yet.
- Uses `aria-busy={true}` during the loading state to inform screen readers that content is updating.
- **Reduced Motion**: Disables the aggressive infinite `scale3d` rubberband loop. Instead, uses a gentle opacity pulse (`rubberband-pulse-fallback-ag`) which is much safer for users with vestibular disorders while still indicating a loading state.
