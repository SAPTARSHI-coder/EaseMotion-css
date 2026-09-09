# Animated Team Section with Hover Social Links

### What does this do?

It shows a responsive team grid where each member card reveals social links on hover and lifts with a shadow, and cards enter with a staggered animation.

### How is it used?

```html
<div class="team-grid">
  <div class="team-card">
    <div class="team-avatar" aria-hidden="true">JD</div>
    <h3>Jane Doe</h3>
    <span class="team-role">Lead Designer</span>
    <p>Passionate about creating beautiful, accessible interfaces.</p>
    <div class="team-social">
      <a href="#" class="social-icon" aria-label="Website of Jane Doe">...</a>
      <a href="#" class="social-icon" aria-label="Email Jane Doe">...</a>
      <a href="#" class="social-icon" aria-label="Message Jane Doe">...</a>
    </div>
  </div>
</div>
```

The `.team-social` row is hidden by default and slides up on hover. It also reveals on `:focus-within`, so keyboard users can reach the links.

### Why is it useful?

Team sections are a staple of landing pages. This implementation adds hover lift, a staggered entrance, and a smooth social reveal using only transforms and transitions with readable class names. Avatars use initials and the social icons are inline SVG, so the demo is fully self contained. Each icon has an `aria-label`, the reveal works for keyboard focus, and motion is disabled under `prefers-reduced-motion: reduce`.
