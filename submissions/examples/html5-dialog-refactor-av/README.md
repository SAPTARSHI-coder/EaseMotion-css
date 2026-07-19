# HTML5 `<dialog>` Modal Architecture Refactor

## What does this do?
Proposes a complete structural rewrite of the framework's modal architecture to completely abandon legacy `<div>`-based overlays in favor of the native, modern HTML5 `<dialog>` element API.

## How is it used?
Maintainers must drastically trim down both `components/modals.css` and `core/modal.js`.

Currently, the framework uses a deeply nested, hacky HTML structure to simulate modals and their backdrops:
```html
<!-- ❌ BAD: Legacy DIV Soup -->
<div class="ease-modal-overlay">
  <div class="ease-modal-content" role="dialog" aria-modal="true">
    ...
  </div>
</div>
```

This entire structure must be completely ripped out and replaced with the native semantic `<dialog>` element:
```html
<!-- ✅ GOOD: Native HTML5 Dialog -->
<dialog class="ease-modal">
  ...
</dialog>
```

In `components/modals.css`, the giant `.ease-modal-overlay` class must be deleted entirely. Instead, the backdrop styling must be applied to the native `::backdrop` pseudo-element:
```css
.ease-modal::backdrop {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
}
```

## Why is it useful?
Currently, EaseMotion relies on an incredibly fragile, thousands-of-lines-long custom JavaScript file (`core/modal.js`) simply to do three things: trap keyboard focus inside the modal, listen for the `Escape` key, and toggle visibility classes on a giant `<div>` overlay. 

This legacy approach is highly prone to bugs, focus-trapping failures, and SPA memory leaks. By migrating to the native HTML5 `<dialog>` API, developers simply call `modal.showModal()`. The browser itself will automatically render the `::backdrop`, perfectly trap keyboard focus without requiring any heavy JavaScript libraries, instantly place the modal on the top-most `z-index` layer, and automatically close the modal when the `Escape` key is pressed. This refactor will allow us to delete massive amounts of technical debt from both the CSS and JS core files while phenomenally improving WCAG accessibility natively.
