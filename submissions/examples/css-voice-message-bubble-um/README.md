# CSS Voice Message Bubble

## 1. What does this do?
This component renders an interactive messaging chat bubble featuring integrated playback SVG icons and a multi-segment audio waveform that bounces with staggered timing delays when play is triggered.

## 2. How is it used?
Configure the playback checkbox trigger and segment wave-bars inside the message bubble:
```html
<!-- Playback toggle -->
<input type="checkbox" id="play-trigger" class="play-trigger">

<div class="voice-bubble">
  <!-- Play/Pause Control label -->
  <label for="play-trigger" class="play-btn" role="button">
    <svg class="icon-play"></svg>
    <svg class="icon-pause"></svg>
  </label>

  <!-- Waveform track -->
  <div class="waveform-container">
    <div class="wave-bar wb-1"></div>
    <div class="wave-bar wb-2"></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides front-end developers with a lightweight voice-memo playback UI concept built natively using sibling checkbox states and keyframe translation properties, replacing canvas visualizer scripts.
