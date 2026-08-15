# Native `<dialog>` Modal Component

## What does this do?
Provides a fully accessible, zero-JavaScript-library modal component powered by the native HTML `<dialog>` element. It applies EaseMotion CSS styling, fluid entry/exit animations, and a blurred backdrop while letting the browser handle complex accessibility requirements like focus trapping and keyboard navigation (Esc to close).

## How is it used?

1. Add the `<dialog>` element to your HTML with the `.ease-modal` class.
2. Structure the content using `.ease-modal-header`, `.ease-modal-body`, and `.ease-modal-footer`.
3. Open it using native JS: `document.getElementById('myModal').showModal()`.
4. Close it using a native form submission `<form method="dialog">` or JS `dialog.close()`.

```html
<dialog id="myModal" class="ease-modal">
  <div class="ease-modal-header">
    <h2>Title</h2>
    <form method="dialog"><button class="ease-modal-close-btn">✕</button></form>
  </div>
  <div class="ease-modal-body">
    <p>Content goes here.</p>
  </div>
</dialog>
```

### Exit Animation Note
Native dialogs hide immediately upon `dialog.close()`. To allow a CSS exit animation to play, add the `.ease-modal-closing` class briefly before calling the native `.close()` method (a tiny JS snippet is provided in the demo for this).

## Why is it useful?
Modals are notoriously difficult to build accessibly from scratch. By styling the native `<dialog>` element, EaseMotion CSS gives developers a plug-and-play solution that adheres to the framework's "animation-first" philosophy with beautiful backdrop blurs and entry animations, without needing to import heavy third-party modal libraries.
