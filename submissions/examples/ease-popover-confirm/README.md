# ease-popover-confirm

A lightweight inline confirmation popover component built with HTML, CSS, and vanilla JavaScript.
This submission provides a reusable confirmation dialog that opens close to a trigger button and supports accessible keyboard navigation.

## Features

- Accessible inline dialog with `role="dialog"`
- `aria-expanded`, `aria-labelledby`, and `aria-describedby` support
- Smooth fade and scale animation for open/close transitions
- Close on cancel, confirm, outside click, or Escape key
- Focus is moved into the popover when opened and returned to the trigger when closed
- Keyboard-friendly: Enter/Space opens trigger, Tab cycles inside the popover, Escape closes
- Responsive layout for narrow screens
- Clean rounded design with subtle shadows and a red destructive action button

## Folder structure

```text
submissions/examples/ease-popover-confirm/
├── demo.html
├── style.css
├── script.js
└── README.md
```

## Installation

No build tools are required. Open `demo.html` directly in a browser to view the component.

## Usage

1. Open `demo.html` in a browser.
2. Click the **Delete item** button to open the popover.
3. Choose **Cancel** or **Delete** to close the popover.

### Example HTML

```html
<button
  id="popover-trigger"
  type="button"
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="confirm-popover"
>
  Delete item
</button>

<div
  id="confirm-popover"
  class="confirm-popover"
  role="dialog"
  aria-labelledby="popover-title"
  aria-describedby="popover-description"
  hidden
>
  <!-- content -->
</div>
```

### Example JavaScript

```js
triggerButton.addEventListener('click', togglePopover);
confirmButton.addEventListener('click', closePopover);
cancelButton.addEventListener('click', closePopover);
```

## Accessibility

- Uses `role="dialog"` for the popover container
- `aria-labelledby` and `aria-describedby` provide a title and description
- Trigger button uses `aria-expanded` and `aria-controls`
- Escape key closes the popover
- Focus is trapped inside the popover while open
- Focus returns to the trigger after close

## Customization

- Update button colors in `style.css` to match your brand palette
- Adjust the `popover-content` width or border radius for tighter layouts
- Add additional dialog actions by extending the `.popover-actions` container

## Browser compatibility

Tested with modern browsers that support CSS transitions, `position: absolute`, and standard DOM focus management. The example is designed for production-ready behavior in Chrome, Firefox, Safari, and Edge.
