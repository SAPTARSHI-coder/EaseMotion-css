# Global Reduced Motion Accessibility Support

## 1. What does this do?

Globally minimizes or disables motion-heavy animations and transitions on any EaseMotion utility class whenever the user has enabled the **"Reduce Motion"** preference in their operating system.

## 2. How is it used?

No extra classes or developer effort required. The rule automatically applies to every element whose class name contains `ease`. Existing markup keeps working as-is:

```html
<div class="ease-fade-in ease-slide-up">
  Welcome to EaseMotion CSS
</div>

<button class="ease-hover-scale">
  Get Started
</button>
```

When the OS-level "Reduce Motion" setting is **OFF**, all animations behave normally.
When it is **ON**, animations are shortened to near-zero duration and transform-based motion (scale, translate, rotate) is suppressed, while opacity and content remain fully functional.

## 3. Why is it useful?

EaseMotion CSS is animation-first, so accessibility for motion-sensitive users is a critical complement to the framework's philosophy of being modern, developer-friendly, and production-ready.

This feature:

- Improves accessibility for users with vestibular disorders, migraines, or motion sensitivity.
- Respects operating-system level accessibility preferences automatically (`prefers-reduced-motion: reduce`).
- Requires **zero additional effort** from developers using existing EaseMotion classes.
- Aligns EaseMotion CSS with modern accessibility best practices recommended by **MDN**, **WCAG**, **Bootstrap**, and the **Tailwind CSS** ecosystem.
- Strengthens framework quality without introducing any breaking changes.

## Reference

- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG 2.1 — Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)

## Related Issue

Closes #9565