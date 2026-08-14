# Object Contain Utility

Introduces the media aspect-ratio resolution protection parameter utility token (`.ease-object-contain`) under issue #15106.

## Functional Mechanics

- **The Problem:** When loading user-generated imagery, product photos, brand partner logs, or external avatar assets into fixed-dimension layout slots, graphic proportions easily warp. If the width/height ratios of incoming files mismatch their destination containers, images squash or stretch, compromising professional UI quality.
- **The Solution:** Fluid proportion protection. The `.ease-object-contain` utility enforces browser-native scaling logic via `object-fit: contain`. The target image or video resizes to remain fully visible inside its parent container boundaries while strictly locking its native aspect ratio—introducing safe letterboxing or pillarboxing spaces inside dark or neutral bounding frames without modifying internal dimensions.

## Usage Layout Structure
```html
<div class="gallery-slot" style="width: 200px; height: 200px; background: #000;">
  <img src="user-upload.png" class="ease-object-contain" style="width: 100%; height: 100%;" />
</div>
```

Closes #15106
