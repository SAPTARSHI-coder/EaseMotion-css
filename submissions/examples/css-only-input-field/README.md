# CSS-only Input Field Component (Cyberpunk Styling)

A fully responsive, accessible, and high-performance pure CSS input field component featuring floating labels, cyberpunk pink/yellow neon glow states, and frosted glassmorphism card styling for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS states (`:focus`, `:not(:placeholder-shown)`) and smooth floating label animations.
- **Cyberpunk Aesthetic:** Aggressive neon pink borders and yellow floating labels tailored for modern dark mode UI layouts.
- **Fully Accessible:** Includes semantic input markup, clear label associations (`for` and `id`), keyboard focus outlines, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-input-card" role="region" aria-label="CSS-only Input Field Showcase" tabindex="0">
    <div class="em-input-header-bar">
        <span class="em-card-badge">COMPONENT CONTRIBUTION</span>
        <span class="em-brand-logo">CyberMotion</span>
    </div>
    <h2 class="em-card-title">Cyberpunk Input Field</h2>
    <p class="em-card-desc">A fully responsive pure CSS input component.</p>
    <div class="em-input-wrapper">
        <div class="em-input-group">
            <input type="text" id="cyber-input" class="em-text-input" placeholder=" " required autocomplete="off">
            <label for="cyber-input" class="em-input-label">Enter Access Code</label>
        </div>
    </div>
</header>
