# 3D Sidebar

Documentation showcase for EaseMotion CSS issue #78585. The component demonstrates a layered sidebar navigation surface using CSS depth, gradients, transforms, and responsive layout.

## Files

- `demo.html` — semantic sidebar and navigation structure.
- `style.css` — 3D surfaces, depth effects, interaction states, and responsive behavior.

## Structure

The example uses an `<aside>` for complementary navigation and a labelled `<nav>` for the navigation links. The active link is visually distinguished while remaining a normal anchor.

The depth effect is created from shadows, transforms, gradients, and layered surfaces. No JavaScript is required for the visual interaction.

## Usage

Replace the navigation destinations and labels with application routes. Additional links can be added without changing the layout model. For applications that require a collapsible sidebar, JavaScript can be added separately without changing the presentation styles.

## Accessibility

- Uses semantic `<aside>` and `<nav>` landmarks.
- Navigation is composed of native links.
- Focus-visible styling remains available for keyboard users.
- Visual depth is supplementary to the navigation text.
- Reduced-motion behavior limits transforms for motion-sensitive users.

## Responsive Behavior

The desktop layout keeps the sidebar separated from the main content. At smaller widths, the navigation transitions to a compact presentation so the content remains usable without horizontal scrolling.

## Customization

Change the sidebar width, depth, gradient, shadow, and accent values in `style.css`. The same surface treatment can be reused for dashboards, documentation sites, or creative portfolios.

## Preview

Open `demo.html` and move the pointer across the navigation links. Resize the viewport to verify the responsive layout and use keyboard navigation to verify focus states.
