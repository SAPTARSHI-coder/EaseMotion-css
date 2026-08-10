# React Wrapper Components for Keyframe Animations

This submission provides a robust set of React wrapper components to make it extremely easy to use EaseMotion CSS animations in modern JSX environments.

## Components Included
- `<Animate />`: Core wrapper for applying keyframes natively, with props for `type`, `delay`, `duration`, `iteration`, and lifecycle callbacks.
- `<Hover />`: Wrapper for hover animations like `lift`, `scale`, `shake`, and `glow`.
- `<ScrollReveal />`: Wrapper that uses the native `IntersectionObserver` API to trigger animations when elements scroll into view.

## Usage
Simply import the components into your React files and use them declaratively:

\`\`\`jsx
import { Animate, Hover, ScrollReveal } from './src/components';

export default function App() {
  return (
    <div>
      <Animate type="fade-in" duration={500} delay={200}>
        <h1>Hello World</h1>
      </Animate>

      <Hover type="glow">
        <button>Hover Me</button>
      </Hover>

      <ScrollReveal animation="slide-up">
        <p>I reveal when scrolled into view!</p>
      </ScrollReveal>
    </div>
  );
}
\`\`\`
