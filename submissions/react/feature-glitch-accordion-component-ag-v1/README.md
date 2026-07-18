# Glitch Accordion Component (React)

## Description
This is a React accordion component featuring a distinct "Glitch" exit animation. When the accordion is collapsed, the content area performs a fast, erratic, horizontal and vertical jitter (a "glitch" effect) while simultaneously fading out and sliding up. It acts as a dramatic Exit Animation pattern.

## Installation
Ensure you have a React environment set up. Import the `GlitchAccordion` component and its associated CSS into your application.

## Usage
Wrap your content inside the `<GlitchAccordion>` component. Pass a `title` prop to define the header text.

```jsx
import React from 'react';
import GlitchAccordion from './GlitchAccordion';

function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <GlitchAccordion title="System Diagnostics">
                <p>Diagnostic process complete. No errors found in the main sector. Secondary nodes are operating at optimal capacity.</p>
            </GlitchAccordion>

            <GlitchAccordion title="Advanced Settings">
                <ul>
                    <li>Toggle Cybernetics</li>
                    <li>Overclock CPU</li>
                    <li>Flush Cache</li>
                </ul>
            </GlitchAccordion>
        </div>
    );
}

export default App;
```

## How It Works
The component manages its mounting and unmounting through an intermediate state.
1. When closing, `isAnimating` is set to `true`, triggering the `.ease-glitch-out` CSS class.
2. The CSS applies the `easeGlitchOutAg` keyframes to the content container, causing rapid translation shifts (the glitch) and an opacity fade.
3. The component listens for the `onAnimationEnd` event natively via React.
4. Once the animation finishes, the component finally updates its `isOpen` state to `false`, effectively removing the content from the DOM.

## Accessibility Considerations
- **Semantic HTML & ARIA:** The accordion header acts as a `<button>` and utilizes `aria-expanded` to communicate its current state to assistive technologies. The content area uses `aria-hidden` accordingly.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included in `style.css`. If the user prefers reduced motion, the erratic glitch exit animation is entirely disabled (`animation: none !important`), and the accordion collapses instantly. The chevron rotation animation on the header is also disabled.
