# Pure CSS 3D Fold-Out Origami Menu

## What does this add?

A lightweight navigation menu that unfolds with a 3D origami-style paper-fold animation.

The interaction uses only HTML and CSS. No JavaScript is required.

## How does it work?

A visually hidden checkbox controls the menu state.

When the checkbox is checked:

- The navigation rotates into view using `rotateX()`.
- Folded pseudo-elements unfold into position.
- Navigation links fade and slide into place.
- The menu icon transforms into a close icon.

## Usage

```html
<div class="origami-menu">
  <input type="checkbox" id="origami-toggle" class="origami-toggle" />

  <label for="origami-toggle" class="origami-trigger">
    <span class="trigger-icon">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <span class="trigger-label">Menu</span>
  </label>

  <nav class="origami-nav">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</div>