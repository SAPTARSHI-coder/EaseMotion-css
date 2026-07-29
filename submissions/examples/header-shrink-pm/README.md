# Sticky Header That Shrinks on Scroll

A sticky navigation header that smoothly transitions from large/tall to compact/small as the user scrolls down — a common parallax-style pattern for marketing sites, landing pages, and blogs.

## Features

- **`.ease-header-shrink`** — fixed-position header with large padding and prominent logo
- **`.ease-header-shrink.scrolled`** — compact padding, smaller logo, glassmorphism background
- **Smooth transitions** — 0.3s ease on padding, background, box-shadow, logo size, tagline opacity
- **Tagline fade-out** — the tagline collapses to zero height and fades out on scroll
- **requestAnimationFrame throttle** — performant scroll listener with passive event
- **Glassmorphism** — `backdrop-filter: blur(12px)` activates in the scrolled state

## Files

- `style.css` — styles for the shrink header and demo layout
- `demo.html` — working demo page
- `README.md` — this file

## Usage

```html
<header class="ease-header-shrink">
  <div class="ease-header-logo">
    <img src="logo.svg" alt="Logo">
    <div>
      <div class="logo-text">Brand</div>
      <div class="ease-header-tagline">Tagline</div>
    </div>
  </div>
  <nav>
    <ul>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</header>

<script>
  const header = document.querySelector('.ease-header-shrink');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
</script>
```
