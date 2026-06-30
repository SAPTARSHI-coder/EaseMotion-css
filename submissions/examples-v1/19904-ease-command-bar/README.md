# CMD+K Keyboard Command Bar Component

A lightweight, high-fidelity command palette component supporting backdrop fade-in, panel scaling with elastic bezier curves, staggered item animations, and full keyboard navigation.

---

## 🎨 Overview

This submission showcases the implementation of a modern command/search modal palette (`ease-command-bar`) using vanilla HTML, CSS animations, and lightweight state-management JavaScript.

- **Backdrop Fade:** Smooth `opacity` + `backdrop-filter` transition creating a premium frosted-glass blur over the background layout.
- **Spring Scale-In Panel:** Centered search panel scaling from `0.93` with an elastic spring-like `cubic-bezier` curve.
- **Staggered Results:** Results list entries stagger their entrance animations using CSS Custom Properties (`--delay`) to compute transition delays dynamically.
- **Keyboard Navigation:** Full support for `CMD+K` / `Ctrl+K` to toggle, `Up/Down` arrow keys to highlight/navigate, `Enter` to confirm, and `ESC` to close.

---

## 🛠️ Usage

To integrate the command bar:

### CSS Classes

```css
/* Backdrop: fade in with frosted glass */
.cmd-backdrop.is-open {
  animation: backdropIn 0.2s ease forwards;
}

@keyframes backdropIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Panel: scale from center with spring */
.cmd-panel.is-open {
  animation: panelIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes panelIn {
  from {
    opacity: 0;
    transform: scale(0.93) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Results: stagger in with --delay custom property */
.cmd-result-item {
  animation: resultIn 0.22s ease var(--delay, 0ms) both;
}

@keyframes resultIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🔗 Setup Instructions

To view this example locally:

1. Clone or fetch the repository.
2. Navigate to `submissions/examples/19904-ease-command-bar/`.
3. Open `demo.html` in any web browser.
