# Animated User Profile Statistics Card

An interactive, premium user profile statistics card component featuring smooth card hover elevation, radial gradients, pulsing status indicator rings, top-right achievement tags, avatar zooms, stats scaling, and follow button hovers. Specially optimized for SaaS dashboards, social interfaces, team directories, and community applications.

## Key Features

- **Card Hover Elevation**: Raises the card (`translateY(-8px)`) and applies a glowing drop-shadow matching the card's state.
- **Top Accent & Shimmer**: Includes a colored top accent border that thickens on hover, along with a diagonal shimmer sweep reflection reflecting across the glass card face.
- **Offline-First Avatar Zooms**: Zooms (`scale(1.08)`) and slightly tilts (`rotate(3deg)`) the avatar `<img>` on hover. Avatars use clean inline SVG Data URIs for crisp offline rendering.
- **Pulsing Status Badges**: Features badges representing user states (`Online`, `Active`, `Verified`) with an animated pulsing radar-like indicator ring.
- **Stat Hover Scaling**: Transitions individual statistics columns (`translateY(-4px) scale(1.06)`) and highlights values upon hover.
- **Profile Completion Progress**: Animates a profile strength indicator bar from `0%` to its target value on initial page load.
- **Follow Button Transitions**: The follow button (`.follow-btn`) scales and glows on hover according to the profile's category, and depresses on active click.

## File Structure

```text
submissions/examples/animated-user-profile-statistics-card/
├── demo.html
├── style.css
└── README.md
```

## HTML Structure

```html
<div class="profile-card user-online">
  <!-- Top Right Badge -->
  <span class="achievement-badge badge-pro">PRO</span>

  <!-- Profile Image -->
  <img src="data:image/svg+xml;utf8,..." alt="Profile Avatar" class="avatar">

  <!-- Info -->
  <h3>Sarah Johnson</h3>
  <p class="role">Product Designer</p>
  <p class="bio">Lead Product Designer @CreativeLabs. Crafting minimal, motion-rich user experiences.</p>

  <!-- Status -->
  <span class="status-badge">Online</span>

  <!-- Statistics -->
  <div class="stats">
    <div class="stat">
      <strong>12.4K</strong>
      <span>Followers</span>
    </div>

    <div class="stat">
      <strong>248</strong>
      <span>Projects</span>
    </div>

    <div class="stat">
      <strong>4.8K</strong>
      <span>Likes</span>
    </div>
  </div>

  <!-- Progress -->
  <div class="profile-completion">
    <div class="completion-label">
      <span>Profile Strength</span>
      <span>95%</span>
    </div>
    <div class="completion-bar">
      <div class="completion-progress" style="--percent: 95%;"></div>
    </div>
  </div>

  <!-- Connect CTA -->
  <button class="follow-btn">Follow</button>
</div>
```

## CSS Customizations

You can customize the card colors, transitions, and shadows via `:root` variables in `style.css`:

```css
:root {
  /* Cards */
  --p-card-bg: rgba(30, 41, 59, 0.4);
  --p-card-hover-bg: rgba(30, 41, 59, 0.7);
  
  /* Accent Colors */
  --p-color-online: #10b981;
  --p-color-active: #3b82f6;
  --p-color-verified: #8b5cf6;
  
  /* Transitions */
  --p-transition-smooth: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
```

### Theme Accent States

To switch the styling of the card and its active buttons:
- **Online**: Add `user-online` to the `.profile-card` (Green accent, PRO badge).
- **Active**: Add `user-active` to the `.profile-card` (Blue accent, CORE badge).
- **Verified**: Add `user-verified` to the `.profile-card` (Purple accent, ELITE badge).

## How to View

1. Navigate to `submissions/examples/animated-user-profile-statistics-card/`.
2. Open `demo.html` in any modern web browser to preview interactions and animations.
3. Resize the browser window to see the responsive flexbox/grid layout adapt from three columns down to a single column on mobile screens.

## Contribution Standards

- Avoid direct edits to `core/` or `components/` folders. Keep all submission assets within this directory.
- CSS classes follow direct, readable structures. Upon pull request merge, the repository maintainer will prefix classes with `ease-*` styles.
