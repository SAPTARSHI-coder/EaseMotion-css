# ease-path-erase – SVG Path Erase Animation

The reverse of ease-path-draw: an SVG path stroke animates from fully drawn back to zero length, simulating an erasing effect. Ideal for exit/undo transitions.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The SVG path (a checkmark) starts fully drawn (stroke-dashoffset: 0).
- When the class .erase is added, the stroke-dashoffset transitions to its full stroke-dasharray value, erasing the path from end to start.
- The surrounding circle remains as a visual frame.
- The effect respects prefers-reduced-motion.

## How to use
1. Copy the SVG and CSS into your project.
2. Trigger the erase effect by toggling the .erase class on the target path.
3. Ensure the path to easemotion.css is correct.
