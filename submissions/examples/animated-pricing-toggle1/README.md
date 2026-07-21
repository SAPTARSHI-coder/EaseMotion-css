# Animated Pricing Toggle

A clean, modern, and fully responsive **Pricing Table** with a smooth Monthly/Yearly billing toggle. This example demonstrates how to combine **EaseMotion CSS** staggered entrance animations with a pure CSS toggle mechanism to create seamless, animated price transitions without any JavaScript.

## 🚀 Features

- **Staggered Entrance Animations**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so the toggle and cards slide in sequentially on page load.
- **Pure CSS Toggle Switch**: A custom-styled checkbox creates a smooth, sliding toggle knob.
- **Animated Price Swapping**: When the toggle is clicked, the monthly prices slide up and fade out, while the yearly prices slide up from below and fade in.
- **Synchronized Label States**: The "Monthly" and "Yearly" text labels automatically update their active color states based on the toggle.
- **Featured Card Highlighting**: The middle card is scaled slightly and features a "Most Popular" badge with a distinct border and shadow.
- **Interactive Hover Effects**: Uses `ease-hover-grow` on buttons and custom CSS lifts on the cards for tactile feedback.

## 📂 File Structure

```text
submissions/examples/animated-pricing-toggle/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, toggle switch, and price transitions
└── README.md    # Documentation