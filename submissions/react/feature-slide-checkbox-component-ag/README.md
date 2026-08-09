# Slide Checkbox Component (React)

## Description
The `SlideCheckbox` is a controlled/uncontrolled React component that provides a polished, interactive alternative to the standard HTML checkbox. Instead of instantly appearing, the checkmark smoothly slides in from the left when checked, and slides out to the right when unchecked, creating a dynamic, fluid interaction.

## Installation & Usage
Copy `SlideCheckbox.jsx` and `style.css` into your React project.

```jsx
import React, { useState } from 'react';
import SlideCheckbox from './SlideCheckbox';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <SlideCheckbox 
        label="Enable notifications" 
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}

export default App;
```

## Props
- `label` (string, optional): The text to display next to the checkbox.
- `checked` (boolean, optional): Use this to make the component controlled.
- `onChange` (function, optional): Callback fired when the checkbox state changes.
- `disabled` (boolean, optional): Disables the checkbox and applies reduced opacity.
- Any standard HTML input attributes (e.g., `id`, `name`) can also be passed and will be applied to the hidden native `<input>`.

## How It Works
- The component uses a visually hidden (but accessible) native `<input type="checkbox">` overlaid by a custom styled `<div>`.
- The `<div>` has `overflow: hidden`.
- The SVG checkmark (`.ease-slide-checkbox-icon-ag`) starts with `transform: translateX(100%)` (pushed completely out of the box to the right) and `opacity: 0`.
- When the hidden input is `:checked`, CSS sibling selectors apply `transform: translateX(0)` and `opacity: 1` to the checkmark, causing it to slide into view with a slightly bouncy cubic-bezier transition.

## Accessibility Considerations
- **Screen Readers:** The native `<input>` remains in the DOM and handles all focus and state management natively. Screen readers interact with it exactly as they would a standard checkbox.
- **Keyboard Navigation:** The custom box uses the `:focus-visible` pseudo-class to display a clear outline when the user tabs to the checkbox.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` disables the `transform` and `opacity` transitions. The checkmark will instantly appear and disappear, respecting the user's OS settings.
