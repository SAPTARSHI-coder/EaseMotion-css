# Photosensitive / Seizure-Safe Animation Safety Lab

Resolves #43644.

### What does this do?
Provides an interactive demonstration showing why developers must respect the `@media (prefers-reduced-motion: reduce)` media query to protect photosensitive users from rapid strobing or flashing animations.

### How is it used?
It presents two rapidly flashing red circles. The right circle implements the `prefers-reduced-motion` media query, which instantly halts all `animation` and `transition` properties if the user's OS has disabled animations. A simulation button is provided for users who do not have this OS setting enabled natively.

### Why is it useful?
EaseMotion includes `prefers-reduced-motion` fallbacks out of the box for all utility classes. This demo acts as a visual "Safety Lab", proving to users that adopting the library ensures they remain WCAG compliant and don't accidentally ship dangerous animations to vulnerable users.
