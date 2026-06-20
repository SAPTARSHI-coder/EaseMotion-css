# Scroll-Driven Animation Utilities

**EaseMotion CSS** · `submissions/examples/scroll-driven-animation-utilities/`

Pure CSS scroll-driven animations using the native `animation-timeline` API.  
No JavaScript. No external libraries. No polyfills. No dependencies.

---

## What These Utilities Do

CSS Scroll-Driven Animations (the `animation-timeline` API) let you link any CSS
`@keyframes` animation directly to the user's scroll position — without a single
line of JavaScript. The browser's compositor thread handles the whole thing, which
means your animations stay silky smooth even when the main thread is busy.

This submission provides **three drop-in utilities** you can use on any project:

### 1. Scroll Progress Bar — `.em-scroll-progress`

A fixed bar at the top of the viewport that grows from left to right as the user
scrolls down the page. It uses `animation-timeline: scroll()`, which ties the
animation progress to the **document scroll position** — 0% at the top, 100% at
the bottom.

```css
animation-timeline: scroll();   /* tracks the root scroller */
```

**HTML usage:**

```html
<!-- Place anywhere; position: fixed keeps it at the top -->
<div class="em-scroll-progress" role="progressbar" aria-label="Page scroll progress"></div>
```

---

### 2. Scroll Fade Reveal — `.em-scroll-fade`

Any element with this class starts invisible and translates 32px up, then fades
fully into view as it enters the viewport. It uses `animation-timeline: view()`,
which ties the animation to the element's own **position relative to the viewport**.

```css
animation-timeline: view();             /* tracks this element in the viewport */
animation-range: entry 0% entry 40%;   /* plays as element enters, finishes at 40% */
```

**HTML usage:**

```html
<section class="em-scroll-fade">
  This section fades in as it scrolls into view.
</section>

<article class="em-scroll-fade">
  <h2>Cards, headings, paragraphs — anything works.</h2>
</article>
```

---

### 3. Scroll Scale Reveal — `.em-scroll-scale`

Elements animate from `scale(0.82)` to `scale(1)` with a subtle spring overshoot
(`cubic-bezier(0.34, 1.56, 0.64, 1)`). Like the fade utility, it uses
`animation-timeline: view()` so each element controls its own reveal timing
independently.

```css
animation-timeline: view();
animation-range: entry 0% entry 45%;
```

**HTML usage:**

```html
<div class="em-scroll-scale">
  This pops in from 82% to 100% scale.
</div>

<!-- Combine with fade for a richer effect -->
<article class="em-scroll-scale em-scroll-fade">
  Both animations run simultaneously.
</article>
```

---

## Installation

Copy `style.css` into your project and link it in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css" />
```

That's everything. No `npm install`, no build step, no configuration.

---

## How Developers Use These Utilities

Add a class. Scroll. Done.

```html
<!-- Progress bar: fixed, no extra setup needed -->
<div class="em-scroll-progress"></div>

<!-- Fade reveal: works on any block element -->
<h2 class="em-scroll-fade">Section heading</h2>
<p  class="em-scroll-fade">A paragraph beneath it.</p>

<!-- Scale reveal: great for cards and feature items -->
<article class="em-scroll-scale">...</article>

<!-- Mix utilities freely on different elements -->
<div class="em-cards-grid">
  <article class="em-scroll-fade">Card A</article>
  <article class="em-scroll-scale">Card B</article>
  <article class="em-scroll-fade">Card C</article>
</div>
```

### Customising with CSS Variables

The stylesheet is built on custom properties you can override:

```css
:root {
  /* Change progress bar color */
  --em-progress-color:  #your-brand-color;
  --em-progress-height: 4px;  /* thicker bar */
}
```

### Customising Animation Range

Override the range on specific elements for finer control:

```css
.hero-headline {
  animation-range: entry 0% entry 60%;  /* slower reveal */
}

