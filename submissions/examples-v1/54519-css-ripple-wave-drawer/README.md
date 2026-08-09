# CSS Ripple-Wave Drawer for Creative Portfolio Layouts

## What does this do?

A pure CSS drawer component with ripple-wave animations designed for creative portfolio layouts. Cards open a slide-in drawer panel with a radial ripple wave effect emanating from the top, showcasing project details in a clean, immersive panel.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure (radio button + label pattern for pure CSS interactivity):

```html
<input type="radio" name="drawer" id="drawer-1" class="drawer-toggle">
<!-- Repeat for each drawer -->

<main class="portfolio">
  <section class="drawer-grid">
    <article class="drawer-card">
      <label for="drawer-1" class="drawer-label">
        <div class="drawer-preview">
          <div class="drawer-preview-placeholder coral" aria-hidden="true">&#9670;</div>
        </div>
        <h3>Project Title</h3>
        <p>Project description.</p>
        <span class="drawer-tag coral">Category</span>
      </label>
    </article>
  </section>
</main>

<!-- Overlay labels close the drawer -->
<label for="drawer-1" class="drawer-overlay" aria-hidden="true"></label>

<!-- Drawer panels -->
<aside class="drawer-panel panel-1 ripple-coral" role="dialog" aria-label="Project Details">
  <div class="drawer-close">
    <label for="drawer-1" class="drawer-close-label" aria-label="Close drawer">&times;</label>
  </div>
  <div class="drawer-content">
    <!-- Content here -->
  </div>
</aside>
```

### Available color themes

- `.drawer-preview-placeholder.coral`, `.drawer-tag.coral`, `.drawer-content-icon.coral`, `.drawer-action-label.coral` — Coral accent
- `.drawer-preview-placeholder.gold`, `.drawer-tag.gold`, `.drawer-content-icon.gold`, `.drawer-action-label.gold` — Gold accent
- `.drawer-preview-placeholder.lavender`, `.drawer-tag.lavender`, `.drawer-content-icon.lavender`, `.drawer-action-label.lavender` — Lavender accent
- `.drawer-preview-placeholder.mint`, `.drawer-tag.mint`, `.drawer-content-icon.mint`, `.drawer-action-label.mint` — Mint accent

### Available panel ripple classes

- `.ripple-coral` — Coral radial ripple wave
- `.ripple-gold` — Gold radial ripple wave
- `.ripple-lavender` — Lavender radial ripple wave
- `.ripple-mint` — Mint radial ripple wave

### CSS Custom Properties

```css
:root {
  --bg-primary: #0d0d0f;
  --bg-surface: #18181b;
  --bg-drawer: #1a1a1f;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-color: #27272a;
  --accent-coral: #ff6b6b;
  --accent-gold: #fbbf24;
  --accent-lavender: #a78bfa;
  --accent-mint: #34d399;
}
```

Override any of these variables to customize the theme.

## Features

- **Ripple-Wave Drawer Animation**: Drawer slides in from right with a radial ripple wave expanding from the top
- **Pure CSS Interactivity**: Uses radio button + label pattern for open/close — zero JavaScript
- **Staggered Entrance**: Portfolio cards animate in with cascade delay
- **Creative Portfolio Design**: Playfair Display + Inter fonts, four color themes
- **Overlay Close**: Clicking the overlay or close button dismisses the drawer
- **Responsive Design**: Full-width drawer on mobile, 480px on desktop
- **Accessibility**: Full `prefers-reduced-motion` support, `role="dialog"`, `aria-label` attributes
- **Semantic HTML**: Uses `<article>`, `<section>`, `<aside>`, `<label>`, and ARIA roles

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Radio Hack)
- No JavaScript required
