# ease-split-view – Animated Split Content View

A two‑panel split view component where the left panel can be toggled in/out with a smooth width transition. The right panel automatically expands to fill the remaining space.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-justify-between, ease-items-center, ease-mb-6, ease-py-8
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-lg, ease-font-semibold, ease-text-gray-600, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-500, ease-transition

## How it works
- The split view uses a flex container with two panels and a divider.
- Clicking the toggle button adds/removes the .hidden class on the left panel.
- The hidden state uses lex: 0 and width: 0 with a CSS transition to animate the collapse/expand.
- The right panel automatically fills the available space (flex: 1).
- A decorative divider provides a visual handle (though resizing via drag would require JavaScript).
- The effect respects prefers-reduced-motion.

## How to use
1. Copy the HTML structure and CSS into your project.
2. Use the hidden class to toggle panels as needed.
3. Ensure the path to easemotion.css is correct.
