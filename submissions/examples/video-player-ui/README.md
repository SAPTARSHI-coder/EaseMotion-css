# Video Player UI

A dark-themed custom video player interface with animated play overlay, auto-hiding controls, and interactive progress bar.

## Description

Showcases EaseMotion's UI animation patterns in a video player context. The play button scales on hover, controls fade in when the container is hovered, and the progress track expands with a revealable scrub thumb.

## Usage

```html
<link rel="stylesheet" href="../../easemotion.css" />
<link rel="stylesheet" href="style.css" />

<div class="ease-video-player">
  <div class="ease-video-container">
    <div class="ease-video-preview">
      <svg class="ease-play-overlay">…</svg>
    </div>
    <div class="ease-controls">
      <div class="ease-video-progress">
        <div class="ease-progress-track">
          <div class="ease-progress-fill" style="width: 34%;"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Customization

- Override `--ease-accent` (currently `#7c5bfe`) to change progress bar and accent colors.
- Adjust the `opacity` transition duration on `.ease-controls` for faster/slower control reveal.
- Modify the `aspect-ratio` on `.ease-video-container` for non-16:9 layouts.

## Tech Stack

- EaseMotion CSS
- HTML5
- CSS3 (transitions, gradients, transforms)
