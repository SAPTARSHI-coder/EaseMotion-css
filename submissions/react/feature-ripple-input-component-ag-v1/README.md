# Ripple Input Component (React)

## Description
This is a standard React component implementing a custom "Ripple" focus effect for text inputs. When the input receives focus, a colored border ripples outwards and fades away, acting as a highly visible "Attention Seeker" to confirm that the input is active and ready to receive text.

## Installation
Ensure you have a React environment set up. Import the `RippleInput` component and its associated CSS into your application.

## Usage
Use the component just like a standard HTML `<input>`. It accepts standard input props (e.g., `type`, `placeholder`, `value`, `onChange`) and passes them down. The `label` prop is optional but recommended.

```jsx
import React, { useState } from 'react';
import RippleInput from './RippleInput';

function App() {
    const [name, setName] = useState('');

    return (
        <div>
            <RippleInput 
                id="name-input"
                label="Full Name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default App;
```

## How It Works
The component utilizes React state (`isFocused`) to conditionally render a `.ease-ripple-effect-ag` `div` precisely behind the input field. A secondary state (`rippleKey`) is incremented on every `onFocus` event to force React to completely re-render that `div`, ensuring the CSS animation restarts every time the input is clicked or tabbed into.

## Accessibility Considerations
- **Semantic HTML & ARIA:** The component properly links the `<label>` to the `<input>` via the `htmlFor` and `id` attributes.
- **Visual Interference:** The ripple `div` is marked with `aria-hidden="true"` and `pointer-events: none` so it does not interfere with screen readers or mouse clicks.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the expanding ripple animation is entirely disabled (hidden). Instead, a standard, static CSS `box-shadow` is applied to the input on focus to ensure the focus state remains highly visible without any animation.
