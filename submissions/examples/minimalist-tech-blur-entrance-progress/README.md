# CSS Blur-Entrance Progress Bar (Minimalist Tech)

A pure CSS interactive progress bar component designed for Minimalist Tech Layouts. It features a cinematic "Blur-Entrance" animation, where the progress bar snaps into focus while filling up dynamically.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Minimalist Aesthetic**: Clean layout, sharp borders, and distinct blue/purple/pink accent colors over a sterile `f8fafc` background.
- **State Management**: The triggering of the progress bars is handled entirely via the hidden checkbox hack (`<input type="checkbox">`). The "Run" buttons are `<label>` elements wired to these hidden inputs.
- **The Blur-Entrance Effect**: 
- Achieving this effect requires separating concerns to avoid keyframe property conflicts. We use two nested elements: `.blur-entrance-wrapper` and `.progress-fill`.
- When triggered, the `.blur-entrance-wrapper` fires an `@keyframes` animation (`blur-entrance`) that transitions the element from `opacity: 0`, `filter: blur(10px)`, and `transform: scaleX(0.5)` to a sharp, fully visible state (`filter: blur(0px)`, `transform: scaleX(1)`).
- Slightly delayed (0.2s), the inner `.progress-fill` fires its own `@keyframes` animation (`fill-width`) that expands its width from `0%` to a dynamically set CSS variable (`--target-width`).
- This decoupling allows the blur/scale effect to act on the entire visual bar while the width expansion happens independently inside it, creating a cinematic, complex feel.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the blur scaling and width expansion keyframes are completely disabled, immediately rendering the final state width without any visual stutter or motion.

## Usage
Open `demo.html` in your browser. You will see three mock System Diagnostics cards. Click the "Run Scan", "Rebuild", or "Ping Edge" buttons. Observe how the progress bars fade in rapidly from a blurred, shrunken state, before swiftly stretching out to their target widths using a bouncy easing curve.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex nested `.blur-entrance-wrapper` and `.progress-fill` setup, alongside the `--target-width` inline variable usage.
- `style.css`: The styling, minimalist tech design tokens, and the complex decoupled `@keyframes` logic driving the entrance mechanics.
