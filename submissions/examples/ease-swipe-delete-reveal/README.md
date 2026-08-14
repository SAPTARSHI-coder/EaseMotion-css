# ease-swipe-delete-reveal – Swipe to Delete Reveal

An iOS‑style swipe‑to‑delete interaction. Swiping left on a list item reveals a red delete background and icon. Works with both touch and mouse.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-md
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each item has a red delete <div> absolutely positioned behind the foreground content.
- JavaScript tracks pointerdown, pointermove, and pointerup to translate the content leftward.
- If the swipe exceeds half the delete area, the item snaps to the open state (-120px).
- Tapping the delete area removes the item with a smooth collapse.
- The item snaps back if the swipe is insufficient.
- 	ouch-action: pan-y allows vertical scrolling while swiping horizontally.
- The animation respects prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
