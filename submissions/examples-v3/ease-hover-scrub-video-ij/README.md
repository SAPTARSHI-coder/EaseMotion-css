# hover-scrub-video (#36735)

Hover scrub video with frame preview. Move the cursor across the video to seek through frames in real time.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--video-width` | `320px` | Width of the video container |
| `--video-height` | `180px` | Height of the video container |
| `--scrubber-color` | `#48dbfb` | Color of the scrub progress bar |
| `--preview-bg` | `#111` | Background behind the video |

## Usage

```html
<div class="card" style="--scrubber-color: #f5576c;">
  <div class="video-container">
    <video src="video.mp4"></video>
    <div class="scrubber"><div class="scrubber-track"></div></div>
  </div>
</div>
```

JavaScript maps mouse X position to `video.currentTime` for frame-accurate scrubbing.
