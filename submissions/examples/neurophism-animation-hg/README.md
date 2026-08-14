# Neumorphic Animated Audio Player Widget

A lightweight, fully responsive, zero-JavaScript audio player component featuring **Neumorphism** styling, smooth vinyl spinning transitions, dynamic visualizer animations, and built-in accessibility controls.

Designed as a component variant for **EaseMotion-css**.

---

## ✨ Features

* **Zero JavaScript:** Powered entirely by CSS state management using the checkbox pattern.
* **Neumorphic Aesthetic:** Implements soft-ui shadows (`inset` and `outset`) mapped to design tokens.
* **Smooth Animations:** Includes vinyl spin transformations, active play/pause states, and dynamic equalizer bars.
* **Accessibility First:** Fully compliant with `prefers-reduced-motion` settings to support users with motion sensitivity.
* **Responsive Layout:** Clean display across mobile, tablet, and desktop screens.

---

## 🚀 Quick Start

### 1. HTML Structure

Add the component structure to your HTML document:

```html
<div class="nm-player-card">
  <!-- Album Disc Display -->
  <div class="nm-disc-container">
    <div class="nm-disc"></div>
    <div class="nm-cover">
      <svg class="nm-icon-note" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    </div>
  </div>

  <!-- Track Information -->
  <div class="nm-info">
    <h3 class="nm-title">Ethereal Echoes</h3>
    <p class="nm-artist">EaseMotion Synthwave</p>
  </div>

  <!-- Audio Equalizer Visualizer -->
  <div class="nm-visualizer">
    <span class="nm-bar"></span>
    <span class="nm-bar"></span>
    <span class="nm-bar"></span>
    <span class="nm-bar"></span>
    <span class="nm-bar"></span>
  </div>

  <!-- State Toggle (Hidden Control) -->
  <input type="checkbox" id="nm-play-state" class="nm-toggle" aria-label="Play or pause audio">

  <!-- Progress Bar -->
  <div class="nm-progress-wrapper">
    <div class="nm-progress-track">
      <div class="nm-progress-fill"></div>
    </div>
    <div class="nm-time">
      <span>1:24</span>
      <span>3:45</span>
    </div>
  </div>

  <!-- Player Controls -->
  <div class="nm-controls">
    <button type="button" class="nm-btn nm-btn-sm" aria-label="Previous track">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
    </button>
    
    <label for="nm-play-state" class="nm-btn nm-btn-lg" aria-label="Toggle Play Pause">
      <svg class="nm-icon-play" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      <svg class="nm-icon-pause" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
    </label>

    <button type="button" class="nm-btn nm-btn-sm" aria-label="Next track">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
    </button>
  </div>
</div>