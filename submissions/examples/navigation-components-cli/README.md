# Navigation Components (Navbar & Sidebar)

## What does this do?
Provides a robust, responsive layout shell for building web applications. It includes a responsive Top Navbar with a pure-CSS mobile toggle menu and a Sidebar navigation menu featuring smooth hover animations.

## How is it used?
Copy the structure from `demo.html` to build your application layout.

### Navbar Example
```html
<nav class="ease-navbar">
  <div class="ease-navbar-brand">Logo</div>
  
  <!-- Pure CSS Mobile Toggle -->
  <input type="checkbox" id="nav-toggle" class="ease-nav-toggle-input">
  <label for="nav-toggle" class="ease-nav-toggle-label">
    <span></span><span></span><span></span>
  </label>
  
  <ul class="ease-navbar-nav">
    <li><a href="#" class="ease-nav-link active">Home</a></li>
    <li><a href="#" class="ease-nav-link">Features</a></li>
  </ul>
</nav>
```

### Sidebar Example
```html
<aside class="ease-sidebar">
  <ul class="ease-sidebar-nav">
    <li>
      <a href="#" class="ease-sidebar-link active">
        <span class="ease-sidebar-icon">📊</span>
        Dashboard
      </a>
    </li>
  </ul>
</aside>
```

## Features
- **Zero JavaScript:** The mobile hamburger menu in the navbar expands and collapses using the CSS "checkbox hack".
- **Animated Interactions:** Sidebar links feature a smooth indent animation on hover, powered by framework timing tokens.
- **Application Shell:** Includes wrapper classes (`.ease-layout-shell`, `.ease-layout-main`, `.ease-layout-content`) to easily construct fixed-header, scrolling-content dashboard layouts.
- **Responsive:** Automatically adapts to mobile and desktop screen sizes.

## Why is it useful?
Every dashboard or web app requires sturdy navigation. By providing pre-styled, responsive Navbar and Sidebar layouts that integrate perfectly with EaseMotion's design tokens and animations, developers can quickly bootstrap new projects without fighting CSS layout issues or reaching for external JavaScript libraries.
