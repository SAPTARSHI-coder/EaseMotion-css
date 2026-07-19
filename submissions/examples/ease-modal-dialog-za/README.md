# CSS Modal Dialog

## What does this do?
Pure CSS modal dialog component using the checkbox hack. Features overlay backdrop with blur, smooth fade-in scale animation, close button, overlay click to dismiss, and footer with action buttons.

## How is it used?
```html
<input type="checkbox" id="my-modal" class="md-toggle"><div class="md-overlay"><label for="my-modal" class="md-overlay-close"></label><div class="md-modal"><div class="md-head"><h3>Title</h3><label for="my-modal" class="md-close">✕</label></div><div class="md-body">Content</div></div></div>
```

## Why is it useful?
Provides modal dialog functionality without JavaScript dependency. CSS-only toggle via checkbox hack. Smooth animations for open/close. Accessible overlay backdrop. Works on all modern browsers. Ideal for confirmations, alerts, forms, and detail views.
