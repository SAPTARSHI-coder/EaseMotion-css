# Ease Embed Zd

## What does this do?
A responsive media embed container component with multiple aspect ratios (16:9, 4:3, 1:1), hover overlay with animated play button, staggered entrance animations, content badges, and grid layout — built with pure HTML and CSS.

## How is it used?
```html
<!-- Video embed (16:9) -->
<div class="emb-item">
  <div class="emb-media emb-16x9">
    <div class="emb-placeholder">▶</div>
    <div class="emb-overlay">
      <div class="emb-play-btn">▶</div>
    </div>
  </div>
  <div class="emb-body">
    <div class="emb-title">Getting Started Guide</div>
    <div class="emb-meta">12:34 · 4.2K views</div>
    <span class="emb-badge emb-badge-video">Video</span>
  </div>
</div>
```

Aspect ratios: emb-16x9, emb-4x3, emb-1x1
Badges: emb-badge-video, emb-badge-map, emb-badge-podcast, emb-badge-doc

## Why is it useful?
Responsive embed containers are essential for video tutorials, interactive maps, podcasts, and document previews in dashboards, landing pages, and documentation sites. This component provides a clean, reusable pattern with consistent aspect ratios, hover overlays, animated play buttons, and content metadata — all pure CSS with prefers-reduced-motion support.
