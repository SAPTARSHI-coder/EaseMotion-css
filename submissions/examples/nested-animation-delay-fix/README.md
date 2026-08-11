# Nested Animation Delay Fix

A CSS pattern that resolves the unexpected cascading inheritance bug where nested animated child elements improperly stall or inherit their parent container's `animation-delay`.

## Features
- **The Bug**: When a parent container has a delayed entrance animation (e.g., `animation: fadeUp 0.5s 2s`), any child element with its own continuous animation (e.g., a spinning loading icon) may unexpectedly stall or inherit that 2-second delay in certain browser engines (particularly older WebKit or mobile browsers). This occurs because the shorthand `animation` property sometimes allows implicit timing context to bleed down the DOM tree.
- **The Fix**: 
  1. We break the inheritance chain by avoiding the `animation` shorthand on the child element. Instead, we explicitly declare `animation-name`, `animation-duration`, and critically, an explicit `animation-delay: 0s !important;`.
  2. We abstract the parent's delay into a CSS Custom Property (`--parent-delay`), allowing the child to safely read or calculate against the parent's timing context using `calc()` if a coordinated delay is actually desired.

## Usage
Open `demo.html` in your browser. 
Click the "Replay Animations" button. You will see two cards wait 2 seconds before fading in. Due to the explicit resets, the "Fixed Child" spinner guarantees it will be spinning fluidly the exact moment the parent's opacity becomes visible, without unexpected stalling.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side comparison.
- `style.css`: The styling engine containing the explicit property resets that break the inheritance bug.
