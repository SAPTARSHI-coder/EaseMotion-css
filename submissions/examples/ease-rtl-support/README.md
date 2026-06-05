# RTL Support & Logical Properties

## What does this do?

Adds typography and layout utility classes utilizing CSS logical properties (`margin-inline-start`, `padding-inline-end`, etc.) to support seamless right-to-left (RTL) language mirroring.

## How is it used?

Apply logical classes directly inside your markup in place of physical constraints:

```html
<div class="ease-ps-4 ease-ms-auto ease-text-start">Your content here</div>
```

### Supported Logical Utilities

- **Padding Start (`ease-ps-*`)**: sets `padding-inline-start` (scales 1 to 12).
- **Padding End (`ease-pe-*`)**: sets `padding-inline-end` (scales 1 to 12).
- **Margin Start (`ease-ms-*`)**: sets `margin-inline-start` (scales 1 to 12, plus `ease-ms-auto`).
- **Margin End (`ease-me-*`)**: sets `margin-inline-end` (scales 1 to 12, plus `ease-me-auto`).
- **Borders (`ease-border-start`, `ease-border-end`)**: sets `border-inline-start` and `border-inline-end` (scales 1 and 2).
- **Text Alignment (`ease-text-start`, `ease-text-end`)**: sets `text-align: start` and `text-align: end`.

## Why is it useful?

Physical layout declarations (like `margin-left` and `text-align: left`) do not mirror automatically. Supporting right-to-left languages (e.g. Arabic, Hebrew, Urdu) historically required developers to ship separate stylesheet overrides or duplicate layout assets. By utilizing logical property alternatives, layouts adapt and mirror themselves automatically according to the document's `dir="rtl"` attribute.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to view the side-by-side LTR/RTL mirrored card comparison.

## Contribution Notes

- Class naming: `ease-ps-*`, `ease-pe-*`, `ease-ms-*`, `ease-me-*`, `ease-border-start`, `ease-border-end`, `ease-text-start`, `ease-text-end`.
