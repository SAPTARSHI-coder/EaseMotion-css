# Slide-Up Stepper

A lightweight, responsive **CSS Slide-Up Stepper** designed for product catalog layouts.

This component is built using only semantic HTML and pure CSS. No JavaScript or external frameworks are required.

## ✨ Features

* Pure HTML and CSS
* No JavaScript dependencies
* Slide-up product detail animation
* Hover interaction
* Keyboard focus interaction
* Responsive desktop, tablet and mobile layouts
* CSS custom properties for easy customization
* Uses `transform` and `opacity` for smooth animations
* Accessible `prefers-reduced-motion` support
* Semantic `<ol>` and `<li>` step structure
* Responsive typography using CSS `clamp()`

## 📁 Files

```text
slide-up-stepper/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Copy the `demo.html` and `style.css` files into your project.

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then create the stepper using the following structure:

```html
<ol class="stepper">
  <li class="stepper__item">
    <article class="step" tabindex="0">
      <div class="step__number">01</div>

      <div class="step__content">
        <span class="step__category">Category</span>
        <h3>Product Name</h3>

        <div class="step__details">
          <p>Product description goes here.</p>

          <a class="step__link" href="#">
            View product
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  </li>
</ol>
```

## 🎨 CSS Custom Properties

The component exposes several CSS custom properties for customization.

| Property                | Default                          | Purpose                 |
| ----------------------- | -------------------------------- | ----------------------- |
| `--stepper-bg`          | `#f5f5f2`                        | Page/stepper background |
| `--step-bg`             | `#ffffff`                        | Step background         |
| `--step-text`           | `#181818`                        | Primary text color      |
| `--step-muted`          | `#6f6f6a`                        | Secondary text color    |
| `--step-border`         | `#deded8`                        | Border color            |
| `--step-accent`         | `#181818`                        | Focus/interaction color |
| `--step-radius`         | `1.25rem`                        | Step border radius      |
| `--step-gap`            | `0.75rem`                        | Space between steps     |
| `--step-duration`       | `420ms`                          | Animation duration      |
| `--step-ease`           | `cubic-bezier(0.22, 1, 0.36, 1)` | Animation easing        |
| `--step-padding`        | `1.5rem`                         | Step inner spacing      |
| `--step-details-offset` | `1.25rem`                        | Space before details    |

### Example customization

```css
:root {
  --step-bg: #f8f8f8;
  --step-accent: #222;
  --step-radius: 0.75rem;
  --step-duration: 300ms;
}
```

## ♿ Accessibility

The component supports keyboard navigation using focusable step elements.

Each step uses `tabindex="0"` so users navigating with a keyboard can trigger the same visual state using `:focus-visible`.

The component also respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations and transitions are reduced */
}
```

On mobile layouts, product details remain visible instead of relying exclusively on hover.

## 📱 Responsive Behavior

### Desktop

Four steps are displayed in a horizontal layout.

### Tablet

The layout changes to two columns.

### Mobile

Steps are displayed in a single column and product details remain visible for better touch accessibility.

## ⚡ Performance

The animation primarily uses:

* `transform`
* `opacity`

These properties are generally preferable for smooth UI animations because they avoid repeatedly changing layout dimensions during the interaction.

## 🧩 Customization

The step content can be changed without modifying the animation logic.

You can customize:

* Product name
* Product category
* Description
* Product metadata
* Product links
* Number of steps
* Colors
* Spacing
* Border radius
* Animation duration
* Animation easing

## 📄 License

Part of the EaseMotion CSS project and follows the repository's licensing terms.
