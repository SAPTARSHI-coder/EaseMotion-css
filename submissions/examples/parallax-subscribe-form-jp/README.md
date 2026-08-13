# Parallax Subscribe Form

## What does this do?

This submission creates a responsive and accessible newsletter subscribe form with layered 3D parallax motion using only HTML and CSS.

## How is it used?

```html
<div class="card-jp ease-fade-in-jp ease-hover-lift-jp">
  <div class="grid-jp" aria-hidden="true"></div>

  <div class="content-jp">
    <h2>Useful ideas, delivered with less noise.</h2>

    <form class="form-jp">
      <label for="email">Email address</label>
      <div class="row-jp">
        <input id="email" type="email" required>
        <button class="ease-hover-grow-jp">Subscribe</button>
      </div>
    </form>
  </div>
</div>
```

Customize the motion with EaseMotion-style variables:

```css
:root {
  --ease-duration-jp: 700ms;
  --ease-fast-jp: 260ms;
  --ease-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-depth-jp: 58px;
  --ease-accent-jp: #7c6cff;
  --ease-accent-2-jp: #38d9c5;
}
```

Open `demo.html` directly in a browser. No JavaScript, server, CDN, or external framework is required.

## Why is it useful?

Subscribe forms are common on landing pages, dashboards, product sites, and blogs. This version adds visual depth without sacrificing accessibility.

It fits EaseMotion CSS because it uses reusable motion variables and keyframes, supports mouse and keyboard focus, provides semantic labels and visible focus states, adapts to mobile layouts, respects `prefers-reduced-motion`, and requires no JavaScript.
