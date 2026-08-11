# Code-Block Reduced Motion Accessibility Support

## Description
This submission enhances the `code-block` component with full support for the
`prefers-reduced-motion: reduce` CSS media query.

When a user enables reduced motion in their operating system or browser,
all animations, transitions, and transform-based hover effects are safely
disabled. This prevents discomfort and nausea for users with vestibular
disorders or motion sensitivities, ensuring WCAG 2.1 Success Criterion 2.3.3
compliance.

## Changes
- `style.css`: Adds base component styles with smooth transitions and a keyframe
  entry animation (90+ lines total), plus a `@media (prefers-reduced-motion: reduce)`
  block that removes all motion.
- `demo.html`: Full HTML5 boilerplate demonstrating the component with instructions
  on how to test the reduced motion behavior.
- `README.md`: Documents the feature, accessibility rationale, and usage.

## How to Test
1. Open `demo.html` in a browser.
2. Enable reduced motion via OS settings or browser DevTools > Rendering tab.
3. Hover over the component and observe that no transform or transition occurs.

Fixes #43684
