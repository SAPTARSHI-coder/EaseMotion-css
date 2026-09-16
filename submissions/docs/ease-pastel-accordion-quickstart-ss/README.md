# Pastel Collapsible FAQ Accordion - Quickstart Guide

## Overview

The **Pastel Collapsible FAQ Accordion** is a lightweight, drop-in UI component designed for modern web applications. Featuring soft pastel aesthetics, CSS grid-based smooth height transitions, and strict WAI-ARIA compliance, it provides an exceptional user experience with zero external dependencies.

---

## Quickstart HTML Markup

Below is the complete HTML structure required to implement the accordion. Copy and paste this snippet into your template:

```html
<div class="ease-accordion-pastel" aria-label="Frequently Asked Questions">
  
  <!-- Accordion Item 1 -->
  <article class="ease-faq-item">
    <h3>
      <button type="button" 
              class="ease-faq-trigger" 
              aria-expanded="false" 
              aria-controls="faq-content-1" 
              id="faq-header-1">
        <span>How do I install the pastel accordion?</span>
        <span class="ease-faq-icon" aria-hidden="true">▾</span>
      </button>
    </h3>
    <div id="faq-content-1" class="ease-faq-panel" role="region" aria-labelledby="faq-header-1">
      <div class="ease-faq-content">
        <div class="ease-faq-body">
          Simply copy the provided HTML structure and CSS variables into your project. The component relies entirely on native browser features with zero external dependencies.
        </div>
      </div>
    </div>
  </article>

  <!-- Accordion Item 2 (Expanded by Default) -->
  <article class="ease-faq-item is-open">
    <h3>
      <button type="button" 
              class="ease-faq-trigger" 
              aria-expanded="true" 
              aria-controls="faq-content-2" 
              id="faq-header-2">
        <span>Is this component accessible (WCAG compliant)?</span>
        <span class="ease-faq-icon" aria-hidden="true">▾</span>
      </button>
    </h3>
    <div id="faq-content-2" class="ease-faq-panel" role="region" aria-labelledby="faq-header-2">
      <div class="ease-faq-content">
        <div class="ease-faq-body">
          Yes. It utilizes the standard WAI-ARIA accordion pattern, including <code>aria-expanded</code> on triggers, <code>aria-controls</code> linking to regions, and full keyboard navigation support.
        </div>
      </div>
    </div>
  </article>

</div>
```

---

## CSS Class Naming Conventions

| Class Name | Description |
| :--- | :--- |
| `.ease-accordion-pastel` | Main vertical flex container for stacking FAQ items. |
| `.ease-faq-item` | Individual card container with hover transitions. |
| `.ease-faq-item.is-open` | Active state triggering border color change and panel expansion. |
| `.ease-faq-trigger` | The interactive `<button>` acting as the accordion header. |
| `.ease-faq-panel` | The hidden content wrapper utilizing `grid-template-rows`. |

---

## CSS Custom Property Themes (Tokens)

The component utilizes CSS Custom Properties for seamless theming and customization:

* `--pastel-bg`: Page background color (Default: `#faf5ff`)
* `--pastel-surface`: Card surface background color (Default: `#ffffff`)
* `--pastel-accent`: Active highlight and border color (Default: `#8b5cf6`)
* `--pastel-border`: Soft container border color (Default: `#e9d5ff`)
* `--pastel-text`: High-contrast primary typography color (Default: `#0f172a`)

To customize these tokens, override them at the root or within your local container block:

```css
:root {
  --pastel-accent: #7c3aed;
  --pastel-border: #ddd6fe;
}
```

---

## Accessibility & WAI-ARIA Matrix

The Pastel Accordion complies strictly with WCAG 2.1 AAA accessibility standard:

* **Semantic Hierarchy**: The trigger must be a `<button>` tag wrapped inside a structural heading tag (e.g., `<h3>`).
* **State Management**: `aria-expanded="true/false"` must be dynamically toggled on the `<button>` element to announce open/closed states to screen readers.
* **Region Mapping**: The `aria-controls` attribute on the trigger button must map directly to the `id` of the content panel (`.ease-faq-panel`).
* **Keyboard Navigation**: Native tab order focus management is maintained. Arrow navigation (`ArrowUp` and `ArrowDown`) allows fast shifting of focus across accordion triggers.
* **High Contrast Mode**: Supports Windows High Contrast Mode / Forced Colors with visible focus rings and explicit border fallbacks.
