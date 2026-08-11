# CSS Zoom-Out Tabs - Glassmorphism UI Aesthetic

An ultra-modern, pure CSS tab component featuring a smooth "Zoom-Out" interaction transition, perfectly designed for Glassmorphism interfaces.

## Features

- **Zoom-Out Entrance Animation**: When a tab is activated, the associated content panel enters using a custom `@keyframes zoomOutEntrance`. It begins slightly scaled up (`scale(1.06)`) and transparent, then smoothly "zooms out" to its native scale (`scale(1)`) while fading in. This provides a very premium, high-end "settling" feel.
- **Glassmorphism Aesthetic**: 
  - **Translucency & Blurs**: Leverages `backdrop-filter: blur(24px)` combined with low-opacity white backgrounds to create realistic frosted glass.
  - **Borders & Shadows**: Features crisp `1px` translucent borders and deep shadows to establish depth.
  - **Dynamic Background**: The `demo.html` features animated, blurred colorful CSS orbs floating behind the layout, which is essential to making the foreground glass effect visually pop.
- **Sliding Glass Indicator**: The active tab navigation utilizes a pill-shaped background that itself is styled as glass (`rgba(255,255,255,0.25)`). It glides between tabs using precise Flexbox and `translateX` math.
- **Pure CSS State Management**: Relies entirely on the visually hidden radio button pattern. The tabs shift focus, apply active styles, and toggle panel visibility via the CSS `:checked ~` sibling selector. No JavaScript is required.
- **Keyboard Accessible**: The radio buttons are hidden via the `clip` method to natively preserve browser focus management. Keyboard navigation (`Tab`) draws a crisp white outline around the active tab.

## Custom Properties

Customize the intensity of the zoom or adjust the glass translucency via the `:root` variables in `style.css`:

```css
:root {
  /* Zoom-Out Interaction */
  --zoom-duration: 0.6s;
  --zoom-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --zoom-start: 1.06; /* The panel starts scaled up at 1.06 and "zooms out" to 1 */
  
  /* Glassmorphism Theme */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.15);
  --blur-amount: 24px;
  
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click between the Design, Develop, and Deploy tabs to experience the smooth Zoom-Out panel entrance!
