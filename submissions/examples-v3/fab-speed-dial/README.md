# Floating Action Button (FAB) Speed Dial Radial Menu

A premium, highly interactive Floating Action Button (FAB) Speed Dial radial/vertical menu component built for **EaseMotion CSS**. This component uses modern CSS calculations (`sin()` and `cos()`) to position menu choices dynamically in a staggered radial fan curve on desktop screen resolutions, collapsing gracefully into a vertical menu layout on mobile device viewports.

---

## 1. What does this component do?
The **FAB Speed Dial** is an interactive user interface menu containing multiple secondary actions. By default, it is collapsed into a single, compact Floating Action Button (FAB) at the bottom-right corner of the viewport. When clicked or tapped, the button morphs from a plus sign (`+`) into a close sign (`×`), and expands multiple secondary action items (e.g. Camera, Edit, Share, Download, Settings) outwards in a staggered fan-like layout or in a vertical line stack.

---

## 2. How is it used?
Simply include the HTML structure and link the component stylesheet:

```html
<div class="fab-container fab-layout-radial" id="fabSpeedDial">
  <!-- Trigger Button -->
  <button class="fab-trigger-btn fab-ripple-btn" aria-haspopup="true" aria-expanded="false" aria-label="Speed Dial Menu" aria-controls="fabActionsMenu">
    <span class="fab-morph-icon" aria-hidden="true">
      <span class="fab-icon-line line-1"></span>
      <span class="fab-icon-line line-2"></span>
    </span>
  </button>

  <!-- Secondary Actions List -->
  <div id="fabActionsMenu" role="menu">
    <!-- Action Item (Index and Angle custom properties required for radial styling) -->
    <div class="fab-action-wrapper" style="--index: 1; --angle: 180deg; --accent-color: #10b981;">
      <button class="fab-action-btn fab-ripple-btn" role="menuitem" aria-label="Camera">
        <svg><!-- SVG Icon --></svg>
        <span class="fab-tooltip">Camera</span>
      </button>
    </div>
    <!-- Add other items here... -->
  </div>
</div>
```

Activate the speed dial menu by toggling the `.is-open` class on `.fab-container` using a lightweight script:
```javascript
const fabContainer = document.getElementById('fabSpeedDial');
const fabTrigger = document.getElementById('fabTrigger');

fabTrigger.addEventListener('click', () => {
  const isOpen = fabContainer.classList.toggle('is-open');
  fabTrigger.setAttribute('aria-expanded', isOpen);
});
```

---

## 3. Why is it useful?
- **Saves Screen Space**: Condenses secondary actions into a single focal point, reducing visual noise on content-heavy dashboards or mobile lists.
- **Contextual Access**: Places crucial shortcut buttons (like quick upload, share, settings) directly within thumb reach.
- **Highly Visual Feedback**: Physics-based entrance/exit states communicate active and inactive conditions instantly, enhancing overall user experience.

---

## 4. Why it fits EaseMotion CSS
EaseMotion CSS is a motion-first, lightweight framework focused on premium micro-interactions. This speed dial fits EaseMotion perfectly because:
1. **Fluid Physics-Based Animation**: Uses custom spring-like easing curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to animate scales, rotations, and fades.
2. **Staggered Delays**: Leverages local CSS variables (`--index`) to compute staggered transition delays dynamically, avoiding heavy JavaScript animation libraries.
3. **Glassmorphism**: Embraces modern web aesthetics using blur backdrops and soft border outlines.

---

## 5. Features
- **Smooth Morphing Icon**: Plus (+) to close (×) transition.
- **Dual Layout Engines**: Toggleable vertical stack and math-driven radial fan curves.
- **Glassmorphism Styling**: Semi-transparent, blur background layers (`backdrop-filter: blur(12px)`) with thin borders.
- **Pure CSS Ripple Effect**: Uses custom active gradients to simulate water ripples without JS click listeners.
- **Staggered Sequences**: Staggers action cards outwards during entrance and staggers them inwards during exit.
- **Micro-Hover Animations**: Bouncing action buttons, tooltip fade-ins, and rotating icon paths.
- **Full Dark Mode**: Auto-detects user configuration systems and reacts to local themes.
- **Custom Palettes**: Pre-designed theme configurations (Aura, Sunset, Forest, Quartz, Ice Glass).

---

## 6. Accessibility Considerations
- **Semantic Elements**: Uses native `<button>` tags with correct `type="button"` values to avoid form submission bugs.
- **ARIA Landmark Attributes**: Includes `aria-expanded` to notify screen readers of menu visibility state, `aria-haspopup="true"` on trigger elements, and `role="menu"` / `role="menuitem"` mappings.
- **Focus Control**: Employs `visibility` transition curves. When the speed dial is closed, `visibility: hidden` is applied at the end of the transition, preventing screen readers and keyboard users from tab-focusing hidden options.
- **Key Bindings**: Tapping `Escape` closes the menu automatically and returns focus to the main trigger button.
- **Prefers Reduced Motion**: Fully respects OS preference switches via `@media (prefers-reduced-motion: reduce)`, disabling all rotation and transition movements.
- **High Contrast Focus Outline**: Supports visible custom outlines (`:focus-visible`) for keyboard navigators.
