# Landmark Role Audit for Header, Navbar, & Footer

An audited, WCAG 2.1 AA compliant page landmark structure that enforces proper HTML5 structural semantics, unique navigation labeling, and keyboard focus management across screen readers (NVDA, VoiceOver, JAWS).

## 🌟 Audit Fixes & Strategy

* **Redundant Role Removal:** Strips explicit `role="banner"` and `role="contentinfo"` from top-level `<header>` and `<footer>` elements, allowing HTML5 implicit semantics to handle landmark mapping cleanly.
* **Contextual Header/Footer Isolation:** Correctly scopes nested `<header>` and `<footer>` elements inside `<article>` containers so they do not register as false page-level landmarks.
* **Unique Navigation Labels:** Differentiates multiple `<nav>` instances using explicit `aria-label` attributes (`"Primary Navigation"` vs. `"Footer Navigation"`), satisfying **WCAG 2.4.1 (Bypass Blocks)** and **WCAG 1.3.1 (Info and Relationships)**.
* **Keyboard Navigation & Live Announcements:** Tracks active page state using `aria-current="page"` and broadcasts client-side routing updates to screen readers via a polite `aria-live` region.
* **Forced-Colors Mode Support (`forced-colors: active`):** Preserves landmark borders and active state highlights in Windows High Contrast Mode.

## 🚀 Structural Template

```html
<!-- Page Banner Landmark -->
<header>
  <!-- Primary Navigation Landmark -->
  <nav aria-label="Primary Navigation">
    <ul role="list">
      <li><a href="/" aria-current="page">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Main Content Landmark -->
<main id="main-content" tabindex="-1">
  <article>
    <!-- Scoped non-landmark header -->
    <header><h1>Article Title</h1></header>
  </article>
</main>

<!-- Page Contentinfo Landmark -->
<footer>
  <!-- Footer Navigation Landmark -->
  <nav aria-label="Footer Navigation">
    <ul role="list">
      <li><a href="/privacy">Privacy</a></li>
    </ul>
  </nav>
</footer>
