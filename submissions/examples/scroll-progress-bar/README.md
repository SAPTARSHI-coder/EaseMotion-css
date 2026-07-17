# Scroll Progress Bar

1. **What does this do?**
   A thin bar fixed to the top of the page that fills horizontally as the user scrolls down, showing how far they are through the page.

2. **How is it used?**
   Add a fixed div and toggle its width via a scroll listener:
```html
   <div class="scroll-progress-bar" id="progress"></div>
```

3. **Why is it useful?**
   It gives readers a clear, glanceable sense of progress on long pages (articles, docs), fitting EaseMotion's animation-first, human-readable philosophy — the class name says exactly what it does.