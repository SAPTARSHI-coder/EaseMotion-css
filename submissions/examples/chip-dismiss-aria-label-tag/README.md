# Chip Dismiss Button ARIA Label Tag

An audited, WCAG 2.1 AA compliant chip tag component featuring explicit contextual `aria-label` names, seamless focus shift on item removal, arrow key and delete key navigation, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Contextual ARIA Labels (WCAG 4.1.2 & 2.4.6):** Employs explicit labels such as `aria-label="Remove React tag"` to eliminate ambiguous "Remove" announcements across screen readers.
* **Focus Retention on Removal (WCAG 2.4.3):** Automatically shifts keyboard focus to the next or previous adjacent chip dismiss button when a tag is deleted, preventing focus drop to `<body>`.
* **Keyboard Navigation Suite (WCAG 2.1.1):** Supports <kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Delete</kbd>, <kbd>Backspace</kbd>, and <kbd>Arrow Keys</kbd>.
* **Dynamic Status Announcements (WCAG 4.1.3):** Relays live deletion status (e.g., *"Removed React tag."*) to NVDA, VoiceOver, and JAWS via a polite live region.
* **High Contrast Mode Support (`forced-colors: active`):** Binds borders and dismiss button visibility explicitly to system tokens (`ButtonText`, `CanvasText`, and `Highlight`).

## 🚀 Usage

```html
<ul class="chip-group" role="list" aria-label="Tags">
  <li class="chip-item">
    <span class="chip-label">React</span>
    <button type="button" class="chip-dismiss-btn" aria-label="Remove React tag">
      <svg aria-hidden="true" focusable="false"><!-- Icon --></svg>
    </button>
  </li>
</ul>
