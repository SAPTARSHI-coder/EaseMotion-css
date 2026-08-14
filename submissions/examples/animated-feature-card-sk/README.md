# Animated Feature Card

A responsive grid of animated feature cards with gradient accent icons and a hover lift effect. Built with pure CSS — no JavaScript required.

## Features

- Pure CSS — zero JavaScript dependencies
- CSS Grid layout (3 columns, collapses to 2 then 1 on smaller screens)
- Custom properties for easy themeing
- Hover lift effect with `translateY(-8px)` and enhanced shadow
- Gradient accent backgrounds on icon circles
- Icon scale animation on card hover
- BEM naming convention
- 6 ready-to-use feature cards
- Dark theme by default

## Usage

```html
<link rel="stylesheet" href="style.css" />

<section class="feature-cards">
  <div class="feature-cards__container">
    <h2 class="feature-cards__heading">Why Choose Us</h2>
    <p class="feature-cards__subheading">Subtitle here</p>

    <div class="feature-cards__grid">
      <article class="feature-cards__card">
        <div class="feature-cards__icon-circle feature-cards__icon-circle--blue">
          <!-- icon -->
        </div>
        <h3 class="feature-cards__title">Feature Title</h3>
        <p class="feature-cards__description">Feature description.</p>
      </article>
      <!-- more cards -->
    </div>
  </div>
</section>
```

## Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--feature-cards-bg` | `#0f172a` | Page background |
| `--feature-cards-card-bg` | `#1e293b` | Card background |
| `--feature-cards-text` | `#f1f5f9` | Primary text color |
| `--feature-cards-text-secondary` | `#94a3b8` | Secondary text color |
| `--feature-cards-radius` | `16px` | Card border radius |
| `--feature-cards-transition` | `0.3s ease` | Default transition |

### Icon Color Modifiers

- `--blue` (`#3b82f6`)
- `--green` (`#22c55e`)
- `--purple` (`#a855f7`)
- `--orange` (`#f59e0b`)
- `--pink` (`#ec4899`)
- `--teal` (`#14b8a6`)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 13.1+
- Edge 79+

---

Created by **@saurabhhhcodes**
