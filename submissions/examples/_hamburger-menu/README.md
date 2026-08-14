# Pure CSS Hamburger Menu Animation

An accessible, lightweight UI component featuring a smooth CSS animation that morphs a 3-bar hamburger icon into an "X" close icon without JavaScript.

---

## Overview

Mobile navigation patterns rely heavily on hamburger buttons. This component provides a clean transition effect from the standard three-line menu icon to a close icon using pure CSS transforms and transitions. It utilizes the checkbox hack pattern to toggle open/closed navigation states natively.

---

## Features

- **100% Pure CSS:** Zero JavaScript required for state toggling or animations.
- **Accessible Design:**
  - Semantic HTML setup with `aria-label` and `role="button"`.
  - Accessible focus states using `:focus-visible` for keyboard navigation.
- **Hardware-Accelerated:** Built with CSS `transform` (`rotate`, `translateY`, `scaleX`) and `opacity` for 60fps performance.
- **Responsive & Modular:** Easily drop into headers, sidebars, or modal overlays.

---

## File Structure

```text
submissions/examples/_hamburger-menu/
├── demo.html    # Interactive preview
├── style.css    # Layout and animation styling
└── README.md    # Documentation
```

Usage

1.  HTML Markup
    <div class="mobile-frame">
      <header class="app-header">
        <div class="brand-logo">EaseMotion</div>

        <input
          type="checkbox"
          id="menu-toggle"
          class="menu-checkbox"
          aria-label="Toggle navigation menu"
        />

        <label for="menu-toggle" class="hamburger-btn" aria-hidden="true">
          <span class="bar top-bar"></span>
          <span class="bar mid-bar"></span>
          <span class="bar bot-bar"></span>
        </label>

        <nav class="nav-drawer" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#animations" class="nav-link">Animations</a></li>
          </ul>
        </nav>

      </header>
    </div>

2.  CSS Link
    Include the stylesheet in your document <head>:

<link rel="stylesheet" href="style.css" />

## Class Reference

| Class Name       | Description                                                          |
| :--------------- | :------------------------------------------------------------------- |
| `.mobile-frame`  | Outer container modeling a modern mobile card interface.             |
| `.app-header`    | Top navigation bar containing the brand and hamburger trigger.       |
| `.menu-checkbox` | Accessible checkbox managing binary open/closed menu state.          |
| `.hamburger-btn` | Clickable trigger containing the 3 icon bars.                        |
| `.bar`           | Shared baseline styles for top, middle, and bottom indicator bars.   |
| `.top-bar`       | Animates downward by 8.75px and rotates 45deg.                       |
| `.mid-bar`       | Fades out with opacity: 0 and collapses with scaleX(0).              |
| `.bot-bar`       | Animates upward by -8.75px and rotates -45deg.                       |
| `.nav-drawer`    | Navigation drawer expanding smoothly over the container when active. |

---

## Browser Support

| Browser         | Status    |
| :-------------- | :-------- |
| Google Chrome   | Supported |
| Mozilla Firefox | Supported |
| Microsoft Edge  | Supported |
| Apple Safari    | Supported |
| iOS / Android   | Supported |
