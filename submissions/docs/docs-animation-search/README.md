# Documentation Animation Search Bar

A lightweight, real-time search component proposed for the EaseMotion CSS documentation site to address navigation difficulties as the animation catalog grows.

## What does this do?
This submission implements a fast, client-side filtering system for the documentation page. It includes a sleek search bar that instantly filters animation cards in real time as the user types.

## How does it work?
- **Real-Time Filtering**: The vanilla JavaScript checks the user's input against the animation's title, description, and hidden keyword tags (via `data-tags`). For example, searching "opacity" will reveal the `ease-fade-in` animation.
- **CSS Custom Properties for Maximum Flexibility**: The entire styling architecture is built heavily on CSS custom properties (`--docs-bg-color`, `--search-border`, etc.). **This is specifically implemented to solve the issue of improving flexibility without changing the API**. It allows the documentation to dynamically shift themes (e.g., Light to Dark mode based on OS preferences) cleanly without needing structural changes.
- **Zero External JS Dependencies**: Relies entirely on vanilla HTML, CSS, and a small snippet of standard JavaScript.

## Files Included
- `demo.html`: The markup structure, mock animation cards, and the vanilla JS filtering script.
- `style.css`: The styling file highlighting the usage of CSS custom properties for theming, alongside the search bar's layout.

## Why is it useful?
As the EaseMotion library scales, finding specific utility classes becomes harder for developers navigating the docs. Implementing a fast search bar drastically improves UX. Utilizing CSS custom properties ensures that integrating this feature into the existing docs pipeline will be completely flexible and non-breaking for any pre-existing layouts.
