# Orbit File Uploader

An elegant, minimalist file upload component utilizing nested orbital trajectories and satellites to visually communicate drag-over, focus, and upload states.

## What does this do?

The Orbit File Uploader presents a distraction-free, accessible file dropzone enhanced by two rotating orbital rings with satellite nodes that dynamically accelerate, pulse, or pause to communicate interactivity and upload progress.

## How is it used?

```html
<div class="orbit-uploader-card-ag">
  <label
    for="file-input"
    class="orbit-uploader-dropzone-ag"
    tabindex="0"
    role="button"
  >
    <input
      type="file"
      id="file-input"
      class="orbit-uploader-input-ag"
      multiple
    />

    <div class="orbit-uploader-system-ag">
      <div class="orbit-uploader-ring-outer-ag">
        <span class="orbit-uploader-satellite-ag"></span>
      </div>
      <div class="orbit-uploader-ring-inner-ag">
        <span class="orbit-uploader-satellite-ag"></span>
      </div>
      <div class="orbit-uploader-badge-ag">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          width="22"
          height="22"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      </div>
      <div class="orbit-uploader-ripple-ag"></div>
    </div>

    <div class="orbit-uploader-text-area-ag">
      <h3 class="orbit-uploader-title-ag">Select files to upload</h3>
      <p class="orbit-uploader-description-ag">or drag and drop them here</p>
      <span class="orbit-uploader-hint-ag"
        >PDF, ZIP, DOCX, PNG, or JPG (max. 50MB)</span
      >
    </div>
  </label>
</div>
```

To set different interaction states programmatically or via form triggers, apply these utility classes to the dropzone element:

- `.drag-over`: Simulates dragging files over the dropzone.
- `.is-uploading`: Speeds up orbital rotations and pulses the central badge.
- `.is-success`: Pauses orbital rotation, changes indicator colors to green, and triggers a single outward success ripple.
- `.is-disabled`: Disables all pointer-events, freezes rotations, and shifts colors to grayscale muted values.

## Why is it useful?

It fits EaseMotion's philosophy by using motion as a functional indicator of system status (focus, hover, active upload, completion) rather than a simple visual decorator. It runs completely on GPU-friendly properties (`transform` and `opacity`) and gracefully scales down or pauses all animations for users with `prefers-reduced-motion` enabled.
