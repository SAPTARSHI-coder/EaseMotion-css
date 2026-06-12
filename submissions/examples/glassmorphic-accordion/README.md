# Glassmorphic Accordion

## What it does

A **glass-style FAQ accordion** using native `<details>` elements with smooth height animation via CSS Grid `grid-template-rows` trick — no JavaScript.

## Animations & Techniques

- **Grid height animation**: `0fr → 1fr` on `grid-template-rows` for smooth expand/collapse.
- **Content fade-slide**: Panel text fades and slides in with staggered delay.
- **Chevron spring**: Rotates 180° with overshoot easing when open.
- **Glassmorphism**: `backdrop-filter: blur()` with translucent borders.

## Folder structure

```
animations/glassmorphic-accordion/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS

Demonstrates modern CSS-only accordion animation — a pattern every component library needs, fully accessible via native `<details>`.
