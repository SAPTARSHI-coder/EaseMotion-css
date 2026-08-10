# Glitch Card Component (React)

## Description
A React component that functions as a Loading Indicator using a "Glitch" skeleton effect. When `isLoading` is true, it displays placeholder shapes that experience a digital glitch interference (achieved via `clip-path` and multiple shifting layers) to indicate background activity. Once loaded, it reveals its children.

## Files
- `GlitchCardAG.jsx`: Manages the loading state and renders either glitching placeholders or the actual content. Uses `aria-busy`.
- `style.css`: Uses multiple `@keyframes` and pseudo-elements with `clip-path` and `transform: translate` to create a jittery, digital interference glitch effect.

## Usage
```jsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 3000);
}, []);

<GlitchCardAG isLoading={loading}>
  <h2>Data Loaded!</h2>
  <p>The system is stable.</p>
</GlitchCardAG>
```

## Accessibility
- Employs `aria-busy="true"` and `aria-live="polite"` to correctly announce the loading state to screen readers.
- **Reduced Motion**: Disables the aggressive, rapid glitch animations entirely. Falls back to a slow, gentle opacity pulse (`simple-pulse-ag`) on the skeleton elements to indicate loading without rapid movement or flashing.
