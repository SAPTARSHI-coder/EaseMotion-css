## overscroll-behavior-tm-mp

**What does this do?**
Provides utility classes to control the browser's overscroll (scroll chaining and bounce) behaviour on any scrollable element, including per-axis variants.

**How is it used?**
```html
<!-- Shorthand (both axes) -->
<div class="scroll-box overscroll-auto">...</div>     <!-- browser default -->
<div class="scroll-box overscroll-contain">...</div>  <!-- no scroll chaining -->
<div class="scroll-box overscroll-none">...</div>     <!-- no chaining, no bounce -->

<!-- Per-axis -->
<div class="overscroll-x-contain">...</div>   <!-- contain horizontal only -->
<div class="overscroll-y-none">...</div>      <!-- disable vertical bounce only -->
```

**Why is it useful?**
Scroll chaining causes unexpected page scrolls when a nested scrollable element is fully scrolled — a common UX bug in modals, sidebars, and chat windows. These utilities let developers fix that with a single readable class instead of writing `overscroll-behavior` every time, fitting EaseMotion CSS's human-readable, utility-first philosophy.
