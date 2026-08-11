# CSS Scale-Hover Drawer

A pure CSS, highly interactive, and visually appealing Scale-Hover Drawer tailored for modern SaaS dashboard layouts. The drawer expands smoothly on hover or focus, while individual navigation items scale and subtly translate to provide a dynamic, tactile user experience.

## Features

- **Pure CSS/HTML**: No JavaScript needed for layout interactions.
- **Scale-Hover Effect**: Navigation items gently scale and translate outward when hovered, making the interaction feel alive and responsive.
- **Smooth Transitions**: Utilizes custom `cubic-bezier` curves for organic and bouncy expansion effects.
- **Responsive Design**: Adapts gracefully to smaller screens by shifting to a mobile-friendly overlay layout upon hover.
- **Accessible**: Built with semantic HTML, keyboard navigable (focus states handled), and respects `prefers-reduced-motion` settings.

## File Structure

- `demo.html` - The showcase structure representing a SaaS dashboard.
- `style.css` - All styles, animations, and custom properties to drive the effect.

## Usage

1. Open `demo.html` in your browser.
2. Hover over the sidebar on the left side of the dashboard mock to expand it.
3. Hover over individual items to observe the "Scale-Hover" effect.
4. Try using the `Tab` key to navigate through the drawer items to verify accessibility.

## Customization

You can easily adapt the styling by overriding the CSS variables in the `:root` pseudo-class inside `style.css`:

```css
:root {
    --bg-color: #0f172a; 
    --drawer-bg: #1e293b;
    --drawer-hover-bg: #334155; 
    --accent-color: #3b82f6; 
    
    --transition-speed: 0.35s;
    --drawer-width: 280px;
    --drawer-width-collapsed: 72px;
}
```

## Browser Support

Works seamlessly across all modern browsers supporting CSS Variables, Flexbox/Grid, and standard CSS transitions.
