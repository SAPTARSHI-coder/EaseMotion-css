# Morph Share Button

A responsive **Morph Share Button** component built with pure HTML and CSS for the EaseMotion CSS library. The button smoothly morphs into a row of social sharing icons on hover, creating an engaging and modern interaction suitable for news portals, blogs, and landing pages.

## Features

- 🎨 Pure HTML & CSS (No JavaScript)
- ✨ Smooth morphing hover animation
- 📱 Responsive design
- ♿ Accessible structure with ARIA labels
- 🚀 Lightweight and easy to customize
- 🎯 Uses reusable EaseMotion-style variables and transitions

## Folder Structure

```
morph-share-button-srujana-manda/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Ensure `style.css` is in the same directory.
3. Hover over the **Share** button to see the morph animation and social icons.

## Component Structure

```html
<div class="ease-share-wrapper">
  <button class="ease-share-btn">
    <span class="share-text">Share</span>

    <div class="share-icons">
      <a href="#" class="icon twitter">T</a>
      <a href="#" class="icon facebook">F</a>
      <a href="#" class="icon linkedin">in</a>
      <a href="#" class="icon mail">@</a>
    </div>
  </button>
</div>
```

## Customization

You can easily customize:

- Colors using the CSS variables in `:root`
- Animation speed
- Button size
- Border radius
- Shadow effects
- Icon styles

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Human-readable class names
- Reusable CSS variables
- Smooth animation-first interactions
- Responsive and accessible implementation
- No JavaScript dependency
- Easy integration into existing projects

## Issue

Created for **Issue #42327 – Add Morph Share Button Component**.