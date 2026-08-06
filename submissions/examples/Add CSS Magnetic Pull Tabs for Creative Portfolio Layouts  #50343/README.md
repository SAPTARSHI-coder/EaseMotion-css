# CSS Magnetic Pull Tabs for Creative Portfolio

A visually striking, pure CSS tabs component utilizing a "Magnetic Pull" interaction transition. This component uses extreme elastic timing functions (`cubic-bezier`) to create a satisfying anticipation and overshoot effect, mimicking magnetic attraction and snapping. Styled heavily for Creative Portfolio layouts.

## Features

- **Magnetic Pull Transition**: Uses extreme elastic CSS transitions (`cubic-bezier(0.75, -0.5, 0.25, 1.5)`) to create a strong pull-back and snap-forward magnetic feel on both the active tab indicator and the content panels.
- **Pure CSS State Logic**: Driven entirely by visually hidden radio buttons and the `:has()` pseudo-class for DOM state targeting.
- **Blend Mode Magic**: Uses `mix-blend-mode: difference` on the tab labels, causing the text to invert flawlessly depending on whether it sits above the dark background or the white magnetic pill.
- **Creative Portfolio Aesthetics**: Minimalist sleek dark mode (`#050505` background), large stark typography (`Space Grotesk`), and brutalist UI patterns.
- **Fully Accessible**: Implements `.sr-only` class to hide inputs without breaking keyboard navigation, supports `:focus-visible` outlines, and honors `prefers-reduced-motion` settings.

## Custom Parameters (CSS Variables)

You can tune the magnetic behavior and visual tokens easily via custom CSS properties:

```css
.ease-magnetic-tabs {
    --mag-duration: 0.75s;
    --mag-curve: cubic-bezier(0.75, -0.5, 0.25, 1.5); /* Controls the magnetic snap */
    
    --tab-bg: #111111;
    --tab-indicator: #ffffff;
    --tab-text: #ffffff;
    --panel-gap: 60px;      /* Slide offset for inactive panels */
    --scale-idle: 0.93;     /* Scale for inactive panels */
}
```

## Structure
- `demo.html` - The showcase structure using the Magnetic Tabs within a creative digital agency portfolio layout.
- `style.css` - The stylesheets driving the magnetic transition, blend-mode typography, responsive flex logic, and accessibility rules.
