# Expandable Floating Action Button Component

A modern, highly responsive, accessible, and framework-independent Floating Action Button (FAB) component featuring fluid staggered animations and light/dark theme compatibility.

---

### 1. What does this component do?

This component provides a floating action button fixed to the bottom-right corner of the viewport. When clicked or activated via keyboard, it expands upwards to reveal an interactive menu containing five action buttons (Home, Search, Favorite, Share, Settings). The action buttons feature staggered scale and slide animations, tooltips on hover, and clear visual click logging feedback.

---

### 2. How is it used?

#### Example HTML Usage

Include the structure below in your HTML document:

```html
<!-- FAB Container -->
<div class="fab-container" id="fab-container" data-expanded="false">
  
  <!-- Primary Toggle Button -->
  <button 
    class="fab-trigger" 
    id="fab-trigger" 
    type="button"
    aria-expanded="false" 
    aria-haspopup="true" 
    aria-controls="fab-menu" 
    aria-label="Toggle action menu"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" stroke-linecap="round"></line>
      <line x1="5" y1="12" x2="19" y2="12" stroke-linecap="round"></line>
    </svg>
  </button>

  <!-- Expandable Menu -->
  <ul class="fab-menu" id="fab-menu" role="menu" aria-labelledby="fab-trigger">
    <li class="fab-menu-item" data-item="home" role="none">
      <button class="btn-action" type="button" role="menuitem" tabindex="-1" data-tooltip="Home" aria-label="Navigate to Home">
        <!-- SVG Icon -->
      </button>
    </li>
    <li class="fab-menu-item" data-item="search" role="none">
      <button class="btn-action" type="button" role="menuitem" tabindex="-1" data-tooltip="Search" aria-label="Open Search">
        <!-- SVG Icon -->
      </button>
    </li>
    <!-- Additional list items for Favorite, Share, and Settings -->
  </ul>
</div>
```

Ensure `style.css` is loaded to provide transitions, staggered animation delays, theme variables, and position positioning. Toggling the `data-expanded="true/false"` state on the `.fab-container` will trigger the animations automatically.

---

### 3. Why is it useful?

This component aligns perfectly with EaseMotion CSS's philosophy of offering **lightweight, highly performant, and accessible animated UI components**:

- **Staggered Motion Choreography:** The action items expand and collapse with a fluid CSS delay cascade (`transition-delay`), delivering a highly premium, micro-interactive user experience.
- **Strict Accessibility Compliance:** Full keyboard navigation support (Enter/Space to toggle, Tab to traverse, and Escape to collapse), dynamic ARIA attribute management (`aria-expanded`, `aria-haspopup`, `aria-controls`), and custom focus outlines that appear only when navigating via keyboard (`:focus-visible`).
- **No External Dependencies:** Eliminates heavy external icon packages (such as FontAwesome) and utility libraries (such as Tailwind or jQuery) by utilizing standard inline SVG shapes and clean, vanilla web APIs.
- **Robust responsive scaling:** Adapts cleanly across mobile, tablet, and desktop viewports, altering button touch targets and spacing sizes dynamically without causing layout shifting or overflow.
- **Built-in Dark Mode:** Built with dynamic CSS custom properties (variables) that seamlessly integrate with light and dark color schemes.
