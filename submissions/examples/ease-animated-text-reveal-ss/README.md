# CSS Text Reveal Animation Collection (Issue #87410)

## Abstract
This submission introduces a highly performant, CSS-only text reveal animation collection providing four distinct entrance visual effects tailored for high-impact typography in hero sections, headers, and landing pages. Built with hardware-accelerated transforms, custom cubic-bezier timing curves, CSS variables, and high-contrast accessibility support.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a curated collection of 4 unique CSS-only text reveal animations (Slide Up Mask, Fade & Blur In, Clip-Path Polygon Wipe, and Staggered Word Slide).

### 2. How is it used?
Apply the `.ease-reveal-box` container class along with technique modifier classes (`anim-slide-up`, `anim-fade-blur`, `anim-clip-wipe`, or `anim-stagger`) to headings and hero titles.

```html
<!-- Slide Up Mask Example -->
<div class="ease-reveal-box anim-slide-up">
  <span class="ease-reveal-label">1. Slide Up Mask Reveal</span>
  <h2 class="ease-reveal-text"><span>Engineering the Future of Web Motion</span></h2>
</div>

<!-- Staggered Word Slide Example -->
<div class="ease-reveal-box anim-stagger">
  <span class="ease-reveal-label">4. Staggered Word Slide</span>
  <h2 class="ease-reveal-text">
    <span class="word" style="--i: 0;">Crafting</span>
    <span class="word" style="--i: 1;">Seamless</span>
  </h2>
</div>
```

### 3. Why is it useful?
Enhances landing page hero sections and typographic hierarchy with engaging, hardware-accelerated text entrances without relying on external JavaScript typing or scroll libraries.

## Reveal Techniques & Architecture

1. **Slide Up Mask (`.anim-slide-up`)**: Employs `overflow: hidden` on the container with `translateY(100%)` to `translateY(0)` transitions on inline text elements for a clean mask reveal.
2. **Fade & Blur In (`.anim-fade-blur`)**: Blends dynamic `opacity` keyframes with `filter: blur(10px)` back to `blur(0)` and subtle vertical movement.
3. **Clip-Path Polygon Wipe (`.anim-clip-wipe`)**: Uses CSS `clip-path: polygon(...)` to animate the bounding box clip area progressively from left to right.
4. **Staggered Word Slide (`.anim-stagger`)**: Calculates per-word animation delays dynamically via CSS custom property indices `calc(var(--i, 0) * 0.12s + 0.3s)`.

## Custom CSS Properties

The component relies on custom properties defined on `:root` for design system integration and theme overrides:

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--rev-bg` | `#030712` | Main page background color |
| `--rev-surface` | `#0f172a` | Stage outer container background |
| `--rev-card-bg` | `#1e293b` | Individual reveal box background |
| `--rev-border` | `rgba(255, 255, 255, 0.1)` | Surface stroke border color |
| `--rev-text` | `#f8fafc` | Primary typography color |
| `--rev-muted` | `#94a3b8` | Secondary typography & label color |
| `--rev-accent` | `#3b82f6` | Primary action accent color |
