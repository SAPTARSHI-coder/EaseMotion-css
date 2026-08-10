# React Integration Guide (#22946)

This submission introduces a comprehensive Markdown guide detailing the best practices for integrating EaseMotion CSS into modern React applications.

## Included Files

- `react-integration.md` - The official integration guide intended for the `docs/` directory.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## Guide Contents

The integration guide thoroughly covers:
1. **Installation & Setup**: Best practices for globally importing the CSS bundle in React environments (e.g., Vite, Next.js).
2. **The `<Animate>` Wrapper Component**: Detailed documentation and examples for using the core React wrapper to declaratively map React props (`duration`, `delay`, `hover`) to underlying EaseMotion utility classes and inline styles.
3. **Programmatic Control**: Examples demonstrating the `useAnimation` hook for orchestrating animations imperatively (e.g., triggering a `.ease-bounce` on form submission).
4. **Scroll-Triggered Animations**: Examples utilizing the `useScrollReveal` hook to animate elements as they enter the viewport via `IntersectionObserver`.
5. **Staggered Lists**: A common pattern for mapping over arrays and dynamically calculating cascading `delay` props based on indices.
6. **Best Practices**: Performance considerations regarding React re-renders blocking the main thread, and strict a11y reminders regarding `prefers-reduced-motion`.
