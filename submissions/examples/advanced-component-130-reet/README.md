# Advanced Component 130 - Interactive Image Accordion Gallery

**What does this do?**  
This is a sleek, purely CSS-driven interactive image accordion gallery. It displays a series of vertical image strips. When a user hovers over an item, its `flex` basis expands elegantly using an advanced `cubic-bezier` transition, revealing hidden text content sliding up from the bottom.

**How is it used?**  

```html
<div class="ease-accordion-container">
    <div class="ease-accordion-item">
        <div class="ease-accordion-content">
            <h3 class="ease-accordion-title">Serenity</h3>
            <p class="ease-accordion-desc">Experience the calm of the mountains and the silence of the dawn.</p>
        </div>
    </div>
    <!-- Add more items as needed -->
</div>
```

**Why is it useful?**  
This gallery layout is extremely popular in modern web design for showcasing featured content, articles, or portfolios. By implementing it strictly through native CSS flexbox transitions and `hover` states, it completely avoids heavy JavaScript event listeners, aligning flawlessly with EaseMotion's zero-dependency philosophy.
