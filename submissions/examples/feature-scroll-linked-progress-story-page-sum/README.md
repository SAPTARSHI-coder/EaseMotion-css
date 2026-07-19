# Scroll-Linked Progress Story Page

## What does this do?

A long-form article demo with a fixed top scroll progress bar, chapter sections that fade in via `IntersectionObserver`, and footnotes that pop in when they approach the viewport.

## How is it used?

Open `demo.html` and scroll through the article:

```html
<link rel="stylesheet" href="style.css" />
<div class="scroll-story-sum__progress">…</div>
<article class="scroll-story-sum">…</article>
```

Chapters use `data-chapter-sum`; footnotes use `data-footnote-sum`. Inline JavaScript handles scroll progress and observers.

## Why is it useful?

Editorial and documentation sites benefit from scroll-linked feedback that orients readers without heavy animation libraries. This pattern shows a lightweight, accessible approach to progressive disclosure on long pages.

## Accessibility

- Progress bar exposes `role="progressbar"` with live `aria-valuenow`
- Chapter content remains readable before animation completes
- Under `prefers-reduced-motion: reduce`, all sections and footnotes appear immediately with no motion

## Files

```
submissions/examples/feature-scroll-linked-progress-story-page-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #51882
