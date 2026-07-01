# Magnetic Cursor Kit (`.ease-magnetic-*-xyz` & `.ease-cursor-*-xyz`)

A highly interactive UI kit featuring magnetic buttons, custom cursor effects, and elements that respond to cursor proximity with smooth, physics-based animations. Built entirely with pure CSS.

## Features

- 🖱️ **Custom Cursor**: A smooth, following cursor effect with a pulsing dot and ring.
- 🧲 **Magnetic Buttons**: Buttons that scale and glow on hover with spring-based easing.
- 🎴 **Magnetic Cards**: Cards that tilt in 3D space and feature a radial gradient that follows the cursor.
- 🔗 **Magnetic Links**: Text links that lift and underline with smooth transitions.
- 🎢 **Premium Easing**: Custom `cubic-bezier` curves for natural, physics-based motion.
- ♿ **Accessible**: Fully respects `prefers-reduced-motion` and disables custom cursor on mobile.

## Usage

Copy the HTML structure and the CSS classes into your project. The custom cursor elements should be placed at the root level of your body.

```html
<!-- Custom Cursor (place at root of body) -->
<div class="ease-cursor-xyz"></div>
<div class="ease-cursor-follower-xyz"></div>

<!-- Example: Magnetic Button -->
<button class="ease-magnetic-btn-xyz ease-magnetic-btn-primary-xyz">
    <span class="ease-magnetic-btn-text-xyz">Hover Me</span>
    <div class="ease-magnetic-btn-bg-xyz"></div>
</button>

<!-- Example: Magnetic Card -->
<div class="ease-magnetic-card-xyz">
    <div class="ease-magnetic-card-inner-xyz">
        <div class="ease-magnetic-card-icon-xyz">🧲</div>
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>