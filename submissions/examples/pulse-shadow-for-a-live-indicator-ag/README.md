# Pulse-Shadow for a Live Indicator

## What does this example do?
This example demonstrates a continuous pulsing animation for a "live" or "active" status indicator. The dot emits a glowing ring that expands and fades out, simulating a beacon or heartbeat to draw the user's attention to real-time events.

## How is it used?
The effect is achieved using CSS `@keyframes` that manipulate the `box-shadow` property over an infinite loop.

1.  **Define the Keyframes:**
    Create an animation that manipulates the `spread` radius and `opacity` (via rgba) of a `box-shadow`.
    ```css
    @keyframes pulseShadow {
        0% {
            /* Start with no spread, partially transparent */
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); 
        }
        70% {
            /* Expand the spread radius and fade to completely transparent */
            box-shadow: 0 0 0 12px rgba(239, 68, 68, 0); 
        }
        100% {
            /* Keep it invisible until the loop restarts */
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); 
        }
    }
    ```

2.  **Apply the Animation:**
    Attach the keyframes to your indicator dot element. Set the iteration count to `infinite` so it loops endlessly.
    ```css
    .live-indicator {
        /* Base styles */
        background-color: #ef4444; 
        border-radius: 50%;
        
        /* Apply animation */
        animation: pulseShadow 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    }
    ```

## Why is it useful?
- **Attention-Grabbing:** A continuous, rhythmic motion effectively catches peripheral vision, making it ideal for alerts, live streams, or active recording states.
- **Zero JavaScript:** The entire animation loop runs natively in the browser's rendering engine without requiring `setInterval` or `requestAnimationFrame` loops in JS.
- **Accessibility:** 
  - The HTML includes `aria-live="polite"` on the status container so screen readers announce when the status changes (e.g., from offline to live).
  - The color contrast of the red dot against the background meets WCAG guidelines.
  - A `@media (prefers-reduced-motion: reduce)` block is included. For users who prefer reduced motion, it completely disables the continuous `infinite` animation. To ensure the "live" state remains visually distinct from an "offline" state even without motion, the fallback applies a static, slightly transparent `box-shadow` ring.
