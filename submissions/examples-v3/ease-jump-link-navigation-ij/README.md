# Jump Link Navigation — EaseMotion CSS Component

**Issue:** [#36767](https://github.com/anomalyco/EaseMotion-css/issues/36767)

A dark-themed sticky navigation bar with smooth-scroll jump links. Click a link to smoothly scroll to the corresponding section. The active link is highlighted automatically based on scroll position, with an animated underline indicator.

## CSS Custom Properties

| Variable           | Default   | Description                        |
|--------------------|-----------|------------------------------------|
| `--nav-bg`         | `#1e1e2e` | Navigation background colour       |
| `--link-color`     | `rgba(255, 255, 255, 0.55)` | Default link text colour |
| `--active-color`   | `#7c5cfc` | Active/hover link colour           |
| `--scroll-duration` | `0.6s`   | Duration of the smooth scroll      |

## Usage

```html
<nav class="jump-nav">
  <ul class="jump-nav__list">
    <li class="jump-nav__item">
      <a class="jump-nav__link" href="#section-hero">Hero</a>
    </li>
    <!-- more links -->
  </ul>
</nav>

<section class="section" id="section-hero">...</section>
```

Include `style.css` and the JavaScript from `demo.html` for scroll-spy active-link tracking and smooth-scroll click handling.
