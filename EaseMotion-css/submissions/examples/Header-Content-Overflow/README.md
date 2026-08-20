# Bug 2: Header Content Overflow (Advanced Fix)

## Overview
Resolves the issue where navigation links are cut off on narrow screens by implementing a modern, touch-friendly horizontal scrolling track.

## Advanced Implementation Details
This solution goes beyond simple `overflow-x: auto`:
1. **CSS `mask-image`**: Applies a linear gradient mask to the scroll container, creating a subtle fade-out effect on the right side. This serves as a visual cue to the user that more content exists off-screen.
2. **Scroll Snapping (`scroll-snap-type`)**: Forces the scrolling to elegantly snap to the beginning of each link item, providing a premium, app-like feel on mobile devices.
3. **`overscroll-behavior-inline`**: Prevents accidental history navigation (swiping back) when the user reaches the end of the horizontal scroll track on trackpads and touch screens.
4. **Invisible Scrollbars**: Fully hides scrollbars across all rendering engines (Gecko/Webkit) while maintaining keyboard and touch accessibility.

## Testing
Open `demo.html` in a browser. Try swiping horizontally on the navigation links or using `Shift + ScrollWheel`. Notice the smooth fade on the right side.