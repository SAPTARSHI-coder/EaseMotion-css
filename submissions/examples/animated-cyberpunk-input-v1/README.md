# Animated Cyberpunk Input Field

A pure CSS, JavaScript-free animated input field featuring classic geometric cut-corners, an animated floating label, dynamic outer drop-shadow neon glows, and a futuristic scanning animation on focus. Built for Issue #79611.

## Features
- **Pure CSS (No JS):** Lightweight and fully styled using modern CSS pseudo-elements and the `:placeholder-shown` hack for the floating label.
- **Cyberpunk Geometry:** Employs `clip-path` to create the classic angular cut-corners characteristic of sci-fi interfaces.
- **Floating Label:** The `<label>` floats smoothly to the top of the input border when focused or filled.
- **Scanning Animation:** On focus, a glowing scanline animation rapidly traces the top and bottom borders.
- **Dynamic Glow:** The glowing neon effect accurately wraps around the clipped corners using `filter: drop-shadow()`.
- **Responsive Width:** Safely spans its container width without causing horizontal overflow.
- **Accessible Focus States:** A custom dashed focus ring explicitly styled to match the angular geometry of the input when navigating via keyboard (`:focus-visible`).
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling scaling, floats, and scanline animations.

## Folder Structure
- `demo.html` - The showcase layout displaying multiple colored instances of the cyberpunk input.
- `style.css` - The core styling, variables, scanline keyframes, and interaction states.
- `README.md` - Documentation.

## HTML Usage

Wrap your `<input>` (with `placeholder=" "`), the `<label>`, and an empty `<span class="ease-cyber-scanline">` within the `ease-cyber-group`. Note: `placeholder=" "` is strictly required for the floating label trick to work via CSS without JS.

```html
<div class="ease-cyber-group">
    <input type="text" id="operator_id" class="ease-cyber-input" placeholder=" " required>
    <label for="operator_id" class="ease-cyber-floating-label">Operator_ID</label>
    <span class="ease-cyber-scanline"></span>
</div>
```

## CSS Customization

The component uses scoped CSS variables. You can easily override the neon color by applying a new class or setting the variables inline on the wrapper:

```css
.ease-cyber-group {
    --neon-color: #00ffff; /* Primary neon color */
    --neon-glow: rgba(0, 255, 255, 0.4); /* Ambient glow opacity */
}
```

The component includes three pre-made themes in `style.css`:
- Default (Cyan)
- `.theme-magenta`
- `.theme-yellow`

## Accessibility Notes
- **Semantic Labels:** Make sure to always pair the input with a `<label for="...">`.
- **Focus Rings:** Explicit `:focus-visible` styling is included via a dashed custom pseudo-element. Instead of a standard rectangular ring (which looks broken against angled borders), this custom ring matches the exact geometry of the `clip-path`.
- **Contrast:** The neon text retains sufficient contrast against the heavily darkened background.
