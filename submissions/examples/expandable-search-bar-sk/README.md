# Expandable Search Bar

A reusable, pure CSS expandable search bar pattern designed for modern navigation interfaces. It integrates seamlessly with existing EaseMotion CSS utilities.

## Features

- 📏 **Smooth Expansion:** Animates from a compact search icon into a full-width input field upon hover or focus.
- ⌨️ **Accessible:** Fully keyboard navigable. The search input expands automatically when gaining focus via the `Tab` key.
- 🎨 **Pure CSS:** Relies entirely on the `:focus-within` and `:hover` pseudo-classes to manage state, meaning absolutely zero JavaScript is required.
- 📱 **Responsive Design:** Adapts fluidly to mobile viewports, ensuring the expanded state uses available horizontal space.
- 🛑 **Prefers-Reduced-Motion:** Respects OS-level accessibility settings to disable width transitions for users who prefer reduced motion.

## Usage

1. Copy the HTML structure from `demo.html` to place inside your navigation bar.
2. Include the `style.css` which handles the layout and expansion micro-interactions.
3. Replace the SVG icon with your own if needed, ensuring it fits inside the `.search-btn` container.

## Customization

You can adjust the width bounds, colors, and transition speeds by modifying the variables at the root of `style.css`:

```css
:root {
  --search-width-collapsed: 44px;
  --search-width-expanded: 260px;
  --transition-speed: 0.4s;
}
```

## Contributed by
- Man1ac-1773
