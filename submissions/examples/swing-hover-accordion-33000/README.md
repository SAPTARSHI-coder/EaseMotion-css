# Swing-Hover Accordion

A pure HTML and CSS accordion that uses native `<details>` and `<summary>` semantics while adding a distinct swing-hover interaction. The component is designed for product storytelling, FAQs, and documentation sections where motion should feel polished without distracting from the content.

## What it does

- Presents three interactive accordion items with realistic content
- Applies a more deliberate swing effect when a closed card is hovered
- Reveals panel content with a smooth vertical transition when opened
- Keeps the experience usable through native disclosure semantics and visible focus states

## How to use it

1. Copy the files from this folder into your project.
2. Link the stylesheet in your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Use the provided structure in `demo.html` as a starting point.

## Available CSS variables

You can customize the component with these variables:

- `--accordion-duration`
- `--accordion-easing`
- `--accordion-hover-rotate`
- `--accordion-hover-translate`
- `--accordion-hover-scale`
- `--accordion-radius`
- `--accordion-shadow`
- `--accordion-bg`
- `--accordion-text`
- `--accordion-muted`
- `--accordion-border`
- `--accordion-surface`
- `--accordion-accent`
- `--accordion-accent-soft`

## Motion Design Philosophy

The swing motion is meant to feel like a small, intentional gesture rather than a decorative flourish. It helps communicate that a card is interactive, gives the closed state a clearer sense of presence, and makes the open transition feel more deliberate. The motion is restrained enough to remain calm while still being memorable.

## Accessibility features

- Uses native `<details>` and `<summary>` for keyboard and assistive-tech support
- Includes visible `:focus-visible` styling for keyboard users
- Respects `prefers-reduced-motion` so the interaction is simplified or removed for users who request less movement
- Does not rely on JavaScript for basic operation

## Responsive behavior

The layout shifts from a full-width editorial card rhythm on larger screens to a more compact, stack-oriented pattern on small screens:

- The summary switches to a tighter mobile layout with the indicator anchored more deliberately
- The content spacing becomes more compact without feeling cramped
- The hover swing remains a desktop-friendly enhancement rather than the only path to interaction

## Why it fits EaseMotion CSS

This demo fits the spirit of EaseMotion CSS because it pairs expressive motion with restraint. The result is a more memorable accordion that still feels calm, customizable, and practical for real interfaces.
