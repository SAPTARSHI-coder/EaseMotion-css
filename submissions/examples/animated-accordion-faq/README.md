# Animated Accordion / FAQ Component

A clean, modern, and fully responsive **Accordion / FAQ Component** with smooth height transitions and rotating icons. This example demonstrates how to combine **EaseMotion CSS** for staggered list entrances with a modern CSS Grid trick for buttery-smooth height animations without JavaScript calculations.

## 🚀 Features

- **Smooth Height Transition**: Uses the CSS Grid `grid-template-rows: 0fr` to `1fr` trick for perfectly smooth height animations without needing JavaScript to calculate heights.
- **Staggered List Entrances**: Each accordion item fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Rotating Chevron Icons**: The chevron icon smoothly rotates 180 degrees when the item is expanded using CSS transitions.
- **Interactive Hover States**: Headers change background color on hover using `ease-hover-grow` for tactile feedback.
- **Active State Highlighting**: The active item features a distinct border color, background tint, and icon color.
- **Single-Open Behavior**: Clicking one item automatically closes others (configurable in JS).
- **Accessible Markup**: Uses semantic `<button>` elements and `aria-expanded` attributes for screen readers.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted padding and font sizes.

## 📂 File Structure

```text
submissions/examples/animated-accordion-faq/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, grid trick, and responsive behavior
└── README.md    # Documentation