# Stats Counter Pop

This example adds a statistics card where counters pop into place with a short stagger.

## Files

- `demo.html` contains the activity stats markup.
- `style.css` defines the responsive grid, pop animation, and reduced-motion fallback.

## Highlights

- Uses per-card delay values for controlled staggering.
- Keeps each counter card at a stable minimum height.
- Switches to a single column on narrow screens.
- Removes motion when `prefers-reduced-motion` is enabled.
