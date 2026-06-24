# Animated User Profile Card

A modern, highly performant SaaS-style User Profile Card component built using **pure HTML and CSS**. It utilizes a hidden checkbox mechanism to handle user interactions—specifically toggling follow/following status states and incrementing live follower counters—completely without JavaScript.

---

## 1. What does this do?

This component provides a premium profile card wrapper displaying a banner backdrop, circular avatar, identity headers, description bio, metrics analytics, socials, and CTAs.

### Key Animations & Visual Features
1. **Pulsing Avatar Glow**: The avatar circle features a continuous pulsing gradient glow ring. Hovering over the card scales and rotates the avatar slightly.
2. **Scrolling Gradient Banner**: The card header features a slowly scrolling, colorful gradient background banner to add a touch of modern motion.
3. **Card Hover Lift**: Hovering over the card rises it by `8px` and expands its dropshadow size.
4. **CSS-Only Follow Toggle & Counter**: Clicking the "Follow" button checks a hidden checkbox, which changes the button styling (from Indigo "Follow" to green "Following" with a checkmark) and increments the followers counter from `12,482` to `12,483`.
5. **Staggered Revealing**: Card segments fade and slide up sequentially on initial page loading using calculated transition delays.

---

## 2. How is it used?

### HTML Structure
The interactive follow feature works by wrapping a hidden checkbox trigger preceding the profile card element:

```html
<!-- Hidden State Trigger -->
<input type="checkbox" id="follow-toggle" class="follow-checkbox">

<!-- Profile Card Wrapper -->
<div class="profile-card">
  <!-- Scrolling Banner -->
  <div class="card-banner"></div>
  
  <!-- Avatar Initial -->
  <div class="avatar-container">
    <div class="avatar-ring">
      <div class="avatar-inner">JD</div>
    </div>
  </div>

  <!-- User Bio Details -->
  <h2>Jane Doe</h2>
  
  <!-- Stats Section -->
  <div class="stats-container">
    <div class="stat-item">
      <!-- data-attributes populate default and incremented values -->
      <span class="stat-value followers-count" data-default="12,482" data-active="12,483"></span>
      <span class="stat-label">Followers</span>
    </div>
  </div>

  <!-- Action Labels -->
  <div class="actions-container">
    <!-- label targets the checkbox -->
    <label for="follow-toggle" class="card-btn btn-follow" tabindex="0" role="checkbox">
      <span class="follow-btn-text" data-default="Follow" data-active="Following"></span>
    </label>
  </div>
</div>
```

### CSS Counter & Follow Logic
We leverage pseudo-elements with `content: attr(...)` definitions to toggle active text content based on the checked checkbox state:

```css
/* Load defaults */
.followers-count::before {
  content: attr(data-default);
}
.follow-btn-text::before {
  content: attr(data-default);
}

/* Update values when checked */
.follow-checkbox:checked ~ .profile-card .followers-count::before {
  content: attr(data-active);
}
.follow-checkbox:checked ~ .profile-card .btn-follow .follow-btn-text::before {
  content: attr(data-active);
}

/* Color & Icon Shifts */
.follow-checkbox:checked ~ .profile-card .btn-follow {
  background-color: var(--success-color);
  border-color: var(--success-color);
}
```

---

## 3. Why is it useful?

1. **Zero JS Live Toggle**: Delivers a fully-functioning state toggle and visual number increment without writing or loading a single line of JavaScript.
2. **Smooth GPU-Accelerated Motion**: Transitions like banner gradient changes and avatar pulses render smoothly on modern browsers.
3. **No Heavy Image Dependencies**: Uses initials inside a vector ring, removing layout shifts (CLS) caused by slow avatar assets.
4. **Keyboard & Screen Reader Ready**: Fully tabbing focus outlines are visible, and ARIA attributes sync on selection toggles.
