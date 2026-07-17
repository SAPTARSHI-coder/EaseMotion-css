# Ease Video Zd

## What does this do?
An animated video player UI component with preview area, play button, progress bar, time display, volume control, and settings/fullscreen buttons — pure HTML and CSS.

## How is it used?
```html
<div class="vp-card">
  <div class="vp-preview">
    <div class="vp-thumbnail" style="background-image: url('video-thumb.jpg');"></div>
    <button class="vp-play-btn" aria-label="Play video">▶</button>
    <span class="vp-time-badge">12:34</span>
  </div>
  <div class="vp-controls">
    <div class="vp-progress">
      <div class="vp-progress-fill"></div>
    </div>
    <div class="vp-row">
      <div class="vp-left">
        <button class="vp-btn" aria-label="Play">▶</button>
        <span class="vp-time">4:22 / 12:34</span>
      </div>
      <div class="vp-right">
        <div class="vp-volume">
          <button class="vp-btn" aria-label="Volume">🔊</button>
          <div class="vp-volume-bar"><div class="vp-volume-fill"></div></div>
        </div>
        <button class="vp-btn" aria-label="Fullscreen">⛶</button>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
Video players are a fundamental component of media sites, course platforms, and content dashboards. This UI skin provides a polished, ready-to-use player interface with hover-reveal progress thumb, pulsing play button, and smooth entrances.
