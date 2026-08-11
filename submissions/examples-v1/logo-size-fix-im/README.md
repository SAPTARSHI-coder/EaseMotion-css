# Header Logo Size Fix

1. **What does this fix?**
   The `.docs-logo-img` height is currently `36px`, which makes the logo too small and visually weak compared to the nav links and CTA button beside it.

2. **The fix**
   Increase `.docs-logo-img` height from `36px` to `52px` in `docs/docs.css`.

3. **Why it fits EaseMotion CSS**
   The logo anchors the entire header. At 36px it gets overpowered by surrounding elements — bumping to 52px gives it proper visual presence without breaking the header layout.
