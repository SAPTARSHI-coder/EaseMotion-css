# CSS 3D-Flip Progress Bar (Glassmorphism UI)

A pure CSS progress bar component designed for Glassmorphism UI Layouts. It features a mesmerizing, continuous "3D-Flip" animation, where segmented blocks of the progress fill continuously rotate along the X-axis, creating a mechanical, server-rack style loading indicator.

## Features
- Pure CSS and HTML (No JavaScript required for animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over glowing, ambient background orbs (`.bg-orb`).
- **The 3D-Flip Effect**: 
- We establish a 3D context globally on the `body` using `perspective: 1200px`.
- Crucially, both the `.progress-track` and the `.progress-fill` elements must include `transform-style: preserve-3d` to pass this perspective down to the children.
- Inside the `.progress-fill` element, we use flexbox (`flex: 1`) to evenly distribute several `.flip-segment` divs across whatever the current width of the progress bar happens to be.
- Each segment runs an `@keyframes` animation (`flip-3d`) that rotates it from `rotateX(0deg)` to `rotateX(180deg)`. The `transform-origin: center` ensures they spin tightly on their own axis.
- We apply `animation-delay` utility classes (`.s1` through `.s7`) to stagger the flips, causing a cascading "wave" of spinning blocks to travel across the bar continuously.
- **Pause/Resume Control**: Includes a hidden `<input type="checkbox">` and `<label>` acting as a toggle button. Checking the box targets the segments using the sibling combinator (`~`) and sets `animation-play-state: paused`, halting the 3D flips instantly.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D flipping blocks and the sweeping highlight are completely disabled. The segments become static, leaving a clean, segmented gradient fill.

## Usage
Open `demo.html` in your browser. You will see a mock system backup dashboard. The progress bar fill is divided into segmented blocks that continuously flip in 3D space, cascading from left to right. Click the "Pause / Resume" text button above the progress bar to instantly freeze or unfreeze the 3D animation using pure CSS state management.

## Files
- `demo.html`: The HTML structure for the layout, detailing the segmented divs required for the flip effect and the hidden checkbox hack for the pause toggle.
- `style.css`: The styling, glassmorphism tokens, `preserve-3d` requirements, and the staggered `@keyframes` driving the continuous 3D rotation mechanics.
