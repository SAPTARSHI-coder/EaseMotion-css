# Jello Banner Component (React)

## Description
A React component demonstrating a "Jello" loading indicator animation. While `isLoading` is true, the banner subtly wobbles (jellos) on an infinite loop to indicate that an active process is ongoing. 

## Files
- `JelloBannerAG.jsx`: Accepts an `isLoading` prop. Shows the banner if loading, otherwise renders children.
- `style.css`: Uses `@keyframes jello-loading-ag` to slightly skew the banner back and forth on a repeating 2-second cycle.

## Usage
```jsx
<JelloBannerAG isLoading={true} message="Fetching data...">
  <p>Data loaded successfully!</p>
</JelloBannerAG>
```

## Accessibility
- Includes `role="alert"` and `aria-busy="true"` on the loading banner.
- **Reduced Motion**: Disables the physical jello wobble completely. Replaces the fast rotating spinner with a slow, smooth opacity pulse to indicate loading without rapid movement.
