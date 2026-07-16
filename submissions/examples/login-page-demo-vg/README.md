# Interactive Responsive Login Page (-vg)

A responsive and accessible login page demo built with standard EaseMotion CSS keyframe animations, typography rules, layout tokens, and UI components.

## What does this do?

This demo provides a complete, production-ready, and responsive login interface showing how developers can combine various EaseMotion CSS animation utilities and interactive components (like form inputs, glassmorphic cards, custom toggle switches, and password strength indicators) to create a premium authentication experience.

## How is it used?

Open `demo.html` in any web browser. The code demonstrates the use of core framework animation and styling classes on a form layout:

- **Card Layout & Glassmorphic Card:**
  ```html
  <div
    class="ease-card ease-card-glass login-card ease-slide-up ease-duration-slow"
  ></div>
  ```
- **Staggered Form Field Entrances:**
  ```html
  <div class="ease-field ease-fade-in ease-slide-up ease-delay-100"></div>
  ```
- **Form Controls & Inputs:**
  ```html
  <input type="email" class="ease-input" autocomplete="username" required />
  ```
- **Custom Toggle Switch:**
  ```html
  <label class="ease-toggle ease-toggle-sm ease-toggle-primary">
    <input type="checkbox" />
    <span class="ease-toggle-track"
      ><span class="ease-toggle-thumb"></span
    ></span>
  </label>
  ```
- **Interactive Button:**
  ```html
  <button
    class="ease-btn ease-btn-primary ease-btn-block ease-btn-hover ease-squish-button"
  ></button>
  ```
- **Real-Time Password Strength Meter:**
  ```html
  <div class="ease-password-strength">
    <div class="ease-password-strength-bar is-weak"></div>
    <span class="ease-password-strength-text is-weak">Weak</span>
  </div>
  ```
- **Interactive Form Errors (Shake):**
  Applying `.ease-shake` to the card container on invalid submissions using JavaScript.

## Why is it useful?

It fits EaseMotion's philosophy by proving that high-end, responsive, and animated user interfaces can be constructed using pure CSS design tokens and pre-built components without relying on large JavaScript packages or layout frameworks. It also models web accessibility and autofill standards (using native fields, autocomplete tags, and custom states) which is key for a production-ready application layout.

---

### Labels

`enhancement`, `documentation`, `good first issue`, `CSS`
