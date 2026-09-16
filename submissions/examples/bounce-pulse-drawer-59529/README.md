# Bounce-Pulse Drawer Showcase

A modern, pure CSS sliding drawer component optimized for SaaS dashboards and showcase layouts. Features a playful bounce physics transition on entry and a continuous attention-grabbing pulse effect on the primary trigger button.

## 🌟 Features

- **Pure CSS/HTML:** No JavaScript required. State is managed via the hidden checkbox hack.
- **Bounce Physics:** Uses a custom `cubic-bezier` timing function to create a natural, spring-like entrance.
- **Pulse Animation:** Subtle keyframe animation draws attention to the main action button without being overwhelming.
- **Staggered Animations:** Content items inside the drawer fade and slide in sequentially.
- **Accessible & Responsive:** Fully functional on mobile viewports and respects user motion preferences.

## 🚀 Usage

### HTML Structure

The drawer relies on the `input[type="checkbox"]` hack to track the open/closed state. Place the input, overlay label, and drawer side-by-side in the DOM.

```html
<!-- Trigger Button -->
<label for="drawer-toggle" class="btn-toggle">Open Drawer</label>

<!-- Hidden Checkbox -->
<input type="checkbox" id="drawer-toggle" aria-hidden="true">

<!-- Overlay Label (Clicking outside closes drawer) -->
<label for="drawer-toggle" class="drawer-overlay"></label>

<!-- Drawer Container -->
<aside class="drawer">
  <!-- Drawer content here -->
</aside>
```

### CSS Custom Properties

The component is highly customizable via CSS variables defined on `:root`:

- `--primary-color`: The main accent color (default: Indigo)
- `--primary-hover`: The hover state color for buttons
- `--drawer-bg`: Background color of the drawer
- `--drawer-width`: Desktop width of the drawer
- `--transition-timing`: The custom easing function for the bounce effect

### Accessibility Notes

For users who prefer reduced motion, the CSS includes a `@media (prefers-reduced-motion: reduce)` block that:
- Disables the continuous button pulse
- Replaces the bounce entry with a straightforward slide
- Removes stagger delays on content loading

## 📁 File Structure

- `demo.html` - Complete markup showing a sample SaaS hero section and the drawer.
- `style.css` - Stylesheet containing layout structure, variables, animations, and the checkbox state management.
