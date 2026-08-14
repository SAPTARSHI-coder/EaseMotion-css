# Accessibility Fallbacks for Reduced Motion — Issue #39450

1. What does this do?
Introduces media overrides for `prefers-reduced-motion: reduce` across key interactive states, loaders, and animations to ensure graceful degradation.

2. How is it used?
When a user enables "Reduce Motion" at the operating system level, classes like `.ease-btn-loading` and heavy movement classes (e.g., `.ease-bounce`, `.ease-btn-hover`) automatically strip away the continuous animations and transitions:
```html
<button class="ease-btn ease-btn-loading">Loading...</button>
```

3. Why is it useful?
It provides accessibility out-of-the-box, ensuring developers using EaseMotion CSS do not have to write custom CSS media queries to make their interface motion-sensitive and WCAG compliant.
