# Animation Delay Utilities

**What does this do?**
Adds reusable delay utility classes for staging entrance animations in a predictable sequence.

**How is it used?**
```html
<article class="delay-card em-delay-1">First item</article>
<article class="delay-card em-delay-2">Second item</article>
<article class="delay-card em-delay-3">Third item</article>
<article class="delay-card em-delay-4">Fourth item</article>
<div class="timeline-dot em-delay-custom" style="--em-delay: 2.4s"></div>
```

**Why is it useful?**
Delay utilities help developers create staggered cards, timelines, and callouts without repeating custom `animation-delay` values, which fits EaseMotion CSS's goal of small, readable motion primitives.
