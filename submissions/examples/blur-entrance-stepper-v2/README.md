# Blur-Entrance Stepper

A lightweight **CSS Blur-Entrance Stepper** designed for modern product catalog layouts.

The component uses pure HTML and CSS to reveal product information through a combination of blur, opacity, scale and entrance transitions.

No JavaScript or external animation libraries are required.

## ✨ Features

* Pure HTML and CSS
* No JavaScript dependencies
* Blur-entrance animation
* Opacity and scale transitions
* Hover interaction
* Keyboard focus support
* Responsive desktop, tablet and mobile layouts
* CSS custom properties
* Semantic HTML structure
* `prefers-reduced-motion` support
* Touch-friendly mobile behavior

## 📁 Files

```text
blur-entrance-stepper/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Use the following structure for each step:

```html
<ol class="stepper">
  <li class="stepper__item">
    <article class="step" tabindex="0">

      <div class="step__number">01</div>

      <div class="step__content">
        <span class="step__category">
          Category
        </span>

        <h3>Product Name</h3>

        <div class="step__details">
          <p>
            Product description.
          </p>

          <a class="step__link" href="#">
            Explore
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

    </article>
  </li>
</ol>
```

## 🎨 CSS Custom Properties

The component exposes the following CSS custom properties:

| Property               | Default                          | Description             |
| ---------------------- | -------------------------------- | ----------------------- |
| `--stepper-bg`         | `#f3f3f0`                        | Main background         |
| `--step-bg`            | `#ffffff`                        | Step background         |
| `--step-text`          | `#181818`                        | Primary text            |
| `--step-muted`         | `#70706b`                        | Secondary text          |
| `--step-border`        | `#deded8`                        | Step border             |
| `--step-accent`        | `#181818`                        | Interaction/focus color |
| `--step-radius`        | `1.25rem`                        | Card border radius      |
| `--step-gap`           | `0.75rem`                        | Gap between steps       |
| `--step-padding`       | `1.5rem`                         | Inner card spacing      |
| `--blur-distance`      | `12px`                           | Initial blur amount     |
| `--entrance-distance`  | `20px`                           | Initial vertical offset |
| `--entrance-scale`     | `0.96`                           | Initial content scale   |
| `--animation-duration` | `500ms`                          | Animation duration      |
| `--animation-ease`     | `cubic-bezier(0.22, 1, 0.36, 1)` | Animation easing        |

## 🔧 Customization

Animation intensity can easily be adjusted.

For a stronger blur effect:

```css
:root {
  --blur-distance: 18px;
}
```

For a faster animation:

```css
:root {
  --animation-duration: 300ms;
}
```

For a larger entrance movement:

```css
:root {
  --entrance-distance: 30px;
}
```

## 🎬 Animation Behavior

When a step is not active, its product details are:

* partially hidden
* blurred
* slightly scaled down
* vertically offset

On hover or keyboard focus, the details transition to:

* full opacity
* zero blur
* normal scale
* original position

The primary animated properties are `opacity`, `filter` and `transform`.

## ♿ Accessibility

Each step uses:

```html
tabindex="0"
```

This allows keyboard users to focus on individual steps and trigger the same visual interaction.

The component also provides a reduced-motion mode:

```css
@media (prefers-reduced-motion: reduce) {
  /* Motion is reduced */
}
```

When reduced motion is enabled, product details remain visible without relying on animated blur or movement.

## 📱 Responsive Behavior

### Desktop

Four product steps are displayed in a row.

### Tablet

The layout changes to two columns.

### Mobile

The layout changes to one column.

Product details remain visible on mobile because hover interactions are not reliable on touch devices.

## ⚡ Performance

The animation uses CSS transitions and primarily animates:

* `transform`
* `opacity`
* `filter`

No JavaScript event listeners or external animation libraries are required.

## 🧩 Customization Options

The component can be adapted for:

* Product catalogs
* Onboarding flows
* Product comparisons
* Service steps
* Feature showcases
* Portfolio sections
* E-commerce interfaces

Content, colors, spacing, blur intensity, animation duration and easing can all be customized through CSS.

## 📄 License

Part of the EaseMotion CSS project and follows the repository's licensing terms.
