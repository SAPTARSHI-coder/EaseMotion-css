# Field-Sizing Content Utility

Introduces the modern intrinsic form control auto-expansion token (`.ease-field-sizing-content`) under issue #15167.

## Functional Mechanics

- **The Problem:** By default, HTML text inputs and textareas have rigid, fixed initial dimensions. Making textareas auto-grow vertically as users type has historically required bulky JavaScript calculation scripts, scrolling height math handlers, or hidden element cloning frameworks that hurt client-side performance.
- **The Solution:** Leverages cutting-edge browser-native sizing specs. The `.ease-field-sizing-content` utility utilizes the CSS `field-sizing: content` property. This prompts the rendering engine to calculate element heights and widths based strictly on its inner text content value matrix, providing smooth, dependency-free adjustments natively.

## Usage Layout Structure
```html
<textarea class="ease-field-sizing-content"></textarea>
<input type="text" class="ease-field-sizing-content" />
```

## Browser Support Warning
Note that `field-sizing` is a cutting-edge CSS feature. Ensure appropriate graceful degrading fallbacks are configured via default structural widths or padding states for older browser engines.

Closes #15167
