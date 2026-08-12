# Gaming Hub Float-Drift Popover

## Overview
A premium, production-ready "Float-Drift" popover component designed for AAA gaming hubs and SaaS platforms. It features a quest tracker interface where interactive mission cards reveal contextual details via smoothly animated, glassmorphism-styled popovers.

## Features
- **Float-Drift Animation**: Custom `@keyframes` provide an immersive, continuous floating effect that brings the UI to life.
- **Glassmorphism Design**: High-quality blurred backgrounds with subtle neon borders, gradients, and layered shadows.
- **EaseMotion Integration**: Utilizes standard EaseMotion utility classes for seamless page load entrances.
- **Interactive Transitions**: Hover and focus states use performant CSS transitions for immediate, satisfying feedback, including a progressive loading bar animation.
- **Accessible**: Implements semantic HTML, ARIA roles, keyboard-friendly focus states, and `prefers-reduced-motion` support.
- **Responsive Architecture**: Adapts gracefully to mobile devices with alternative popover positioning (shifting from right-side to bottom alignment).

## Folder Structure
```
gaming-hub-float-drift-popover/
├── demo.html    # Semantic HTML structure
├── style.css    # Styling, layout, and animations
└── README.md    # Documentation
```

## How to Run
1. Open `demo.html` in any modern web browser.
2. Hover over or focus on the quest cards within the "Active Quests" sidebar to trigger the Float-Drift popovers.
3. Observe the continuous floating effect, the neon hover shimmer, and the smoothly animating progress bars.

## EaseMotion Classes Used
The following declarative utility classes handle the initial page load entrances:
- `ease-fade-in`
- `ease-slide-up`
- `ease-delay-100`
- `ease-delay-200`

## Responsive Behaviour
On viewports under `768px`, the layout seamlessly shifts from a side-by-side grid to a stacked column structure. The popovers automatically re-orient from a right-side placement to a bottom placement to ensure they remain fully visible and readable on smaller screens.

## Accessibility
- **Semantic Structure**: Built with native semantic elements (`<button>`, `<main>`, `<aside>`, `<section>`).
- **Screen Readers**: Includes `role="tooltip"`, `aria-hidden`, and `aria-label` attributes to accurately describe the UI for assistive technologies.
- **Keyboard Navigation**: Features highly visible, custom focus states (neon outlines) for robust keyboard navigation.
- **Reduced Motion**: Respects the `prefers-reduced-motion: reduce` media query by disabling continuous animations and instant-snapping transitions to prevent discomfort.

## Why it fits EaseMotion CSS
This component exemplifies the power of EaseMotion CSS. It showcases how EaseMotion's declarative entrance utilities (`ease-fade-in`, `ease-slide-up`) can be cleanly combined with native CSS transitions (for immediate hover interactions) and specialized `@keyframes` (for the localized drift effect) to build high-end, immersive user interfaces—entirely without JavaScript or bulky frameworks.
