# React `<Animate>` Props Playground

Resolves #43350.

### What does this do?
Provides an interactive demonstration of how developers can create a reusable React `<Animate>` wrapper component that translates standard React props (`type`, `duration`, `delay`) into EaseMotion CSS classes and inline styles.

### How is it used?
Users interact with the controls on the left to adjust the simulated React props. The UI updates the code snippet header and dynamically applies the corresponding `ease-*` class while explicitly overriding the `animation-duration` and `animation-delay` inline CSS variables.

### Why is it useful?
EaseMotion provides the CSS primitives, but modern developers work in component-driven frameworks like React, Vue, or Svelte. This playground proves that EaseMotion integrates beautifully as the styling engine behind custom declarative animation components.
