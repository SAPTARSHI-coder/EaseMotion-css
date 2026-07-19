# Animated Team Member Avatar Stack

**1. What does this do?**  
Displays a compact, overlapping stack of team avatars with smooth hover/focus expansions and an overflow “+N” indicator.

**2. How is it used?**

```html
<div class="avatar-stack" aria-label="Team members" role="group">
  <button class="avatar" type="button" aria-label="User 1" title="User 1">
    <img src="avatar1.jpg" alt="" />
  </button>
  <button class="avatar" type="button" aria-label="User 2" title="User 2">
    <img src="avatar2.jpg" alt="" />
  </button>
  <button class="avatar" type="button" aria-label="User 3" title="User 3">
    <img src="avatar3.jpg" alt="" />
  </button>
  <button class="avatar" type="button" aria-label="User 4" title="User 4">
    <img src="avatar4.jpg" alt="" />
  </button>

  <div class="avatar more-members" aria-hidden="true">+8</div>
</div>
```

**3. Why is it useful?**  
Avatar stacks are a common collaboration UI pattern (dashboards, team pages, SaaS apps). This component is motion-first and composable: it uses micro-interactions (lift/scale + z-index management) while remaining responsive and respects `prefers-reduced-motion`.

