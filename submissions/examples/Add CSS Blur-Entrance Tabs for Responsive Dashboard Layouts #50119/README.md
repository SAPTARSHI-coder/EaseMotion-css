# CSS Blur-Entrance Tabs - Responsive Dashboard Aesthetic

An extremely robust, purely CSS-powered tab layout utilizing a sleek "Blur-Entrance" interaction transition. This component is designed as a complete Responsive Dashboard shell, adapting its layout contextually based on viewport size.

## Features

- **Blur-Entrance Animation**: When navigating between dashboard sections, the new content panel triggers a `@keyframes blurEntrance` animation. This elegantly fades `filter: blur()`, `opacity`, and a subtle `translateY()` drop-in effect, producing a high-fidelity visual entrance.
- **Responsive Dashboard Morphing**: 
  - **Desktop (`>768px`)**: The tabs render as a fixed left-aligned vertical sidebar (`width: 260px`). Active states utilize a sky-blue left-border accent.
  - **Mobile (`<768px`)**: The sidebar seamlessly collapses into a horizontally scrolling top-navigation bar. The active state indicator morphs from a `border-left` into a `border-bottom` underline to match the horizontal layout context.
- **Pure CSS State Management**: Powered entirely by the visually hidden radio button pattern. The tabs shift focus, apply active styles, and toggle panel visibility without a single line of JavaScript.
- **Accessible Design**: The radio buttons are hidden via the `clip` method, which natively preserves browser focus management. When navigating via the `Tab` key, the focused sidebar items outline distinctly.

## Custom Properties

Modify the physics of the blur or the dashboard color palette by editing the `:root` variables in `style.css`:

```css
:root {
  /* Blur-Entrance Parameters */
  --blur-duration: 0.55s;
  --blur-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --blur-amount: 15px; /* Intensity of blur */
  --blur-scale: 0.96;  /* Start scale size */
  --blur-offset: 20px; /* Start Y translation */
  
  /* Dashboard Colors */
  --sidebar-bg: #0f172a;
  --brand-color: #38bdf8; /* Vibrant Sky Blue */
  
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click the tabs in the sidebar to observe the polished blurred entrance transition. Don't forget to resize your browser window to watch the vertical dashboard morph into a mobile-friendly horizontal layout!
