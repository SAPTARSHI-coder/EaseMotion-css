# Engine Web Component Shadow DOM CSS Injector

## What does this do?
Enables `easemotion/engine/runtime.js` to automatically discover open Shadow DOM roots and inject animation stylesheets.

## How is it used?
```html
<custom-element>
  #shadow-root (open)
  <div em="fade-in duration-medium">Shadow Content</div>
</custom-element>
```

## Why is it useful?
Ensures zero-config `em=""` attributes work inside Web Component Shadow Roots without breaching encapsulation.
