# WCAG Accessibility Audit Checklist

1. What does this do? A WCAG accessibility audit checklist demo that contributors should verify before submitting animation PRs. Shows each checkpoint with a live preview of `prefers-reduced-motion`, color contrast, and keyboard accessibility patterns.

2. How is it used? Open `demo.html` to review the checklist. Click "Test Animation" to see how `prefers-reduced-motion` is respected — when reduced motion is enabled, the animation degrades gracefully instead of moving. The contrast button uses WCAG AA-compliant colors.

3. Why is it useful? Improves accessibility quality at the point of contribution — contributors can use this as a PR template reference to verify that their animations respect user preferences, maintain contrast, support keyboard navigation, and follow WCAG guidelines before submitting.
