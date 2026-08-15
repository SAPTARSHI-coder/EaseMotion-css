# Tailwind vs EaseMotion Readability Comparator

Resolves #43336.

### What does this do?
Provides a side-by-side code comparison layout that visually demonstrates the readability difference between stacking multiple utility classes (like Tailwind) versus using semantic EaseMotion animation classes.

### How is it used?
Wrap two `.ease-comparator-card` elements inside an `.ease-comparator-grid`. Use the provided badge classes (`.ease-badge-tailwind`, `.ease-badge-easemotion`) to highlight the approach, and the `.ease-comparator-code` block to show the HTML markup.

### Why is it useful?
One of the primary selling points of EaseMotion CSS is that it abstracts complex animation utility classes into semantic, readable names. This showcase visually proves that point to new users reading the documentation.
