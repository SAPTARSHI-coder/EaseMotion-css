# CSS Scale-Hover Navbar (Minimalist Tech)

A pure CSS responsive navigation bar component designed for Minimalist Tech Layouts. It features a sleek, animated underline indicator that scales outwards from the center on hover, and a fully functional pure CSS mobile dropdown menu.

## Features
- Pure CSS and HTML (No JavaScript required).
- The navigation links utilize a `.scale-indicator` pseudo-border. By default, it is hidden using `transform: scaleX(0)`. On hover (or when marked `.active`), it scales to full width using `transform: scaleX(1)`. The use of `transform-origin: center` makes the line draw outwards from the middle symmetrically.
- Clean, structured aesthetic utilizing the `Inter` font family and subtle button shadows.
- Fully responsive layout. On screens below 850px, the desktop links and CTA buttons are hidden, and a pure CSS hamburger menu (powered by the hidden checkbox hack) is revealed.
- The mobile dropdown menu smoothly slides open using a `max-height` CSS transition, and the hover indicators intelligently adapt from an X-axis bottom border to a Y-axis left-side accent line.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the spatial scaling animation is stripped, and the indicator relies on a simple opacity toggle).

## Usage
Open `demo.html` in your browser. You will see a top-level navigation bar. Hover over the navigation links to watch the indigo underline elegantly scale outwards from the center of the text. Resize the browser window to test the mobile hamburger menu and observe how the hover indicator adapts to the vertical layout.

## Files
- `demo.html`: The HTML structure for the navbar, utilizing the hidden checkbox hack for the mobile menu state.
- `style.css`: The styling, flexbox layouts, media queries, and CSS `transform: scaleX()` logic for the center-out animated underline.
