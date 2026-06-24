# ease-marquee

An infinite scrolling ticker/marquee utility for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

Creates a seamless horizontal scroll loop using CSS `translateX` animation. Perfect for logo strips, announcement banners, news tickers, and brand carousels. Zero JavaScript.

---

## Usage

### HTML Structure

```html
<div class="ease-marquee ease-marquee-pause">
  <div class="ease-marquee-track">
    <span>React</span>
    <span>Vue</span>
    <span>Angular</span>
    <span>Svelte</span>
    <span>Next.js</span>
    <!-- Duplicate all items for a seamless loop -->
    <span>React</span>
    <span>Vue</span>
    <span>Angular</span>
    <span>Svelte</span>
    <span>Next.js</span>
  </div>
</div>
```

> ⚠️ **Duplicate your items** inside `.ease-marquee-track`. The animation scrolls by `-50%`, so two identical sets create a seamless infinite loop.

### Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

---

## Available Classes

| Class | Effect |
|---|---|
| `.ease-marquee` | Outer container — masks overflow and sets fade edges (required) |
| `.ease-marquee-track` | The scrolling inner row (required) |
| `.ease-marquee-right` | Scrolls right instead of left |
| `.ease-marquee-slow` | 30s loop duration |
| `.ease-marquee-fast` | 8s loop duration |
| `.ease-marquee-pause` | Pauses scroll on hover |

---

## How It Works

```css
/* Keyframe moves the track left by 50% of its own width */
@keyframes ease-marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Outer container clips overflow and adds soft fade edges */
.ease-marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

/* Track animates infinitely */
.ease-marquee-track {
  display: inline-flex;
  gap: 2.5rem;
  animation: ease-marquee-scroll 15s linear infinite;
}

/* Pause on hover */
.ease-marquee-pause:hover .ease-marquee-track {
  animation-play-state: paused;
}
```

---

## CSS Custom Properties (Theming)

```css
:root {
  --ease-marquee-duration:       15s;
  --ease-marquee-duration-slow:  30s;
  --ease-marquee-duration-fast:  8s;
  --ease-marquee-gap:            2.5rem;
}
```

Override per instance:

```html
<div class="ease-marquee" style="--ease-marquee-duration: 20s; --ease-marquee-gap: 4rem;">
```

---

## Features

- ✅ Zero JavaScript — pure CSS only
- ✅ Seamless infinite loop via duplicated items + `-50%` translateX
- ✅ Left and right scroll directions
- ✅ 3 speed variants (slow, default, fast)
- ✅ Pause on hover
- ✅ Soft fade edges via CSS `mask-image`
- ✅ `prefers-reduced-motion` — stops animation, wraps items statically
- ✅ Themeable via CSS custom properties

---

## Use Cases

- Logo / brand carousels
- Tech stack strips
- Announcement banners
- News tickers
- Feature highlight ribbons

---

## File Structure

```
marquee/
├── style.css     # Component styles
├── demo.html     # Interactive demo page
└── README.md     # This file
```

---

## Closes

Resolves issue [#2718](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2718)

---

## Author

Contributed as part of **Google Summer of Code 2026**