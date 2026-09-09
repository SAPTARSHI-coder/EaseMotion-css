# Flex Wrap Navigation

## What does this do?
A pure-CSS responsive navigation bar whose links wrap onto multiple lines as the viewport shrinks, then collapse behind an accessible, keyboard-operable toggle button on small screens.

## How is it used?
```html
<header class="flexwrap-nav-wrapper">
  <nav class="flexwrap-nav" aria-label="Primary navigation">
    <a href="#" class="flexwrap-nav__brand">EaseMotion</a>

    <button
      class="flexwrap-nav__toggle"
      type="button"
      aria-expanded="false"
      aria-controls="primary-nav-list"
      id="nav-toggle"
    >
      <span class="flexwrap-nav__toggle-bar"></span>
      <span class="flexwrap-nav__toggle-bar"></span>
      <span class="flexwrap-nav__toggle-bar"></span>
      <span class="sr-only">Toggle navigation menu</span>
    </button>

    <ul class="flexwrap-nav__list" id="primary-nav-list">
      <li><a href="#" class="flexwrap-nav__link" aria-current="page">Home</a></li>
      <li><a href="#" class="flexwrap-nav__link">Docs</a></li>
      <!-- more links -->
    </ul>
  </nav>
</header>
```

A small enhancement script toggles the `is-open` class and `aria-expanded`
attribute on click, and closes the menu on <kbd>Escape</kbd>. All layout and
wrapping behavior is handled entirely by CSS (`flex-wrap`), so the component
degrades gracefully with JavaScript disabled — the full link list simply
stays visible instead of collapsing.

## Why is this useful?
Wrapping navigation is one of the most common responsive UI needs, and most
implementations reach for a JS-driven hamburger menu even when a simple
`flex-wrap` layout would do. This component gives EaseMotion CSS users a
lightweight, dependency-free pattern that:

- Wraps naturally at medium widths (no collapse needed yet)
- Collapses cleanly behind a toggle only when space is truly tight
- Ships with proper ARIA attributes (`aria-expanded`, `aria-controls`,
  `aria-current`) and full keyboard support out of the box

This fits EaseMotion's philosophy of pure-CSS-first, JS-optional UI
patterns that developers can drop in without pulling in a framework.

---
**Track:** `submissions/examples/`
**Author:** Daksh Garg ([@Daksh-Garg007](https://github.com/Daksh-Garg007))
