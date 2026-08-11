# Flash Dropdown Component (React)

## Description
This is a standard React dropdown component implementing a "Flash" entrance animation. When the dropdown menu opens, it rapidly flashes on and off before settling into its final visible state. This acts as a highly visible "Attention Seeker" entrance pattern, ensuring the user immediately notices the new content.

## Installation
Ensure you have a React environment set up. Import the `FlashDropdown` component and its associated CSS into your application.

## Usage
Wrap the content of your dropdown menu inside the `<FlashDropdown>` component. Provide a `label` prop for the button text.

```jsx
import React from 'react';
import FlashDropdown from './FlashDropdown';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <FlashDropdown label="Options">
                <ul style={{ listStyle: 'none', margin: 0, padding: '0.5rem 0' }}>
                    <li style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Profile</li>
                    <li style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Settings</li>
                    <li style={{ padding: '0.5rem 1rem', cursor: 'pointer', color: 'red' }}>Logout</li>
                </ul>
            </FlashDropdown>
        </div>
    );
}

export default App;
```

## How It Works
The component manages its open/close state using React's `useState`. It also includes a `useEffect` hook to handle "click outside" logic, automatically closing the dropdown if the user clicks elsewhere on the page.
When `isOpen` becomes true, the dropdown menu `div` mounts with the `.ease-flash-in-ag` class, triggering the CSS keyframes that rapidly cycle the `opacity` property to create the flashing effect.

## Accessibility Considerations
- **Semantic HTML & ARIA:** The toggle button uses `aria-haspopup="true"` and dynamically updates `aria-expanded` to communicate the dropdown's state to screen readers.
- **Keyboard Navigation:** The button is naturally focusable and can be triggered via the keyboard.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the flashing entrance animation is entirely disabled (`animation: none !important`), and the dropdown menu appears instantly, preventing potentially triggering or distracting visual flashes.
