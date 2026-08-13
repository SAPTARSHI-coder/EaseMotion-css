# Animated Cyberpunk Button

A pure CSS, JavaScript-free animated button featuring futuristic cut corners and dynamic outer glow drop-shadows. Built for Issue #79607.

## Features
- **Pure CSS (No JS):** Lightweight and styled exclusively with modern CSS features like `clip-path` and `filter: drop-shadow`.
- **Cyberpunk Design:** Employs the classic "cut corners" aesthetic typical in sci-fi/cyberpunk UI designs.
- **Dynamic Glow:** The glowing neon effect bleeds accurately around the clipped corners using `drop-shadow` instead of a traditional `box-shadow` (which would otherwise get clipped).
- **Responsive:** Fits perfectly on both desktop and mobile views, scaling beautifully on all viewports.
- **Accessible Focus States:** A custom dashed focus ring explicitly styled to match the angular geometry of the button when navigating via keyboard.
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling scaling and glow transition effects.

## Folder Structure
- `demo.html` - The showcase layout displaying multiple colored instances of the cyberpunk button.
- `style.css` - The core styling, variables, and interaction states.
- `README.md` - Documentation.

## HTML Usage

For semantic and accessibility reasons, use a standard `<button>` tag. Add a nested `<span>` if you wish to apply advanced glitch text effects later, or just to keep the structure clean.

```html
<button type="button" class="ease-btn-cyberpunk">
    <span>Initialize</span>
</button>
```

## CSS Customization

The component uses scoped CSS variables. You can easily override the neon color by applying a new class or setting the variables inline:

```css
.ease-btn-cyberpunk {
    --cyber-main: #00ffff; /* Primary neon color */
    --cyber-bg: rgba(0, 255, 255, 0.1); /* Background opacity for hover */
}
```

The component includes three pre-made themes in `style.css`:
- Default (Cyan)
- `.theme-magenta`
- `.theme-yellow`

## Accessibility Notes
- **Focus Rings:** Explicit `:focus-visible` styling is included. Instead of a standard rectangular ring which looks broken against angled borders, a custom `::after` pseudo-element draws a dashed outline that exactly matches the button's `clip-path` geometry.
- **Hover/Active:** Provides clear tactile feedback through `transform: translateY` interactions.
