# CSS Scale-Hover Accordion for Creative Portfolio Layouts

## What does this do?

A pure CSS accordion component with scale hover animations designed for creative portfolio layouts. Each accordion item scales up slightly on hover with a colored shadow glow, and features smooth expand/collapse transitions powered by the checkbox hack for zero JavaScript interactivity.

## How is it used?

1. Include `style.css` in your HTML file.
2. Use the following HTML structure:

```html
<section class="scale-accordion" aria-label="Portfolio Accordion">
  <article class="accordion-item">
    <input type="checkbox" id="acc-1" class="accordion-toggle">
    <label for="acc-1" class="accordion-header">
      <div class="accordion-icon fuchsia" aria-hidden="true">&#9670;</div>
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
          <span class="accordion-tag fuchsia">Tag</span>
        </div>
      </div>
    </div>
  </article>
</section>
```

### Available icon color classes

- `.accordion-icon.fuchsia` — Fuchsia accent
- `.accordion-icon.sky` — Sky accent
- `.accordion-icon.amber` — Amber accent
- `.accordion-icon.lime` — Lime accent

### Available tag color classes

- `.accordion-tag.fuchsia`
- `.accordion-tag.sky`
- `.accordion-tag.amber`
- `.accordion-tag.lime`

### CSS Custom Properties

```css
:root {
  --bg-primary: #08080c;
  --bg-surface: #12121a;
  --bg-panel: #1a1a24;
  --text-primary: #ededf0;
  --text-secondary: #7a7a85;
  --border-color: #242430;
  --accent-fuchsia: #d946ef;
  --accent-sky: #38bdf8;
  --accent-amber: #fbbf24;
  --accent-lime: #a3e635;
}
```

Override any of these variables to customize the theme.

## Features

- **Scale Hover Effect**: Cards scale up 1.5% on hover with colored shadow glow
- **Icon Scale Animation**: Icons scale up with box-shadow on item hover
- **Pure CSS Interactivity**: Uses checkbox + label pattern for expand/collapse — zero JavaScript
- **Smooth Transitions**: Animated max-height for fluid expand/collapse
- **Rotating Chevron**: Chevron rotates 180 degrees on expand with color change
- **Staggered Entrance**: Accordion items animate in with scale + fade cascade
- **Four Color Themes**: Fuchsia, sky, amber, lime
- **Responsive Design**: Adapts across desktop, tablet, and mobile
- **Accessibility**: Full prefers-reduced-motion support
- **Semantic HTML**: Uses article, section, label, and ARIA labels

## Tech Stack

- HTML5
- CSS3 (Transitions, Keyframes, CSS Custom Properties, Checkbox Hack)
- No JavaScript required
