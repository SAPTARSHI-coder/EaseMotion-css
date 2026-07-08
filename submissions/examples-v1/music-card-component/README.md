# Music Card Component

## Overview

Music Card Component is a responsive UI pattern for album artwork, track details, and playback controls. It is designed to mimic modern music player cards with hover interactions, dark mode, glassmorphism, and compact playlist layouts.

## Features

- Album artwork display
- Song title and artist information
- Hover-revealed playback controls
- Play / Pause / Next / Previous buttons
- Smooth hover animations
- Responsive design
- CSS-only implementation
- Compatible with existing EaseMotion utilities
- Customizable through CSS variables
- Zero JavaScript required

## Available Classes

- `.ease-music-card` — main music card container
- `.ease-music-cover` — album artwork panel
- `.ease-music-content` — content area with text and controls
- `.ease-music-title` — track title
- `.ease-music-artist` — artist name
- `.ease-music-controls` — control button container
- `.ease-music-button` — playback control button

## Variants

- `.ease-music-dark` — dark-themed music card
- `.ease-music-glass` — glassmorphism style
- `.ease-music-hover` — always-visible hover controls
- `.ease-music-compact` — compact playlist-style card
- `.ease-music-positive` — positive trend style (example for track state)
- `.ease-music-negative` — negative trend style (example for track state)

## Customization

Override CSS variables to tailor card appearance:

```css
.ease-music-card {
  --ease-music-bg: #ffffff;
  --ease-music-color: #111827;
  --ease-music-radius: 1rem;
  --ease-music-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
  --ease-music-border: 1px solid rgba(15, 23, 42, 0.08);
  --ease-music-padding: 1.25rem;
  --ease-music-transition: 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  --ease-music-overlay-bg: rgba(17, 24, 39, 0.75);
}
```

## Example Usage

```html
<div class="ease-music-card ease-music-hover">
  <div class="ease-music-cover" style="background-image: url('cover.jpg');"></div>
  <div class="ease-music-content">
    <div>
      <p class="ease-music-title">Golden Hour</p>
      <p class="ease-music-artist">Kacey Musgraves</p>
    </div>
    <div class="ease-music-controls">
      <button class="ease-music-button" aria-label="Previous">◀︎</button>
      <button class="ease-music-button" aria-label="Play">▶︎</button>
      <button class="ease-music-button" aria-label="Next">▶︎</button>
    </div>
  </div>
</div>
```

## Browser Compatibility

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Accessibility

- Provides alt text via `background-image` examples for artwork usage
- Focus-visible states for keyboard navigation
- Respects `prefers-reduced-motion` to disable transitions
- Responsive layout for mobile and desktop

## Notes

- This component is decorative and does not include real audio playback.
- Use accessible image alternatives when converting background images to `<img>` in your application.
- The hover controls can be toggled with `.ease-music-hover` for always-visible playback actions.
