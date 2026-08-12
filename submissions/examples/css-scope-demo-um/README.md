# CSS @scope Demo

## 1. What does this do?
This component demonstrates native style encapsulation and boundary isolation using the CSS `@scope` rule on card modules without any class collision or leaks.

## 2. How is it used?
Apply the corresponding scoping container class to encapsulate matching inner element styles:
```html
<!-- Encapsulated Profile Card Styles -->
<div class="card-content profile-card">
  <div class="avatar"></div>
  <h2 class="title">Sarah Connor</h2>
  <button class="action-btn">Connect Profile</button>
</div>

<!-- Encapsulated Cyberpunk Card Styles -->
<div class="card-content cyber-card">
  <div class="avatar"></div>
  <h2 class="title">NEO_DRAFT_01</h2>
  <button class="action-btn">Initialize Deck</button>
</div>
```

## 3. Why is it useful?
It provides a lightweight, browser-native alternative to styling frameworks (like CSS Modules or Tailwind CSS utility stacks) by localizing element style rules natively, reducing class name overhead and bundle sizes.
