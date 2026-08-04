# Scrollable Modal Fix for Small Screens (#55345)

A CSS-only modal that correctly scrolls when its content exceeds the viewport height on small screens. Demonstrates the fix for the "Modal Cannot Be Scrolled on Small Screens" bug.

## The Bug

On small viewports, modal content that overflows the available height was not scrollable. The root cause is that in a `display: flex; flex-direction: column` container, flex children default to `min-height: auto`, which prevents them from shrinking below their content height. This means `overflow-y: auto` never activates.

## The Fix

The key CSS properties that enable scrolling:

```css
.modal-dialog {
    max-height: 90vh;        /* Constrain to viewport */
    display: flex;
    flex-direction: column;
}

.modal-body {
    flex: 1;                 /* Fill remaining space */
    min-height: 0;           /* Override default min-height: auto */
    overflow-y: auto;        /* Enable scroll when content overflows */
}

.modal-header,
.modal-footer {
    flex: 0 0 auto;          /* Don't shrink header/footer */
}
```

The critical line is `min-height: 0` on `.modal-body`. Without it, the flex child refuses to shrink below its intrinsic content height, so `overflow-y: auto` never triggers.

## Features

- Pure HTML & CSS implementation (checkbox hack)
- Smooth zoom-in animation
- Fully responsive — works on 320px+ viewports
- Accessibility: dialog role, ARIA labels, keyboard-friendly
- `prefers-reduced-motion` support
- No JavaScript required

## Files

```text
submissions/examples/55345-modal-scroll-small-screens/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern web browser.
2. Click **Open Long Modal** to see the modal with long content.
3. On small screens, scroll through the modal body content.
4. Click **Accept** / **Decline** or the **×** button to close.

## Browser Support

All modern browsers supporting:

- CSS Custom Properties
- Flexbox
- `min-height` on flex children
- CSS Transitions
