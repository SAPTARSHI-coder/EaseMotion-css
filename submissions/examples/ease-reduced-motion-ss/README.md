# Accessibility Fallbacks for Reduced Motion

**What does this do?**
Introduces `prefers-reduced-motion` overrides across EaseMotion CSS animations. When users have reduced motion enabled in their system preferences, heavy transitions (like bounce, elastic, and staggered effects) will be disabled or simplified.

**How is it used?**
No additional HTML markup or utility classes are needed. This is applied globally:
```css
@media (prefers-reduced-motion: reduce) {
    .ease-btn-loading {
        transition: none !important;
        animation: none !important;
    }
}
```

**Why is it useful?**
It improves accessibility for motion-sensitive users, aligns with EaseMotion's philosophy by doing animations responsibly, ensures WCAG guideline compliance, and gives developers confidence that animations degrade gracefully.
