# Motion Accessibility Standards Guide

A documentation track contribution establishing WCAG 2.1 motion accessibility rules and `prefers-reduced-motion` CSS patterns for EaseMotion CSS.

## 1. What does this do?
This guide documents standard accessibility practices for CSS animations, focusing on disabling vestibular triggers and respecting user system motion preferences.

## 2. How is it used?
Refer to `style.css` for implementation examples wrapping keyframes in `@media (prefers-reduced-motion: no-preference)` queries.

## 3. Why is it useful?
It provides contributors and maintainers with clear guidelines to ensure all EaseMotion CSS components remain accessible to users with vestibular motion disorders.
