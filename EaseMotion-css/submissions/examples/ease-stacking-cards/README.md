# Sticky Stacking Cards

A highly requested scrolling interaction popular on modern marketing sites (like Stripe or Apple). As the user scrolls down the page, cards stick to the top of the viewport and visually stack on top of one another like a deck of cards.

### Usage
```html
<div class="ease-stack-container">
    <div class="ease-stack-card card-1">
        <div class="card-inner">Card 1 Content</div>
    </div>
    <div class="ease-stack-card card-2">
        <div class="card-inner">Card 2 Content</div>
    </div>
</div>
```

### Why is it useful?
Historically, creating this "deck of cards" scroll effect required heavy scroll-jacking JavaScript libraries (like GSAP's ScrollTrigger). This component implements the effect natively and responsively using pure CSS `position: sticky` and calculated incremental `top` offsets. It is perfectly smooth, hardware-accelerated, and completely accessible as it doesn't hijack the native browser scrollbar.
