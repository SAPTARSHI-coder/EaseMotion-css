# Badge · Tag · Avatar · Progress Bar

**What does this do?**  
Provides four foundational UI primitives — badges (pill labels with pulse/dot variants), tags (removable-pill labels), avatars (circular with initials, groups, and status overlays), and progress bars (colored, striped, animated) — for dashboards, profiles, and status indicators.

**How is it used?**

```html
<!-- Badge -->
<span class="badge badge-primary">New</span>
<span class="badge badge-primary badge-pulse">Live</span>
<span class="badge-dot">Online</span>

<!-- Tag -->
<span class="tag tag-success">Approved</span>
<span class="tag tag-danger tag-removable">Reject</span>

<!-- Avatar -->
<span class="avatar avatar-md">JD</span>
<span class="avatar avatar-lg"><img src="photo.jpg" alt="" /></span>
<div class="avatar-group">
  <span class="avatar avatar-sm">A</span>
  <span class="avatar avatar-sm">B</span>
</div>
<span class="avatar-badge">
  <span class="avatar avatar-md">AK</span>
</span>

<!-- Progress Bar -->
<div class="progress progress-success">
  <div class="progress-bar" style="--progress-width: 60%"></div>
</div>
<div class="progress progress-striped progress-animated">
  <div class="progress-bar" style="--progress-width: 75%"></div>
</div>
```

**Why is it useful?**  
Badges, tags, avatars, and progress bars are among the most commonly used UI primitives in modern web interfaces. Providing them as zero-JavaScript CSS components aligns with EaseMotion CSS's philosophy of animation-first, accessible, utility-driven design. Each component is fully customizable via CSS custom properties and composable with existing ease- classes.
