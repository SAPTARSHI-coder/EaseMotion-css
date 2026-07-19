# Skew Dark Mode Toggle

Resolves #42420.

### What does this do?
Adds a Skew Dark Mode Toggle component to EaseMotion CSS. It uses a CSS-only checkbox hack and the modern CSS `:has()` selector to toggle themes globally. The toggle itself features a startup-inspired skewed geometry (`transform: skewX`) with a dynamic `ease-skew-x` and bounce physics on the slider indicator.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. The `:has()` selector on the `body` allows the background to change without any JS.

### Why is it useful?
Provides a visually distinct, modern dark mode toggle using pure CSS state management, leveraging EaseMotion's skew animations for a unique identity.
