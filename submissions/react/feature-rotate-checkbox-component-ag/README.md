# Rotate Checkbox Component

## Description
The `RotateCheckbox` is a React component that demonstrates a rotating loading indicator inside a checkbox. When the user clicks the checkbox, a spinning animation plays (simulating an async save operation) before the checked state is confirmed. This pattern is common in settings panels and preference toggles.

## Installation & Usage
Import the component and its stylesheet into your React project.

```jsx
import RotateCheckbox from './RotateCheckbox';

function App() {
  return (
    <div>
      <RotateCheckbox 
        label="Enable notifications" 
        onChange={(checked) => console.log('Checked:', checked)} 
      />
      <RotateCheckbox 
        label="Dark mode" 
        initialChecked={true} 
        loadingDuration={1000} 
      />
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Text displayed next to the checkbox. |
| `initialChecked` | `boolean` | `false` | Initial checked state. |
| `onChange` | `function` | — | Callback fired with the new boolean value after the loading completes. |
| `loadingDuration` | `number` | `1500` | Duration in ms for the simulated async operation. |

## How It Works
1. User clicks the checkbox.
2. A CSS `rotate(360deg)` spinner replaces the checkmark icon inside the box.
3. After `loadingDuration` ms, the spinner disappears and the check/uncheck state is applied.

## Accessibility Considerations
- The native `<input type="checkbox">` is visually hidden but remains in the DOM for screen readers and keyboard navigation.
- `aria-busy` is set to `true` during the loading state.
- `focus-visible` outline is applied for keyboard users.
- **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` query replaces the spinning animation with a gentle opacity pulse, avoiding rotational motion entirely.
