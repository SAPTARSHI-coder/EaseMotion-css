# Infinite Marquee Animation (`ease-marquee`)

A smooth, continuously scrolling horizontal animation (marquee). This effect is widely used on modern landing pages to display a never-ending strip of client logos, testimonials, or product features.

**What does this do?**
Provides utility classes `.ease-marquee-wrapper`, `.ease-marquee-track`, and `.ease-marquee-content` to create a seamless looping animation.

**How is it used?**
```html
<div class="ease-marquee-wrapper">
  <div class="ease-marquee-track">
    <!-- Original set -->
    <div class="ease-marquee-content">
      <span>Logo 1</span>
      <span>Logo 2</span>
      <span>Logo 3</span>
    </div>
    <!-- Duplicated set (required for seamless loop) -->
    <div class="ease-marquee-content" aria-hidden="true">
      <span>Logo 1</span>
      <span>Logo 2</span>
      <span>Logo 3</span>
    </div>
  </div>
</div>
```

**Why is it useful?**
- **Highly Requested**: It is an absolute staple of modern SaaS and agency web design.
- **Pure CSS**: Achieves seamless looping without relying on JavaScript interval timers.
- **Accessible**: Pauses natively on hover and respects user OS motion settings.
