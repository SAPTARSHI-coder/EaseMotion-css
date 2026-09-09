# EaseMotion CSS — Infinite Marquee Ticker Component (`ease-marquee-ticker-ik`)

Continuous GPU-accelerated infinite scrolling marquee ticker (`ease-marquee-wrapper`) featuring gradient edge masking (`mask-image`), hover-pause accessibility, and zero JavaScript.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an infinite scrolling marquee ticker component (`ease-marquee-wrapper`) that smoothly loops content items across the screen with continuous linear keyframe translations (`ease-marquee-loop`).

---

## 2. How is it used?

Wrap duplicated item list items inside the marquee track container:

```html
<div class="ease-marquee-wrapper">
  <div class="ease-marquee-track">
    <div class="marquee-item">Feature Item 1</div>
    <div class="marquee-item">Feature Item 2</div>
    <!-- Duplicated items for infinite loop -->
    <div class="marquee-item">Feature Item 1</div>
    <div class="marquee-item">Feature Item 2</div>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes high-performance continuous motion. The Marquee Ticker component utilizes GPU compositor transform interpolation (`translateX(-50%)`) for 60fps scrolling while automatically pausing on hover and respecting `prefers-reduced-motion` settings.
