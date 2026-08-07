# Scroll Progress Indicator Submission

## 1. What does this do?
It provides a modern scroll progress indicator that shows users how far they've scrolled down a page, along with a back-to-top button with smooth scroll functionality.

## 2. How is it used?
Add the `.scroll-progress-container` at the top of your page with a `.scroll-progress-bar` inside. Use JavaScript to calculate scroll percentage and update the width. Combine with EaseMotion utilities like `ease-hover-scale` for the back-to-top button.

## 3. Why is it useful?
- Improves UX on long-form content (articles, blogs, documentation)
- Provides visual feedback on scroll position
- Includes back-to-top button with smooth scroll
- Fully responsive and accessible
- Respects `prefers-reduced-motion` for accessibility
- Lightweight and performant (uses requestAnimationFrame)
- Customizable with CSS variables
- Maintainer can easily standardize this as `.ease-scroll-progress-[YOUR_INITIALS]` in the core library.