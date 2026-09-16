# Collapse Dropdown Component

## Description
The `CollapseDropdown` is a React component that implements a smooth, performant height-collapse animation for dropdowns or accordion items. It utilizes the modern CSS Grid `grid-template-rows: 0fr -> 1fr` technique, allowing it to smoothly animate to the natural height of its contents without requiring JavaScript height calculations.

## Installation & Usage

```jsx
import CollapseDropdown from './CollapseDropdown';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <CollapseDropdown triggerLabel="Settings">
        <div style={{ padding: '1rem', minWidth: '200px' }}>
          <p>Account Preferences</p>
          <p>Security</p>
          <p>Notifications</p>
        </div>
      </CollapseDropdown>
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `triggerLabel` | `string` | `'Toggle Dropdown'` | Text inside the trigger button. |
| `children` | `ReactNode` | — | The content revealed inside the dropdown. |

## How It Works
Instead of transitioning `max-height` with arbitrary large pixel values, this component uses:
```css
display: grid;
grid-template-rows: 0fr;
/* transitioning to */
grid-template-rows: 1fr;
```
The inner content container must have `overflow: hidden` for this technique to clip the contents as the grid row collapses. This provides buttery smooth height animation driven entirely by the browser's CSS engine.

## Accessibility Considerations
- Uses `aria-expanded` on the trigger button to inform screen readers of the dropdown state.
- Uses `aria-hidden` on the content wrapper to hide content from assistive technologies when collapsed.
- When collapsed, `pointer-events: none` prevents focus and interaction with hidden links or buttons.
- **Reduced Motion**: Disables the grid height transition and chevron rotation, relying purely on a fast opacity fade to reveal the dropdown for users with vestibular sensitivities.
