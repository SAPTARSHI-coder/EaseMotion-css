# RubberBand Dropdown Component

## Description
The `RubberBandDropdown` is an interactive React component that displays a dropdown menu while applying a playful "rubberband" stretching animation to the toggle button on hover and focus. This adds a delightful, tactile micro-interaction to your user interface.

## Installation
Copy `RubberBandDropdown.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `title` | String | Yes | - | The text to display on the dropdown toggle button. |
| `children` | ReactNode | Yes | - | The content to be displayed in the dropdown menu. |
| `className`| String | No | `""` | Additional CSS classes for custom styling on the wrapper. |

## Usage Example

```jsx
import React from 'react';
import RubberBandDropdown from './RubberBandDropdown';

function App() {
    return (
        <div style={{ padding: '2rem', height: '300px' }}>
            <RubberBandDropdown title="Options">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Profile</li>
                    <li style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>Settings</li>
                    <li style={{ padding: '0.5rem', color: 'red' }}>Logout</li>
                </ul>
            </RubberBandDropdown>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Keyboard Navigation:** The toggle button is focusable and triggers the animation via `:focus-visible`. The dropdown content is revealed via standard click events (or Space/Enter on the button).
- **ARIA Attributes:** The button uses `aria-haspopup="true"` and dynamically updates `aria-expanded` based on the dropdown state.
- **Outside Click:** The component automatically closes when the user clicks outside of it, ensuring a standard dropdown user experience.
- **Reduced Motion:** If a user prefers reduced motion, the rubberband animation, chevron rotation transition, and menu reveal transition are completely disabled, appearing instantly instead.
