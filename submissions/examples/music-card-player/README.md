# Ease Music Player

## What does this do?
A glassmorphism music player card with a **vinyl-style rotating album art**
(spins while playing, pauses mid-turn when paused) and **animated
equalizer bars** that pulse next to the song title while playing —
in addition to standard playback controls and a progress bar.

## How is it different from a typical music-player utility?
- Album art rotates continuously during playback and simply stops in place
  on pause, mimicking a real turntable rather than a static image.
- Includes CSS-only animated equalizer bars with staggered delays,
  giving visual feedback that music is "playing" beyond the icon swap.
- Progress bar has a draggable-looking handle and updates live during
  playback simulation.
- Uses `backdrop-filter` for a genuine glassmorphism effect.

## How is it used?
\`\`\`html
<div class="ease-player">
  <div class="ease-player__art-wrap">
    <div class="ease-player__art">
      <img src="album.jpg" alt="Album cover" />
    </div>
  </div>
  <div class="ease-player__info">
    <div class="ease-player__text">
      <h3 class="ease-player__title">Song Title</h3>
      <p class="ease-player__artist">Artist Name</p>
    </div>
    <div class="ease-player__eq">
      <span></span><span></span><span></span><span></span>
    </div>
  </div>
  <!-- progress bar + controls -->
</div>
\`\`\`

See `demo.html` for the JS toggling `is-spinning`/`is-active` classes on
play/pause (all animation itself is CSS).

## Why is this useful?
Music/media players are a common, visually rich UI pattern, and small
touches like the spinning vinyl and equalizer bars make the component feel
alive rather than static — a strong showcase of EaseMotion CSS's
animation-first philosophy.