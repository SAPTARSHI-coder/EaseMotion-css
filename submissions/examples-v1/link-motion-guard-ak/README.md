Link Motion Guard AK

What does this do?

Demonstrates link hover animations that respect the user's `prefers-reduced-motion` setting by disabling motion-based effects.

---

How is it used?

a {
  transition: transform 0.2s ease;
}
@media (prefers-reduced-motion: reduce) {
  a { transition: none; }
}

Guard link animations behind a reduced motion query.

---

Why is it useful?

Prevents link hover animations from causing discomfort for users with vestibular disorders while maintaining visual feedback through non-motion cues like color changes.

Features

- Animated link underline on hover
- Scale effect on hover
- Reduced motion guard disables transitions
- Color change as fallback feedback
- Accessible focus-visible styles
- Smooth easing by default
- Graceful degradation approach
