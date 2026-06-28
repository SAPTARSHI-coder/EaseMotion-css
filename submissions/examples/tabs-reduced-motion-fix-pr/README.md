# Tabs Reduced Motion Fix

## What does this do?

Adds a missing `@media (prefers-reduced-motion: reduce)` block to the tabs component, disabling the sliding underline transition (`.ease-tab-underline`), the label color transition (`.ease-tab-label`), and the tab panel fade-in animation (`.ease-tab-panel`) when the user has requested reduced motion in their OS settings.

## How is it used?

No new classes are introduced. This is a **bug fix** — the `@media` block should be added inside the existing `@layer easemotion-components` in `components/tabs.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-tab-underline,
  .ease-tab-label {
    transition: none !important;
  }
  
  .ease-tab-panel {
    animation: none !important;
  }
}
```

## Why is it useful?

Most animated components in the EaseMotion CSS framework already respect `prefers-reduced-motion`. However, the tabs component was missing this crucial block.

Without this block, users with vestibular disorders or motion sensitivity would still see the sliding underline and fading content transitions, violating WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions).

This fix closes the gap and ensures the tabs component aligns with the framework's established accessibility standards.
