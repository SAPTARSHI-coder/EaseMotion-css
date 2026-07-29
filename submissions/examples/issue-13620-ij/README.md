# Ease Clip Rounded

Closes #13620

## Description
A utility class that applies rounded corners via `clip-path: inset(0 round ...)`. Perfect for clipping iframe or video content with custom border radius without overflow issues.

## Acceptance Criteria
- `.ease-clip-rounded` applies clip-path with `--ease-radius` variable
- Default radius is 12px
- Works with any child content (images, videos, gradients)
- Radius is configurable via the CSS variable

## Files
- `style.css` — Dark theme with clip-rounded utility
- `demo.html` — Demo with gradient placeholder and radius controls
