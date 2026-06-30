# Peekable Sidebar Menu

A CSS-only peekable sidebar menu with always-visible icons and smooth hover expansion.

## Overview

This component provides a modern dashboard navigation pattern where the sidebar remains partially visible when collapsed and expands gracefully on hover. The menu keeps icons visible at all times and reveals labels only during expansion.

## Features

- Pure HTML + CSS implementation
- Collapsed sidebar with visible navigation icons
- Smooth hover-based expansion
- Labels slide in during expansion
- Active item styling and soft hover effects
- Modern dashboard visual style
- Responsive layout for desktop and mobile

## Usage

1. Copy `demo.html` and `style.css` into the new submission folder.
2. Open `demo.html` in a browser.
3. Update navigation items and labels to fit your app.

```html
<link rel="stylesheet" href="style.css" />
<div class="layout-shell">
  <aside class="peek-sidebar">
    <!-- sidebar content -->
  </aside>
  <main class="content-area">
    <!-- page content -->
  </main>
</div>
```

## Customization

- Adjust the collapsed width by changing `.peek-sidebar { width: 88px; }`.
- Modify the expanded width via `.peek-sidebar:hover { width: 248px; }`.
- Update color accents using `--accent` and `--accent-alt`.
- Customize hover animation timing in the transition rules.

## Why it fits EaseMotion CSS

This submission matches EaseMotion CSS by delivering a polished, motion-led UI pattern using only CSS. It enhances dashboard navigation with subtle animation and a startup-friendly aesthetic while staying self-contained and dependency-free.
