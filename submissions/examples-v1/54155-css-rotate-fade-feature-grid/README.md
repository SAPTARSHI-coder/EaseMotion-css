# CSS Rotate-Fade Feature Grid for Responsive Dashboard Layouts

## What does this do?

A pure CSS feature grid component that showcases dashboard features with smooth rotate-fade entrance animations. Cards animate in from a rotated, transparent state with staggered delays, creating a polished and professional dashboard layout.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<section class="feature-grid" aria-label="Feature Grid">
  <article class="feature-card">
    <div class="feature-icon blue">
      <span aria-hidden="true">&#9881;</span>
    </div>
    <h3>Feature Title</h3>
    <p>Feature description goes here.</p>
    <span class="feature-tag blue">Tag</span>
    <div class="stat-bar"><div class="stat-bar-fill"></div></div>
  </article>
</section>
```

### Available icon color classes

- `.feature-icon.blue` - Blue accent
- `.feature-icon.purple` - Purple accent
- `.feature-icon.pink` - Pink accent
- `.feature-icon.emerald` - Emerald accent

### Available tag color classes

- `.feature-tag.blue`
- `.feature-tag.purple`
- `.feature-tag.pink`
- `.feature-tag.emerald`

### CSS Custom Properties

```css
:root {
  --bg-primary: #0f172a;
  --bg-surface: #1e293b;
  --bg-card: #334155;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-color: #475569;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --accent-pink: #ec4899;
  --accent-emerald: #10b981;
}
```

Override any of these variables to customize the theme.

## Features

- **Rotate-Fade Entrance Animation**: Cards animate from a rotated, transparent state with staggered delays
- **Pure CSS**: No JavaScript or external frameworks required
- **Responsive Design**: Adapts seamlessly across desktop, tablet, and mobile viewports
- **Hover Effects**: Cards lift, tilt, and reveal a gradient top border on hover
- **Stat Bar Animation**: Progress bars fill with a smooth scale animation after the cards appear
- **Accessibility**: Full `prefers-reduced-motion` support disables all animations for users who prefer reduced motion
- **Semantic HTML**: Uses `<article>`, `<section>`, and `aria-label` for screen reader support

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Grid)
- No JavaScript required
