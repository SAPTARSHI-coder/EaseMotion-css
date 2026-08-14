# CSS-only Infinite Scrolling Marquee

### 1. What does this do?
A smooth, infinitely scrolling marquee component powered entirely by CSS keyframes. It uses a duplicate content technique and the `transform: translateX` property to seamlessly loop content horizontally (like a ticker tape or logo carousel) without any visual jumps. It also includes an edge fade mask and pauses on hover.

### 2. How is it used?
```html
<div class="marquee-wrapper">
  <div class="marquee">
    <div class="marquee-content">
      <span>BRAND ONE</span>
      <span>BRAND TWO</span>
    </div>
    <!-- Duplicate content for seamless loop -->
    <div class="marquee-content" aria-hidden="true">
      <span>BRAND ONE</span>
      <span>BRAND TWO</span>
    </div>
  </div>
</div>
```

### 3. Why is this useful?
Infinite marquees are incredibly popular in modern landing pages for displaying partner logos, tags, or feature callouts. Implementing a stutter-free, perfectly looping marquee in pure CSS provides immense value and fits perfectly into the EaseMotion CSS utility collection.
