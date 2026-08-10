# Magnetic Button

A lightweight, CSS-only magnetic button hover interaction for EaseMotion CSS.

The component creates a convincing magnetic effect without JavaScript by dividing an invisible container into a **3×3 hover grid**. Each surrounding grid cell represents a direction and moves the central button toward the cursor.

## Features

* Pure HTML and CSS
* No JavaScript or external dependencies
* Invisible 3×3 hover interaction grid
* Supports all eight directional movements
* Smooth `transform` animations
* Responsive across different screen sizes
* Keyboard-accessible button
* `prefers-reduced-motion` support
* Customizable with CSS custom properties

## File Structure

```text
magnetic-button/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include `style.css` and use the following HTML structure:

```html
<div class="magnetic-area">

  <div class="hover-zone zone-tl" aria-hidden="true"></div>
  <div class="hover-zone zone-tc" aria-hidden="true"></div>
  <div class="hover-zone zone-tr" aria-hidden="true"></div>

  <div class="hover-zone zone-ml" aria-hidden="true"></div>

  <a href="#" class="magnetic-button">
    Explore
    <span aria-hidden="true">→</span>
  </a>

  <div class="hover-zone zone-mr" aria-hidden="true"></div>

  <div class="hover-zone zone-bl" aria-hidden="true"></div>
  <div class="hover-zone zone-bc" aria-hidden="true"></div>
  <div class="hover-zone zone-br" aria-hidden="true"></div>

</div>
```

## How It Works

The `.magnetic-area` is divided into a **3×3 CSS Grid**.

The central cell contains the button, while the eight surrounding cells act as invisible hover zones.

```text
┌─────────┬─────────┬─────────┐
│   TL    │   TC    │   TR    │
├─────────┼─────────┼─────────┤
│   ML    │ BUTTON  │   MR    │
├─────────┼─────────┼─────────┤
│   BL    │   BC    │   BR    │
└─────────┴─────────┴─────────┘
```

Each hover zone represents one direction.

CSS's **general sibling combinator (`~`)** is used to move the button when a zone is hovered.

For example:

```css
.zone-tl:hover ~ .magnetic-button {
  transform: translate(-10px, -10px);
}
```

When the cursor enters the top-left zone, the button moves toward the top-left.

The same technique is used for all eight surrounding zones.

## Customization

The effect can be customized through CSS custom properties.

### Magnetic Distance

Controls how far the button moves:

```css
:root {
  --ease-magnetic-distance: 10px;
}
```

Increase the value for a stronger magnetic effect:

```css
:root {
  --ease-magnetic-distance: 16px;
}
```

### Border Radius

Customize the button's corner radius:

```css
:root {
  --ease-magnetic-radius: 14px;
}
```

### Animation

Customize the movement timing and easing:

```css
:root {
  --ease-magnetic-transition:
    220ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Accessibility

The magnetic interaction is purely decorative and does not interfere with the button's functionality.

The invisible hover zones use:

```html
aria-hidden="true"
```

so they are ignored by assistive technologies.

The actual button remains a normal interactive `<a>` or `<button>` element and supports keyboard focus.

The component also respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .magnetic-button {
    transition: none;
  }
}
```

## Responsive Design

The interaction area adapts to smaller screens using a responsive media query.

The button remains usable on desktop, tablet, and mobile layouts.

## Browser Support

The component uses widely supported CSS features:

* CSS Grid
* CSS Custom Properties
* CSS Transforms
* CSS Transitions
* General sibling combinator
* Media queries

It is designed for modern versions of:

* Chrome
* Firefox
* Edge
* Safari

## Why It Fits EaseMotion CSS

The Magnetic Button follows the EaseMotion CSS philosophy of creating expressive interactions using lightweight, dependency-free CSS.

Instead of relying on JavaScript for cursor tracking, it uses a simple invisible hover grid to approximate the cursor's direction. This keeps the implementation small, performant, and easy to understand.

The technique can also be adapted for other directional hover interactions where an element needs to respond to the approximate position of the pointer.

## Demo

Open `demo.html` directly in a browser to see the interaction.

No development server or JavaScript runtime is required.

## License

Part of the EaseMotion CSS showcase submissions.
