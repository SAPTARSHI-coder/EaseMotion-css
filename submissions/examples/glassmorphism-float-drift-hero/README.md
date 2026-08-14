# CSS Float-Drift Hero Section (Glassmorphism UI)

A stunning, pure CSS interactive hero section designed for Glassmorphism UI Layouts. It features animated background orbs and a complex, organic "Float-Drift" animation applied to a composition of frosted glass widgets, creating an interface that feels alive.

## Features
- Pure CSS and HTML (No JavaScript required for animations).
- **Glassmorphism Aesthetic**: Deep slate background contrasted with slowly drifting `.bg-orb` elements. The orbs are heavily blurred (`filter: blur(90px)`) to create ambient, dynamic color zones.
- The `.glass-card` mockups utilize `backdrop-filter: blur(20px)` to create a premium frosted-glass effect that allows the underlying colors to bleed through beautifully as both the orbs and the cards themselves move.
- **The Float-Drift Effect**: The visual area establishes a 3D context using `perspective: 1000px`. Inside, multiple `.float-element` widgets are positioned.
- Each widget is assigned a unique infinite `@keyframes` animation (`float-main`, `float-fast`, `float-slow`). These keyframes utilize varying combinations of `translateY`, `translateX`, and 3D rotations (`rotateX`, `rotateY`, `rotate`, `translateZ`).
- By assigning different durations (e.g., 8s, 6s, 12s) and alternating playback (`alternate`, `alternate-reverse`), the distinct animations fall out of phase with each other. This creates a highly complex, non-repeating, organic drift that feels natural rather than mechanical.
- `will-change: transform` is applied to the floating elements to cue the browser to hardware-accelerate these continuous animations for smooth 60fps performance.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, all continuous animations (both the background orbs and the floating widgets) are completely frozen. The layout locks to its initial, safe state without sacrificing the glassmorphic aesthetic.

## Usage
Open `demo.html` in your browser. You will see a modern landing page hero section. On the right side, a composition of three frosted glass widgets floats in 3D space. Notice how they drift independently of one another, with subtle rotations and depth changes, while the vibrant background colors slowly shift behind them.

## Files
- `demo.html`: The HTML structure for the layout, detailing the mock UI elements (including an SVG graph mockup) and the positioning of the floating widgets.
- `style.css`: The styling, background orb animations, frosted-glass filters, and the complex, varied `@keyframes` driving the organic float-drift mechanics.
