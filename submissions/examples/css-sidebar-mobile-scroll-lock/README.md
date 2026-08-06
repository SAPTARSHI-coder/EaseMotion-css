# CSS Mobile Sidebar Overlay with Body Scroll Lock

A pure HTML5 and CSS3 Mobile Navigation Sidebar Overlay featuring isolated container scrolling (`overscroll-behavior: contain`) and background body scroll locking.

## Overview

When mobile navigation drawers open over long scrollable pages, user scroll events inside the drawer often leak to the document body underneath, causing unintended background scrolling. This component resolves the scroll leak issue using `overscroll-behavior: contain` on the drawer scroll container and `:has()` state selector body scroll locking (`overflow: hidden; touch-action: none;`).

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript required.
- **Scroll Leak Fix**: `overscroll-behavior: contain` isolates scroll events within the drawer container.
- **Background Body Scroll Lock**: Automatically locks body scroll state when the drawer is open.
- **ARIA Navigation Semantics**: Uses `role="navigation"` and `aria-label="Mobile Navigation"`.
- **Backdrop Overlay Blur**: Dimmed backdrop with subtle filter blur effect.
- **Prefers-Reduced-Motion**: Disables transition physics for motion-sensitive users.

## Folder Structure

```
css-sidebar-mobile-scroll-lock/
├── demo.html    # HTML navigation bar, page content & sidebar drawer markup
├── style.css    # CSS drawer transitions, variables & body scroll lock rules
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML document:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<nav class="sidebar-drawer" role="navigation" aria-label="Mobile Navigation">
  <header class="drawer-header">
    <h2 class="drawer-title">Navigation Menu</h2>
    <label for="sidebar-toggle" class="drawer-close-btn" aria-label="Close sidebar">&times;</label>
  </header>

  <div class="drawer-scroll-container">
    <ul class="nav-menu">
      <li class="menu-item"><a href="#home" class="menu-link active">Overview</a></li>
      <li class="menu-item"><a href="#components" class="menu-link">Component Library</a></li>
    </ul>
  </div>
</nav>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --bg-navbar: #1e2942;
  --bg-drawer: #0f172a;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #2d3748;
  --accent-cyan: #38bdf8;
  --focus-ring: #38bdf8;

  --drawer-width: 300px;
  --radius-lg: 16px;
}
```

## Customization

Adjust the drawer width or animation timing using custom CSS properties:

```css
.sidebar-drawer {
  --drawer-width: 340px;
}
```

## Accessibility

- **Semantic Navigation**: Includes `role="navigation"` and descriptive `aria-label`.
- **Focus Ring Indicators**: High contrast focus rings on hamburger triggers and menu links.
- **Backdrop Dismiss**: Clicking the backdrop overlay dismisses the sidebar.
- **WCAG AA Compliance**: High-contrast text theme colors.

## Responsive Behaviour

- **Desktop (800px+)**: Sticky navigation bar with accessible sidebar drawer trigger.
- **Mobile (<600px)**: Drawer adjusts max width to 85vw with touch-optimized scroll isolation.

## Browser Compatibility

- Chrome / Edge 105+ (Supports `:has()` selector)
- Firefox 121+
- Safari 15.4+
- iOS Safari / Android Chrome
