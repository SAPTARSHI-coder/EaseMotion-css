# Responsive Navbar with Mobile Hamburger — Issue #14164

## What does this do?
Adds mobile-responsive behavior to `.ease-navbar`. On viewports below 768px, the nav links collapse behind a hamburger toggle button. Pure CSS — no JavaScript required — using the checkbox hack (`:checked ~ .ease-navbar-links`).

## How is it used?
```html
<nav class="ease-navbar">
  <a href="#" class="ease-navbar-brand">Brand</a>
  <input type="checkbox" class="ease-navbar-checkbox" id="navToggle">
  <label for="navToggle" class="ease-navbar-toggle" aria-label="Menu">
    <span class="ease-navbar-toggle-icon">
      <span></span><span></span><span></span>
    </span>
  </label>
  <ul class="ease-navbar-links">
    <li><a href="#" class="ease-nav-link active">Dashboard</a></li>
    <li><a href="#" class="ease-nav-link">Projects</a></li>
  </ul>
</nav>
```

## Key classes
| Class | Description |
|---|---|
| `.ease-navbar` | Flex container, sticky top bar with backdrop blur |
| `.ease-navbar-brand` | Brand text/logo link |
| `.ease-navbar-links` | Nav link list — inline on desktop, hidden on mobile |
| `.ease-nav-link` | Individual link with hover/focus and active state |
| `.ease-navbar-toggle` | Hamburger button (hidden on desktop, visible on mobile) |
| `.ease-navbar-checkbox` | Hidden checkbox — `:checked` shows links and animates hamburger to X |
| `.ease-navbar-toggle-icon` | Three `<span>` bars that rotate into an X on checked |

## Mobile behavior
- At `max-width: 768px`: links hidden, hamburger visible
- On toggle click: `@keyframes easeSlideDown` animates links in (translateY -8px → 0, opacity 0→1)
- Hamburger bars animate to X via `rotate(45deg)` / `rotate(-45deg)` with middle bar fading out
- `prefers-reduced-motion: reduce` disables all transitions

## Why is it useful for EaseMotion CSS?
Responsive navigation is a fundamental requirement for any UI framework. This provides a drop-in mobile navbar with zero JavaScript dependency.
