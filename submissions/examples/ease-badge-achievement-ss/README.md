# Badge Achievement Component

## Abstract

The **Badge Achievement** component (`ease-badge-achievement`) is an interactive, highly polished gamification element built for modern web interfaces. It combines cubic-bezier pop-in entry keyframes with a shimmering star sheen effect and customizable ribbons, designed to reward user achievements in web applications with tactile visual feedback.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a gamified "Badge Achievement" play component featuring a spring-physics pop-in animation, a dual-layer shimmering star highlight, and an anchored ribbon banner.

### 2. How is it used?
Drop the `.ease-badge-achievement` HTML structure into celebratory modals, gamification profiles, or reward screens. Use the provided JavaScript trigger or class toggle to re-play the animation on demand.

```html
<div class="ease-badge-achievement" id="achievement-badge" role="img" aria-label="Gold Star Achievement Badge">
  <span class="ease-badge-star" aria-hidden="true">★</span>
  <div class="ease-badge-ribbon">Level 5</div>
</div>
```

### 3. Why is it useful?
Enhances user engagement and dopamine feedback loops in modern web applications without requiring heavy JavaScript canvas or lottie animation libraries.

## Animation Architecture

- **`easePopIn` Keyframes**: Employs a custom spring physics timing function (`cubic-bezier(0.34, 1.56, 0.64, 1)`) that creates an initial scale-up overshoot and slight rotation settle.
- **`easeShimmer` Keyframes**: Uses a pseudo-element (`::after`) with a 60-degree linear gradient sweep across the central star symbol to produce a recurring metallic light reflection.
- **Replay Mechanism**: Toggling `.is-animating` combined with a forced DOM reflow (`void badge.offsetWidth`) enables instant, reliable animation replays.

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--badge-bg-primary` | `#f59e0b` | Gradient start color for badge body |
| `--badge-bg-secondary` | `#b45309` | Gradient end color for badge body |
| `--badge-gold-light` | `#fef3c7` | Highlight color accents |
| `--badge-ribbon` | `#ef4444` | Gradient start color for ribbon banner |
| `--badge-ribbon-dark` | `#b91c1c` | Gradient end color for ribbon banner |
| `--badge-text` | `#ffffff` | Primary text color |
| `--badge-shadow` | `rgba(245, 158, 11, 0.4)` | Glow & elevation shadow |
| `--badge-radius` | `50%` | Badge outer corner radius |
