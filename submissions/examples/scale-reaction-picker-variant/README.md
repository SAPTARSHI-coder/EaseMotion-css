# Scale Reaction Picker Component (#42515)

An elegant, pure CSS macro-scaling expression selection bar designed for the EaseMotion CSS library. It mimics modern operating system dock environments, using high-performance micro-transitions without relying on additional client scripts.

## Visual Mechanics

- **Elastic Spring Scaling**: Employs custom cubic-bezier properties (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to yield organic bouncing transitions when users pass across targets.
- **Proportional Proximity Mechanics**: Employs general sibling selectors (`+`) natively to upscale secondary immediate neighbors and slightly dull surrounding entities, emphasizing user selection points.
- **Accessible Design Mapping**: Built alongside native keyboard navigations using focus hooks (`:focus-within`, `:focus-visible`) to keep standard screen readers connected.

## Custom Customization Reference

Adjust expansion magnitudes or theme color indices quickly inside the variables grid inside `style.css`:

```css
:root {
  --ease-dock-bg: #1e293b;            /* Toolbar structural background fill */
  --ease-scale-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elastic spring values */
}