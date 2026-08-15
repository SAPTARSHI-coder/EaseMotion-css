# Glowing Card with Neon Styling Component

A responsive UI card component featuring continuous rotating conic-gradient border glows, neon ambient lighting shadows, cyber typography, interactive hover micro-animations, and full accessibility support.

---

### 1. What does this do?
This component renders a high-tech glowing card using pure HTML and CSS with an animated rotating gradient border, ambient neon box-shadows, and interactive hover elevation effects.

---

### 2. How is it used?
Place the HTML structure inside your project:

```html
<article class="neon-card cyan-theme" tabindex="0" aria-labelledby="card-title">
  <!-- Animated Border Layer -->
  <div class="glow-border"></div>
  
  <!-- Content Surface Layer -->
  <div class="card-content">
    <div class="card-header">
      <div class="neon-icon">⚡</div>
      <span class="neon-badge">CYBER // NODE 01</span>
    </div>

    <h2 id="card-title" class="card-title">Quantum Core</h2>
    <p class="card-desc">High-frequency distributed processing unit.</p>

    <div class="card-footer">
      <button class="neon-btn">INITIALIZE NODE</button>
    </div>
  </div>
</article>
```

Include `style.css` in your project stylesheet.

---

### 3. Why is it useful?
- **Eye-Catching Aesthetics:** Modern cyberpunk and dark-mode neon styling ideal for feature showcases, dashboard KPI cards, and landing pages.
- **Pure CSS Performance:** Uses hardware-accelerated CSS keyframe animations for smooth 60fps rendering without JavaScript.
- **Multiple Color Themes:** Includes predefined CSS theme modifiers (`.cyan-theme`, `.magenta-theme`).
- **Accessible & Responsive:** Features keyboard focus rings (`:focus-visible`), ARIA attributes, mobile grid responsiveness, and `prefers-reduced-motion` fallbacks.
