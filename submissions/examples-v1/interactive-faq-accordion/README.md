# Interactive FAQ Accordion

A clean, accessible, and fully responsive **FAQ Accordion** component. This example demonstrates how to combine **EaseMotion CSS** staggered entrance animations with a pure CSS accordion mechanism (using the checkbox hack) for smooth, JavaScript-free expand/collapse transitions.

## 🚀 Features

- **Staggered Entrance Animations**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each FAQ item slides in sequentially.
- **Pure CSS Interactivity**: No JavaScript required! Uses the hidden checkbox hack to toggle the open/closed state.
- **Smooth Height Transitions**: Animates the `max-height` and `padding` of the answer container for a fluid opening effect.
- **Rotating Icon**: The `+` icon smoothly rotates 45 degrees to become an `x` (or minus) when the item is expanded.
- **Hover Interactions**: Subtle border color changes and shadow enhancements on hover for better tactile feedback.
- **Accessible & Semantic**: Uses `<label>` tags linked to hidden inputs, ensuring keyboard navigation and screen reader compatibility.

## 📂 File Structure

```text
submissions/examples/interactive-faq-accordion/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, accordion logic, and transitions
└── README.md    # Documentation