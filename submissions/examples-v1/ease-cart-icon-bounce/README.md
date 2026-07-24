# ease-cart-icon-bounce – Cart Icon Bounce on Add

An e‑commerce "add to cart" feedback animation: the cart icon bounces and the item count badge pops when an item is added.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold, ease-text-5xl
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105, ease-hover-shadow-lg
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- Clicking "Add to Cart" increments a counter and updates the badge text.
- JavaScript adds the class .ease-cart-update to the cart icon container.
- The icon scales up with a bounce keyframe, and the badge pops simultaneously.
- The animations respect prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
