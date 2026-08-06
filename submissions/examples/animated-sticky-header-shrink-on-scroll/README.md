# Sticky Header Shrink-on-Scroll

A sticky header that shrinks its padding and gains a shadow once the user scrolls past a threshold, then expands back at the top.

## What it does
A `scroll` listener toggles an `is-scrolled` class on the header once `window.scrollY` passes a threshold (40px by default). CSS transitions handle the smooth padding/shadow change — no layout jump.

## How to use it
Add `header-shrink` class and `data-header-shrink` attribute to your `<header>`, make it `position: sticky; top: 0;`, and include the scroll listener.

```html
<header class="site-header header-shrink" data-header-shrink>
  <span class="logo">EaseMotion</span>
</header>