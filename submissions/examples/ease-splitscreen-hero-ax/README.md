# ease-splitscreen-hero – Split Screen Hero with Hover Animation

A 50/50 split hero section where each side expands to 65% on hover while the other side shrinks. Text fades in as the panel expands, creating an interactive “choose your path” experience. Pure CSS, no JavaScript.

## EaseMotion classes used
- **Layout:** ease-flex, ease-items-stretch, ease-min-h-screen
- **Typography:** ease-text-4xl, ease-font-bold, ease-text-white, ease-text-lg, ease-text-gray-200
- **Spacing:** ease-mt-4 (via button margin)
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-transition

## How it works
- Two panels fill the viewport using a flex container.
- Each panel has lex: 1 1 50% with a smooth transition on the lex property.
- On hover, the panel’s lex-basis animates to 65%, pushing the other panel to 35%.
- The description text and call‑to‑action button are initially hidden (opacity 0, shifted down) and fade in when the panel expands.
- All animations respect prefers-reduced-motion.

## How to use
1. Copy the HTML and CSS into your project.
2. Customise the content, colours, and breakpoints as needed.
3. Ensure the path to easemotion.css is correct.
