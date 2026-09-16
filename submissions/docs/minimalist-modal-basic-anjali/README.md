# Minimalist Modal — Basic Usage

This guide explains how to use the EaseMotion CSS Minimalist Modal component.

The modal uses CSS and the `:target` pseudo-class, so the basic example does not require JavaScript.

## Basic Usage

### 1. Include the modal stylesheet

If you are using this component from the EaseMotion CSS repository, include the modal stylesheet:

```html
<link rel="stylesheet" href="../../../components/modals.css">
```

For a project where the component stylesheet is already available at `components/modals.css`, use:

```html
<link rel="stylesheet" href="components/modals.css">
```

### 2. Add a modal trigger

The modal can be opened by clicking a link whose `href` matches the modal's `id`.

```html
<a href="#basic-modal" class="demo-button">
  Open Modal
</a>
```

The `href="#basic-modal"` points to the modal element with the matching `id`:

```html
<div id="basic-modal" class="ease-modal-overlay">
```

The value after `#` must match the modal's `id`.

For example:

```text
href="#basic-modal"
        ↓
id="basic-modal"
```

### 3. Create the modal structure

A basic modal contains an overlay, modal container, header, body, and footer.

```html
<div id="basic-modal" class="ease-modal-overlay">

  <div
    class="ease-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >

    <header class="ease-modal-header">
      <h2 id="modal-title">Welcome</h2>

      <a
        href="#"
        class="ease-modal-close"
        aria-label="Close modal"
      >
        &times;
      </a>
    </header>

    <div class="ease-modal-body">
      <p id="modal-description">
        This is the modal content.
      </p>
    </div>

    <footer class="ease-modal-footer">
      <a href="#">Close</a>
    </footer>

  </div>

</div>
```

## CSS Class Naming

### `.ease-modal-overlay`

Creates the full-screen backdrop and controls the modal visibility.

### `.ease-modal`

Defines the main modal container, including its size, background, shadow, layout, and animation.

### `.ease-modal-header`

Contains the modal title and close control.

### `.ease-modal-body`

Contains the main modal content.

### `.ease-modal-footer`

Contains actions such as Close, Cancel, Save, or Confirm.

### `.ease-modal-close`

Styles the modal close control.

## Modifier Classes

Modifier classes can be added alongside the base `.ease-modal` class to change the modal's appearance or animation.

### Small Modal

```html
<div class="ease-modal ease-modal-sm">
```

### Large Modal

```html
<div class="ease-modal ease-modal-lg">
```

### Slide Animation

```html
<div class="ease-modal ease-modal-slide">
```

### Fade Animation

```html
<div class="ease-modal ease-modal-fade">
```

### Zoom Animation

```html
<div class="ease-modal ease-modal-zoom">
```

Modifiers can also be combined:

```html
<div class="ease-modal ease-modal-lg ease-modal-zoom">
```

## Custom CSS Variables

The modal component uses EaseMotion CSS variables that can be overridden in your own stylesheet.

For example:

```css
:root {
  --ease-z-modal: 2000;
  --ease-speed-medium: 0.3s;
}
```

Other variables control colors, spacing, border radius, shadows, and easing.

Keep custom overrides in your own stylesheet instead of modifying the EaseMotion component source.

## Accessibility

Use the appropriate dialog attributes:

```html
<div
  class="ease-modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
```

Use `aria-labelledby` to connect the dialog to its title:

```html
<h2 id="modal-title">Welcome</h2>
```

Use `aria-describedby` to connect the dialog to its description:

```html
<p id="modal-description">
  Modal description.
</p>
```

Always provide a clearly labelled close control:

```html
<a href="#" aria-label="Close modal">&times;</a>
```

The `aria-label` provides an accessible name for the close control.

## Keyboard Interaction

The basic CSS-only example uses the URL fragment technique and does not provide complete JavaScript-based focus management.

For production applications, JavaScript can be added to:

* Move focus into the modal when it opens.
* Return focus to the trigger when it closes.
* Support the `Escape` key.
* Prevent inappropriate background interaction.
* Manage focus trapping when required.

The basic CSS-only example should therefore not be considered a complete accessible dialog implementation by itself.

## Responsive Behavior

The modal includes responsive styles for smaller screens.

Below `640px`:

* The modal uses a wider percentage-based width.
* Internal spacing is reduced.
* Footer actions can stack vertically.
* The modal height remains limited to the viewport.

## Reduced Motion

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-modal-overlay,
  .ease-modal,
  .ease-modal-slide,
  .ease-modal-fade,
  .ease-modal-zoom {
    transition: none !important;
    transform: none !important;
  }
}
```

## Complete Example

```html
<a href="#basic-modal" class="demo-button">
  Open Modal
</a>

<div id="basic-modal" class="ease-modal-overlay">

  <div
    class="ease-modal"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >

    <header class="ease-modal-header">
      <h2 id="modal-title">Welcome</h2>

      <a
        href="#"
        class="ease-modal-close"
        aria-label="Close modal"
      >
        &times;
      </a>
    </header>

    <div class="ease-modal-body">
      <p id="modal-description">
        This is a basic EaseMotion CSS modal.
      </p>
    </div>

    <footer class="ease-modal-footer">
      <a href="#">Close</a>
    </footer>

  </div>

</div>
```

## Notes

This documentation demonstrates the existing EaseMotion CSS modal component.

It does not modify the core modal implementation.
