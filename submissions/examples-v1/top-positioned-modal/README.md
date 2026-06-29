# Top-Positioned Modal

This submission adds a top-aligned variant for modal dialogs. 

## What does this add?
By default, modals in EaseMotion CSS center both vertically and horizontally. This adds an `.ease-modal-top` class to position the modal at the top center of the viewport, which is a common UI pattern for notifications, confirmations, and lightweight prompts.

## How to use it?
Simply add the `ease-modal-top` class alongside `ease-modal-overlay`:

```html
<div class="ease-modal-overlay ease-modal-top" id="demo-modal">
  <div class="ease-modal">
    <!-- Modal content -->
  </div>
</div>
```

## Why does it fit EaseMotion CSS?
EaseMotion CSS focuses on lightweight, reusable UI components. This top-positioned variant adds significant layout flexibility for different types of dialogs without requiring developers to write custom CSS overrides or complex structural changes.