.footer-cta {
  animation-range: entry 10% entry 50%; /* starts slightly later */
}
```

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 115+    | ✅ Full  |
| Edge    | 115+    | ✅ Full  |
| Opera   | 101+    | ✅ Full  |
| Firefox | Not yet | ⚠️ Fallback active |
| Safari  | Not yet | ⚠️ Fallback active |

**Global coverage: ~78%** as of mid-2025 (caniuse.com/css-scroll-driven-animations).

The `@supports not (animation-timeline: scroll())` fallback ensures all content
remains fully visible and functional in non-supporting browsers — animations are
purely progressive enhancement, never a requirement.

---

## Accessibility

All animations respect the user's motion preference setting:

```css
@media (prefers-reduced-motion: reduce) {
  .em-scroll-fade,
  .em-scroll-scale {
    animation: none;
    opacity: 1;
    translate: 0 0;
    scale: 1;
  }
}
```

**Key principle:** Elements are never hidden from users who have motion disabled.
The default state is always visible — animation is an enhancement layered on top,
not a prerequisite for seeing the content.

---

## Graceful Fallback

The fallback block in `style.css` handles browsers that do not yet support
`animation-timeline`:

```css
@supports not (animation-timeline: scroll()) {
  /* Progress bar: show as a static thin accent line */
  .em-scroll-progress {
    transform: scaleX(1);
    opacity: 0.35;
    animation: none;
  }

  /* Reveal elements: skip straight to visible state */
  .em-scroll-fade,
  .em-scroll-scale {
    opacity: 1;
    translate: 0 0;
    scale: 1;
    animation: none;
  }
}
```

No content is hidden. No layout shifts. Non-supporting browsers just see a
static, fully-rendered page.

---

## Why Scroll-Driven Animations Are Useful

### Before: JavaScript-based reveal

The traditional approach uses an `IntersectionObserver` to watch when elements
enter the viewport, then toggles CSS classes to trigger animations:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

This works, but it has real costs:

- **Main thread:** observer callbacks fire on the main thread, competing with
  rendering, layout, and other scripts.
- **Bundle size:** even a simple reveal library adds 3–15 KB.
- **Frame budget:** poorly timed callbacks can cause jank or missed frames.
- **Complexity:** initialization code, threshold tuning, cleanup on unmount.

### After: Native CSS scroll-driven

```css
.reveal {
  animation: fade-in ease-out both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
}
```

**Benefits:**

- **Off main thread.** Scroll-driven animations are resolved on the compositor —
  the same thread responsible for smooth scrolling itself. No JavaScript blocking.
- **Zero bundle cost.** A few CSS rules vs. kilobytes of runtime.
- **Declarative.** The relationship between scroll position and animation state
  is expressed in CSS, exactly where visual behaviour belongs.
- **Composable.** `animation-range` lets you fine-tune timing without
  threshold arrays or margin calculations.
- **Future-proof.** This is the platform's answer to scroll animation — designed
  for the web, not bolted on.

---

## File Structure

```
scroll-driven-animation-utilities/
├── demo.html    ← Full showcase demo (hero, features, stats, testimonials)
├── style.css    ← The utilities stylesheet (self-contained, no dependencies)
└── README.md    ← This file
```

---

## Design Tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--em-progress-height` | `3px` | Height of the scroll progress bar |
| `--em-progress-color` | `#6c63ff` | Base color (overridden by gradient in CSS) |
| `--em-accent` | `#6c63ff` | Primary accent color |
| `--em-accent-2` | `#9f7eff` | Secondary accent / gradient endpoint |

---

## Contributing

Contributions to the EaseMotion CSS library are welcome!  
See the main repository `CONTRIBUTING.md` for guidelines on:

- Code style (BEM-adjacent naming, CSS custom properties, zero external deps)
- Accessibility requirements (`prefers-reduced-motion` is mandatory)
- Browser support expectations (fallbacks for `@supports not`)
- README format (this file is the template)

---

## License

MIT · Open source · Free for commercial use.

Part of the [EaseMotion CSS](https://github.com/EaseMotion/easemotion-css) project.  
Submitted as part of **GSSoC 2026**.

---

## Further Reading

- [MDN: animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- [MDN: animation-range](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range)
- [web.dev: Scroll-driven Animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- [caniuse: CSS Scroll-Driven Animations](https://caniuse.com/css-scroll-driven-animations)