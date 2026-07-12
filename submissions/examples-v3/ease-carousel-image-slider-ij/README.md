# Carousel Image Slider

A simple image slider / carousel with prev/next buttons and dot indicators. Slides transition using CSS `translateX`. Auto-play starts on page load and pauses on hover.

## Features

- Smooth translateX slide transitions
- Dot indicators for direct slide navigation
- Auto-play (pauses on hover)
- Previous / next controls
- Accessible ARIA roles and labels
- Customisable via CSS custom properties

## Custom Properties

| Property               | Default           | Description                 |
| ---------------------- | ----------------- | --------------------------- |
| `--slider-duration`    | `0.4s`            | Slide transition duration   |
| `--slider-btn-bg`      | `rgba(0,0,0,0.55)`| Prev/next button background |
| `--slider-dot-color`   | `rgba(255,255,255,0.5)` | Inactive dot colour |
| `--slider-dot-active`  | `#fff`            | Active dot colour           |
| `--slider-bg`          | `#1a1a2e`         | Page background             |
