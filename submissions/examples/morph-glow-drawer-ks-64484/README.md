# Morph-Glow Drawer

A pure HTML/CSS responsive side navigation drawer featuring a unique "morph-glow" entrance animation. Designed for minimalist technology layouts, dashboards, and modern web applications.

## 1. Feature Overview
This component implements a fully functional, sliding side drawer without writing a single line of JavaScript. It uses the "Checkbox Hack" (`<input type="checkbox">` + `<label>`) to manage state, and leverages advanced CSS transitions and keyframes to create a fluid, morphing entrance effect accompanied by subtle neon glows.

## 2. Morph-Glow Drawer Behavior
When closed, the drawer sits off-screen (via `transform: translateX(-100%)`) and is slightly scaled down and compressed on the X-axis. 
When the user clicks the menu trigger (which is a `<label>` tied to a hidden checkbox), the drawer's `transform` smoothly morphs to `translateX(0) scale(1)`. Simultaneously, hidden `.glow-effect` orbs trigger a `@keyframes` pulse animation, blooming softly behind the drawer content to create a high-tech "power-up" aesthetic.

## 3. CSS-Only Interaction
The state is managed purely by HTML and CSS:
- A hidden `<input type="checkbox" id="drawer-toggle">` sits at the top of the DOM.
- The trigger button and the backdrop overlay are both `<label for="drawer-toggle">` elements. Clicking them toggles the checkbox state.
- CSS sibling selectors (`:checked ~ .app-layout .side-drawer`) respond to the checked state by altering the drawer's CSS properties, causing it to slide in.

## 4. Features
- **Zero JavaScript**: Entirely CSS-driven interaction and animation.
- **Morphing Entrance**: A combination of translation and scaling creates a non-linear, morphing physical effect.
- **Glowing Accents**: CSS filters (`filter: blur()`) and keyframe animations create soft, pulsing colored light sources within the drawer.
- **Backdrop Blur**: Utilizes `backdrop-filter` for a modern, glassmorphic overlay effect.
- **Theming**: Supports Dark (default) and Light mode natively via `prefers-color-scheme`.
- **Accessible & Responsive**: Fully keyboard navigable and adapts seamlessly to mobile viewports.

## 5. CSS Custom Properties
Easily theme the drawer by overriding these root variables:
- `--drawer-bg`, `--drawer-text`, `--drawer-muted`: Core surface and typography colors.
- `--drawer-accent`: The primary brand color used for active states and glows.
- `--drawer-width`: Width of the side panel (default `320px`).
- `--drawer-radius`: Border radius applied to the outer edge.
- `--backdrop-bg`: Color of the screen overlay.
- `--transition-speed`, `--transition-ease`: Timing configuration for the morph animation.

## 6. Responsive Behavior
- **Desktop**: The drawer is a comfortable `320px` wide panel that slides out, casting a shadow over the main content.
- **Tablet (`<= 768px`)**: The drawer width reduces slightly to `280px` to conserve screen real estate.
- **Mobile (`<= 480px`)**: The drawer expands to `100vw` (full screen) and drops its border-radius, acting as a full-screen mobile menu overlay to prevent horizontal overflow and guarantee usability.

## 7. Accessibility
- **Keyboard Navigation**: The checkbox labels act as buttons and support keyboard focus. When focused via keyboard, explicit `:focus-visible` styling is applied so the user knows where they are. Users can trigger the menu using the `Space` bar.
- **Semantic Structure**: Uses `<aside>` for the drawer, `<nav>` for the links, and properly nested headings and lists.
- **Screen Readers**: The hidden checkbox uses `aria-label`, and the backdrop uses `aria-hidden="true"` so it isn't read aloud unnecessarily.

## 8. Reduced-Motion Support
The component fully respects user OS settings. If `@media (prefers-reduced-motion: reduce)` is active, all morphing and scaling effects are stripped. The drawer reverts to a simple, instantaneous `translateX` slide, and the glowing orbs remain static, ensuring usability for users sensitive to motion.

## 9. Usage Instructions
1. Ensure the hidden `<input type="checkbox" id="drawer-toggle">` is placed high in your DOM structure so sibling selectors can reach the main layout elements.
2. Place a `<label for="drawer-toggle">` anywhere you want a button to open or close the drawer.
3. Drop in the CSS and the drawer will function immediately.

```html
<!-- Simplified Usage -->
<input type="checkbox" id="drawer-toggle" class="drawer-toggle-checkbox">

<div class="app-layout">
    <main>
        <label for="drawer-toggle">Open Menu</label>
        <!-- Your main page content -->
    </main>
    
    <label for="drawer-toggle" class="drawer-backdrop"></label>
    
    <aside class="side-drawer">
        <!-- Drawer content -->
    </aside>
</div>
```

## 10. Why the component fits EaseMotion CSS
This component exemplifies EaseMotion CSS by proving that complex, highly polished interactive elements (like stateful drawers with morphing shapes and lighting effects) can be built reliably without importing heavy JavaScript UI libraries, relying solely on performant HTML and CSS APIs.
