# ease-scroll-reveal

## 1. What does this do?

A complete scroll-triggered reveal utility that animates elements as they enter the viewport — providing 10+ reveal variants (directional, zoom, flip, blur, rotate), configurable speed and distance, automatic stagger support, and a pure-CSS path using modern `animation-timeline: view()` with a tiny IntersectionObserver fallback for older browsers.

## 2. How is it used?

Add `.ease-scroll-reveal` plus a variant class to any element. Include the small fallback script once in your page.

```html
<!-- Basic directional reveals -->
<div class="ease-scroll-reveal ease-reveal-up">Slides up</div>
<div class="ease-scroll-reveal ease-reveal-left">Slides in from right</div>
<div class="ease-scroll-reveal ease-reveal-zoom-in">Scales up</div>
<div class="ease-scroll-reveal ease-reveal-flip-x">Flips on X axis</div>
<div class="ease-scroll-reveal ease-reveal-blur">Blurs into focus</div>

<!-- Speed + distance modifiers -->
<div class="ease-scroll-reveal ease-reveal-up ease-slow ease-distance-lg">
  Slow, long-distance reveal
</div>

<!-- Auto-stagger children -->
<div class="stagger-parent">
  <div class="ease-scroll-reveal ease-reveal-up">Item 1</div>
  <div class="ease-scroll-reveal ease-reveal-up">Item 2 (+100ms)</div>
  <div class="ease-scroll-reveal ease-reveal-up">Item 3 (+200ms)</div>
</div>

<!-- Tiny ~9-line fallback (only runs if browser lacks animation-timeline) -->
<script>
  if (!CSS.supports('animation-timeline: view()')) {
    const threshold = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--ease-reveal-threshold')
    ) || 0.1;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('ease-revealed'));
    }, { threshold });
    document.querySelectorAll('.ease-scroll-reveal').forEach(el => io.observe(el));
  }
</script>
```

### Class Reference

| Class                      | Purpose                                                  |
| -------------------------- | -------------------------------------------------------- |
| `.ease-scroll-reveal`      | Base class — sets initial invisible state                |
| `.ease-revealed`           | Visible state (added by JS fallback automatically)       |
| `.ease-reveal-up`          | Slide up from below                                      |
| `.ease-reveal-down`        | Drop in from above                                       |
| `.ease-reveal-left`        | Slide in from the right                                  |
| `.ease-reveal-right`       | Slide in from the left                                   |
| `.ease-reveal-zoom-in`     | Scale up into place                                      |
| `.ease-reveal-zoom-out`    | Scale down into place                                    |
| `.ease-reveal-flip-x`      | 3D flip on the X axis                                    |
| `.ease-reveal-flip-y`      | 3D flip on the Y axis                                    |
| `.ease-reveal-rotate`      | Rotate + scale reveal                                    |
| `.ease-reveal-blur`        | Motion-blur sharpen-in                                   |
| `.ease-fast`               | 400 ms duration                                          |
| `.ease-slow`               | 1100 ms duration                                         |
| `.ease-distance-sm`        | Smaller travel distance (16 px)                          |
| `.ease-distance-lg`        | Larger travel distance (80 px)                           |
| `.stagger-parent`          | Auto-staggers child reveals by 100 ms each               |

### CSS Variables (Customization)

| Variable                      | Default                       | Purpose                       |
| ----------------------------- | ----------------------------- | ----------------------------- |
| `--ease-reveal-threshold`     | `0.1`                         | Visibility ratio that triggers reveal (JS fallback) |
| `--ease-reveal-duration`      | `700ms`                       | Reveal animation length        |
| `--ease-reveal-distance`      | `40px`                        | Travel distance for slides     |
| `--ease-reveal-easing`        | `cubic-bezier(0.22,1,0.36,1)` | Easing curve                   |

## 3. Why is it useful?

Scroll-triggered reveals are one of the most-requested modern web effects — used on landing pages, marketing sites, portfolios, and product showcases. This utility fits EaseMotion CSS's animation-first, human-readable philosophy by being:

- **Modern-CSS-first** — uses native `animation-timeline: view()` for zero-JS performance in Chrome/Edge 115+
- **Universal** — includes a tiny ~9-line IntersectionObserver fallback for Firefox / Safari / older browsers
- **Composable** — combine direction + speed + distance + stagger classes freely
- **Configurable** — every value exposed as a CSS variable (`--ease-reveal-*`)
- **Performant** — uses GPU-accelerated `transform`, `opacity`, and `filter`
- **Accessible** — fully respects `prefers-reduced-motion`
- **Drop-in ready** — one CSS file + one tiny script tag, no build step required

It fills a clear gap in EaseMotion CSS by providing a complete, production-ready reveal system that contributors and end-users can immediately use or extend.