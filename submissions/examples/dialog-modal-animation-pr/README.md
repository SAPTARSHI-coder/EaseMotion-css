# CSS Native Dialog Modal Animation

### What does this do?
Demonstrates smooth open/close scaling animations on the native HTML `<dialog>` element and blurry fade mechanics across its `::backdrop` pseudo-element.

### How is it used?
Target the `dialog` layout and its corresponding `[open]` selector while implementing `@starting-style` and `allow-discrete` properties to configure transitions across structural elements.

### Why is it useful?
It creates accessible, zero-dependency modal interactions that follow top-layer rules natively without introducing external accessibility libraries or messy JavaScript coordinate calculations.