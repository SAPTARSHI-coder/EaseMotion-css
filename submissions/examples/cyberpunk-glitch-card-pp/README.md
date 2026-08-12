# Cyberpunk Glitch Card with Scan Lines

## What does this do?

This component creates a futuristic cyberpunk-styled profile card that displays digital slicing glitches on the avatar, chromatic aberration text-shadow shifting on labels, and active sweeping CRT monitor scan lines upon hover or focus-visible events.

## How is it used?

Apply the `.cyber-card`, `.avatar-container` (containing base and overlay glitch layers), and `.profile-info` classes to your profile card markup structure:

```html
<div class="cyber-card" tabindex="0">
  <div class="crt-lines"></div>
  <div class="crt-sweep"></div>

  <div class="avatar-container">
    <div class="avatar-main" style="background-image: url('avatar.jpg');"></div>
    <div
      class="avatar-glitch gl-1"
      style="background-image: url('avatar.jpg');"
    ></div>
    <div
      class="avatar-glitch gl-2"
      style="background-image: url('avatar.jpg');"
    ></div>
  </div>

  <div class="profile-info">
    <h2 class="profile-name">User Name</h2>
    <h3 class="profile-title">Role Title</h3>
    <p class="profile-bio">Biography text...</p>
    <button class="cyber-btn">Button Text</button>
  </div>
</div>
```

## Why is it useful?

It provides a high-fidelity cyberpunk visual aesthetic for profiles or dashboards, mimicking futuristic hardware interfaces. The animations are implemented using optimized CSS transitions, keyframes, `clip-path` masks, and text-shadow arrays, guaranteeing zero scripting overhead. The card is fully keyboard navigable, and respects system accessibility settings by stripping all flashing, blinking, and moving effects when `@media (prefers-reduced-motion: reduce)` is enabled.

## Tech Stack

- HTML5
- CSS3 (no external libraries, no JavaScript)

## Preview

Open `demo.html` directly in any modern web browser to view the interactive card.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-cyber-card`, `.ease-glitch-avatar`) and replace static colors with framework design tokens on merge.
