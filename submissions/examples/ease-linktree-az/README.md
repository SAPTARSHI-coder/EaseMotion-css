# Link Tree / Bio Links Component

### What does this do?
Adds `ease-linktree-az` — a link-in-bio card with circular avatar, display name, bio text, and a vertical list of link buttons with brand-specific hover colors. Variants for GitHub, Twitter/X, LinkedIn, YouTube, and Website.

### How is it used?
The maintainer should copy `style.css` into `components/linktree.css` and import it.

```html
<div class="ease-linktree-az">
  <img class="ease-linktree-avatar-az" src="avatar.jpg" alt="Avatar">
  <p class="ease-linktree-name-az">Your Name</p>
  <p class="ease-linktree-bio-az">Your bio text here.</p>
  <div class="ease-linktree-links-az">
    <a href="#" class="ease-linktree-link-az --brand-website">Website</a>
    <a href="#" class="ease-linktree-link-az --brand-github">GitHub</a>
    <a href="#" class="ease-linktree-link-az --brand-twitter">Twitter</a>
  </div>
  <p class="ease-linktree-footer-az">linktr.ee/username</p>
</div>
```

Brand classes: `.--brand-website`, `.--brand-github`, `.--brand-twitter`, `.--brand-linkedin`, `.--brand-youtube`. Each applies a distinct hover border/background color.

### Why is it useful?
1. **Link-in-bio pattern** — popular in social media profiles, portfolios, and creator landing pages
2. **Brand hover colors** — platform-specific visual feedback for each link
3. **Dark theme** — works with dark backgrounds using EaseMotion CSS variables
4. **Lightweight** — single component, no JavaScript or icon library required



Submitted by: @zen-ash-dev

Date: 2026-06-08

Status: **Pending review**
