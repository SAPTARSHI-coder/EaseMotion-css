# Floating Tab Bar with Pastel Styling (#91047) - Example Guide (#79800)

Comprehensive guide, copy-paste markup examples, and accessibility notes for the EaseMotion **Floating Tab Bar with Pastel Styling** component (`#91047`), fully addressing issue `#79800`.

## 🚀 Overview & Features

- **Soft Pastel Aesthetics:** Delicate lavender and purple tones (`#f5f3ff`, `#7c3aed`) with glassmorphism backdrop blur.
- **Fully Responsive:** Fluidly adapts to smaller screens by hiding text labels on mobile viewports (`max-width: 480px`).
- **Accessibility Setup:** Keyboard focus states (`:focus-visible`), aria labels, and `@media (prefers-reduced-motion: reduce)` support.

## 🛠️ HTML Markup Example

```html
<nav class="ease-floating-tab-bar" aria-label="Floating Navigation Menu" tabindex="0">
    <button class="em-tab-item active" aria-label="Home Tab">
        <span class="em-tab-icon">🏠</span>
        <span class="em-tab-label">Home</span>
    </button>
    <button class="em-tab-item" aria-label="Explore Tab">
        <span class="em-tab-icon">✨</span>
        <span class="em-tab-label">Explore</span>
    </button>
    <button class="em-tab-item" aria-label="Notifications Tab">
        <span class="em-tab-icon">🔔</span>
        <span class="em-tab-label">Alerts</span>
    </button>
    <button class="em-tab-item" aria-label="Profile Tab">
        <span class="em-tab-icon">👤</span>
        <span class="em-tab-label">Profile</span>
    </button>
</nav>
