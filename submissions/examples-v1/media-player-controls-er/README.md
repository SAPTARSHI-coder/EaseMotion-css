# Media Player Controls

A pure-CSS media player control bar with animated hover effects and interactive volume slider. Designed for music and video player interfaces. **No JavaScript required** for the control bar UI and animations.

## What does this do?

Provides a complete media player control bar with play/pause, skip, volume, shuffle, repeat, and queue buttons. Features include a progress bar with thumb reveal on hover, a popup volume slider, and smooth button scale animations. All interactions are powered by CSS transitions and hover states.

## How is it used?

```html
<section class="mp-player" aria-label="Media player">
  <div class="mp-player__artwork">
    <div class="mp-player__artwork-overlay"></div>
    <span class="mp-player__artwork-icon">&#9654;</span>
  </div>

  <div class="mp-controls">
    <div class="mp-controls__progress">
      <div class="mp-controls__progress-bar">
        <div class="mp-controls__progress-fill"></div>
        <div class="mp-controls__progress-thumb"></div>
      </div>
      <div class="mp-controls__time">
        <span>1:24</span>
        <span>3:47</span>
      </div>
    </div>

    <div class="mp-controls__row">
      <div class="mp-controls__left">
        <button class="mp-btn mp-btn--play" aria-label="Play">&#9654;</button>
        <button class="mp-btn mp-btn--skip-back" aria-label="Previous">&#9198;</button>
        <button class="mp-btn mp-btn--skip-fwd" aria-label="Next">&#9197;</button>
        <button class="mp-btn mp-btn--volume" aria-label="Volume">
          &#128266;
          <div class="mp-volume-slider">
            <div class="mp-volume-slider__track">
              <div class="mp-volume-slider__fill"></div>
            </div>
          </div>
        </button>
      </div>
      <div class="mp-controls__center">
        <span class="mp-now-playing">
          <span class="mp-now-playing__title">Track Title</span>
          <span class="mp-now-playing__artist">Artist Name</span>
        </span>
      </div>
      <div class="mp-controls__right">
        <button class="mp-btn mp-btn--shuffle" aria-label="Shuffle">&#128256;</button>
        <button class="mp-btn mp-btn--repeat" aria-label="Repeat">&#128257;</button>
        <button class="mp-btn mp-btn--queue" aria-label="Queue">&#9776;</button>
      </div>
    </div>
  </div>
</section>
```

## Why is it useful?

Media player controls are among the most commonly needed UI elements in entertainment and content platforms. This component provides a polished, reusable control bar that contributors can drop directly into music or video player interfaces. It fits EaseMotion CSS's animation-first philosophy by using CSS transitions for button hover effects, progress bar thumb reveal, and volume slider popup, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript for UI and animations
- Play/pause, skip, volume, shuffle, repeat, queue controls
- Progress bar with hover-to-expand thumb reveal
- Popup volume slider on hover
- Button scale animations with bounce easing
- Active state indicators for shuffle/repeat
- Now playing info section
- Keyboard accessible (focus-visible outlines)
- `prefers-reduced-motion` support
- Responsive — collapses gracefully on mobile
- BEM naming convention with `mp-` prefix

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mp-duration` | `0.3s` | Base transition duration |
| `--mp-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing curve |
| `--mp-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce easing for interactions |
| `--mp-bg` | `#0f172a` | Page background color |
| `--mp-surface` | `#1e293b` | Player surface color |
| `--mp-accent` | `#38bdf8` | Accent color for play button and progress |
| `--mp-btn-size` | `2.5rem` | Button diameter |
| `--mp-radius` | `1rem` | Player border radius |

## Accessibility

- All buttons have `aria-label` attributes
- Play button is visually distinct (larger, accent color)
- `:focus-visible` outlines on all interactive elements
- `prefers-reduced-motion: reduce` collapses all transitions
- Semantic `<section>`, `<main>`, `<header>` elements
- `aria-label` on player region
