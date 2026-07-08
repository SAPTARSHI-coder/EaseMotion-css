# Loader Reduced Motion Fix

## What does this do?

Adds a missing `@media (prefers-reduced-motion: reduce)` block to the loaders component, disabling all four loader animations (`.ease-loader-spin`, `.ease-loader-pulse`, `.ease-loader-ping`, `.ease-loader-dot`) when the user has requested reduced motion in their OS settings.

## How is it used?

No new classes are introduced. This is a **bug fix** — the `@media` block should be added inside the existing `@layer easemotion-components` in `components/loaders.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-loader-spin,
  .ease-loader-pulse,
  .ease-loader-ping,
  .ease-loader-dot {
    animation: none !important;
  }
}
```

## Why is it useful?

Every other animated component in the EaseMotion CSS framework already respects `prefers-reduced-motion`:

| Component | Has `prefers-reduced-motion`? |
|-----------|------------------------------|
| `buttons.css` | ✅ Yes |
| `cards.css` | ✅ Yes |
| `modals.css` | ✅ Yes |
| `forms.css` | ✅ Yes |
| `sidebar.css` | ✅ Yes |
| `tooltips.css` | ✅ Yes |
| `scroll-progress.css` | ✅ Yes |
| `ease-marquee.css` | ✅ Yes |
| `chip.css` | ✅ Yes |
| `footer.css` | ✅ Yes |
| **`loaders.css`** | **❌ Missing** |

The loaders component is the **only** animated component in the framework without this accessibility safeguard. This violates WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions) and creates an accessibility regression for users with vestibular disorders or motion sensitivity.

This fix closes the gap and brings `loaders.css` into full compliance with the framework's established accessibility patterns.
