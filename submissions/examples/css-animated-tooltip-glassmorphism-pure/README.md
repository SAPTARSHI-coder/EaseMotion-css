# Animated Tooltip: Glassmorphism

A highly polished, JavaScript-free tooltip component featuring a premium frosted glass aesthetic, dynamic bouncy animations, and deep accessibility support.

## Features
- Pure CSS and HTML implementation. The hover and focus reveal states are managed entirely via CSS pseudo-classes.
- **Component Architecture & Styling Mechanics**: 
  - **Glassmorphism Aesthetic**: The tooltip box uses `backdrop-filter: blur(12px)` combined with a highly translucent white background (`rgba(255,255,255,0.15)`) and a stark white, partially transparent border. This combination blurs whatever is behind the tooltip, creating the illusion of frosted glass. A showcase background with floating colored blobs is provided in the demo to highlight this effect perfectly.
  - **CSS Pointer Triangle**: The small arrow pointing from the tooltip to the button is created using two stacked `::before` and `::after` pseudo-elements utilizing the CSS border triangle hack. The `::after` acts as the solid border, while the `::before` sits slightly lower to mimic the frosted fill color.
  - **Bouncy Reveal Animation**: When hovered, the tooltip doesn't just fade in; it pops. It utilizes `transform: translateY(10px) scale(0.9);` in its hidden state and transitions to `translateY(0) scale(1)` using a `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. This creates a satisfying, spring-like pop effect.
- **Theming**: Configured via CSS Custom Properties. The variables `--glass-bg`, `--glass-border`, and `--glass-blur` allow you to easily tweak the opacity and intensity of the frost effect to match your specific background.
- Fully accessible semantic structure. The tooltip wrapper utilizes `tabindex="0"` and the CSS `:focus-within` pseudo-class. This ensures that keyboard users can tab to the wrapper, which will reveal the tooltip just like a mouse hover. Honors the `prefers-reduced-motion` accessibility standard by disabling the bouncy scaling animation if requested by the OS.

## Usage
Open `demo.html` in your browser. Watch the background blobs float gently to see the live backdrop blur. Hover over the "Hover Me" button (or focus it with your keyboard) to watch the glassmorphism tooltip pop into view with a bouncy spring animation.

## Files
- `demo.html`: The HTML structure defining the tooltip wrapper, accessibility attributes, and the background showcase.
- `style.css`: The styling, the `backdrop-filter` glassmorphism properties, the bouncy `cubic-bezier` keyframes, and the CSS triangle hacks.
