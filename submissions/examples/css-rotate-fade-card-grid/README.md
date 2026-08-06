# CSS Rotate-Fade Card Grid

A pure-CSS animated card grid utilizing a Rotate-Fade interaction aesthetic, designed to complement E-Commerce Checkout interface layouts. It features a staggered entrance animation and a highly interactive selection state using modern CSS features.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a selectable grid of cards (e.g., for choosing a payment or shipping method during checkout). 
When the grid loads, the cards animate in with a staggered rotate-fade entrance. When a user selects a card, the selected card elevates (scales up slightly with a glow), while the unselected peer cards perform a "Rotate-Fade" (rotating slightly away and dropping opacity) to visually de-emphasize them and focus the user's attention on their selection.

### 2. How is it used?

The component uses a pure CSS radio button group hidden inside `<label>` tags. It leverages the modern CSS `:has()` pseudo-class to detect the selected state of sibling cards and apply the rotate-fade interaction dynamically across the entire grid without a single line of JavaScript.

```html
<div class="card-grid rotate-fade-grid">
  <!-- Card 1 -->
  <label class="grid-card-label" tabindex="0">
    <!-- Hidden Radio Button -->
    <input type="radio" name="payment_method" class="card-radio" value="credit" checked>
    <!-- Card Content -->
    <div class="card-content">
      <!-- ... -->
    </div>
  </label>
  
  <!-- Additional Cards... -->
</div>
```

**Customization via CSS Properties:**
You can adjust the interaction physics locally or at the `:root` level.

```css
:root {
  --grid-transition-duration: 0.4s;
  --grid-transition-ease: cubic-bezier(0.25, 0.8, 0.25, 1);
  
  /* Peer unselected state properties */
  --grid-unselected-opacity: 0.5;
  --grid-unselected-rotate: -4deg;
  --grid-unselected-scale: 0.95;
  
  /* Selected active state properties */
  --card-border-selected: #3b82f6;
  --card-glow-selected: rgba(59, 130, 246, 0.15);
}
```

### 3. Why is it useful?

In E-Commerce checkout flows, guiding user focus to their active selections reduces cognitive load and improves conversion rates. Traditionally, achieving complex peer-state animations (where selecting one element animates all others) required JavaScript logic to toggle classes across a node list. This component demonstrates how to achieve these premium, app-like micro-interactions purely through modern CSS (`:has()` and `~` selectors), resulting in cleaner, more performant, and easily maintainable codebases. All animations strictly respect accessibility preferences (`prefers-reduced-motion`).
