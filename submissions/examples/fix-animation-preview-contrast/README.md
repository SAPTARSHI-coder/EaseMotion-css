# Animation Preview Contrast Fix

## What does this do?
Resolves an accessibility and UI issue (#7755) where the inner preview shapes on the Animation Preview page lacked adequate contrast, causing them to blend into their parent card containers, specifically in Light Theme.

## How is it fixed?
Introduces `.animation-preview-box-fixed` which applies dynamic, theme-aware background and border tokens:
- **Light Theme:** Applies a subtle `#f3f4f6` background with a distinct `#d1d5db` border, ensuring it pops off the standard white card background.
- **Dark Theme:** Applies a deep `#1e1e2e` background with a `#374151` border, preventing it from getting lost in the dark card surface.
- **Hover State:** Added a subtle lift (`translateY`) and primary-colored border on hover to clearly indicate the interactive area.

## Why is it useful?
Improves the developer experience by ensuring that the animations being previewed are clearly framed within a distinct boundary, making the motion easier to observe and evaluate regardless of the user's system theme preference.
