# ease-char-rise – Character Rise Entrance

Each character rises from below one by one with staggered timing, creating an uplifting cascading effect. The companion to ease-char-drop.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- JavaScript wraps each character in a <span class="char"> and assigns a staggered --ease-char-delay based on character index (0.05s per character).
- CSS animates each character from 	ranslateY(30px) and opacity:0 to its final position, giving a rising effect.
- A "Replay" button restarts the animation.
- The animation respects prefers-reduced-motion.

## How to use
1. Apply the char-rise-text class to a text container and call the play() function to trigger.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
