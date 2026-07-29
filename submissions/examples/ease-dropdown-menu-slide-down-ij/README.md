# Dropdown Menu Slide Down

A CSS component that creates a smooth sliding dropdown menu triggered by clicking a navigation item.

## What does this do?

Each navigation item in a horizontal bar reveals its associated dropdown panel with a downward slide animation when clicked. The animation uses `max-height` and `opacity` transitions, and dropdown links have staggered hover effects.

## How is it used?

Include the `style.css` stylesheet and use the following HTML structure:

```html
<nav class="dmsd-nav">
  <div class="dmsd-nav-item">
    <button class="dmsd-nav-btn" data-dropdown="dd-example">Label</button>
    <div class="dmsd-dropdown" id="dd-example">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
    </div>
  </div>
</nav>
```

Toggle the `.dmsd-open` class on the `.dmsd-dropdown` element to trigger the slide-down animation.

Customize the component with these CSS variables:

| Variable | Default | Description |
|---|---|---|
| `--dmsd-transition-duration` | `0.3s` | Speed of slide-down and fade-in |
| `--dmsd-bg-color` | `#ffffff` | Dropdown background |
| `--dmsd-item-hover-bg` | `#f3f4f6` | Hover background for links |
| `--dmsd-border-color` | `#e5e7eb` | Border color for nav and dropdown |

## Why is this useful?

Dropdown menus are a core UI pattern for navigation-heavy sites. This component keeps the animation lightweight (pure CSS transitions) and accessible, with a minimal JavaScript toggle that can be adapted to any framework or vanilla project.
