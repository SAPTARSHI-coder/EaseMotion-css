# Fix Copy Button State

This submission resolves issue #37361.

## The Bug
In the Animation Builder, the "Copy" button occasionally remains stuck in the "Copied!" state after a page refresh. Certain browsers aggressively cache DOM state (like input values and button texts) between soft reloads, causing the button to display an inaccurate status.

## The Fix
This submission demonstrates the correct way to handle ephemeral UI states like copy confirmations. By leveraging the `pageshow` event (which fires even when pages are loaded from the browser's bfcache) and explicitly resetting the button text on load, we guarantee the button always starts in the default "Copy" state.

## File Structure
- `demo.html`: Contains the copy button implementation with robust state resetting logic.
- `style.css`: Basic styling for the button and layout.
