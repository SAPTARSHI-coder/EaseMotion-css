# Profile Card

### What does this do?

It shows a profile card with a gradient cover, an avatar overlapping the cover, a name, a role, stats, and a follow button, with a hover lift.

### How is it used?

```html
<div class="profile-card">
  <div class="profile-cover" aria-hidden="true"></div>
  <div class="profile-avatar" aria-hidden="true">JD</div>
  <h3>Jane Doe</h3>
  <span class="profile-role">Product Designer</span>
  <a href="#" class="profile-btn">Follow</a>
</div>
```

A negative top margin pulls the avatar up so it overlaps the cover, and a border matching the card color separates it cleanly.

### Why is it useful?

Profile cards appear in social apps, team pages, and directories. This layers an overlapping avatar over a cover and adds a hover lift, using only CSS and an initials avatar so it is self contained. The hover lift is disabled under `prefers-reduced-motion: reduce`.
