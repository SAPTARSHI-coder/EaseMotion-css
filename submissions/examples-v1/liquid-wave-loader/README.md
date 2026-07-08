# Liquid Wave Progress Loader

## What does this do?
A premium, responsive, pure CSS circular progress loader featuring dual-sloshing liquid wave overlays that move at staggered rotation speeds to simulate fluid physical dynamics.

## How is it used?
Add the markup to your project:

```html
<div class="loader-container">
    <div class="liquid-loader">
        <div class="wave-layer wave-back"></div>
        <div class="wave-layer wave-front"></div>
        <div class="loader-inner">
            <span class="percentage-text">68%</span>
            <span class="status-text">Synchronizing</span>
        </div>
    </div>
</div>
```

Ensure `style.css` is link-loaded to apply the circular clip containment masks, staggered keyframe rotations, and glassmorphic label panel configurations.

## Why is it useful?
It provides a high-end, premium visual indicator for content loading screens, sync screens, or dashboard data processing states. Because it relies entirely on hardware-accelerated CSS rotations on a simple layout hierarchy, it runs with peak efficiency (no JS thread locking) and supports graceful flattening under reduced motion media queries.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open [demo.html](file:///c:/Users/fawaz/.cursor/projects/EaseMotion-css/submissions/examples/liquid-wave-loader/demo.html) directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
