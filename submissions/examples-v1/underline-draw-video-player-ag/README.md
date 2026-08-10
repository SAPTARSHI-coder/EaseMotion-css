# Underline Draw Video Player

A minimal, premium e-commerce video player card component featuring an elegant draw-underline play/pause animation to emphasize interactive state.

## 1. What does this do?
This component renders an interactive e-commerce video player frame with a custom overlay play/pause button that plays/pauses a video and draws a smooth, GPU-accelerated accent underline below its text indicator on hover or focus events.

## 2. How is it used?
Integrate the video frame component in your HTML structure like this:

```html
<link rel="stylesheet" href="path/to/easemotion.min.css">
<link rel="stylesheet" href="style.css">

<div class="ud-video-container" id="playerContainer">
  <video class="ud-video-element" id="videoElement" loop muted playsinline preload="metadata">
    <source src="video.mp4" type="video/mp4">
  </video>

  <div class="ud-play-overlay" id="playOverlay" role="button" aria-label="Toggle Play/Pause" tabindex="0">
    <button class="ud-play-btn" id="playBtn" aria-label="Play video" tabindex="-1">
      <span class="ud-play-icon">
        <svg id="playIcon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </span>
      <!-- The text node that receives the drawing underline effect -->
      <span class="ud-play-btn-text">Play</span>
    </button>
  </div>
</div>
```

To modify the underline animation direction, apply direction modifiers:
- Default (Draw from Center): `.ud-play-btn-text`
- Draw from Left: Add class `.ud-draw-left` to the button (e.g., `<button class="ud-play-btn ud-draw-left">`)
- Draw from Right: Add class `.ud-draw-right` to the button (e.g., `<button class="ud-play-btn ud-draw-right">`)

## 3. Why is it useful?
It provides a high-end, responsive, accessible, and lightweight media showcase component aligned with modern digital storefronts (such as Apple or premium fashion brands). By avoiding heavy external styling frameworks or excessive JavaScript libraries, it fits EaseMotion CSS's philosophy of lightweight, self-contained, and readable code architectures that prioritize performance, accessibility (screen readers and `prefers-reduced-motion` compliance), and smooth visual feedback.

---

### Author
[Antigravity](https://github.com/google-antigravity)
