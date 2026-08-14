# Animated Number Counter Component

## 1. What does this component do?

Provides CSS-native numeric stats counter animations (`.ease-counter-100`, `.ease-counter-500`, `.ease-counter-2500`, `.ease-counter-99`) powered by `@property --ease-count` and CSS `counter-reset` rules. Animates integers smoothly on viewport entrance or load without JS timer intervals.

## 2. How is it used?

```html
<!-- HTML Structure -->
<div class="stat-card">
  <div class="stat-number ease-counter-2500"></div>
  <div class="stat-label">Active Users</div>
</div>
```

## 3. Why does it fit EaseMotion CSS?

Utilizes the `@property --ease-count` variable token pattern to deliver GPU-accelerated integer counter animations, advancing CSS-first animation standards in EaseMotion.

## 4. Demo Instructions

Open `demo.html` in any web browser and click **↺ Replay Counter Animation** to test numeric counter keyframes.
