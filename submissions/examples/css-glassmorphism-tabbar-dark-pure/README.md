# Glassmorphism Tab Bar with Dark Mode Styling

A sleek, modern mobile navigation tab bar featuring dark mode aesthetics and authentic frosted glassmorphism.

## Features
- Pure CSS state management utilizing the `<input type="radio">` hack
- Authentic frosted glass effect via `backdrop-filter: blur`
- Smooth spring-like animations for the active tab indicator (`cubic-bezier`)
- Dynamic icon and text animations on tab selection (icon shifts up, text fades in)
- Abstract blurred background shapes to demonstrate the glass effect perfectly
- Fully responsive and scaled for mobile viewport approximations

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `.glass-tabbar` is placed over a visually complex background (like the provided blurred shapes) so the `backdrop-filter` has visual data to blur. The state logic works purely through CSS sibling selectors (`~`), so the radio buttons must remain physically above the `<nav>` in the DOM tree.
