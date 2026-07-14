# Ease Animated Responsive Navigation Bar

## What does this do?
A fully responsive navigation bar that transitions smoothly from transparent to solid on scroll, collapses to a hamburger menu on mobile with a smooth slide-down animation, and highlights the active link with an animated underline indicator. Features a dropdown mega menu with fade-in animation.

## How is it used?
```html
<nav class="ease-navbar" id="mainNav">
  <div class="ease-navbar__brand">⚡ EaseMotion</div>
  <div class="ease-navbar__menu" id="navMenu">
    <a href="#" class="ease-navbar__link active">Home</a>
    <div class="ease-navbar__dropdown">
      <a href="#" class="ease-navbar__link ease-navbar__link--dropdown">Examples ▾</a>
      <div class="ease-navbar__dropdown-menu">
        <a href="#" class="ease-navbar__dropdown-item">Animations</a>
      </div>
    </div>
  </div>
  <button class="ease-navbar__hamburger" id="navHamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
```
A small amount of vanilla JS toggles the `.scrolled` class on scroll and the `.open` class on hamburger click (included in `demo.html`).

## Why is it useful?
Navigation bars are the most critical UI component on any website. This fits EaseMotion's animation-first philosophy — scroll transitions, mobile menu animations, and active link indicators make navigation feel polished and professional.
