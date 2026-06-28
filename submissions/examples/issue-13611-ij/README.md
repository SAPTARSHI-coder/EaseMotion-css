# Ease Glass

Closes #13611

## Description
A single `.ease-glass` utility class that provides full glassmorphism: backdrop blur, semi-transparent background, and a subtle border. Opacity is configurable via `--ease-glass-opacity`.

## Acceptance Criteria
- `backdrop-filter: blur(16px)` for the frosted glass effect
- Semi-transparent background using `--ease-glass-opacity` variable
- Subtle border for definition
- Comparison shown alongside solid element
- Opacity adjustable via buttons

## Files
- `style.css` — Dark theme with glassmorphism utility
- `demo.html` — Demo with glass vs solid comparison
