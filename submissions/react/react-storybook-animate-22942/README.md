# Storybook Stories for React Animate Component (#22942)

Comprehensive Storybook configuration and stories for the core React `Animate` wrapper component (`examples/react-vite/src/components/Animate.jsx`).

## Stories Included

1. **FadeIn**: Default behavior mapping to `.ease-animate-fade-in`.
2. **SlideUp**: Demonstrates entrance animations with preset delays.
3. **HoverScale**: Demonstrates the `hover` prop mapping to `.ease-hover-scale`.
4. **HoverGlow**: Demonstrates hover glows.
5. **CustomTiming**: Showcases the component's ability to interpret raw numbers (`duration={1500}`, `delay={500}`) by mapping them to inline `animation-duration` and `animation-delay` styles instead of CSS preset classes.
6. **StaggeredList**: A complex, real-world example of mapping over an array to dynamically generate staggered animation delays (`index * 150ms`).

## Storybook Configuration

The default export configures `argTypes` to provide dropdowns in the Storybook UI for all EaseMotion presets (types, durations, hover effects), making it an excellent playground for developers to test EaseMotion classes interactively.

## Usage

Place `Animate.stories.jsx` alongside `Animate.jsx` in a React project with Storybook configured. Storybook will automatically parse the `argTypes` and render the interactive controls.
