# Animated Breadcrumb Navigation

A reusable, accessible breadcrumb navigation pattern perfect for e-commerce sites, admin dashboards, and content-heavy applications. Built perfectly to complement EaseMotion CSS.

## Features

- ✨ **Animated Separators:** Subtle micro-interactions on separators when hovering adjacent items.
- 🎨 **Active States:** Clear visual hierarchy indicating the current page with a smooth underline reveal effect.
- 📱 **Responsive Design:** Flex-wrap layout safely handles long breadcrumb trails on smaller mobile screens.
- ♿ **Accessible:** Implements standard ARIA breadcrumb patterns (`<nav aria-label="Breadcrumb">`, `<ol>`, and `aria-current="page"`).
- 🛑 **Prefers-Reduced-Motion:** Automatically disables transitions if a user has reduced motion configured.

## Usage

1. Copy the semantic HTML structure from `demo.html` into your project.
2. Include `style.css` which provides the core layout, spacing, micro-animations, and dynamic separators.
3. Replace the placeholder links and add your actual site path logic.

## Customization

To tweak the appearance to match your brand, modify the variables located at the top of `style.css`:

```css
:root {
  --bc-text-muted: #6b7280;
  --bc-text-active: #111827;
  --bc-accent: #3b82f6; /* Set this to your primary brand color */
  --bc-bg: #f9fafb;
  --bc-border: #e5e7eb;
}
```

## Contributed by

- Man1ac-1773
