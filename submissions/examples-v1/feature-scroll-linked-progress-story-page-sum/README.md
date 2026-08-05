# Scroll-Linked Progress Story Page

Related issue: #51882

## What does this do?

A long-form article demo with scroll-linked reading progress, chapter fade-in animations driven by `IntersectionObserver`, and footnote pop-ins that appear as you read. The top progress bar tracks how far you’ve scrolled through the story.

## How is it used?

Open `demo.html` in a browser and scroll through the five chapters.

- The fixed **progress bar** (`.scroll-progress__bar`) grows with scroll depth and updates `aria-valuenow`.
- **Chapters** (`.story-chapter`) receive `.is-visible` when they enter the viewport.
- **Footnotes** (`.story-footnote`) animate in separately with a lower threshold.

No build step or server is required. Logic is inline in `demo.html`; styles in `style.css`.

## Why is it useful?

Editorial and documentation sites often need immersive long reads without heavy animation libraries. This pattern combines native scroll metrics, efficient observers, and CSS transitions — a lightweight template for magazines, case studies, and technical essays that respect reader pacing.

## Accessibility

- Progress bar uses `role="progressbar"` with live `aria-valuenow`.
- Under `prefers-reduced-motion: reduce`, chapters and footnotes render immediately with no fade or translate; JavaScript skips observers in that case.

## Files

```
submissions/examples/feature-scroll-linked-progress-story-page-sum/
├── demo.html
├── style.css
└── README.md
```
