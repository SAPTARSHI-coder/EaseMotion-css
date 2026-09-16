# Glassmorphic Sticky Navbar

A fixed, center-aligned navigation bar with a glassmorphism background
blur — stays pinned to the top of the viewport on scroll instead of
scrolling away with the page.

## Usage

1. Include `style.css`.
2. Build the markup:

```html
<nav class="ease-navbar-glass">
  <div class="ease-navbar-glass-inner">
    <a href="#" class="ease-navbar-glass-logo">Brand</a>
    <ul class="ease-navbar-glass-links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
  </div>
</nav>
```

3. Add `padding-top` to `<body>` matching the navbar's height so fixed
   positioning doesn't overlap your page content (already included in
   `style.css`).

## How it works

- `position: fixed` + `top: 0` keeps the navbar pinned during scroll.
- `backdrop-filter: blur(16px)` on a semi-transparent background
  creates the glassmorphism effect.
- Nav links are centered as a group using `justify-content: center` on
  a flex container, with the logo pulled out via `position: absolute`
  so it doesn't affect the centering of the links.
- `.active` and `:hover` states share the same pill-shaped highlight
  for consistency.
- On small screens (`max-width: 640px`), the layout switches to
  `justify-content: space-between` (logo left, links right) since
  absolute-positioning the logo doesn't scale well on narrow viewports.

## Demo

Open `demo.html` and scroll — the navbar stays fixed to the top with
its blur and centered links intact at any scroll position.

## Customization

- Blur amount: change `16px` in `backdrop-filter`
- Background opacity: change `0.55` in the `rgba()` background value
- Link highlight color: change the `rgba(108, 99, 255, ...)` values