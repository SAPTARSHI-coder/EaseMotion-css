# Native Dialog & Popover Transitions

A modern CSS example demonstrating smooth entry and exit transitions for native `<dialog>` and Popover API elements using `@starting-style` and `transition-behavior: allow-discrete`.

## Overview

Historically, animating elements that transition between rendered and non-rendered states required JavaScript timers, temporary classes, or animation libraries.

Modern CSS allows these native UI elements to participate in entry and exit transitions directly.

This example demonstrates two patterns:

- `ease-dialog-bounce`
- `ease-popover-slide-up`

Both use CSS for the visual transition.

## Features

- Native `<dialog>` entry and exit animation
- Native Popover API animation
- `@starting-style` entry baseline
- `transition-behavior: allow-discrete`
- `display` transition support
- `overlay` transition support
- Backdrop blur animation
- No animation timers
- No external dependencies
- `prefers-reduced-motion` support
- Responsive layout

## Dialog Example

```html
<dialog
  class="ease-dialog-bounce"
  aria-labelledby="dialog-title"
>
  <h2 id="dialog-title">
    Hello
  </h2>

  <p>
    This is a native dialog.
  </p>

  <button type="button">
    Close
  </button>
</dialog>
```

The native dialog is opened using the platform API:

```js
dialog.showModal();
```

The JavaScript only controls the native dialog lifecycle. It does not create, synchronize, or time the animation.

## Dialog Transition

The dialog uses a discrete transition for its rendering state:

```css
.ease-dialog-bounce {
  opacity: 0;
  transform:
    scale(0.94)
    translateY(12px);

  transition:
    opacity 320ms ease,
    transform 420ms
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      ),
    display 320ms allow-discrete,
    overlay 320ms allow-discrete;
}

.ease-dialog-bounce[open] {
  opacity: 1;

  transform:
    scale(1)
    translateY(0);
}
```

## `@starting-style`

`@starting-style` provides the initial style used when the dialog becomes rendered:

```css
@starting-style {
  .ease-dialog-bounce[open] {
    opacity: 0;

    transform:
      scale(0.94)
      translateY(12px);
  }
}
```

This allows the browser to transition the dialog from its entry state rather than instantly appearing at its final state.

## Popover Example

The Popover API can be used without JavaScript:

```html
<button
  popovertarget="demo-popover"
>
  Open popover
</button>

<div
  id="demo-popover"
  popover
  class="ease-popover-slide-up"
>
  Popover content
</div>
```

The browser controls the popover's open state.

The transition is defined through:

```css
.ease-popover-slide-up {
  opacity: 0;

  transform:
    translateY(18px)
    scale(0.97);

  transition:
    opacity 260ms ease,
    transform 360ms
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      ),
    display 260ms allow-discrete,
    overlay 260ms allow-discrete;
}

.ease-popover-slide-up:popover-open {
  opacity: 1;

  transform:
    translateY(0)
    scale(1);
}

@starting-style {
  .ease-popover-slide-up:popover-open {
    opacity: 0;

    transform:
      translateY(18px)
      scale(0.97);
  }
}
```

## Why `allow-discrete`?

Properties such as `display` have discrete values rather than continuous numerical values.

Normally, they cannot participate in a standard transition.

Using:

```css
transition-behavior: allow-discrete;
```

or the equivalent transition syntax:

```css
display 300ms allow-discrete;
```

allows the browser to coordinate those state changes with the visual transition.

## Why `overlay`?

Dialogs and popovers are placed in the browser's top layer.

Transitioning `overlay` keeps the element in the top layer while its visual exit animation completes instead of removing it immediately.

```css
overlay 300ms allow-discrete;
```

## Backdrop

The native dialog backdrop is animated separately:

```css
.ease-dialog-bounce::backdrop {
  background:
    rgb(0 0 0 / 0%);

  backdrop-filter:
    blur(0);

  transition:
    background-color 320ms ease,
    backdrop-filter 320ms ease;
}

.ease-dialog-bounce[open]::backdrop {
  background:
    rgb(0 0 0 / 56%);

  backdrop-filter:
    blur(5px);
}
```

## Accessibility

The example uses the native `<dialog>` element rather than recreating dialog semantics with arbitrary `<div>` elements.

The dialog can be closed with the native Escape interaction.

Interactive controls have visible keyboard focus styles.

Reduced-motion users are supported through:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-dialog-bounce,
  .ease-dialog-bounce::backdrop,
  .ease-popover-slide-up {
    transition: none;
  }
}
```

## Progressive Enhancement

These APIs are modern CSS/platform features.

In browsers without support for `@starting-style` or discrete transitions, the native elements still function normally; the advanced motion enhancement simply falls back to the browser's native presentation.

The component does not require a JavaScript animation library or a CSS framework.

## Design Philosophy

This example fits EaseMotion CSS because it is:

* **Human-readable** — class names clearly describe the interaction.
* **Animation-first** — the component exists to provide a purposeful motion pattern.
* **Composable** — the classes can be applied to native dialog and popover structures.
* **Lightweight** — no external dependencies.
* **Modern** — uses current platform capabilities rather than JavaScript animation workarounds.

## Demo

Open `demo.html` directly in a browser.

Use:

* **Open dialog** to test the native modal transition.
* **Open popover** to test the native Popover API transition.
* **Escape** to close the dialog.

No build step or development server is required.

## Files

```text
native-dialog-popover-transitions/
├── demo.html
├── style.css
└── README.md
```

## Contribution

This is a proposed EaseMotion CSS example.

The final EaseMotion class naming, timing values, tokens, and integration can be standardized by the repository maintainer.
