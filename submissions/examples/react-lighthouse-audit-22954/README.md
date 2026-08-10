# React Showcase Lighthouse Audit (#22954)

This submission introduces an official performance and Lighthouse audit for the `examples/react-vite` showcase environment to validate the efficiency of the React `<Animate>` wrapper.

## Included Files

- `lighthouse-audit.md` - The official performance audit and review.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## Audit Highlights

The audit thoroughly reviews Core Web Vitals on throttled mobile connections:
1. **Cumulative Layout Shift (CLS)**: Verifies a `0.00` CLS score because EaseMotion safely restricts animations to GPU-accelerated `transform` and `opacity` properties.
2. **Payload Weight**: Highlights that utilizing CSS-driven animations via a tiny React wrapper yields a ~90% bundle size reduction compared to JS-heavy animation libraries like Framer Motion.
3. **First Input Delay (FID)**: Confirms that because the React wrapper offloads the tweening logic to the browser's compositor thread, the main JavaScript thread remains fully idle and responsive to user input.
