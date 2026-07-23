# Animated Glassmorphism Music Player Card

A modern, responsive music player card built with a frosted glass (glassmorphism) effect, animated rotating album artwork, and play/pause/next/previous controls. Pure HTML and CSS — no JavaScript required for the visuals.

## Features

- 🧊 Frosted glass card using `backdrop-filter: blur()` over a colorful gradient background
- 💿 Continuously rotating "vinyl style" album artwork while playing
- ▶️ Play, pause, previous, and next control buttons with hover/press feedback
- ✨ Glowing animated progress bar
- 📱 Responsive layout that scales down cleanly on small screens
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — beginner-friendly, well-commented code

## Usage

Include `style.css` and drop the card markup into your page:

```html
<div class="player-card">
  <div class="player-art-wrap">
    <div class="player-art"></div>
  </div>

  <p class="player-title">Midnight Skyline</p>
  <p class="player-artist">Nova Waves</p>

  <div class="player-progress-track">
    <div class="player-progress-fill"></div>
  </div>

  <div class="player-controls">
    <button class="player-btn player-btn--secondary" aria-label="Previous track">⏮</button>
    <button class="player-btn player-btn--play" aria-label="Play or pause">
      <span class="icon-pause">❚❚</span>
      <span class="icon-play">▶</span>
    </button>
    <button class="player-btn player-btn--secondary" aria-label="Next track">⏭</button>
  </div>
</div>