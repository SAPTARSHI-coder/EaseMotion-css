1. What does this do? Toggles between light and dark mode with smooth CSS transitions, persisting preference in localStorage and respecting the user's system `prefers-color-scheme`.
2. How is it used? Add the `.theme-toggle` button and the CSS defines `data-theme="dark"` on `<html>` — the JS handles the toggle and persistence.
3. Why is it useful? A theme toggle is a standard UI pattern that improves user experience; this lightweight implementation uses CSS custom properties for clean theming and takes 0 external dependencies.
