# Breadcrumb Nav ARIA Current Page Tag

An audited, WCAG 2.1 AA compliant breadcrumb navigation component implementing `aria-current="page"`, landmark differentiation (`<nav aria-label="Breadcrumb">`), CSS-based separators, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Current Page Identifier (WCAG 4.1.2 & 1.3.1):** Employs `aria-current="page"` on the leaf node, ensuring NVDA, VoiceOver, and JAWS explicitly state *"current page"*.
* **Landmark Identification (WCAG 2.4.1):** Enclosed in `<nav aria-label="Breadcrumb">` to distinguish the trail from site-wide navigation landmarks.
* **Separators Isolated from Accessibility Tree (WCAG 1.1.1):** Renders dividers with CSS `::after` pseudo-elements to avoid verbal repetition of *"slash"*.
* **Dynamic Route Announcements (WCAG 4.1.3):** Relays location shifts to an `aria-live="polite"` region on ancestor item activation.
* **High Contrast Mode Support (`forced-colors: active`):** Binds active step borders and highlights to `Highlight` and `HighlightText`.

## 🚀 Usage

```html
<nav class="breadcrumb-nav" aria-label="Breadcrumb">
  <ol class="breadcrumb-list" role="list">
    <li class="breadcrumb-item">
      <a href="/home" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/settings" class="breadcrumb-link" aria-current="page">Settings</a>
    </li>
  </ol>
</nav>
