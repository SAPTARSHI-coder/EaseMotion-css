# ease-reveal

> Scroll-triggered entrance animations for EaseMotion CSS

## What it does

Reveals elements as they enter the viewport using IntersectionObserver
toggling an is-visible class. The CSS handles all animation — the JS
is a single copy-paste snippet, no libraries needed.

## Usage

    <div class="ease-reveal">Fades up on scroll</div>
    <div class="ease-reveal-left">Slides in from left</div>
    <div class="ease-reveal-right">Slides in from right</div>
    <div class="ease-reveal-zoom">Zooms in on scroll</div>

Add this JS snippet once to your page:

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(
      '.ease-reveal, .ease-reveal-left, .ease-reveal-right, .ease-reveal-zoom'
    ).forEach(el => observer.observe(el));

## Class Reference

| Class | Description |
|---|---|
| ease-reveal | Fade up on scroll (default) |
| ease-reveal-left | Slide in from left |
| ease-reveal-right | Slide in from right |
| ease-reveal-zoom | Zoom in on scroll |
| ease-reveal-delay-100 | 100ms transition delay |
| ease-reveal-delay-200 | 200ms transition delay |
| ease-reveal-delay-300 | 300ms transition delay |
| ease-reveal-delay-400 | 400ms transition delay |
| ease-reveal-delay-500 | 500ms transition delay |

## Staggered example

    <div class="ease-reveal ease-reveal-delay-100">First</div>
    <div class="ease-reveal ease-reveal-delay-200">Second</div>
    <div class="ease-reveal ease-reveal-delay-300">Third</div>

## CSS Variables used

| Token | Role |
|---|---|
| --ease-speed-slow | Transition duration |
| --ease-ease-out | Easing curve |

## Browser support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| IntersectionObserver | yes | yes | yes | yes |
| CSS transitions | yes | yes | yes | yes |
| CSS custom properties | yes | yes | yes | yes |

Submitted under MIT License · EaseMotion CSS · 2026
