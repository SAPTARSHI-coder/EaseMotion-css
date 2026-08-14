# Glow Card Component (React)

## Description
A React component that functions as a Loading Indicator using a "Glow" skeleton effect. When `isLoading` is true, it displays placeholder shapes with a continuous, sweeping light gradient to indicate background activity. Once loaded, it reveals its children.

## Files
- `GlowCardAG.jsx`: Manages the loading state and renders either skeleton placeholders or the actual content. Uses `aria-busy`.
- `style.css`: Uses the `@keyframes glow-sweep-ag` animation to move a linear gradient across the skeleton elements.

## Usage
```jsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 3000);
}, []);

<GlowCardAG isLoading={loading}>
  <h2>Data Loaded!</h2>
  <p>This content is now visible.</p>
</GlowCardAG>
```

## Accessibility
- Employs `aria-busy="true"` and `aria-live="polite"` to correctly announce the loading state to screen readers.
- **Reduced Motion**: Disables the fast-sweeping gradient animation. Falls back to a slow, subtle opacity fade (`simple-opacity-pulse-ag`) on the entire card to indicate loading without rapid, moving gradients.
