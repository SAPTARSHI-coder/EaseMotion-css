# CSS Rotate-Fade Accordion for Accessible Web Layouts

## What does this do?

A pure CSS accordion component with rotate-fade animations designed for accessible web layouts. Each accordion item rotates and fades in on page load, then smoothly expands/collapses with the checkbox hack. Icons rotate on hover and expand, providing visual feedback without JavaScript.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<section class="rf-accordion" aria-label="Rotate-Fade Accordion">
  <article class="rf-item">
    <input type="checkbox" id="rf-1" class="rf-toggle">
    <label for="rf-1" class="rf-header">
      <div class="rf-icon violet" aria-hidden="true">&#9670;</div>
      <div class="rf-header-text">
        <h3>Title</h3>
        <span>Category / Subtitle</span>
      </div>
      <div class="rf-chevron" aria-hidden="true">&#9662;</div>
    </label>
    <div class="rf-body">
      <div class="rf-content">
        <p>Description goes here.</p>
        <div class="rf-tags">
          <span class="rf-tag violet">Tag</span>
        </div>
      </div>
    </div>
  </article>
</section>
```

### Available icon color classes

- `.rf-icon.violet` — Violet accent
- `.rf-icon.cyan` — Cyan accent
- `.rf-icon.rose` — Rose accent
- `.rf-icon.emerald` — Emerald accent

### Available tag color classes

- `.rf-tag.violet`
- `.rf-tag.cyan`
- `.rf-tag.rose`
- `.rf-tag.emerald`

### CSS Custom Properties

```css
:root {
  --bg-primary: #0c0c14;
  --bg-surface: #161624;
  --bg-panel: #1e1e30;
  --text-primary: #ededf4;
  --text-secondary: #7c7c8e;
  --border-color: #28283c;
  --accent-violet: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-rose: #f43f5e;
  --accent-emerald: #10b981;
}
```

Override any of these variables to customize the theme.

## Features

- **Rotate-Fade Entrance**: Items rotate and fade in with staggered timing
- **Icon Rotation**: Icons rotate on hover and expand with box-shadow glow
- **Chevron Animation**: Chevron rotates 180 degrees with color transition
- **Pure CSS Interactivity**: Checkbox + label pattern for expand/collapse — zero JavaScript
- **Smooth Transitions**: Animated max-height and opacity for fluid expand/collapse
- **Four Color Themes**: Violet, cyan, rose, emerald
- **Responsive Design**: Adapts across desktop, tablet, and mobile viewports
- **Accessibility**: Full prefers-reduced-motion support, ARIA labels, semantic HTML
- **No JavaScript Required**: All interactivity powered by CSS

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
