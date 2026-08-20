# Skip Link Navigation Anchor Target Focus

An audited, WCAG 2.1 AA compliant skip link pattern ensuring programmatic focus transfer to `<main tabindex="-1">`, smooth reveal on keyboard focus, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Programmatic Focus Transfer (WCAG 2.4.1):** Pairs `href="#main-content"` with `mainContent.focus()`, ensuring screen readers and keyboard cursors shift directly past repetitive navigation landmarks.
* **Accessible Landmark Container (WCAG 1.3.1):** Encapsulates the skip link inside `<nav aria-label="Skip links">`.
* **Offscreen-to-Focus Animation (WCAG 2.4.7):** Positioned offscreen by default and slides into view upon `:focus-visible` with a dual-layer focus outline.
* **Live Region Status Announcements (WCAG 4.1.3):** Relays navigation confirmation (*"Navigated to main content."*) to NVDA, VoiceOver, and JAWS via a polite live region.
* **High Contrast Mode Support (`forced-colors: active`):** Binds borders and outlines to `ButtonText`, `ButtonFace`, and `Highlight`.

## 🚀 Usage

```html
<nav aria-label="Skip links">
  <a href="#main-content" class="skip-link">Skip to main content</a>
</nav>

<main id="main-content" tabindex="-1">
  <!-- Primary page content -->
</main>
