# Animated Timeline

A modern vertical timeline component built with pure HTML and CSS. It includes smooth entrance animations, glowing gradient line, hover effects, responsive layout, and reduced-motion support.

## Features

- Pure HTML and CSS implementation.
- Animated vertical timeline line.
- Alternating left/right cards on desktop.
- Staggered entrance animations.
- Modern glassmorphism-style content cards.
- Responsive layout for mobile and tablet.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<section class="timeline">
  <article class="timeline-item">
    <div class="timeline-dot">
      <span>1</span>
    </div>

    <div class="timeline-content">
      <span class="timeline-date">January 2026</span>
      <h2>Project Setup</h2>
      <p>Timeline description here.</p>
      <span class="timeline-tag completed">Completed</span>
    </div>
  </article>
</section>