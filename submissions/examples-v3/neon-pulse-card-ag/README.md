# Neon Pulse Card Component

## What does this do?
Provides a visually striking card component with a continuous, hardware-accelerated neon glowing pulse effect around its borders, ideal for highlighting premium or featured content.

## How is it used?
```html
<div class="ease-neon-pulse-card">
  <h2>Featured Content</h2>
  <p>This card pulses with a neon glow to attract attention.</p>
</div>
```

## Why is it useful?
It creates an engaging, high-fidelity micro-interaction that draws the user's eye to specific content without relying on heavy JavaScript. The animation leverages `will-change: box-shadow` and keyframes to ensure it runs smoothly on the GPU without triggering layout repaints, adhering to the framework's performance standards.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the glowing pulse effect in action.
