# Responsive Toggle Usage Guide

The **Responsive Toggle** is a pure CSS component designed to provide a smooth, accessible, and scalable switch for toggling states (such as Dark/Light mode, ON/OFF settings, etc.) without relying on JavaScript.

## Table of Contents
- [Basic Usage](#basic-usage)
- [Accessibility](#accessibility)
- [Customization (Theming)](#customization-theming)
- [Responsive Behavior](#responsive-behavior)

---

## Basic Usage

To implement the Responsive Toggle, you need the following HTML structure. It relies on the classic "Checkbox Hack" where a visually hidden `<input type="checkbox">` manages the state, and a `<label>` provides the clickable interface.

```html
<!-- Include this in your HTML -->
<label class="responsive-toggle">
  <!-- The hidden native checkbox -->
  <input type="checkbox" id="my-toggle" name="my-toggle" class="toggle-checkbox">
  
  <!-- The visual track and thumb -->
  <span class="toggle-track">
    <span class="toggle-thumb"></span>
  </span>
  
  <!-- Optional: Screen reader accessible text -->
  <span class="sr-only">Toggle Setting</span>
</label>
```

When the user clicks anywhere on the `<label>`, the native checkbox is checked. The CSS then uses the sibling selector (`:checked ~ .toggle-track`) to animate the background color and move the `.toggle-thumb`.

## Accessibility

Because this component uses a native `<input type="checkbox">`, it is highly accessible by default:
- **Keyboard Navigation:** Users can focus the toggle using the `Tab` key and toggle it using the `Spacebar`.
- **Screen Readers:** Ensure you provide an `id` on the input and match it with a `<label for="id">`, or wrap the input inside the label (as shown above) with `.sr-only` descriptive text.
- **Focus Rings:** The CSS includes `:focus-visible` styling to ensure keyboard users clearly see when the toggle is focused.

## Customization (Theming)

The toggle is built using CSS Custom Properties (Variables), making it extremely easy to drop into any project and match your brand colors.

You can override these variables in your root or on the specific component wrapper:

```css
:root {
  /* Dimensions */
  --toggle-width: 60px;
  --toggle-height: 32px;
  --toggle-padding: 4px; /* Space between thumb and track edge */
  
  /* Colors - Default (Off) */
  --toggle-bg-off: #cbd5e1;
  --toggle-thumb-off: #ffffff;
  
  /* Colors - Active (On) */
  --toggle-bg-on: #3b82f6;
  
  /* Animation */
  --toggle-transition-speed: 0.3s;
}
```

### Dark Mode Integration

The component automatically adapts if you are using an OS-level media query. You can also hook it into your own data attribute system:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --toggle-bg-off: #475569;
    --toggle-bg-on: #8b5cf6;
  }
}
```

## Responsive Behavior

The "Responsive" aspect of this toggle means it effortlessly scales. Because the dimensions are defined by variables and internal math using `calc()`, you can resize the toggle across breakpoints simply by changing the `--toggle-width` and `--toggle-height` variables inside your media queries.

```css
/* Make the toggle slightly smaller on mobile devices */
@media (max-width: 600px) {
  .responsive-toggle {
    --toggle-width: 48px;
    --toggle-height: 26px;
    --toggle-padding: 3px;
  }
}
```
The thumb size and travel distance will automatically recalculate to perfectly fit the new dimensions without breaking the layout.
