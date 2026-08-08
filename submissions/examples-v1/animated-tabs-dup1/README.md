# Animated Tabs Component

A clean, modern, and fully responsive **Tabs Component** with a sliding indicator and smooth content transitions. This example demonstrates how to combine **EaseMotion CSS** for page-load entrances with a modern CSS Grid trick for buttery-smooth height animations without JavaScript calculations.

## 🚀 Features

- **Sliding Indicator**: A smooth, animated underline that slides to the active tab using CSS transitions and minimal JavaScript positioning.
- **Smooth Height Transitions**: Uses the CSS Grid `grid-template-rows: 0fr` to `1fr` trick for perfectly smooth content height animations without needing JavaScript to calculate heights.
- **Fade & Slide Content**: Inactive panels fade out and slide down slightly, while active panels fade in and slide up for a polished feel.
- **Staggered Page Load**: Uses `ease-fade-in-down` and `ease-fade-in-up` with delays for a cascading entrance effect.
- **Interactive Hover States**: Tab buttons and feature items have smooth hover transitions.
- **Responsive Design**: The tabs scroll horizontally on small screens, and the content grid adapts to single-column layouts.
- **Accessible Markup**: Uses semantic `<button>` elements for tab triggers.

## 📂 File Structure

```text
submissions/examples/animated-tabs/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, sliding indicator, and grid trick
└── README.md    # Documentation