# Animated Stats Counter Submission

## 1. What does this do?
It provides animated number counters that count up from 0 to the target value when scrolled into view, using EaseMotion CSS utilities and a minimal Intersection Observer script.

## 2. How is it used?
Wrap each stat in the `.stat-card` class and set the `data-target` attribute on the `.stat-number` element to the desired final value. Combine with EaseMotion utilities like `ease-hover-lift` and staggered delays.

## 3. Why is it useful?
- Stats counters are essential for dashboards, landing pages, and portfolios to showcase achievements.
- Demonstrates scroll-triggered animations using Intersection Observer + EaseMotion utilities.
- Glassmorphism design with hover interactions.
- Fully accessible: respects `prefers-reduced-motion` to prevent unwanted movement.
- Maintainer can easily standardize this as `.ease-stats-[YOUR_INITIALS]` in the core library.