# Modal Reduced Motion Fix

A vital accessibility pattern demonstrating how to respect the user's OS-level settings by gracefully downgrading complex, potentially dizzying modal animations into simple, accessible opacity cross-fades.

## Features
- **The Context**: EaseMotion CSS is known for its beautiful, bouncy, scaling, and sliding entrance animations. However, for users with vestibular disorders or motion sensitivity, complex animations (especially elements flying towards the screen via `scale` or panning quickly via `translate`) can cause severe nausea, dizziness, or migraines.
- **The Core Solution**: Modern operating systems (Windows, macOS, iOS, Android) all feature an accessibility setting to "Reduce Motion". Browsers expose this setting to CSS via the `@media (prefers-reduced-motion: reduce)` media query. 
- **The Implementation**: We use this media query to act as an override block at the bottom of our stylesheets. If motion sensitivity is detected, we aggressively strip the `transform` properties from our modal dialogs using `transform: none !important`, and we modify the `transition` timing rules to exclusively animate `opacity`. The user still gets a smooth, polished UI experience (a soft fade-in), but without the physical motion triggers.

## Usage
Open `demo.html` in your browser. 
- Click the "Open Modal" button to view the standard, energetic entrance animation (scaling up and bouncing in from the bottom).
- Now, go to your OS settings and enable reduced motion (e.g., Windows: Settings > Accessibility > Visual Effects > Turn off "Animation effects"). 
- Refresh the browser and click the button again. The modal will now smoothly and safely fade into existence without any movement.

## Files
- `demo.html`: The HTML structure demonstrating the modal layout.
- `style.css`: The styling engine contrasting the standard spring animation with the `@media (prefers-reduced-motion)` override block.
