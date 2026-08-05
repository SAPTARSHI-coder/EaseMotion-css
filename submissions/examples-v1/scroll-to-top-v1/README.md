# Scroll to Top

**What does this do?**
A fixed scroll-to-top button that appears at the bottom-right corner and smoothly scrolls the page to the top when clicked.

**How is it used?**
```html
<button class="scroll-to-top" id="scrollBtn">↑ Top</button>
<script>
  document.getElementById('scrollBtn')
    .addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
</script>
```

**Why is it useful?**
Improves navigation on long-scrolling pages by giving users a quick way to return to the top without manual scrolling.
