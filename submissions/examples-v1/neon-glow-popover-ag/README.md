# Neon Glow Popover (Pure CSS)

1. What does this do? Creates a keyboard-accessible, pure CSS popover featuring a premium checkout-inspired progressive Neon Glow interaction transition.
2. How is it used? Structure the HTML using a checkbox state trigger, a backdrop element, and apply the `.popover-content` classes alongside layout classes in `style.css`.
3. Why is it useful? It provides a smooth, eye-catching, micro-interactive feedback element for payment/checkout helpers without requiring any JavaScript libraries, adhering to EaseMotion's zero-dependency, performance-first philosophy.

---

## Component Overview
An elegant, minimalist, and lightweight popover styled for modern e-commerce checkouts (such as card verification CVV tips). It uses a pure CSS checkbox toggle hack, meaning it has zero runtime overhead or dependencies.

## Design Inspiration
Inspired by premium checkout pages (e.g. Stripe, Shopify) where ambient cues guide users without distraction. The popover features a progressive border and shadow light diffusion, creating a soft illuminated aura.

## Folder Structure
```
submissions/examples/neon-glow-popover-ag/
├── demo.html       ← Semantic HTML structure showcasing CVV helper card
├── style.css       ← Scoped styles, neon pulse keyframes, and custom variables
└── README.md       ← Component documentation and API options
```

## Configurable CSS Custom Properties
Customizable animation and visual tokens can be overridden at the `:root` or component level:

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--popover-bg` | Background color of the popover box | `#ffffff` (light) / `#0f172a` (dark) |
| `--popover-text` | Primary text color inside the popover | `#1e293b` (light) / `#f1f5f9` (dark) |
| `--popover-border-color` | Border stroke color of the container | `#e2e8f0` (light) / `rgba(...)` (dark) |
| `--popover-duration` | Transition opening/closing speed | `300ms` |
| `--popover-easing` | Timing function for the scaling entry transition | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--popover-scale` | Initial scale zoom percentage | `0.94` |
| `--popover-offset-y` | Vertical distance between trigger and popover | `10px` |
| `--popover-glow-color` | Primary neon light aura color | `#6c63ff` (light) / `#a855f7` (dark) |
| `--popover-glow-intensity` | Blur spread radius of the neon pulse | `12px` |
| `--popover-border-glow-strength` | Thickness of the container border | `1.5px` |
| `--popover-glow-pulse-speed` | Speed of the ambient glowing breathe animation | `2.2s` |

## Accessibility Notes
- **Semantic Tags:** Uses native forms and `<label>` relationships.
- **Keyboard Navigation:** The checkbox state trigger remains focusable via `Tab` (`.sr-only` keeps it in tab-order but visually hidden). Trigger focuses display a prominent `:focus-visible` outline. Toggling is fully triggered via `Space` key.
- **Dismissible:** A backdrop element dismisses/closes the popover when clicking anywhere outside.
- **Reduced Motion:** Fully supports `prefers-reduced-motion: reduce` by bypassing the scaling transitions, CVV blinking animations, and the glowing pulse effect to protect motion-sensitive users.

## Responsive Behavior
Designed with fluid sizing:
- Desktop/Tablet: Remains positioned relative to input fields.
- Mobile: Fits safely within viewports utilizing a relative max-width constraint (`min(90vw, 280px)`), avoiding any overflows or layout shifts.
