# Animated Progress Bar Component

A clean, modern, and fully responsive **Progress Bar Component** with multiple variations and smooth growth animations. This example demonstrates how to combine **EaseMotion CSS** for staggered entrances with custom CSS animations for smooth bar growth effects, creating an engaging progress visualization.

## 🚀 Features

- **Smooth Bar Growth**: All progress bars animate from 0% to their target width using CSS custom properties and keyframe animations.
- **Six Variations**: Basic, Striped (with moving animation), Gradient, Segmented Steps, Circular, and Multi-Color progress bars.
- **Staggered Entrances**: Each progress card fades in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Animated Stripes**: The striped variation includes a continuous diagonal stripe movement animation.
- **Segmented Steps**: Perfect for multi-step processes like checkouts with filled/unfilled segments.
- **Circular Progress**: SVG-based circular progress indicator with smooth arc drawing animation.
- **Multi-Color Status**: Shows different project phases with distinct colors and a legend.
- **Customizable**: Use CSS custom properties (`--width`, `--percent`, `--delay`) to easily customize each bar.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing.

## 📂 File Structure

```text
submissions/examples/animated-progress-bar/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for progress bar layouts, animations, and responsive behavior
└── README.md    # Documentation