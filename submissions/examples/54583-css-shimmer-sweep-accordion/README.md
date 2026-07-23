# CSS Shimmer-Sweep Accordion for Creative Portfolio Layouts

## What does this do?

A pure CSS accordion component with shimmer sweep animations designed for creative portfolio layouts. Each accordion item features a continuous light shimmer sweep across its surface, smooth expand/collapse transitions, and a rotating chevron indicator, all powered by the checkbox hack for zero JavaScript interactivity.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure (radio button + label pattern for pure CSS interactivity):

```html
<section class="shimmer-accordion" aria-label="Portfolio Accordion">
  <article class="accordion-item">
    <input type="checkbox" id="acc-1" class="accordion-toggle">
    <label for="acc-1" class="accordion-header">
      <div class="accordion-icon rose" aria-hidden="true">&#9670;</div>
      <div class="accordion-header-text">
        <h3>Project Title</h3>
        <span>Category / Client</span>
      </div>
      <div class="accordion-chevron" aria-hidden="true">&#9662;</div>
    </label>
    <div class="accordion-body">
      <div class="accordion-content">
        <p>Description goes here.</p>
        <div class="accordion-tags">
          <span class="accordion-tag rose">Tag</span>
        </div>
      </div>
    </div>
  </article>
</section>
```

### Available icon color classes

- `.accordion-icon.rose` — Rose accent
- `.accordion-icon.orange` — Orange accent
- `.accordion-icon.violet` — Violet accent
- `.accordion-icon.teal` — Teal accent

### Available tag color classes

- `.accordion-tag.rose`
- `.accordion-tag.orange`
- `.accordion-tag.violet`
- `.accordion-tag.teal`

### CSS Custom Properties

```css
:root {
  --bg-primary: #0a0a0c;
  --bg-surface: #141418;
  --bg-panel: #1c1c22;
  --text-primary: #f5f5f7;
  --text-secondary: #8e8e93;
  --border-color: #2c2c30;
  --accent-rose: #f43f5e;
  --accent-orange: #fb923c;
  --accent-violet: #a78bfa;
  --accent-teal: #2dd4bf;
}
```

Override any of these variables to customize the theme.

## Features

- **Shimmer Sweep Animation**: Continuous light sweep across accordion items with staggered delays
- **Pure CSS Interactivity**: Uses checkbox + label pattern for expand/collapse — zero JavaScript
- **Smooth Transitions**: Animated max-height and padding for fluid expand/collapse
- **Rotating Chevron**: Chevron icon rotates 180° on expand with color transition
- **Staggered Entrance**: Accordion items animate in with cascade delay
- **Creative Portfolio Design**: DM Serif Display + Inter fonts, four color themes
- **Responsive Design**: Adapts seamlessly across desktop, tablet, and mobile
- **Accessibility**: Full `prefers-reduced-motion` support disables all animations
- **Semantic HTML**: Uses `<article>`, `<section>`, `<label>`, and ARIA labels

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
