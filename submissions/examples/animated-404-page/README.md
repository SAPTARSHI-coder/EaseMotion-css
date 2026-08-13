# Animated 404 Error Page

A fun, engaging, and fully responsive **404 Error Page** with a "Lost in Space" theme. This example demonstrates how to combine EaseMotion's continuous animations with staggered entrance effects to turn a frustrating user experience (a broken link) into a delightful one.

## 🚀 Features

- **Continuous Background Animations**: Uses `ease-pulse` with staggered delays to create a twinkling starfield effect.
- **Floating Character**: The astronaut emoji uses `ease-float` to gently drift in space.
- **Staggered Text Entrance**: The title, description, and button fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Bouncy Call-to-Action**: The "Return to Earth" button uses `ease-bounce-in` to load and `ease-hover-grow` for interaction.
- **Custom Glitch Effect**: A subtle CSS keyframe shake is added to the "404" text to make it feel lost.
- **Deep Space Aesthetic**: Dark radial gradient background with glowing text and drop shadows.

## 📂 File Structure

```text
submissions/examples/animated-404-page/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for space theme, stars, and layout
└── README.md    # Documentation