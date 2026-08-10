# Blur Entrance Carousel — Fintech Dashboard Layouts

A CSS carousel component for fintech dashboards that reveals portfolio cards with a blur-to-sharp entrance animation. Cards slide into view with a progressive deblur effect, creating a premium feel for financial data displays.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [x] Enhancement (improvement to existing feature or new feature)

## Submission Checklist

- [x] I have performed a self-review of my code
- [x] I have tested this component on multiple browsers (Chrome, Firefox, Edge)
- [x] My code follows the style guidelines of this project
- [x] I have added comments in hard-to-understand areas
- [x] My changes generate no new warnings
- [x] I have added tests that prove my fix is effective or that my feature works
- [x] New and existing unit tests pass locally with my changes

## Feature Description

### What
A carousel built with pure CSS transitions that applies a blur entrance effect to fintech dashboard cards. Each card starts blurred and slightly scaled down, then animates to full clarity as it enters the viewport. The component displays portfolio data cards (total balance, stocks, crypto, fixed income) in a scrollable carousel with navigation controls.

### How
- Uses CSS `filter: blur()` transitioning from `12px` to `0` combined with `opacity` and `scale` transforms
- JavaScript manages slide visibility, tracking position, and triggering blur-active class
- Progressive delay: each card animates with a staggered timing for a cascading reveal
- Responsive layout: 2 cards visible on desktop, 1 on mobile
- Navigation via arrow buttons and dot indicators

### Why
Financial dashboards benefit from smooth, professional entrance animations that convey trust and polish. The blur-to-sharp effect mimics a camera focusing, drawing attention to newly revealed data. This approach is lightweight (no JS animation libraries) and performs well on mobile devices.

## Demo

![Blur Entrance Carousel Demo](demo.gif)

View the live demo: [Open demo.html](demo.html)

## Browser Testing

- [x] Chrome (latest)
- [x] Firefox (latest)
- [x] Edge (latest)
- [ ] Safari (not tested)

## Notes

- No external dependencies — pure CSS + vanilla JS
- All transitions use `cubic-bezier` easing for natural motion
- Cards have hover states with subtle border and shadow feedback
- The component respects `prefers-reduced-motion` by keeping elements visible
