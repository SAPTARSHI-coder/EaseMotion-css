# Scroll-Triggered Animations with IntersectionObserver

Entrance animations (fade-in, slide-up, etc.) triggered when elements scroll into view — using a lightweight IntersectionObserver utility.

## Structure

```
scroll-trigger/
├── demo.html    — demo page with 5 sections of scroll-revealed cards
├── style.css    — .scroll / .visible base classes + stagger helpers
├── script.js    — EaseMotionScroll IntersectionObserver (~600B gzipped)
└── README.md
```

## CSS Foundation

```css
.scroll {
  opacity: 0;
  animation-play-state: paused;
}

.visible {
  animation-play-state: running;
  opacity: 1;
}
```

Combine with any existing entrance class:

```html
<div class="scroll ease-fade-in">Reveal on scroll</div>
<div class="scroll ease-slide-up delay-2">Staggered</div>
```

## JavaScript Utility

`EaseMotionScroll` auto-detects `.scroll` elements and adds `.visible` when they enter the viewport.

### Configuration via data attributes

| Attribute              | Default | Description                           |
|------------------------|---------|---------------------------------------|
| `data-ease-threshold`  | `0.2`   | Intersection ratio to trigger (0–1)   |
| `data-ease-once`       | `true`  | Set `"false"` to replay on re-enter   |

### Usage

```html
<script src="easemotion-scroll.js"></script>

<!-- Trigger once at 20% visibility -->
<div class="scroll ease-fade-in">Hello</div>

<!-- Re-trigger each time at 50% visibility -->
<div class="scroll ease-slide-up" data-ease-once="false" data-ease-threshold="0.5">World</div>
```

### Programmatic re-init

```js
EaseMotionScroll.init();          // scan entire document
EaseMotionScroll.init(container); // scan a specific container
```

## Features
- **~600B gzipped** — minimal footprint
- **Works with existing entrance classes** — `ease-fade-in`, `ease-slide-up`, `ease-slide-in-left`, `ease-zoom-in`, etc.
- **Stagger support** — pair `.scroll` with `ease-delay-*` or custom `delay-*` classes
- **Zero config required** — just add `class="scroll ease-fade-in"`
- **Reduced motion** — respects `prefers-reduced-motion: reduce` (no JS runs, elements visible immediately)
- **Cross-browser** — Chrome, Firefox, Safari, Edge
