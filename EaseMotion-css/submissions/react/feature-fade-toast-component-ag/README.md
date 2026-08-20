# Fade Toast Component (React)

## Description
This is a standard React component implementing a "Fade Toast" notification pattern. The toast utilizes CSS animations to smoothly fade in (with a slight upward slide for polish) when mounted, and fade out before unmounting. This component is an essential UI pattern for non-intrusive "Attention Seeker" notifications (e.g., success messages, warnings, or informational updates).

## Installation
Ensure you have a React environment set up. Import the `FadeToast` component and its associated CSS into your application.

## Usage
The component manages its own exit animation sequence by intercepting the auto-close timeout or manual close button click, playing the fade-out animation, and then triggering the provided `onClose` callback once the animation completes via the `onAnimationEnd` event handler.

```jsx
import React, { useState } from 'react';
import FadeToast from './FadeToast';

function App() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <button onClick={() => setShowToast(true)}>Show Toast</button>
            
            {showToast && (
                <FadeToast 
                    message="Operation successful!" 
                    duration={3000} 
                    onClose={() => setShowToast(false)} 
                />
            )}
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** The toast container uses `role="alert"` and `aria-live="assertive"` so screen readers immediately announce the message to the user when it appears. The close button uses `aria-label="Close notification"`.
- **Keyboard Navigation:** The close button is fully focusable.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the CSS animations (`easeFadeInAg` and `easeFadeOutAg`) are overridden to `none !important`. The component logic (`onAnimationEnd`) gracefully degrades if animations are stripped, but relies on React's state cleanup in the parent, making it accessible and safe for all users.
