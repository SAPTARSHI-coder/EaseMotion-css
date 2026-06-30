# Object-Fit & Object-Position Utilities

## 1. What does this do?

A pure-CSS utility set that demonstrates every `object-fit` and `object-position` value with side-by-side image and video comparisons, aspect-ratio variants, and an auto-cycling animated demo — making it easy to learn, copy, and reuse in any project.

## 2. How is it used?

Apply the utility classes directly to any `<img>` or `<video>` element inside a sized container.

```html
<!-- Object-fit examples -->
<div class="img-frame">
  <img class="fit-cover" src="photo.jpg" alt="Cover crop" />
</div>

<div class="img-frame">
  <img class="fit-contain" src="photo.jpg" alt="Fully visible" />
</div>

<!-- Combine fit + position -->
<div class="img-frame">
  <img class="fit-none pos-top-right" src="photo.jpg" alt="" />
</div>

<!-- Works on videos too -->
<div class="img-frame">
  <video class="fit-cover" autoplay muted loop src="clip.mp4"></video>
</div>

<!-- Aspect-ratio variants -->
<div class="img-frame aspect-square">
  <img class="fit-cover" src="avatar.jpg" alt="" />
</div>
```

### Class Reference

| Class                 | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `.fit-fill`           | `object-fit: fill` — stretches and may distort         |
| `.fit-contain`        | `object-fit: contain` — fully visible, may leave gaps  |
| `.fit-cover`          | `object-fit: cover` — fills and crops edges            |
| `.fit-none`           | `object-fit: none` — original size, ignores container  |
| `.fit-scale-down`     | `object-fit: scale-down` — smaller of none/contain     |
| `.pos-top-left`       | `object-position: top left`                            |
| `.pos-top`            | `object-position: top`                                 |
| `.pos-top-right`      | `object-position: top right`                           |
| `.pos-left`           | `object-position: left`                                |
| `.pos-center`         | `object-position: center` (default)                    |
| `.pos-right`          | `object-position: right`                               |
| `.pos-bottom-left`    | `object-position: bottom left`                         |
| `.pos-bottom`         | `object-position: bottom`                              |
| `.pos-bottom-right`   | `object-position: bottom right`                        |
| `.aspect-square`      | `aspect-ratio: 1 / 1` for avatars / thumbnails         |
| `.aspect-video`       | `aspect-ratio: 16 / 9` for banners / hero images       |
| `.aspect-portrait`    | `aspect-ratio: 3 / 4` for cards / posters              |

## 3. Why is it useful?

`object-fit` and `object-position` are essential for handling images and videos in modern responsive layouts — every gallery, card, hero banner, avatar, and media tile relies on them. This utility set fits EaseMotion CSS's philosophy by being:

- **Educational** — visualizes all 5 fit values and all 9 position anchors side by side using the same image
- **Pure CSS** — zero JavaScript, just utility classes you drop onto media elements
- **Universal** — works for both `<img>` and `<video>` elements
- **Composable** — combine `.fit-*` + `.pos-*` + `.aspect-*` to build any layout
- **Accessible** — includes a `prefers-reduced-motion` fallback for the animated cycle demo
- **Responsive** — grid layouts adapt gracefully from mobile to desktop
- **Theme-aware** — includes a CSS-only light/dark toggle using `:has()`

It fills a clear gap by providing a single, copy-paste reference for one of the most-used CSS image-layout patterns.