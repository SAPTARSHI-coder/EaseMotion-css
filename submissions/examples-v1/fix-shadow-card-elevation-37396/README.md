# Fix Shadow Card Elevation Effect

This submission resolves issue #37396.

## The Bug
The `.ease-card-shadow` component defaults to using the `--ease-shadow-lg` CSS variable. In the global framework variables, `--ease-shadow-lg` has a very low opacity (`0.10`), which makes the shadow effect nearly invisible against standard backgrounds. Furthermore, `.ease-card-shadow` removes the default card border, meaning it relies *entirely* on the shadow for its visual boundaries. With such a faint shadow, it looks identical to or worse than a base card.

## The Fix
Since modifying core CSS files directly is not permitted, this submission provides an override snippet that developers can implement to fix the elevation effect locally. 

By overriding the `--ease-card-elevation` fallback or explicitly redefining the shadow for `.ease-card-shadow` using `var(--ease-shadow-xl)` (which provides stronger depth), the card successfully appears lifted off the page as originally intended.

## File Structure
- `demo.html`: Shows a side-by-side comparison of a standard Base Card vs. the newly fixed Shadow Card.
- `style.css`: Contains the CSS override that fixes the shadow elevation issue locally.
