# Reduced Motion Accessibility Architecture

## What does this do?
Proposes a critical WCAG accessibility refactor to globally enforce `@media (prefers-reduced-motion: reduce)` across the entire framework. This universally ensures that all CSS animations and transitions are instantly disabled or reduced if the end-user has actively requested reduced motion within their operating system settings.

## How is it used?
Maintainers and core contributors must inject a global CSS "kill-switch" directly into the root `core/variables.css` or `easemotion.css` entry file. 

Currently, the framework completely ignores OS-level accessibility flags. We must urgently implement the following universal override at the highest level of the cascade:
```css
/* ✅ GOOD: Perfect native WCAG accessibility compliance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
*Note: We strictly use `0.01ms` instead of `0s` because setting the duration to pure zero can catastrophically break JavaScript event listeners that are waiting for `transitionend` or `animationend` events to fire before updating the DOM.*

## Why is it useful?
Currently, EaseMotion is functionally inaccessible to users with severe vestibular motion disorders. If a user has explicitly checked the "Reduce Motion" setting in iOS, macOS, or Windows because complex animations cause them physical nausea or dizziness, EaseMotion aggressively ignores this setting and forces them to watch heavy sliding cards, pulsing modals, and scaling tooltips. 

By implementing this universal `@media (prefers-reduced-motion: reduce)` rule at the very top of the CSS cascade, we guarantee that all 20+ core component files instantly comply with strict WCAG accessibility guidelines, automatically disabling dangerous animations without ever requiring developers to manually write media queries into every single component file.
