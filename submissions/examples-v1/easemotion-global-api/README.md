# Programmatic Unified JavaScript API — EaseMotion CSS

## What does this do?
This component introduces the core unified JavaScript API for the EaseMotion CSS Library. Exposed globally under the `window.EaseMotion` namespace, this lightweight, framework-friendly API allows developers to programmatically control Modals, Tabs, and Scroll Reveal components. It operates with zero dependencies, avoids URL hash manipulation, manages keyboard focus trapping/restoration, and automatically recalculates layout dimensions on window resize.

## API Specification

### 1. Modals (`EaseMotion.Modal`)

Exposes methods to programmatically trigger and manage modals.

- **`EaseMotion.Modal.open(id)`**
  - Displays the target modal matching the specified element ID.
  - Adds active classes (`.ease-modal-active`, `.is-active`, `.active`).
  - Sets accessibility parameters: `aria-hidden="false"`, `aria-modal="true"`.
  - Prevents background window scrolling by adding `.ease-modal-open` to the body and overriding `overflow: hidden` on inline styling.
  - Traps keyboard focus inside the modal boundary (Tab cycles focus through inner controls; Shift+Tab reverses direction).
  - Listens to the `Escape` key globally to close the active modal.
  
- **`EaseMotion.Modal.close(id)`**
  - Closes the active modal matching the specified element ID.
  - Removes active classes and restores background page scrolling.
  - Restores keyboard focus back to the button or trigger element that initiated the modal opening.

#### Example Usage:
```javascript
// Opens modal with id "signup-modal"
EaseMotion.Modal.open("signup-modal");

// Closes modal with id "signup-modal"
EaseMotion.Modal.close("signup-modal");
```

---

### 2. Tabs (`EaseMotion.Tabs`)

Exposes methods to coordinate tab selection and slide underlines.

- **`EaseMotion.Tabs.select(containerSelector, index)`**
  - Activates the tab trigger and panel at the specified index within the container matching `containerSelector`.
  - Updates class lists and ARIA tags (`aria-selected="true"`, `tabindex="0"`) on active tab buttons.
  - Automatically calculates width and offset position coordinates for the sliding indicator `.ease-tabs__underline` or `.ease-tab-underline`.
  - Sets inline width/transform translations, and updates container custom properties (`--ease-tab-width`, `--ease-tab-left`).

- **`EaseMotion.Tabs.refresh(containerSelector)`**
  - Manually forces recalculation of the active tab's underline dimension and position.
  - A debounced listener is bound globally to `window.resize` which automatically triggers this function across all registered tab containers, ensuring responsiveness.

#### Example Usage:
```javascript
// Selects the third tab (index 2) inside the element "#profile-tabs"
EaseMotion.Tabs.select("#profile-tabs", 2);

// Re-computes active underline width and position
EaseMotion.Tabs.refresh("#profile-tabs");
```

---

### 3. Scroll Reveal (`EaseMotion.Reveal`)

Exposes methods to register elements for entrance animations.

- **`EaseMotion.Reveal.observe(selector)`**
  - Registers matching elements with a single, shared `IntersectionObserver` instance.
  - Toggles transition classes (`.ease-reveal-active`, `.is-visible`, `.active`) when elements intersect the viewport (10% threshold).
  - Employs a custom `data-ease-reveal-observed` attribute to prevent duplicate node registration.
  - Fully supports dynamic DOM insertion—calling `observe` again registers newly appended elements without affecting previously observed elements.

#### Example Usage:
```javascript
// Registers scroll-reveal monitoring on elements with class ".ease-reveal"
EaseMotion.Reveal.observe(".ease-reveal");
```

---

## File Structure

All component elements are maintained inside this submission directory to protect the core framework:
- `easemotion.js` — Core JavaScript API source.
- `demo.html` — Interactive test playground dashboard.
- `style.css` — Accompanying BEM testing classes.
- `README.md` — This instruction manual.

Import `easemotion.js` in your HTML like so:
```html
<script src="easemotion.js"></script>
```

---

## Framework Integration Examples

This API is designed with framework lifecycles in mind:

### React
```javascript
import { useEffect } from 'react';

function DashboardTabs() {
  useEffect(() => {
    // Initialize first tab and register resize listening
    window.EaseMotion.Tabs.select('#profile-tabs', 0);
    
    // Register scroll reveal elements
    window.EaseMotion.Reveal.observe('.ease-reveal');
  }, []);

  return (
    <div id="profile-tabs" className="ease-tabs-container">
      <div className="ease-tabs-header">
        <button className="ease-tab">Tab 1</button>
        <button className="ease-tab">Tab 2</button>
        <div className="ease-tabs__underline"></div>
      </div>
    </div>
  );
}
```

### Vue
```html
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.EaseMotion.Tabs.select('#profile-tabs', 0);
  window.EaseMotion.Reveal.observe('.ease-reveal');
});
</script>
```

### Svelte
```html
<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    window.EaseMotion.Tabs.select('#profile-tabs', 0);
    window.EaseMotion.Reveal.observe('.ease-reveal');
  });
</script>
```
