# 🔐 Ease Animated Login/Signup Form with Tab Switch

A unified authentication component using high-performance CSS transforms to switch layouts and run floating text-label indicators.

## 🔥 Key Enhancements
- **CSS-Only Floated Labels:** Uses structural pseudo-selectors (`:not(:placeholder-shown)`) to drive clean field elevations without Javascript event overhead.
- **Spring-Injected Tab Tracking:** Utilizes cubic-bezier transformations to mimic tactile mechanical actions when shifting indicators across navigation tracks.
- **Masking Isolation Bounds:** Embeds precise label baseline backdrops to protect clean wire intersections on field outlines during tracking states.

## ⚙️ Structural Form Layout Blueprint

```html
<div class="ease-auth-form">
  <div class="ease-auth-form__tabs">
    <button class="ease-auth-form__tab active" data-tab="login">Login</button>
    <button class="ease-auth-form__tab" data-tab="signup">Sign Up</button>
    <div class="ease-auth-form__tab-indicator"></div>
  </div>
</div>