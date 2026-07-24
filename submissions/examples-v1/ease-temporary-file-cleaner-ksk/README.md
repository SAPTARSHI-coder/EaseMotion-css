# Temporary File Cleaner (`ease-temporary-file-cleaner-ksk`)

1. What does this do?  
A pure CSS storage maintenance/cleaner widget. When clicked, it activates an animated cleaning sequence: it sweeps files out of the list with staggered slide-out exits, displays a loading spinner overlay with a smooth progress bar fill, and then reveals a success state checkmark upon completion—all without JavaScript.

2. How is it used?  
Add `<input type="checkbox" id="..." class="cleaner-toggle">` immediately preceding `.cleaner-card`. Inside, place `<label for="...">` buttons to toggle the cleaning state. Customise key attributes via CSS variables:

```css
.cleaner-card {
  --cleaner-duration:     3s;              /* time the cleaning takes */
  --cleaner-accent:       #f43f5e;         /* warning/alert theme color */
  --cleaner-success:      #10b981;         /* green clean success color */
  --cleaner-bg:           #0f111e;
  --cleaner-surface:      #161929;
  --cleaner-radius:       24px;
}
```

3. Why is it useful?  
Provides a highly interactive dashboard diagnostic clean-up widget with zero runtime script footprint. Useful for hosting dashboard previews, utility panels, and admin interfaces that demonstrate space optimizations.

---
*Created for GSSoC-26 — Resolves #49037.*
