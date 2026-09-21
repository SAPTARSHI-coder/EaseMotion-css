# Custom Audio Player Widget Documentation

An accessible, customizable audio player widget built with semantic HTML5 markup, ARIA live updates, scoped CSS design tokens, and robust keyboard navigation.

## Table of Contents
- [HTML Markup Example](#html-markup-example)
- [CSS Custom Properties & Modifiers](#css-custom-properties--modifiers)
- [Modifier Classes](#modifier-classes)
- [Accessibility Guidance (a11y)](#accessibility-guidance-a11y)
- [Keyboard Navigation](#keyboard-navigation)

---

## HTML Markup Example

```html
<section class="audio-player" role="region" aria-label="Audio Player">
  <audio id="native-audio" src="audio-source.mp3" preload="metadata"></audio>

  <div class="audio-player__meta">
    <span class="audio-player__title">Track Title</span>
    <span class="audio-player__artist">Artist Name</span>
  </div>

  <div class="audio-player__controls">
    <!-- Play/Pause Toggle -->
    <button 
      type="button" 
      class="audio-player__button" 
      aria-label="Play" 
      aria-pressed="false"
    >
      <span class="audio-player__icon" aria-hidden="true">▶</span>
    </button>

    <!-- Scrubber -->
    <div class="audio-player__timeline">
      <span class="audio-player__time">0:00</span>
      <input 
        type="range" 
        class="audio-player__scrubber" 
        value="0" 
        min="0" 
        max="100" 
        step="0.1" 
        aria-label="Seek position" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-valuenow="0" 
        aria-valuetext="0 seconds"
      />
      <span class="audio-player__time">3:45</span>
    </div>

    <!-- Mute & Volume controls -->
    <div class="audio-player__volume-group">
      <button 
        type="button" 
        class="audio-player__button" 
        aria-label="Mute" 
        aria-pressed="false"
      >
        <span class="audio-player__icon" aria-hidden="true">🔊</span>
      </button>
      <input 
        type="range" 
        class="audio-player__volume-slider" 
        value="100" 
        min="0" 
        max="100" 
        aria-label="Volume" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-valuenow="100" 
        aria-valuetext="100 percent"
      />
    </div>
  </div>
</section>
