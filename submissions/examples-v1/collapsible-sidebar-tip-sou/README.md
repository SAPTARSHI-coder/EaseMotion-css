# Collapsible Sidebar Demo — with Usage Tip

A clean, accessible collapsible sidebar demo that includes a short usage tip below the heading so first-time users immediately understand how to interact with the component.

This submission addresses issue **#2709** — _[FEATURE] Add usage tip to collapsible sidebar demo_.

---

## 1. What does this do?

It renders a collapsible sidebar with a `☰` toggle button and displays a small, styled usage tip beneath the heading that tells the user how to expand or collapse the sidebar.

---

## 2. How is it used?

Drop the markup into any page and link `style.css`. The toggle is wired with a tiny inline vanilla-JS handler — no frameworks required.

```html
<aside class="sidebar" id="sidebar">
  <nav class="sidebar-nav">
    <a href="#" class="sidebar-link">🏠 Home</a>
    <a href="#" class="sidebar-link">📊 Dashboard</a>
  </nav>
</aside>

<main class="main-content">
  <button class="toggle-btn" id="toggleBtn" aria-label="Toggle sidebar">
    ☰
  </button>

  <h1>Collapsible Sidebar Demo</h1>

  <!-- The usage tip introduced by this submission -->
  <p class="usage-tip">
    <strong>Tip:</strong> Click the <span class="tip-icon">☰</span> button to
    collapse or expand the sidebar.
  </p>
</main>
```
