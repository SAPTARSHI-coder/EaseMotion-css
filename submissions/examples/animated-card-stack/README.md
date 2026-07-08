# Animated Card Stack/Deck

A visually impressive, fully responsive **Card Stack Component** that displays cards in a layered 3D stack and fans them out on hover. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances with advanced CSS 3D transforms for the stacked positioning and interactive fan-out effect.

## 🚀 Features

- **Staggered Card Entrances**: Each card fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **3D Stacked Layout**: Cards are positioned in a layered stack with decreasing scale and opacity to create depth.
- **Interactive Fan-Out**: Hovering over the stack smoothly fans out all cards with rotation and translation transforms.
- **Individual Card Hover**: Each card can be hovered individually to lift and scale up with enhanced shadows.
- **Color-Coded Cards**: Each card has a unique accent color on the top border and icon for visual distinction.
- **Smooth Transitions**: All movements use cubic-bezier easing for natural, fluid animations.
- **Responsive Design**: The fan-out effect adjusts for smaller screens to prevent cards from going off-screen.
- **Dark Theme**: Professional dark mode design with gradient background accents.

## 📂 File Structure

```text
submissions/examples/animated-card-stack/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for 3D stacking, fan-out effect, and responsive behavior
└── README.md    # Documentation