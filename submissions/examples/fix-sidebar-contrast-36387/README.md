# Fix Sidebar Navigation Contrast

This submission resolves issue #36387.

## The Bug
On the documentation website in Light Mode, hovering over sidebar navigation buttons caused the background to become very light. This reduced the contrast ratio between the background and the text/icon to an inaccessible level, making the text nearly unreadable.

## The Fix
This submission demonstrates an accessible and visually pleasing sidebar navigation implementation for Light Mode. By using a slightly darker, semi-transparent background on hover (e.g., `rgba(15, 23, 42, 0.05)`) and maintaining a solid text color (`var(--ease-color-neutral-900)`), the contrast ratio remains robust while still providing clear interactive feedback.

## File Structure
- `demo.html`: Features a sample sidebar navigation menu demonstrating the corrected hover state.
- `style.css`: Contains the CSS for the sidebar, specifically targeting the improved hover contrast.
