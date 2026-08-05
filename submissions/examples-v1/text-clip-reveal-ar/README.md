# Text Clip Reveal Animation

A CSS-only text reveal effect that uses clip-path to progressively unmask text from left to right. Ideal for hero headings, section titles, or call-to-action text.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-inline-block
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The text is initially hidden using clip-path: inset(0 100% 0 0), which clips everything to the right of the left edge.
- When the eveal class is added, the clip-path transitions to inset(0 0 0 0), revealing the full text.
- JavaScript toggles the class on page load and via the Replay button.
- The effect respects prefers-reduced-motion by showing the text instantly without animation.

## How to use
1. Add the class clip-reveal-text to any text element you want to animate.
2. Toggle the eveal class to trigger the effect.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
