# CSS Frosted Glass Navbar

## What does this do?

A responsive, pure CSS header navigation component featuring backdrop blur, subtle specular borders, accessible keyboard navigation states, and a zero-JavaScript mobile drawer navigation toggle.

## How is it used?

```html
<header class="navbar-container">
  <nav class="frosted-navbar" aria-label="Main Navigation">
    <a href="#" class="navbar-brand">
      <svg
        class="brand-logo"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
      <span>EaseMotion</span>
    </a>

    <input
      type="checkbox"
      id="nav-toggle"
      class="nav-toggle"
      aria-label="Toggle navigation menu"
    />
    <label
      for="nav-toggle"
      class="nav-toggle-btn"
      aria-label="Toggle navigation menu"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </label>

    <div class="nav-content">
      <ul class="nav-links">
        <li>
          <a href="#" class="nav-link is-active" aria-current="page"
            >Overview</a
          >
        </li>
        <li><a href="#" class="nav-link">Documentation</a></li>
        <li><a href="#" class="nav-link">Components</a></li>
        <li><a href="#" class="nav-link">Releases</a></li>
      </ul>

      <div class="nav-actions">
        <a href="#" class="btn-secondary">Sign In</a>
        <a href="#" class="btn-primary">Get Started</a>
      </div>
    </div>
  </nav>
</header>
```

## Why is it useful?

It delivers clean, production-grade glassmorphism aesthetics for header navigation while strictly following EaseMotion CSS's zero-dependency philosophy. It utilizes low-specificity classes, supports legacy browser fallbacks, implements high-contrast accessible focus rings, and uses a pure CSS checkbox hack for responsive drawer navigation.
