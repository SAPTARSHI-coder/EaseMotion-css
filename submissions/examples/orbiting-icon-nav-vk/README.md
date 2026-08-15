# CSS Orbiting Icon Nav

A lightweight navigation component where icons smoothly orbit around a central hub using pure HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth continuous orbit animation
- Hover and keyboard focus support
- Orbit pauses when interacting with an icon
- Responsive on desktop, tablet, and mobile
- Supports `prefers-reduced-motion`
- Easy to customize with CSS variables

## Usage

Link the stylesheet in your HTML:

<link rel="stylesheet" href="style.css">

Add the navigation markup:

<nav class="orbit-nav" aria-label="Orbiting navigation">
  <div class="orbit-nav__ring">

    <div class="orbit-nav__hub">
      <span class="orbit-nav__hub-icon">✦</span>
      <span class="orbit-nav__hub-label">Menu</span>
    </div>

    <a href="#" class="orbit-nav__item orbit-nav__item--1" aria-label="Home">
      Home
    </a>

    <a href="#" class="orbit-nav__item orbit-nav__item--2" aria-label="Profile">
      Profile
    </a>

    <a href="#" class="orbit-nav__item orbit-nav__item--3" aria-label="Search">
      Search
    </a>

    <a href="#" class="orbit-nav__item orbit-nav__item--4" aria-label="Settings">
      Settings
    </a>

    <a href="#" class="orbit-nav__item orbit-nav__item--5" aria-label="Help">
      Help
    </a>

  </div>
</nav>

## Customization

The animation can be customized using CSS custom properties.

### Orbit Size

:root {
  --orbit-size: 360px;
  --icon-size: 54px;
  --orbit-radius: 135px;
  --hub-size: 100px;
  --orbit-duration: 18s;
}

### Change Orbit Speed

A smaller duration makes the icons orbit faster.

:root {
  --orbit-duration: 12s;
}

### Change Orbit Radius

Increase the radius to move the icons farther away from the central hub.

:root {
  --orbit-radius: 150px;
}

### Change Colors

:root {
  --bg: #0f172a;
  --surface: #1e293b;
  --icon-bg: #334155;
  --accent: #8b5cf6;
  --text: #f8fafc;
  --muted: #94a3b8;
}

## Accessibility

The navigation uses semantic links with `aria-label` attributes and supports keyboard navigation with `:focus-visible`.

The animation also respects users who prefer reduced motion:

@media (prefers-reduced-motion: reduce) {
  .orbit-nav__item {
    animation: none;
  }
}

## Browser Tested

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates a reusable motion-first navigation pattern using only HTML and CSS.

The orbit animation creates an engaging interaction without JavaScript while remaining lightweight, responsive, and accessible.

## License

This example is part of the EaseMotion CSS project.