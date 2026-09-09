# Command Palette Filter Results Live Announcement

An audited, WCAG 2.1 AA compliant command palette modal component featuring dynamic `aria-live` filter result counts, full WAI-ARIA combobox navigation semantics, keyboard focus traps, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Dynamic Filter Live Announcements (WCAG 4.1.3):** Debounces search queries and broadcasts filtered result counts (e.g., *"3 results available"* or *"No results found"*) to screen readers via a polite `aria-live` container.
* **WAI-ARIA Combobox Pattern (WCAG 4.1.2):** Implements `role="combobox"`, `aria-autocomplete="list"`, `aria-controls`, and dynamic `aria-activedescendant` pointer tracking without shifting input focus.
* **Complete Keyboard Navigation Suite (WCAG 2.1.1):** Supports <kbd>ArrowUp</kbd>, <kbd>ArrowDown</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd> to execute, and <kbd>Escape</kbd> to clear or close.
* **Modal Focus Trap & Safe Restoration (WCAG 2.4.3 & 2.1.2):** Traps keyboard focus within the dialog while active and safely returns focus to the invoking element upon closure.
* **High Contrast Mode Support (`forced-colors: active`):** Renders explicit borders and binds `aria-selected="true"` states to `Highlight` and `HighlightText`.

## 🚀 Usage

```html
<!-- Live Announcer Container -->
<div id="palette-announcer" class="sr-only" role="status" aria-live="polite" aria-atomic="true"></div>

<!-- Combobox Input -->
<input 
  type="text" 
  role="combobox" 
  aria-autocomplete="list" 
  aria-expanded="true" 
  aria-controls="listbox-id" 
  aria-activedescendant="opt-1"
>

<!-- Listbox -->
<ul id="listbox-id" role="listbox">
  <li id="opt-1" role="option" aria-selected="true">Option 1</li>
</ul>
