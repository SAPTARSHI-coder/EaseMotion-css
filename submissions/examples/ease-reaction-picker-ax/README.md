# ease-reaction-picker – Emoji Reaction Picker Popover

A popover that appears on hover over a message, showing a row of emojis. Emojis stagger in, scale on hover, and when selected, a reaction chip pops into place. The popover closes after selection.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-gap, ease-relative, ease-inline-block, ease-absolute, ease-bottom-full, ease-left-1/2, ease--translate-x-1/2, ease-py-16, ease-mx-auto, ease-mb-2, ease-mt-2, ease-p-2, ease-p-4
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-gray-800, ease-text-xl
- **Components:** ease-card, ease-btn
- **Hover Effects:** ease-hover-scale-105 (not directly used, but available)
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- Hovering over the message wrapper shows the reaction popover with a fade + slide transition.
- Emoji buttons have a staggered drop‑in animation when the popover becomes visible.
- Each emoji scales up on hover for feedback.
- Clicking an emoji adds a reaction chip below the message with a pop animation; clicking the chip removes it.
- The popover hides on mouse leave with a short delay for improved usability.
- Reduced‑motion users see static icons without animation.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
