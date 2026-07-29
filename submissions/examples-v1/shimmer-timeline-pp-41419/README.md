# Shimmer Timeline

## What does this do?
This submission adds a pure CSS shimmer-themed timeline component for portfolio and roadmap style layouts.

## How is it used?
Use the structure from `demo.html` and styles from `style.css`.

```html
<ol class="shimmer-timeline">
  <li class="timeline-item">
    <article class="timeline-card">
      <p class="timeline-date">Q1 2025</p>
      <h3 class="timeline-title">Discovery</h3>
      <p class="timeline-copy">Initial planning and user research.</p>
    </article>
  </li>
</ol>
```

## Why is it useful?
Timelines are common UI blocks in portfolios, changelogs, and product roadmaps. This shimmer variant provides a polished visual style with responsive and accessible defaults.

## Notes
- Pure CSS, no JavaScript.
- Includes reduced-motion handling.
- Includes focus-visible behavior and skip link.
- Uses EaseMotion utility classes (`ease-fade-in`, `ease-slide-up`, `ease-hover-grow`).
- Added only in `submissions/examples/shimmer-timeline-pp-41419/`.
