# ease-badge-shine – Badge Shine Sweep

A periodic diagonal shine that sweeps across a badge or label, giving it a premium, eye‑catching look. Perfect for “New”, “Premium”, or “Sale” stickers.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-8, ease-flex-wrap
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- The badge has an ::after pseudo‑element with a semi‑transparent white gradient.
- The gradient is skewed and positioned off‑screen, then animated to sweep across the badge using left and ransform: skewX.
- The animation runs every 3.5 seconds, with a pause after each sweep.
- The effect respects prefers-reduced-motion by hiding the pseudo‑element.

## How to use

1. Add the classes ease-badge-shine and a color variant (adge-new, adge-premium, adge-sale) to any <span>.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
