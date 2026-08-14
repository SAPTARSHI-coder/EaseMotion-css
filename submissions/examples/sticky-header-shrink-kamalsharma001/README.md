# Sticky Header Shrink on Scroll

## 1. What does this do?
A sticky header that reduces its height, padding, and logo size, and gains
a shadow, once the page is scrolled past a small threshold.

## 2. How is it used?
Add the `is-scrolled` class to your header element via a scroll listener:

```html
<header class="site-header" id="siteHeader">...</header>
<script>
  window.addEventListener('scroll', () => {
    document.getElementById('siteHeader')
      .classList.toggle('is-scrolled', window.scrollY > 40);
  });
</script>
```

## 3. Why is it useful?
It's a very common real-world navbar pattern (Stripe, Linear, etc.) that
wasn't covered by the existing navbar component. It ties motion directly
to scroll behavior, fitting EaseMotion CSS's animation-first philosophy,
and degrades gracefully — the header still works fine with no JS, just
without the shrink effect.