# EaseMotion CSS — Radial Speedometer Dial Gauge (`ease-radial-dial-gauge-ik`)

Radial speedometer dial gauge component (`ease-dial-gauge`) featuring spring needle rotation transitions (`gauge-needle-wrapper`), SVG meter arc zones, and performance score badges.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a performance dial gauge component (`ease-dial-gauge`) that animates an SVG meter arc and central indicator needle (`rotate(68deg)`) with spring rotation dynamics.

---

## 2. How is it used?

Include the dial gauge SVG and needle structure in your dashboard layout:

```html
<div class="ease-dial-gauge">
  <svg class="gauge-svg" viewBox="0 0 200 120">
    <path class="gauge-track" d="M 20 100 A 80 80 0 0 1 180 100" />
    <path class="gauge-fill" d="M 20 100 A 80 80 0 0 1 180 100" />
  </svg>
  <div class="gauge-needle-wrapper needle-high">
    <div class="gauge-needle"></div>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports performance dashboard visualization. The Radial Speedometer Dial Gauge component delivers 60fps GPU compositor rotation while maintaining `prefers-reduced-motion` accessibility overrides.
