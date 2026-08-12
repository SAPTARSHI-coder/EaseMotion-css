# Glow Toggle Component (React)

## Description
A React toggle switch component with a "Glow" attention-seeker animation. When the toggle is turned on, it animates to a bright blue state and emits a pulsating `box-shadow` glow, clearly drawing attention to the active state.

## Usage
```jsx
import GlowToggleAG from './GlowToggleAG';
<GlowToggleAG label="Enable dark mode" defaultChecked={false} />
```

## Props
- `defaultChecked`: Initial checked state (default: `false`).
- `label`: The text label displayed next to the toggle (default: `'Enable notifications'`).

## Accessibility
- Built on a native `<input type="checkbox">` for proper screen reader support.
- Uses `role="switch"` and `aria-checked` for semantic toggle semantics.
- **Reduced Motion**: Removes all CSS `transition` durations, making state changes instant.
