# Floating Multi-Select Dropdown

Material Design inspired floating multi-select dropdown implemented with semantic HTML and pure CSS.

## Features

* Pure HTML and CSS
* Zero JavaScript dependencies
* Material Design inspired floating label
* Native `<details>` / `<summary>` interaction
* Multiple checkbox selection
* Smooth open/close animations
* EaseMotion CSS variables
* Responsive mobile, tablet, and desktop layouts
* Keyboard-friendly native controls
* `:focus-visible` support
* `prefers-reduced-motion` support
* No external dependencies

## Structure

```text
submissions/
└── examples/
    └── floating-multi-select-material/
        ├── demo.html
        ├── style.css
        └── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the component structure:

```html
<details class="multi-select">
  <summary class="select-trigger">
    <span class="select-value">
      Select technologies
    </span>

    <span class="select-icon" aria-hidden="true">
      ⌄
    </span>
  </summary>

  <div class="dropdown-menu">

    <label class="option">
      <input type="checkbox" name="technology" value="html">
      <span class="checkbox" aria-hidden="true"></span>
      <span class="option-label">HTML</span>
    </label>

  </div>
</details>
```

## EaseMotion Tokens

The component uses EaseMotion-style motion variables:

```css
:root {
  --em-motion-duration: 220ms;
  --em-motion-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

Existing project-level EaseMotion tokens can override these values.

For example:

```css
:root {
  --em-motion-duration: 300ms;
  --em-motion-easing: ease-in-out;
}
```

## Material Design Styling

The component follows Material Design inspired patterns:

* Floating field label
* Outlined input container
* Elevated dropdown surface
* Checkbox selection
* Focus states
* Ripple-free lightweight interaction
* Consistent spacing
* Clear visual hierarchy

## Accessibility

The component uses native interactive elements wherever possible.

### Keyboard Support

`<details>` and `<summary>` provide native keyboard interaction for opening and closing the dropdown.

Checkboxes remain native form controls and can be reached using keyboard navigation.

### Focus Visibility

The component provides visible focus indicators through:

```css
:focus-visible
```

### Reduced Motion

Animations are disabled/reduced when the user has enabled reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Design

### Desktop

The component uses the available container width while maintaining a comfortable dropdown width.

### Tablet

Spacing and component padding are reduced to better fit medium-sized screens.

### Mobile

The dropdown becomes fully fluid and receives a constrained maximum height to prevent it from extending beyond the viewport.

## Browser Compatibility

The implementation relies on widely supported HTML and CSS features:

* `<details>`
* `<summary>`
* CSS custom properties
* CSS Grid
* CSS Flexbox
* `:focus-visible`
* `prefers-reduced-motion`
* CSS animations

The component does not depend on JavaScript or external libraries.

## Testing Checklist

* [ ] Open dropdown with keyboard
* [ ] Navigate through checkbox options
* [ ] Select multiple options
* [ ] Verify visible focus state
* [ ] Test mobile viewport
* [ ] Test tablet viewport
* [ ] Test desktop viewport
* [ ] Test reduced-motion preference
* [ ] Test in Chromium
* [ ] Test in Firefox
* [ ] Test in Safari
* [ ] Verify no horizontal overflow
* [ ] Verify no JavaScript dependency

## Design Goals

This component follows EaseMotion principles:

1. Minimal dependencies
2. Token-driven motion
3. Responsive behavior
4. Accessible interaction
5. Progressive enhancement
6. Reusable CSS architecture
