# CSS 3D Perspective Tilt Tabs - Glassmorphism Aesthetic

A highly interactive, pure CSS tab component that utilizes `perspective` and 3D transforms (`rotateX`, `rotateY`, `translateZ`) to create a premium, spatial UI experience, styled with a striking Glassmorphism aesthetic.

## Features

- **3D Perspective Tilt Interaction**: 
  - **On Hover**: The tabs dynamically tilt and lift towards the user in 3D space, dropping a shadow to establish depth.
  - **On Transition**: The tab panels animate into view using a 3D tilt-and-scale effect (`@keyframes panelTiltIn`).
  - **Internal Depth**: Elements inside the panels (like the credit card mockup) utilize `translateZ` to visually pop out of the glass layer.
- **Glassmorphism Aesthetic**: Heavily relies on `backdrop-filter: blur`, semi-transparent `rgba` borders and backgrounds, and features dynamic, animated background orbs to showcase the glass translucency.
- **Pure CSS State Management**: The active tabs and panels are managed entirely without JavaScript, utilizing visually hidden radio buttons and the `:checked` state.
- **Accessible**: Radio inputs are hidden accessibly via the `clip` method. A custom focus ring is provided via `:focus-visible` for users navigating with `Tab` or arrow keys.
- **Responsive Contexts**: Includes UI mockups (Dashboard stats, Wallet cards, Security toggles) to provide a realistic context for the tabs.

## Custom Properties

Fine-tune the 3D physics and the glass rendering by adjusting the CSS variables in the `:root` pseudo-class in `style.css`:

```css
:root {
  /* 3D Tilt Parameters */
  --tilt-duration: 0.6s;
  --tilt-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Springy bounce effect */
  --tilt-perspective: 1200px; /* Adjust the 3D viewing distance */
  
  /* Glassmorphism Parameters */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-blur: 24px;
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in a web browser. Hover your mouse over the "Dashboard", "Wallet", or "Security" tabs to experience the 3D Perspective Tilt, and click them to trigger the 3D panel entrance.
