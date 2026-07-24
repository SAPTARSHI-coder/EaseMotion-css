# CSS Slide-Up Carousel for Accessible Web Layouts

## What does this do?

A pure CSS carousel component with slide-up animations. Slides transition using CSS transform translateX with elastic cubic-bezier easing. Built for accessible web layouts with full `prefers-reduced-motion` support and ARIA attributes.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<input type="radio" name="su-slide" id="slide-1" class="su-toggle" checked>
<input type="radio" name="su-slide" id="slide-2" class="su-toggle">

<div class="su-carousel" role="region" aria-label="Carousel">
  <div class="su-carousel-track">
    <div class="su-slide" role="group" aria-roledescription="slide" aria-label="Slide 1 of 2">
      <div class="su-slide-content">
        <div class="su-slide-icon blue" aria-hidden="true">&#9670;</div>
        <h2>Title</h2>
        <p>Description goes here.</p>
      </div>
    </div>
  </div>

  <nav class="su-nav" aria-label="Carousel navigation">
    <label for="slide-1" class="su-nav-label" aria-label="Previous">&#8592;</label>
    <div class="su-dots" role="tablist" aria-label="Slide selector">
      <label for="slide-1" class="su-dot-label" role="tab" aria-label="Go to slide 1"></label>
      <label for="slide-2" class="su-dot-label" role="tab" aria-label="Go to slide 2"></label>
    </div>
    <label for="slide-2" class="su-nav-label" aria-label="Next">&#8594;</label>
  </nav>
</div>
```

### Available icon color classes

- `.su-slide-icon.blue` — Blue accent
- `.su-slide-icon.purple` — Purple accent
- `.su-slide-icon.emerald` — Emerald accent
- `.su-slide-icon.amber` — Amber accent

### CSS Custom Properties

```css
:root {
  --slide-duration: 0.5s;
  --slide-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;
}
```

Override any of these variables to customize timing and theme.

## Features

- **Slide-Up Animation**: Smooth translateX transitions between slides
- **Elastic Easing**: Bouncy cubic-bezier(0.34, 1.56, 0.64, 1) timing
- **Pure CSS**: Radio button hack for slide selection — zero JavaScript
- **Navigation Dots**: Clickable dot indicators for direct slide access
- **Arrow Navigation**: Previous/next arrow buttons
- **Four Color Themes**: Blue, purple, emerald, amber
- **Responsive Design**: Adapts across desktop, tablet, and mobile
- **Accessibility**: `role="region"`, `aria-roledescription="slide"`, `role="tablist"`, full `prefers-reduced-motion` support
- **Semantic HTML**: Proper ARIA attributes and roles

## Tech Stack

- HTML5
- CSS3 (Transitions, CSS Custom Properties, Radio Button Hack)
- No JavaScript required
