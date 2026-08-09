# Animated Accordion / FAQ Component

A clean, modern, and fully responsive **Accordion / FAQ Component** perfect for FAQ sections, documentation, and organizing collapsible content. This example demonstrates how to combine **EaseMotion CSS** for smooth height transitions using the CSS Grid trick, rotating chevron icons, staggered item entrances, and interactive hover states to create a polished, accessible content organization component.

## 🚀 Features

- **Smooth Height Transitions**: Uses the CSS Grid `grid-template-rows: 0fr` to `1fr` trick for buttery-smooth expand/collapse animations without JavaScript height calculations.
- **Rotating Chevron Icons**: The chevron icon smoothly rotates 180 degrees when an item is expanded, with a color transition.
- **Staggered Item Entrances**: Each accordion item fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Interactive Hover States**: Items smoothly change border color and reveal a subtle shadow on hover.
- **Active State Styling**: Expanded items feature an accent-colored border and enhanced shadow for clear visual distinction.
- **Single Open Mode**: Only one accordion item can be open at a time (clicking another automatically closes the previous one).
- **Code Block Styling**: Includes styled code blocks for displaying installation commands and examples.
- **Contact CTA Section**: A gradient call-to-action section at the bottom for users who still have questions.
- **Accessible Markup**: Uses semantic `<button>` elements with proper `aria-expanded` attributes.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted padding and font sizes.

## 📂 File Structure

```text
submissions/examples/animated-accordion-faq/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for accordion layout, CSS Grid height trick, and responsive behavior
└── README.md    # Documentation