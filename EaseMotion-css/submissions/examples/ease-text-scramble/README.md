# ease-text-scramble – Text Scramble Effect

A text animation where characters randomly cycle through symbols and letters before resolving into the final text. Gives a hacker / decoder aesthetic.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-900, ease-bg-black
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-white, ease-text-gray-400, ease-text-2xl, ease-font-mono, ease-text-green-400, ease-text-sm, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8, ease-p-6
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition
- **Helpers:** ease-inline-block, ease-rounded-xl

## How it works
- JavaScript tracks the elapsed time and the desired final text.
- Each frame, characters that have not yet "settled" are replaced with random characters from a predefined set.
- Once the progress reaches a character's position, it reveals the correct letter and stays fixed.
- The animation runs for 2 seconds by default; a button lets you replay it.
- The CSS provides a dark, green-on-black terminal style.
- The effect respects prefers-reduced-motion by skipping the scramble.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
