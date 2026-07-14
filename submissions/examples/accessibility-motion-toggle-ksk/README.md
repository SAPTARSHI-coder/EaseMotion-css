# Accessibility Manual Motion Toggle (`accessibility-motion-toggle-ksk`)

1. What does this do?  
Introduces the `.ease-reduced-motion` global override utility class that disables all EaseMotion animations, transitions, and transforms when applied to `<html>` or `<body>`. Also persists the user's preference via `localStorage`.

2. How is it used?

**CSS-only (passive)** — always respects OS system preference:
```css
@media (prefers-reduced-motion: reduce) { /* already in style.css */ }
```

**Manual JS toggle (active)** — developer-controlled:
```js
document.documentElement.classList.toggle('ease-reduced-motion');
localStorage.setItem('ease-reduced-motion-pref', isReduced);
```

**HTML structure:**
```html
<html class="ease-reduced-motion"> <!-- toggle this class -->
  <body>
    <button id="motion-toggle-btn">Enable Motion</button>
    <div class="ease-card ease-fade-in ease-hover-grow">...</div>
  </body>
</html>
```

3. Why is it useful?  
Meets WCAG 2.1 SC 2.3.3 by giving users manual control over motion — independent of OS-level preferences. Useful for automated UI testing, snapshot testing, and user settings panels.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #44506.*
