# Documentation: Cyberpunk Team Profile Card (#594286)

Comprehensive integration guide, theming configuration, and usage documentation for the EaseMotion library's **Cyberpunk Team Profile Card** component (`#594286`), fully addressing documentation issue `#85812`.

## 🚀 Overview & Features

- **Cyberpunk Aesthetic:** Features edgy polygonal clip-paths, vibrant neon pink & cyan borders, and glowing multi-layered drop shadows.
- **Frosted Glassmorphism Styling:** Built with background blur (`backdrop-filter: blur(16px)`) and dark sci-fi gradients.
- **Accessibility:** Full support for keyboard focus states, aria attributes, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ HTML Markup Example

```html
<div class="ease-cyberpunk-card" aria-label="Cyberpunk Team Profile Card Element" tabindex="0">
    <div class="em-cyber-avatar-box">
        <span class="em-cyber-badge">NETRUNNER</span>
    </div>
    <h2 class="em-inner-title">V-01 // KIRA</h2>
    <p class="em-inner-text">Lead Neural Interface & Cryptography Architect</p>
</div>
