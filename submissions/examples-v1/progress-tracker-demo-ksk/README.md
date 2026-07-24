# Multi-Step Progress Tracker Demo (`progress-tracker-demo-ksk`)

1. What does this do?  
A responsive four-step progress tracker component for onboarding wizards, form setups, and checkout flows. The tracker displays an active glowing step indicator node, a connecting progress line that fills dynamically as steps advance, checkmark badges for completed steps, and wizard panel content transitions—all powered 100% by pure CSS.

2. How is it used?  
Define four radio inputs named `tracker-group` (`#step-1`, `#step-2`, `#step-3`, `#step-4`) immediately before `.tracker-card`. Use `<label>` targets pointing to the radio IDs for step nodes, Back buttons, and Next Step buttons. Customize timing and color variables:

```css
.tracker-card {
  --tracker-duration:     0.5s;
  --tracker-spring:       cubic-bezier(0.34, 1.56, 0.64, 1);
  --tracker-accent:       #6366f1;         /* Active step color */
  --tracker-completed:    #10b981;         /* Completed step color */
  --tracker-bg:           #0f111a;
  --tracker-surface:      #161929;
}
```

3. Why is it useful?  
Provides a complete, framework-independent multi-step onboarding wizard layout. Demonstrates how step states, progress track line fills, checkmark swaps (`✓`), and wizard panel reveals operate seamlessly in pure CSS.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #52376.*
