# Ease Skip Link

Closes #13622

## Description
An accessible skip navigation link that is hidden off-screen by default and slides in with animation when focused via keyboard navigation.

## Acceptance Criteria
- Link is positioned off-screen (left: -9999px) by default
- On :focus, slides in from the top with smooth animation
- High contrast colors with primary border
- Respects keyboard navigation only
- Smooth scroll to target section

## Files
- `style.css` — Dark theme with skip link focus reveal animation
- `demo.html` — Demo page with skip link and main content section
