# Morph-Glow Badge

A pure HTML/CSS implementation of a minimalist tech-inspired badge featuring smooth shape morphing and dynamic glowing effects. Perfect for modern layouts indicating statuses, categories, or specialized features.

## 1. What the Morph-Glow Badge Does
The Morph-Glow Badge provides a visually engaging way to display small pieces of information (like "Active", "AI", or "Verified"). It combines subtle shape-shifting (`border-radius` morphing) with dynamic box-shadow glowing, creating an alive, futuristic aesthetic without being overly distracting.

## 2. Main Features
- **Pure HTML and CSS**: No JavaScript or external dependencies required.
- **Dynamic Morphing**: Uses `@keyframes` to animate `border-radius` for a smooth, organic feel.
- **Subtle Glow**: An animated `box-shadow` and `filter` blur create a breathing light effect.
- **Themable**: Uses CSS Custom Properties for easy color and sizing adjustments.
- **Responsive & Accessible**: Works perfectly across mobile/desktop, includes clear `:focus-visible` styles, and semantic HTML structure.
- **Reduced-Motion Support**: Respects user preferences by gracefully downgrading animations.

## 3. How to Use It
Include the CSS in your stylesheet or `<style>` block, and use the `.morph-badge` class along with a specific theme class on a standard interactive element (like `div` with `tabindex="0"`, `button`, or `a`).

```html
<!-- Example Usage -->
<div class="morph-badge badge-active" tabindex="0" role="status" aria-label="Active status">
    <span class="badge-text">Active</span>
</div>
```

## 4. HTML Class Structure
- `.morph-badge`: The base class containing the structure and transitions.
- `.badge-text`: The wrapper for the inner text ensuring correct z-index layering above the glow.
- `.badge-active`, `.badge-verified`, `.badge-ai`, `.badge-os`: Theme modifier classes that inject specific colors via custom properties.

## 5. CSS Custom Properties
The component uses the following key properties to allow easy customization:
- `--badge-bg`: Background tint of the badge.
- `--badge-color`: Primary text and border color.
- `--badge-glow`: The color used for the box-shadow and blur effects.
- `--badge-radius`: Base border-radius (default: 12px).
- `--badge-duration`: Animation duration (default: 3s).

## 6. Animation Behavior
The animation (`morphGlow`) smoothly interpolates between:
- **`border-radius`**: Changing corners slightly to create a morphing shape.
- **`box-shadow`**: Pulsing inner and outer glows.
- **`transform`**: Slight scaling for a breathing effect.

## 7. Responsive Behavior
By default, the badges are inline elements. In smaller viewports, they can be stacked vertically or wrapped flexibly using standard CSS layout techniques like Flexbox or Grid.

## 8. Accessibility Support
- Uses `tabindex="0"` (or native focusable elements) for keyboard navigation.
- Implements clear high-contrast `:focus-visible` outlines.
- Uses `role` and `aria-label` attributes to ensure screen readers announce the badge correctly.
- Sufficient color contrast is maintained through a dark base background and light text shadows.

## 9. `prefers-reduced-motion` Support
Includes a media query to disable the infinite `@keyframes` animation and hover transformations for users who prefer reduced motion. The badge remains visually pleasing with a static, subtle blur and solid border radius.

## 10. Example Usage
See `demo.html` for a complete implementation showcasing four different badge states.

## 11. Why it fits EaseMotion CSS
This component perfectly aligns with the EaseMotion CSS philosophy by focusing on highly polished, lightweight, and dependency-free aesthetics. It leverages modern CSS capabilities (custom properties, advanced pseudo-elements, and fluid keyframes) to deliver a premium user experience with zero JavaScript overhead.
