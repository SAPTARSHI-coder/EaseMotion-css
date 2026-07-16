# Scroll to Top Button

## What does this do?
A floating "Scroll to Top" button that stays hidden near the top of the page
and smoothly appears after the user scrolls down a specified distance.
When clicked, it smoothly scrolls the page back to the top.

## How is it used?

```html
<button class="scroll-top-btn" id="scrollTopBtn"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' });">
  ↑
</button>

<script>
  const btn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
</script>
```

## Why is it useful?
Improves navigation and user experience on long pages, documentation sites,
blogs, portfolios, and landing pages. The show/hide and hover transitions
are fully CSS-driven, aligning with EaseMotion CSS's animation-first philosophy.