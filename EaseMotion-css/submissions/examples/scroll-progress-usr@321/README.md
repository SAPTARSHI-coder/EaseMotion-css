# Scroll Progress Indicator & Back to Top Submission

## 1. What does this do?
It provides an animated scroll progress indicator with two variants (top progress bar and circular side indicator) plus an animated back-to-top button. Perfect for long articles, documentation, and content-heavy pages to help users track their reading progress and quickly return to the top.

## 2. How is it used?
Add the progress bar HTML at the top of your page and the back-to-top button at the bottom. JavaScript automatically calculates scroll progress and updates both indicators. The back-to-top button appears after scrolling 300px and smoothly scrolls to top when clicked.

## 3. Why is it useful?
- Essential UX component for long-form content
- Two progress indicator styles (top bar and circular)
- Smooth, real-time progress tracking
- Animated back-to-top button with pulse effect
- Appears only after scrolling (doesn't clutter initial view)
- Smooth scroll behavior
- Gradient colors for visual appeal
- Fully responsive design
- Accessible with `prefers-reduced-motion` support
- Lightweight and performant
- Easy to customize colors and animations
- Maintainer can easily standardize this as `.ease-scroll-progress-[YOUR_INITIALS]` in the core library.