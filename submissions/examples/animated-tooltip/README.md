# Animated Tooltip Component (Cyberpunk Styling)

A fully responsive, accessible, and high-performance pure CSS animated tooltip component featuring vibrant cyberpunk pink and yellow glowing aesthetics, frosted glassmorphism card styling, and smooth fade-in popup transitions for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS pseudo-classes (`:hover`), absolute positioning, and smooth opacity/transform transitions.
- **Cyberpunk Aesthetic:** Hot pink neon borders, glowing shadow drops, and yellow status headings tailored for modern dark mode UI layouts.
- **Fully Accessible:** Includes proper ARIA attributes (`role="tooltip"`, `aria-describedby`), keyboard focus states (`focus-within`), and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-tooltip-card" role="region" aria-label="Animated Tooltip Showcase" tabindex="0">
    <div class="em-tooltip-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">CyberMotion</span>
    </div>
    <h2 class="em-card-title">Animated Tooltip</h2>
    <p class="em-card-desc">A fully responsive cyberpunk tooltip component.</p>
    <div class="em-tooltip-wrapper">
        <div class="em-tooltip-container" tabindex="0">
            <button class="em-tooltip-trigger" aria-describedby="cyber-tooltip">HVER.SYS</button>
            <div id="cyber-tooltip" class="em-tooltip-box" role="tooltip">
                <span class="em-tooltip-title">SYSTEM STATUS</span>
                <p class="em-tooltip-text">Neural net connection active.</p>
            </div>
        </div>
    </div>
</header>
