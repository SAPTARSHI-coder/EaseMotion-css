# Force Animation Utility

A critical accessibility and UX pattern for overriding the `@media (prefers-reduced-motion: reduce)` global reset.

## Features
- **The Problem**: When developers implement a global `prefers-reduced-motion` reset (e.g., setting all animation durations to `0.01ms`), it universally halts all motion. However, some animations are *essential* to conveying state, such as a loading spinner or an uploading progress bar. Without them, a motion-sensitive user might think the app has frozen.
- **The Solution**: The `.force-animation` utility class acts as an explicit opt-out from the global motion reset. 
- **Implementation**: We update the global reset query to use the `:not(.force-animation)` selector. Any element tagged with `.force-animation` is protected from the reset and will continue to animate regardless of OS settings.

## Usage
Open `demo.html` in your browser.
1. Observe that both spinners rotate normally.
2. Go to your operating system's settings and enable the "Reduce Motion" or disable "Animation Effects" setting.
3. Refresh the page. The first spinner will instantly freeze, respecting the user's preference to reduce nausea-inducing motion on the page. 
4. However, the second spinner (using `.force-animation`) will continue spinning, ensuring the user still understands that a process is "loading" without breaking core functionality.

## Files
- `demo.html`: The HTML structure demonstrating the application of the utility class.
- `style.css`: The styling engine containing the updated `@media (prefers-reduced-motion: reduce)` query.
