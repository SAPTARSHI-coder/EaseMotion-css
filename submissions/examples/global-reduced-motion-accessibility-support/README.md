# Global Reduced Motion Accessibility Support

## What does this do?
Adds a global `@media (prefers-reduced-motion: reduce)` rule that automatically minimizes motion-heavy EaseMotion animations and transitions when the user has enabled "Reduce Motion" in their operating system.

## How is it used?
No new classes are required. Developers keep using existing EaseMotion classes normally:

    <div class="ease-fade-in ease-slide-up">Welcome to EaseMotion CSS</div>
    <button class="ease-hover-scale">Get Started</button>

The media query runs automatically and neutralizes motion only when the OS preference is set to reduce motion. Every element using an `ease-*` class is covered via the `[class*="ease-"]` selector.

## Why is it useful?
EaseMotion CSS focuses heavily on animation, so respecting accessibility preferences is an important complementary feature. This:

- Improves accessibility for motion-sensitive users (vestibular disorders).
- Respects OS-level accessibility preferences automatically.
- Requires zero extra effort from developers using existing animation classes.
- Adds no breaking changes — normal users still see full animations.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser. Toggle "Reduce Motion" in your OS accessibility settings and reload to compare the two states.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
