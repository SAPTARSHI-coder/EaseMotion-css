# skeleton — EaseMotion CSS

A shimmer-based loading skeleton animation built entirely in CSS.  
No JavaScript. No dependencies. Drop in one stylesheet and you're done.

---

## What does this do?

It turns any HTML element into a shimmering loading placeholder — the kind you see  
on LinkedIn profiles, GitHub feeds, YouTube thumbnails, and SaaS dashboards while  
content is still being fetched.

The effect works by sweeping a bright gradient stripe left-to-right across a muted  
grey block, giving users a sense of progress without a spinner or blank screen.  
Everything runs on a single CSS keyframe animation attached to a `::after`  
pseudo-element, so the shimmer never interferes with the element's own styling.

---

## How is it used?

**1. Add the stylesheet**

```html
<link rel="stylesheet" href="style.css" />
```

**2. Add the `skeleton` class to any block element**

```html
<!-- A simple text line -->
<div class="skeleton" style="height: 14px; width: 200px;"></div>

<!-- A circular avatar -->
<div class="skeleton skeleton--circle" style="width: 48px; height: 48px;"></div>

<!-- A pill-shaped button stub -->
<div class="skeleton skeleton--pill" style="height: 36px; width: 100px;"></div>
```

**3. Combine with shape and timing modifiers**

| Modifier           | Effect                                |
|--------------------|---------------------------------------|
| `skeleton--circle` | Rounds the element to a full circle   |
| `skeleton--pill`   | Fully rounded ends (badges, buttons)  |
| `skeleton--rounded`| Larger corner radius                  |
| `skeleton--square` | No border radius                      |
| `skeleton--slow`   | Slower shimmer (2.4 s)                |
| `skeleton--fast`   | Faster shimmer (0.9 s)                |
| `skeleton--d1` … `skeleton--d5` | Stagger delays (0.1–0.5 s) |

**4. Stagger multiple skeletons for a more natural feel**

```html
<div class="skeleton"       style="height:14px;"></div>
<div class="skeleton skeleton--d1" style="height:14px; width:88%;"></div>
<div class="skeleton skeleton--d2" style="height:14px; width:72%;"></div>
```

Staggering prevents all placeholders from flashing in unison, which reads  
more like organic content loading than a mechanical loop.

**5. Remove the class when real content arrives**

The skeleton state is purely additive — just remove `skeleton` (and any  
modifier classes) once your data is ready and the real content will appear  
with no leftover styles.

---

## Why is it useful?

**Perceived performance** — Skeleton screens make an interface feel faster.  
Users see structure immediately rather than staring at a blank page, which  
reduces perceived wait time even when the actual load time is unchanged.

**Context preservation** — Unlike a full-page spinner, skeleton layouts mirror  
the shape of the incoming content. A user already knows roughly where the  
avatar, headline, and body text will land before a single byte of data arrives.

**Zero overhead** — The entire animation is a single CSS file with no runtime  
cost. There is no JavaScript to parse, no third-party bundle to load, and no  
additional network requests beyond the stylesheet itself.

**Accessible by default** — The animation automatically stops for users who  
have enabled `prefers-reduced-motion` in their OS settings. The placeholder  
blocks remain visible; they just don't move.

**Themeable** — Colors, speed, and gradient angle are all CSS custom properties.  
Override them globally or per-component without touching the source file:

```css
/* Cooler, more subtle tone for a dark sidebar */
.sidebar .skeleton {
  --sk-base:     #1e2128;
  --sk-shine:    #2a2e38;
  --sk-duration: 2s;
}
```

---

## Files

| File        | Purpose                                              |
|-------------|------------------------------------------------------|
| `style.css` | The skeleton animation library (drop-in stylesheet)  |
| `demo.html` | Live demo — profile cards, article feed, dashboard   |
| `README.md` | This file                                            |

---

## Browser support

Works in every browser that supports CSS custom properties and `animation`  
(Chrome 49+, Firefox 44+, Safari 10+, Edge 16+). No prefixes needed.

---

## License

MIT — free to use in personal and commercial projects.