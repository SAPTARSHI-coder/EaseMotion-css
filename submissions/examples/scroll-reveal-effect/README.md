# Scroll Reveal Left

A scroll-triggered "slide in from left" entrance animation. The element
stays hidden until it scrolls into view, then fades and slides in from
the left — unlike `ease-slide-up`, which animates immediately on page load.

## Usage

1. Include `style.css`.
2. Add the `card-reveal-left` class to any element:

```html
<article class="ease-card ease-card-shadow ease-card-hover card-reveal-left">
  ...
</article>
```

3. Add the IntersectionObserver script (see `demo.html`) so `.card-reveal-active` gets toggled on scroll.

## How it works

- `.card-reveal-left` starts the element at `opacity: 0` and `translateX(-40px)`.
- When the element enters the viewport, JS adds `.card-reveal-active`, transitioning it to full opacity and its natural position over 1.5s.
- Fires once per element per page load.

## Demo

Open `demo.html` and scroll down to see the card animate in.

## Customization

- Duration: change `1.5s` in `style.css`
- Distance: change `-40px`
- Trigger point: adjust `threshold` / `rootMargin` in the observer script