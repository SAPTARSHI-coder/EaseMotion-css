## Overview

The Nested Documentation Sidebar is a documentation-focused navigation component inspired by modern developer documentation websites. It provides a clean hierarchical structure with expandable and collapsible sections, making it easy to organize large amounts of documentation content.

The sidebar is built using pure HTML, CSS, and JavaScript and dynamically generates navigation items from a configurable data structure. Sections such as Variables, Utilities, and Animations can contain multiple nested pages, similar to the navigation experience found in popular documentation platforms.

---

## Features

- Multi-level nested navigation
- Expandable and collapsible menu sections
- Active page highlighting
- Smooth expand/collapse animations
- Documentation-style layout
- Dark theme inspired by modern developer docs
- Dynamically generated from JavaScript data
- Unlimited nesting depth
- Lightweight and dependency-free
- Responsive and easy to customize

---

## Usage

1. Include the component files in your project:
   - `index.html`
   - `style.css`
   - `script.js`

2. Configure the sidebar structure inside `sidebarData`:

```javascript
{
  title: "Utilities",
  children: [
    { title: "Flexbox" },
    { title: "Grid" },
    { title: "Spacing" }
  ]
}
```

3. Any item containing a `children` array automatically becomes a collapsible section.

4. Nested items can contain additional child items, allowing for unlimited documentation hierarchy levels.

5. Customize styling through CSS variables and component classes to match your project's design system.

---

## Why it fits EaseMotion CSS

EaseMotion CSS documentation contains multiple categories such as Variables, Utilities, Animations, Components, and Contributing guides. Many of these sections contain several subtopics that benefit from a hierarchical navigation structure.

This sidebar improves documentation usability by:

- Organizing related documentation pages into collapsible groups
- Reducing visual clutter for large documentation sets
- Making navigation faster and more intuitive
- Following familiar documentation patterns used by modern developer platforms
- Providing a scalable structure that can grow alongside the EaseMotion CSS documentation

The component aligns well with EaseMotion CSS by offering a clean, developer-friendly navigation experience while maintaining a lightweight implementation using only HTML, CSS, and JavaScript.
