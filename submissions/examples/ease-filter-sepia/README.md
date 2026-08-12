# Sepia Filter Utilities (`ease-filter-sepia`)

A demonstration of the `.ease-filter-sepia` and `.ease-filter-sepia-0` utility classes, allowing developers to apply warm, vintage aesthetics natively to images and backgrounds via CSS.

## 🚀 Features & EaseMotion Showcase

- **Native CSS Filters**: Relying on CSS `filter: sepia(100%)` provides a highly performant, hardware-accelerated color adjustment directly in the browser, eliminating the need to pre-edit images in Photoshop.
- **Hover Transitions**: Pairing `.ease-filter-sepia` with a standard CSS transition allows you to build beautiful "reveal" interactions where an image starts in a vintage wash and fades into full color on hover using `.ease-filter-sepia-0`.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To apply a sepia filter:
```html
<img src="photo.jpg" class="ease-filter-sepia">
