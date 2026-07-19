# Hierarchical List

A pure CSS file tree and hierarchical list component with connection lines and smooth interactive effects.

## Features
- **Visual Hierarchy**: Clearly displays nested items using precise padding and CSS pseudo-element border lines to draw the tree structure.
- **Dynamic Icons**: Uses inline SVG data URIs in CSS to provide folder and file icons without needing external image requests.
- **Hover Interactions**: List items slide gently to the right and folders uniquely rotate when hovered, providing a tactile, application-like feel.
- **Dark Mode Optimized**: Uses muted slate colors and transparent white borders for a modern, glass-like dark theme.

## Files
- `demo.html`: The HTML nested list structure.
- `style.css`: The styling powering the tree lines, icons, and hover effects.

## Usage
Wrap your nested `ul` and `li` elements with the `.ease-hierarchy-list` and `.ease-hierarchy-item` classes. Use the modifier classes `.ease-hierarchy-folder` or `.ease-hierarchy-file` on list items to automatically inject the corresponding icon.
