# RubberBand Drawer Component (React)

## Description
This is a standard React component implementing a side Drawer that enters the screen with a bouncy "RubberBand" animation. Instead of just sliding in and stopping abruptly, the drawer stretches and squashes as it hits its resting position, simulating elastic momentum. This provides a highly playful and interactive feel.

## Installation
Ensure you have a React environment set up. Import the `RubberBandDrawer` component and its associated CSS into your application.

## Usage
The drawer is controlled via an `isOpen` boolean prop. It can slide in from either the left or right side of the screen using the `position` prop.

```jsx
import React, { useState } from 'react';
import RubberBandDrawer from './RubberBandDrawer';

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsDrawerOpen(true)}>Open Drawer</button>
            
            <RubberBandDrawer 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)}
                position="right" // or "left"
            >
                <h2>Drawer Content</h2>
                <p>This drawer entered with a rubberband bounce!</p>
            </RubberBandDrawer>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** The drawer container acts as a modal dialog using `role="dialog"` and `aria-modal="true"`. The close button is labelled with `aria-label="Close drawer"`.
- **Keyboard & Click Interactions:** Clicking on the backdrop overlay triggers the `onClose` callback, making it easy for users to dismiss without having to precisely target the close button. 
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the elastic rubberband entrance and the sliding exit animations are bypassed (`animation: none !important`). The drawer will snap instantly into position, ensuring accessibility and removing potentially discomforting motion. The React unmount lifecycle still fires correctly via state fallback when animations are overridden.
