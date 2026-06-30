# Horizontal Card Wrapping Fix (#3637)

## Issue

The `.ease-card-horizontal` lacked `flex-wrap: wrap`, causing horizontal overflow on mobile screens where the combined width of image and text exceeded the viewport.

## Solution

Added `flex-wrap: wrap` to the base style to ensure the component degrades gracefully to a vertical layout on smaller screens.

## Testing

Verified in `demo.html` that the content now wraps correctly instead of overflowing the container.
