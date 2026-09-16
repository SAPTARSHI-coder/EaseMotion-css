# Framer Motion & EaseMotion Interoperability

While EaseMotion CSS provides powerful zero-JS CSS animations, you might occasionally need Framer Motion for complex physics-based layout calculations (e.g., `layoutId` transitions). Here is how you can use them together.

## The Strategy

Use **EaseMotion** for 90% of your app (standard entrances, hover effects, basic page transitions) to keep your JavaScript bundle microscopic. 

Use **Framer Motion** ONLY for specialized components that require physics springs or shared layout morphing.

## Coexistence Example

You can safely wrap Framer Motion's `<motion.div>` with EaseMotion's classes, as long as you do not conflict on the exact same CSS properties (e.g., both trying to animate `transform: translateY`).

```jsx
import { motion } from 'framer-motion';
import { Animate } from 'easemotion-react';

export default function HybridCard({ item }) {
  return (
    // 1. EaseMotion handles the mount entrance (zero-JS slide-up)
    <Animate type="slide-up" duration="fast">
      
      {/* 2. Framer Motion handles the complex physics layout morphing */}
      <motion.div 
        layoutId={`card-container-${item.id}`}
        className="card-body"
      >
        <h2>{item.title}</h2>
      </motion.div>

    </Animate>
  );
}
```

## Known Conflicts

- **Transform Overrides**: Do not apply EaseMotion's `.ease-animate-slide-*` classes directly to a `<motion.div>` that is actively animating `x` or `y` in Framer Motion. Framer Motion dynamically writes inline `transform` styles which will override EaseMotion's CSS classes. 
- **Solution**: Always use a wrapper DOM element (as shown above) to separate the CSS transforms from the JS inline transforms.
