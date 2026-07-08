# Animated Flip Cards

A clean, modern, and fully responsive **Flip Card Component** with smooth 3D flip animations. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances with advanced CSS 3D transforms to create interactive cards that reveal more information on hover.

## 🚀 Features

- **Staggered Card Entrances**: Each card fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Smooth 3D Flip Effect**: Cards rotate 180 degrees on the Y-axis when hovered, revealing the back content with a smooth cubic-bezier transition.
- **Dual-Sided Content**: Front shows basic info (avatar, name, role, social links), back shows detailed info (bio, skills, contact button).
- **Color-Coded Backs**: Each card has a unique gradient color on the back for visual distinction.
- **Interactive Social Icons**: Social media icons on the front lift on hover for tactile feedback.
- **Skill Tags**: Back of cards display skill tags with glassmorphism effect.
- **Contact Button**: Animated button that slides right on hover.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing.

## 📂 File Structure

```text
submissions/examples/animated-flip-cards/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for 3D flip effect, card styling, and responsive behavior
└── README.md    # Documentation