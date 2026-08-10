# Dyslexia-Friendly Motion & Typography Showcase

Resolves #43645.

### What does this do?
Provides an interactive component that demonstrates how to implement a "Dyslexia-Safe Mode" toggle. When activated, it overrides complex layout/typography settings (increasing line-height, changing font families) and explicitly overrides EaseMotion's default bouncy hover states with slower, predictable color fades.

### How is it used?
A CSS wrapper class (`.dyslexia-safe-mode`) is toggled on a parent container via JavaScript. The stylesheet contains overriding rules that force `transform: none !important` on animated elements and adjust typography to use highly legible, well-spaced fonts like `Comic Sans MS` or `OpenDyslexic`.

### Why is it useful?
Web accessibility is critical. Not all users benefit from complex motion. Providing developers with a clear pattern on how to conditionally suppress EaseMotion utility classes ensures end-users with cognitive or visual impairments get a tailored, comfortable experience.
