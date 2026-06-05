# Smooth Marquee

**What does this do?**
A seamless horizontal ticker loops duplicated content with a constant-speed CSS transform.

**How is it used?**

```html
<div class="marquee-frame" style="--ease-marquee-speed: 22s;">
  <div class="marquee-track">
    <div class="marquee-group">
      <span class="ticker-pill">Motion tokens</span>
      <span class="ticker-pill">Hover pause</span>
    </div>
    <div class="marquee-group" aria-hidden="true">
      <span class="ticker-pill">Motion tokens</span>
      <span class="ticker-pill">Hover pause</span>
    </div>
  </div>
</div>
```

**Why is it useful?**
Marquees are useful for release notes, logo rows, and compact announcement bands, but they often jump at the loop boundary. This submission keeps the pattern small and CSS-only so EaseMotion CSS can expose a polished ticker primitive with configurable speed and pause-on-hover behavior.
