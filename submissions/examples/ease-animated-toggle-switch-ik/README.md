# EaseMotion CSS — Animated Toggle Switch (`ease-animated-toggle-switch-ik`)

Tactile iOS-style toggle switch component (`ease-toggle-switch`) featuring spring thumb slider micro-animations (`transform: translateX(28px)`), glowing active track, and checkbox accessibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a toggle switch component (`ease-toggle-switch`) that slides an indicator thumb (`switch-thumb`) smoothly across a track with spring easing curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and glowing active highlights.

---

## 2. How is it used?

Include the toggle switch markup structure in your settings form:

```html
<label class="ease-toggle-switch">
  <input type="checkbox" checked>
  <span class="switch-track">
    <span class="switch-thumb"></span>
  </span>
</label>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes tactile form micro-interactions. The Animated Toggle Switch component delivers 60fps GPU compositor translation while preserving native HTML checkbox keyboard accessibility.
