# Jello Toggle Component

## Description
The `JelloToggle` is a React toggle switch component that applies a playful jello wobble animation to the knob whenever the user toggles it. The skew-based jello effect creates a bouncy, organic feel that makes the interaction delightful.

## Installation & Usage

```jsx
import JelloToggle from './JelloToggle';

function App() {
  return (
    <div>
      <JelloToggle
        label="Dark mode"
        initialValue={false}
        onChange={(isOn) => console.log('Toggle:', isOn)}
      />
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text displayed next to the toggle. |
| `initialValue` | `boolean` | `false` | Initial on/off state. |
| `onChange` | `function` | — | Callback fired with the new boolean value on toggle. |

## How It Works
- The component uses `role="switch"` and `aria-checked` for accessible toggle semantics.
- On click, the `jello-ag` class is added to the knob, triggering the `ease-jello-toggle-ag` keyframes.
- The keyframes use decreasing `skewX`/`skewY` values (12.5° → 6.25° → 3.125° → ...) to create natural damped wobble.
- A CSS variable `--knob-x-ag` coordinates the jello animation with the knob's translated position.

## Accessibility Considerations
- **ARIA**: Uses `role="switch"` with `aria-checked` for proper switch semantics.
- **Keyboard**: Fully accessible via keyboard (Space/Enter to toggle).
- **Focus**: `focus-visible` outline on the track for keyboard navigation.
- **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` query disables the jello wobble entirely. The knob slides smoothly without any skew deformation.
