# CSS Frosted Sidebar

A premium, glassmorphism-style sidebar navigation component utilizing native CSS backdrop filters to create a stunning frosted glass effect over underlying content.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes native CSS `backdrop-filter: blur()` to create the frosted aesthetic.
- **Mobile Responsive via CSS Hack**: Features a fully functional hamburger menu toggle on mobile devices (`max-width: 768px`). This state management is handled purely in CSS using the classic hidden `<input type="checkbox">` sibling selector hack. 
- **Depth and Interaction**: Hovering or focusing on navigation links triggers a smooth background fill and icon opacity transition. On mobile, opening the sidebar smoothly slides the navigation in while blurring the main content underneath (`filter: blur()`).
- **Accessible**: Uses proper semantic `<nav>` and `<aside>` tags. Includes `aria-current="page"` for active states and `aria-label`s for screen readers. Respects user preferences by gracefully disabling slide and color transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your layout. Ensure the `menu-toggle` checkbox and `frosted-sidebar` share the same parent container so the CSS sibling selector (`~`) functions correctly for the mobile toggle.

```html
<!-- The hidden checkbox state manager -->
<input type="checkbox" id="menu-toggle" class="menu-toggle" aria-hidden="true" />
<label for="menu-toggle" class="menu-btn">☰</label>

<!-- The Sidebar -->
<aside class="frosted-sidebar">
  <nav>
    <a href="#" class="nav-link">Link 1</a>
  </nav>
</aside>

<main class="main-content">...</main>
```

## CSS Custom Properties
Easily customize the layout and glass styling using the root variables in `style.css`:
- `--glass-bg`: The background color and opacity of the glass (default: `rgba(255, 255, 255, 0.1)`)
- `--glass-border`: The border color defining the edge of the glass (default: `rgba(255, 255, 255, 0.2)`)
- `--hover-bg`: The background color on link hover (default: `rgba(255, 255, 255, 0.15)`)
- `--active-color`: Highlight color for the active navigation item (default: `#38bdf8`)
- `--sidebar-width`: The fixed width of the sidebar (default: `280px`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge) that support `backdrop-filter`. Note that for Safari, the `-webkit-backdrop-filter` prefix is included for full compatibility.
