# macOS Dock Magnification Navigation Bar (EaseMotion CSS)

An interactive, desktop-inspired macOS magnification dock navigation bar built with pure HTML5 and CSS3 (`transform: scale()`, CSS sibling selectors `:has()`, and backdrop glassmorphism).

## 1. What does this do?
This component replicates the iconic macOS desktop dock menu magnification effect. When hovering over an icon, it smoothly scales up (`scale(1.45)`), while adjacent neighboring items dynamically scale up (`scale(1.2)`) using CSS `:has()` selector physics without needing JavaScript events.

## 2. How is it used?
Link `style.css` in your HTML page and implement the `.macos-dock` structure with `.dock-item` anchors as illustrated in `demo.html`.

## 3. Why is it useful?
- **Modern Desktop UX**: Elevates portfolio websites, WebOS dashboards, and creative web app interfaces.
- **Pure CSS Physics**: Hardware-accelerated transitions via `transform` and modern `:has()` selector math deliver silky-smooth 60fps performance without JavaScript overhead.
- **Fully Accessible & Responsive**: Includes tooltip labels, notification badge indicators, and fluid scaling across viewports.
