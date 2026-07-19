# Reading Flow Animations

A set of lightweight, content-first utilities for long-form reading experiences. These utilities help guide readers through blogs, docs, tutorials, and articles with gentle, accessible animation.

## What does this do?

It adds three subtle reading-focused animation classes:

- `ease-reading-reveal` — soft fade-in with a small upward reveal for paragraphs and sections.
- `ease-reading-highlight` — a gentle highlight effect for notes, callouts, and key content.
- `ease-reading-progress` — a minimal progress bar for reading-focused layouts.

## Usage

### Reveal text sections
```html
<section class="ease-reading-reveal">
  <h2>Getting Started</h2>
  <p>Documentation content...</p>
</section>
```

### Highlight important notes
```html
<div class="ease-reading-highlight">
  This feature requires version 2.0 or later.
</div>
```

### Reading progress indicator
```html
<div class="ease-reading-progress"></div>
```

## Intended use cases

- Documentation pages
- Blog articles
- Tutorial steps
- Changelogs and release notes

## Accessibility

- Respects `prefers-reduced-motion: reduce` and disables animation for users who request it.
- Uses opacity and transform for smooth, performant motion.
- Keeps visual emphasis subtle so content remains easy to read.

## Why it fits EaseMotion CSS

This feature follows EaseMotion CSS principles by providing human-readable class names, lightweight CSS-only behavior, and subtle motion that enhances rather than distracts. It is designed to be composable with existing EaseMotion animation utilities and suitable for modern reading experiences.
