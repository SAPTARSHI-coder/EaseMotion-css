# Infinite Seamless CSS Marquee

## What does this do?

This submission creates a smooth, continuously looping CSS marquee for short text, logos, partner names, or technology labels, with pause-on-hover and pause-on-focus behavior.

## How is it used?

Use a marquee wrapper, a moving track, and two identical content groups. The second group is hidden from assistive technologies because it exists only to make the visual loop seamless.

```html
<div class="marquee-jp">
  <div class="marquee-track-jp">
    <div class="marquee-content-jp">
      <span class="marquee-item-jp">Item 1</span>
      <span class="marquee-item-jp">Item 2</span>
      <span class="marquee-item-jp">Item 3</span>
    </div>

    <div class="marquee-content-jp" aria-hidden="true">
      <span class="marquee-item-jp">Item 1</span>
      <span class="marquee-item-jp">Item 2</span>
      <span class="marquee-item-jp">Item 3</span>
    </div>
  </div>
</div>
```

The track moves by exactly half of its total duplicated width:

```css
.marquee-track-jp {
  display: flex;
  width: max-content;
  animation: marquee-scroll-jp 18s linear infinite;
  will-change: transform;
}

@keyframes marquee-scroll-jp {
  to {
    transform: translate3d(-50%, 0, 0);
  }
}

.marquee-jp:hover .marquee-track-jp,
.marquee-jp:focus-within .marquee-track-jp {
  animation-play-state: paused;
}
```

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Infinite tickers are common in landing pages, sponsor strips, product showcases, and announcement bands. This approach fits EaseMotion CSS because it provides expressive motion through readable, reusable CSS while remaining lightweight and dependency-free.

The implementation also:

- uses transform-based movement for smooth animation;
- pauses on hover and keyboard focus;
- hides duplicate visual content from assistive technologies;
- respects `prefers-reduced-motion`;
- works responsively without JavaScript.
