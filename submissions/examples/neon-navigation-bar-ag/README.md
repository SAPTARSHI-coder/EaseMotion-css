# Neon Navigation Bar

A clinical, Medical Dashboard-inspired responsive navigation bar featuring a single shared sliding active indicator, pulsing status LED state, and a zero-JS checkbox hack for keyboard-accessible mobile views.

---

## 1. What does this do?

This component provides a clean, elegant navigation header designed for modern clinical dashboard user interfaces. It showcases links with a single shared neon indicator that stretches and slides smoothly between items on hover, an active state highlighting the current section with a soft upward ambient glow, a pulsing clinical system status LED, and a responsive drop-down menu that can be toggled on mobile and fully navigated via keyboard using 100% pure CSS.

## 2. How is it used?

Include the navigation bar in your page markup using semantic HTML elements with the shared indicator list item at the end of the menu structure:

```html
<nav class="neon-navbar-ag" aria-label="System Dashboard Navigation">
  <div class="nav-brand-ag">
    <span class="status-led-ag" aria-hidden="true"></span>
    <span class="brand-text-ag">AURA<span class="brand-sub-ag">_MED</span></span>
  </div>

  <input
    type="checkbox"
    id="nav-toggle-ag"
    class="nav-toggle-ag"
    aria-label="Toggle system menu"
  />

  <label for="nav-toggle-ag" class="hamburger-btn-ag" aria-hidden="true">
    <span class="hamburger-bar-ag"></span>
    <span class="hamburger-bar-ag"></span>
    <span class="hamburger-bar-ag"></span>
  </label>

  <ul class="nav-menu-ag" id="nav-menu-ag">
    <li>
      <a href="#dashboard" class="nav-link-ag">Dashboard</a>
    </li>
    <li>
      <a href="#patients" class="nav-link-ag">Patients</a>
    </li>
    <li>
      <a href="#telemetry" class="nav-link-ag active-ag" aria-current="page">Telemetry</a>
    </li>
    <li>
      <a href="#analytics" class="nav-link-ag">Analytics</a>
    </li>
    <li>
      <a href="#settings" class="nav-link-ag">Settings</a>
    </li>
    <li class="mobile-action-item-ag">
      <button type="button" class="action-btn-ag mobile-action-btn-ag">
        [ SYNC UPLINK ]
      </button>
    </li>
    <li class="nav-indicator-ag" aria-hidden="true"></li>
  </ul>

  <div class="nav-actions-ag">
    <button type="button" class="action-btn-ag">
      [ SYNC UPLINK ]
    </button>
  </div>
</nav>
```

## 3. Why is it useful?

It offers a high-fidelity navigation menu with smooth transitions and glowing state highlights built strictly in pure CSS, ensuring maximum performance, tree-shakeability, and zero script dependencies. It aligns with EaseMotion's accessibility philosophy by maintaining keyboard focusability for the mobile menu checkbox, providing clear high-contrast focus rings, using semantic markup, and respecting user system settings through automatic `prefers-reduced-motion` overrides.
