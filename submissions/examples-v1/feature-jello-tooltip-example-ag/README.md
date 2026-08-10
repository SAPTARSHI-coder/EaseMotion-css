# Jello Tooltip Example (Standard)

## Description
This is a standard HTML and CSS implementation of an "Attention Seeker" tooltip using a Jello animation effect. When a user hovers over or focuses the trigger element, the tooltip appears and wiggles (jellos) to grab their attention. It's an excellent micro-interaction for onboarding tours, feature highlights, or important contextual help.

## Installation & Usage
1. Open `demo.html` in your browser to see the tooltip in action.
2. The HTML uses a standard wrapper approach (`.tooltip-wrapper-ag`) containing both the trigger (`button`) and the tooltip (`.ease-jello-tooltip-ag`).
3. Hovering or focusing within the wrapper triggers the CSS animation.

## How It Works
- **Visibility:** The tooltip is hidden by default using `opacity: 0` and `visibility: hidden`.
- **Triggering:** On `:hover` or `:focus-within` of the wrapper, the tooltip becomes visible and the `easeJelloAg` animation starts.
- **The Jello Effect:** The animation uses multiple keyframes alternating `skewX` and `skewY` values. The skew angle gradually decreases over the duration of the animation, creating an elastic, jelly-like wobble that settles back to its original shape.
- **Transform Origin:** The `transform-origin: center bottom` property is crucial. It anchors the tooltip near the little arrow pointing to the button, making the wobble feel physically connected to the element it describes.
- **Centering:** Because the tooltip is centered using `left: 50%; transform: translateX(-50%)`, the `translateX(-50%)` is included in every keyframe to ensure it doesn't jump off-center during the animation.

## Accessibility Considerations
- **ARIA Roles:** The tooltip has `role="tooltip"` and is linked to the trigger button via `aria-describedby="jello-tooltip-ag"`.
- **Keyboard Navigation:** The animation triggers on `:focus-within`, ensuring keyboard users experience the same visual feedback as mouse users when navigating to the button.
- **Focus Ring:** The button has a custom, highly visible focus ring to aid keyboard navigation.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` disables the jello animation entirely. The tooltip will still appear and disappear gracefully via opacity transitions, but it will remain perfectly still, respecting the user's system preferences.
