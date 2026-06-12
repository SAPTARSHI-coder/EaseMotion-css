# hover-color-shift

> **EaseMotion CSS** · Animation Module

A pure CSS gradient transition system that smoothly shifts between multiple
gradient colors on hover — with zero JavaScript and zero flicker.

Works out of the box on **buttons**, **cards**, **banners**, and **links**.

---

## What does this do?

`hover-color-shift` adds a buttery-smooth color transition to any element
when the user hovers over it. The background gradient appears to _flow_ from
one set of colors to another — cool navy shifting to teal, charcoal blooming
to purple, or warm amber unfolding across a banner.

**Why is this hard to do with plain CSS?**

CSS cannot directly animate `background-image` values (gradients included).
If you try to `transition: background-image`, nothing happens — the browser
snaps between states with no interpolation.

**How does this solve it?**

The module uses a **pseudo-element opacity cross-fade** technique:

1. The element's `::before` pseudo-element is stacked on top of the
   background, filling the exact same shape.
2. At rest, `::before` is `opacity: 0` — invisible.
3. On `:hover`, `::before` fades to `opacity: 1` — revealing the
   "destination" gradient beneath.
4. Because `opacity` _can_ be transitioned smoothly, the gradient
   appears to shift — with full control over duration and easing.

The result looks like a direct gradient animation but uses only
properties the browser can interpolate efficiently.

---

## How is it used?

### 1. Add the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Apply a class

#### Primary button

```html
<button class="color-shift-btn">
  <span>Get Started</span>
</button>
```

#### Secondary button

```html
<button class="color-shift-btn color-shift-btn--secondary">
  <span>Learn More</span>
</button>
```

#### Card

```html
<article class="gradient-shift">
  <h3 class="gradient-shift__title">Card Title</h3>
  <p class="gradient-shift__body">Card description here.</p>
  <p class="gradient-shift__cta">Read more →</p>
</article>
```

#### Banner

```html
<div class="hover-color-shift--banner">
  <div class="banner-content">
    <div>
      <h2 class="banner-headline">Your headline here</h2>
      <p class="banner-sub">Supporting text for the banner.</p>
    </div>
    <a href="#" class="btn-outline">Call to Action</a>
  </div>
</div>
```

#### Animated link

```html
<a href="#" class="hover-color-shift--link">Documentation</a>
```

### 3. Customise with CSS variables

All colors, timing, and curves are CSS custom properties — override
them in `:root` to rebrand the entire system instantly:

```css
:root {
  /* Gradient color stops */
  --hcs-from: #7c3aed; /* Start color  */
  --hcs-mid: #db2777; /* Middle color */
  --hcs-to: #ea580c; /* End color    */

  /* Transition speed and curve */
  --hcs-duration: 0.55s;
  --hcs-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

You can also scope overrides to a single component:

```css
.my-special-card {
  --hcs-from: #064e3b;
  --hcs-to: #065f46;
}
```

---

## Class reference

| Class                        | Element              | Description                           |
| ---------------------------- | -------------------- | ------------------------------------- |
| `color-shift-btn`            | `<button>`, `<a>`    | Primary gradient button               |
| `color-shift-btn--secondary` | modifier             | Dark/purple secondary palette         |
| `gradient-shift`             | `<article>`, `<div>` | Card with shifting top-accent stripe  |
| `hover-color-shift--banner`  | `<div>`              | Full-surface banner gradient shift    |
| `hover-color-shift--link`    | `<a>`                | Expanding gradient underline          |
| `hover-color-shift`          | any                  | Base class for custom implementations |

---

## Why is it useful?

**For developers:**

- No JavaScript — works in environments with strict CSPs or no JS bundles.
- Fully declarative — no event listeners, no state, no lifecycle hooks.
- Performance-friendly — only `opacity` and `transform` are animated
  (both GPU-composited), so the browser never triggers layout or paint.
- SSR/static-site safe — renders correctly before any client-side code runs.

**For designers:**

- Smooth, professional hover feel that elevates perceived quality.
- Easy to customise to any brand palette without touching source files.
- Subtle enough not to distract, impactful enough to be noticed.

**For teams:**

- Self-contained — copy one stylesheet and it works anywhere.
- Well-commented source makes it easy to understand and extend.
- MIT licensed — use freely in commercial and personal projects.

---

## Browser support

Works in all modern browsers that support CSS custom properties and
`::before` pseudo-elements — which is effectively everything from
Chrome 49+, Firefox 44+, Safari 9.1+, and Edge 16+.

---

## Accessibility

- The animation respects `prefers-reduced-motion` — add the following
  override to your project to disable transitions for users who prefer it:

  ```css
  @media (prefers-reduced-motion: reduce) {
    .color-shift-btn,
    .color-shift-btn::before,
    .gradient-shift::after,
    .hover-color-shift--banner::before,
    .hover-color-shift--link::after {
      transition: none;
    }
  }
  ```

- All interactive elements use semantic HTML (`<button>`, `<a>`, `<article>`).
- Color contrast ratios meet WCAG AA on the default palette.

---

## File structure

```
hover-color-shift/
├── style.css       ← The animation library (import this)
├── demo.html       ← Interactive demo of all components
└── README.md       ← You are here
```

---

## Contributing

This module is part of the
[EaseMotion CSS](https://github.com/easemotion/easemotion-css) open-source
animation library. Contributions welcome — please read `CONTRIBUTING.md`
before opening a pull request.

---

## License

MIT © EaseMotion CSS Contributors
