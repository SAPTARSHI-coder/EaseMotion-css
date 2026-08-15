# EaseMotion CSS — Multi-Step Progress Tracker (`ease-step-progress-tracker-ik`)

Multi-step wizard progress tracker component (`ease-step-tracker`) featuring active step pulse glow micro-animations (`step-active`), completed checkmark indicators, and gradient progress connecting lines.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a multi-step wizard progress tracker component (`ease-step-tracker`) that highlights active and completed workflow steps with spring scale animations (`transform: scale(1.15)`) and glowing indicators.

---

## 2. How is it used?

Include the step tracker markup inside your wizard form:

```html
<div class="ease-step-tracker">
  <div class="step-item step-completed">
    <div class="step-icon">✓</div>
    <span class="step-label">Step 1</span>
  </div>
  <div class="step-line step-line-active"></div>
  <div class="step-item step-active">
    <div class="step-icon">2</div>
    <span class="step-label">Step 2</span>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports multi-step user onboarding flows. The Step Progress Tracker component delivers 60fps GPU compositor scale interpolation while respecting `prefers-reduced-motion` settings.
