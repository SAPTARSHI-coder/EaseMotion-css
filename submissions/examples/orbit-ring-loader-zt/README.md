# Orbit Ring Loader

1. What does this do?

Provides a polished, pure CSS loading indicator with a glowing central core and three independently rotating orbit rings. It is designed to fit modern SaaS and dashboard interfaces while keeping the presentation clean, responsive, and self-contained.

2. How is it used?

Include the markup and stylesheet from this folder. There are three variants:

Default Orbit Loader:

```html
<link rel="stylesheet" href="style.css">
<div class="orbit-loader">
  <div class="core"></div>
  <div class="ring ring-inner"></div>
  <div class="ring ring-mid"></div>
  <div class="ring ring-outer"></div>
</div>
```

Fast Orbit Loader:

```html
<link rel="stylesheet" href="style.css">
<div class="orbit-loader orbit-loader-fast">
  <div class="core"></div>
  <div class="ring ring-inner"></div>
  <div class="ring ring-mid"></div>
  <div class="ring ring-outer"></div>
</div>
```

Neon Orbit Loader:

```html
<link rel="stylesheet" href="style.css">
<div class="orbit-loader orbit-loader-neon">
  <div class="core"></div>
  <div class="ring ring-inner"></div>
  <div class="ring ring-mid"></div>
  <div class="ring ring-outer"></div>
</div>
```

Notes:
- Pure HTML + CSS — no JavaScript or images required.
- Works by opening `demo.html` directly in a browser.
- The component is responsive and uses transform-based animations for GPU acceleration.
- `prefers-reduced-motion` is supported.

3. Why is it useful?

- Creates an unmistakable, premium loader for dashboards and product experiences.
- Highlights loading states with a clean dark theme and polished motion.
- Fits EaseMotion CSS by delivering a reusable, self-contained visual component with no external dependencies.

Files in this folder:
- `demo.html` — demo preview.
- `style.css` — component styles.
- `README.md` — this documentation.
