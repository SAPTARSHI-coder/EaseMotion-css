# Pro Glassmorphism Card Component

A production-ready, highly customizable glassmorphism card component. This updated version utilizes modern CSS features and vanilla JavaScript to provide a robust, accessible, and themeable UI element.

## ✨ Features
* **Dynamic Theming:** Seamless Dark and Light mode support using CSS Custom Properties (Variables).
* **System Preference Detection:** Automatically respects the user's OS-level dark mode settings.
* **Micro-interactions:** Smooth hover states, `transform` scaling, and dynamic drop-shadows for a tactile feel.
* **Enhanced Accessibility:** Carefully balanced opacities and backdrop-filters to ensure text remains readable across different backgrounds.
* **Zero Dependencies:** Built entirely with vanilla HTML, CSS, and a lightweight inline JS script.

## 📦 What's Included
* `index.html` — The demo page containing the theme toggle logic and card layouts.
* `style.css` — The complete stylesheet, including base styles, CSS variables, and the `.glass-card` core component.

## 🚀 Usage

### 1. Structure Your HTML
Copy the base HTML structure into your project. You can use the standard card or append the `--accent` modifier for highlighted content.

```html
<article class="glass-card">
  <header class="card-head">
    <h2>Profile</h2>
    <p class="muted">Member since 2024</p>
  </header>
  
  <div class="card-body">
    <p>Your content goes here.</p>
  </div>
  
  <footer class="card-actions">
    <button class="btn primary">Follow</button>
    <button class="btn secondary">Message</button>
  </footer>
</article>

<article class="glass-card glass-card--accent">
  </article>