# Glassmorphic Password Strength Field with Staggered Validation Checks

## 1. What does this do?

An interactive, glassmorphic password input field that showcases password strength via a progressive color-coded gradient meter and dynamically validates password criteria (length, numeric digits, and special characters) using staggered slide-up checklist items on active focus.

## 2. How is it used?

Incorporate structural components like `glass-password-container`, `glass-input`, and the stagger transition classes (`ease-slide-up`, `ease-delay-100`, `ease-delay-200`, `ease-delay-300`) to construct a secure and animated password interface:

```html
<div class="glass-password-container">
  <label for="password">Enter Password</label>
  <div class="input-wrapper">
    <input
      type="password"
      id="password"
      placeholder="••••••••"
      class="glass-input"
    />
  </div>

  <!-- Strength Bar -->
  <div class="strength-bar-track">
    <div id="strength-fill" class="strength-bar-fill"></div>
  </div>

  <!-- Staggered checklist items (initially hidden, animate in on focus) -->
  <ul class="validation-list" id="validation-checks">
    <li class="check-item ease-slide-up ease-delay-100" data-rule="length">
      Min 8 characters
    </li>
    <li class="check-item ease-slide-up ease-delay-200" data-rule="number">
      At least 1 number
    </li>
    <li class="check-item ease-slide-up ease-delay-300" data-rule="symbol">
      At least 1 special char
    </li>
  </ul>
</div>
```

## 3. Why is it useful?

It fits seamlessly into EaseMotion CSS's core design system philosophy:

- **Human-readable**: Leverages readable utility definitions for custom animation rules.
- **Animation-first**: Enhances micro-interactions with smooth width and color transitions for strength score and staggered slide-in feedback elements.
- **Composable**: The container's premium glassmorphic styling can be embedded easily into checkout pages, authentication forms, or overlay panels without side-effects.
