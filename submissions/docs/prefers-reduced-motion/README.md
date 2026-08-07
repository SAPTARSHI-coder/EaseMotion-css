# Accessibility: `prefers-reduced-motion`

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #57087. Because the GSSoC bot restricts contributors from modifying the root `core/` directory, this proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

For a framework focused on CSS motion, we have a responsibility to protect users with vestibular disorders. When a user configures their operating system to "Reduce Motion", we must honor that request globally across all framework components and utilities.

### Required Changes in `core/easemotion.scss`

Please append the following code snippet to the bottom of the main `core/easemotion.scss` file. 

This universal reset ensures that any element using a framework animation or transition will snap instantly to its final state if reduced motion is requested, entirely preventing nausea-inducing tweens.

```scss
/* 
 * =========================================
 * GLOBAL ACCESSIBILITY RESET
 * =========================================
 * Honors OS-level "Reduce Motion" requests by 
 * instantly resolving all animations/transitions.
 */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    /* 
     * We use 0.01ms instead of 0s because some JS frameworks (like React/Vue)
     * rely on the transitionend event firing to manage component lifecycle.
     * 0s prevents the event, 0.01ms fires it instantly.
     */
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Files Provided
- `demo.html` - A visual presentation of this proposal, including an interactive button test.
- `style.css` - Custom styling for the proposal documentation and the localized demo code.
- `README.md` - This guide.
