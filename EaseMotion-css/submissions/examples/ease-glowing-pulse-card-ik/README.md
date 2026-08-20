# EaseMotion CSS — Glowing Pulse Border Card (`ease-glowing-pulse-card-ik`)

Interactive feature showcase card component (`ease-pulse-card`) featuring continuous conic-gradient glowing border rotation (`card-glow-bg`) and spring hover elevation.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a glowing feature showcase card component (`ease-pulse-card`) that renders a continuous rotating conic-gradient halo border (`ease-glow-spin`) with 3D spring lift hover dynamics (`translateY(-6px)`).

---

## 2. How is it used?

Include the glowing card structure in your showcase layout:

```html
<article class="ease-pulse-card" tabindex="0">
  <div class="card-glow-bg"></div>
  <div class="card-inner">
    <h2>Conic Gradient Glow</h2>
    <p>Card content goes here...</p>
  </div>
</article>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on vibrant, eye-catching visual presentation. The Glowing Pulse Border Card component delivers 60fps GPU compositor rotation while maintaining `prefers-reduced-motion` accessibility overrides.
