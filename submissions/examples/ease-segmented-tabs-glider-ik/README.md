# EaseMotion CSS — Glassmorphic Nav Tabs Glider (`ease-segmented-tabs-glider-ik`)

Glassmorphic navigation tab bar component (`ease-nav-tabs`) featuring a smooth sliding active background glider (`tab-glider`), active text glow, and zero JavaScript.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a navigation tab bar component (`ease-nav-tabs`) that slides an active background highlight glider between tabs (`#tab-overview:checked ~ .tab-glider`) using pure CSS radio input selectors.

---

## 2. How is it used?

Include the tab bar radio input structure in your navigation layout:

```html
<nav class="ease-nav-tabs">
  <input type="radio" id="tab-overview" name="nav-tab" checked>
  <label for="tab-overview">Overview</label>

  <input type="radio" id="tab-analytics" name="nav-tab">
  <label for="tab-analytics">Analytics</label>

  <div class="tab-glider"></div>
</nav>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes lightweight, zero-JS navigation patterns. The Nav Tabs Glider component delivers smooth 60fps spring translation (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while preserving HTML radio input accessibility.
