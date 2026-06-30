# Ease Accordion Component (Collapsible Content System)

The **Ease Accordion Component** provides a modular, lightweight, and highly performant collapsible layout system used to organize large amounts of information in expandable card blocks. It is commonly integrated inside Frequently Asked Questions (FAQ) hubs, developer consoles, dashboard settings sheets, and documentation portals.

This component aligns with **EaseMotion CSS** guidelines, utilizing the framework's core transition timings, borders, and shadows.

---

## Features

- **Smooth CSS Height Transitions:** Uses a modern CSS grid row interpolation trick (`grid-template-rows: 0fr -> 1fr`) to transition accordion heights dynamically without hardcoding arbitrary `max-height` values.
- **Single or Multi-Open Modes:** Easily configure sections to collapse active siblings automatically (accordion mode) or toggle independently (collapsible list mode).
- **Responsive Nesting:** Submenus nest inside outer content regions without clipping boundaries.
- **Icon Support & Rotation:** Rotating carets indicate current open/close states.
- **Accessible Structure:** Full compatibility for `aria-expanded` states and Arrow key header cycling for screen reader support.
- **SaaS Aesthetic:** Modern clean card layout with soft shadows and borders.

---

## CSS Variables (Customization Guide)

Easily customize the accordion colors, border radius, and transitions globally or per-instance by adjusting these CSS custom properties:

```css
:root {
  --ease-accordion-bg: var(--ease-color-surface, #ffffff);
  --ease-accordion-border-color: var(--ease-color-neutral-200, #e2e8f0);
  --ease-accordion-radius: var(--ease-radius-md, 8px);
  --ease-accordion-shadow: var(--ease-shadow-sm);

  --ease-accordion-trigger-bg: transparent;
  --ease-accordion-trigger-hover-bg: var(--ease-color-neutral-50, #f8fafc);
  --ease-accordion-trigger-color: var(--ease-color-text, #1e293b);

  --ease-accordion-content-bg: transparent;
  --ease-accordion-content-color: var(--ease-color-muted, #64748b);

  --ease-accordion-icon-color: var(--ease-color-primary, #6c63ff);
  --ease-accordion-transition-speed: var(--ease-speed-medium, 300ms);
}
```

---

## Accordion Variants

### 1. Base Single Accordion Item HTML

Below is the standard layout block:

```html
<!-- Add .is-open to .ease-accordion-item to keep it expanded by default -->
<div class="ease-accordion-item">
  <button class="ease-accordion-trigger" id="acc-trigger-1">
    <span class="ease-accordion-trigger-heading">Item Title</span>
    <span class="ease-accordion-icon">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>
  </button>
  <div
    class="ease-accordion-panel"
    role="region"
    aria-labelledby="acc-trigger-1"
  >
    <div class="ease-accordion-content">
      <div class="ease-accordion-content-inner">
        Your collapsible text or layouts go here...
      </div>
    </div>
  </div>
</div>
```

---

### 2. FAQ Accordion (Single-Open Configuration)

Binds sibling items together so that opening one section automatically closes the others. Set `data-multi-open="false"` on the container:

```html
<div class="ease-accordion" id="faq-accordion" data-multi-open="false">
  <!-- Include multiple .ease-accordion-item modules -->
</div>
```

### 3. Settings Accordion (Multi-Open Configuration)

Allows multiple sections to stay open at the same time. Set `data-multi-open="true"` on the container:

```html
<div class="ease-accordion" id="settings-accordion" data-multi-open="true">
  <!-- Include multiple .ease-accordion-item modules -->
</div>
```

### 4. Icon-based Accordion

Add status icons next to titles inside triggers:

```html
<button class="ease-accordion-trigger">
  <span class="ease-accordion-trigger-heading">
    <span class="ease-accordion-trigger-icon">👤</span>
    Profile Settings
  </span>
  <span class="ease-accordion-icon">...</span>
</button>
```

### 5. Nested Accordions

Insert a secondary `.ease-accordion` container inside the parent `.ease-accordion-content-inner` layout region:

```html
<div class="ease-accordion-content-inner">
  Parent content text.

  <div class="ease-accordion" id="nested-accordion" data-multi-open="false">
    <div class="ease-accordion-item">
      <!-- Nested header & panel -->
    </div>
  </div>
</div>
```

---

## Interactivity JavaScript Support

To enable accordion click actions and keyboard focus cycling, include the script featured inside `demo.html` in your document. It dynamically listens to clicks on `.ease-accordion-trigger` elements, toggles `.is-open` classes, updates `aria-expanded` values, and maps `ArrowUp`, `ArrowDown`, `Home`, and `End` keystrokes.
