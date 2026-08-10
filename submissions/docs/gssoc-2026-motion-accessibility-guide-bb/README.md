# WCAG Motion Accessibility & Prefers-Reduced-Motion Guide

A comprehensive documentation guide and interactive visualizer for WCAG 2.1 motion accessibility compliance and `prefers-reduced-motion` CSS media query overrides in EaseMotion CSS.

## 1. What does this do?
This documentation guide demonstrates how to implement non-vestibular motion fallbacks using CSS `@media (prefers-reduced-motion: reduce)`. It compares standard 60 FPS transform keyframe animations against reduced opacity fade profiles for user comfort.

## 2. How is it used?
1. Review the implementation patterns in `demo.html` and `style.css`.
2. Wrap complex CSS `@keyframes` and 3D transforms inside `@media (prefers-reduced-motion: no-preference)` or provide fallback overrides under `prefers-reduced-motion: reduce`.
3. Test locally by enabling "Reduce Motion" in your OS accessibility preferences.

## 3. Why is it useful?
- **WCAG 2.1 Compliance**: Protects users with vestibular motion disorders or motion sickness sensitivities.
- **Production Standard**: Ensures EaseMotion CSS animations conform to enterprise accessibility requirements.
- **Easy Fallbacks**: Demonstrates low-effort CSS overrides with zero JavaScript dependencies.
