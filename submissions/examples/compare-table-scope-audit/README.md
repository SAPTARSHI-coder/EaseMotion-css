# Compare Table Header Scope Column Row Audit

An audited, WCAG 2.1 AA compliant comparison table component implementing directional `scope="col"` and `scope="row"` headers, semantic `<caption>` hierarchy, cell-level keyboard navigation, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Explicit `scope="col"` and `scope="row"` (WCAG 1.3.1):** Enables NVDA, VoiceOver, and JAWS to announce contextual row and column headers during cell-by-cell reading.
* **Accessible Table Caption (WCAG 1.3.1):** Includes an explicit `<caption>` element providing a high-level overview in screen reader rotor menus.
* **Arrow Key Cell Traversal (WCAG 2.1.1):** Supports <kbd>ArrowLeft</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, and <kbd>ArrowDown</kbd> for grid-based keyboard navigation.
* **Non-Visual Indicator Descriptions (WCAG 1.1.1 & 1.4.1):** Pairs icon symbols (✓ and ✕) with `.sr-only` text and `aria-label` tags (*"Included"*, *"Not included"*).
* **High Contrast Mode Support (`forced-colors: active`):** Binds borders, background fields, and button highlights to system tokens (`CanvasText`, `ButtonText`, `Highlight`).

## 🚀 Usage

```html
<table class="compare-table">
  <caption>Subscription Plan Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Storage</th>
      <td>100 GB</td>
    </tr>
  </tbody>
</table>
