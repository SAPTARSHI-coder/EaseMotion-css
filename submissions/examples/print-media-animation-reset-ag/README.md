# Print-Friendly Animation Reset (@media print) Showcase

This submission demonstrates the framework-wide fix for EaseMotion infinite and transition animations when exporting to PDF or opening browser print preview (`Ctrl + P`).

## 🐛 The Problem

When exporting web pages containing EaseMotion infinite animations (such as `.ease-spin` or `.ease-pulse`) to PDF or sending them to a printer, keyframe animations continued executing during print rendering. This resulted in:
1. Animated elements freezing at awkward mid-rotation angles (e.g. tilted icons).
2. Elements vanishing or becoming semi-transparent due to mid-fade opacity keyframes.
3. Sub-pixel misalignment and layout displacement in printed documents.

## ✅ The Fix

A global `@media print` rule block has been added to reset animation and transition properties across all EaseMotion elements:

```css
@media print {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }

  [class*="ease-"] {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
```

## 📋 Features & Benefits

- **Clean Static Content**: All keyframes and transitions freeze at their natural rest position (`transform: none`, `opacity: 1`).
- **High Visibility**: Prevents low-opacity keyframes from hiding critical page elements in generated PDFs.
- **Zero Configuration**: Applied automatically for all pages using `easemotion.css` or `easemotion.min.css`.

## 🧪 How to Test

1. Open `demo.html` in Chrome, Edge, or Firefox.
2. Observe the active on-screen animations (`.ease-spin`, `.ease-pulse`, `.ease-bounce`, `.ease-fade-in`).
3. Press `Ctrl + P` (or click the **Press to Print** button) to open the browser Print Preview dialog.
4. Verify that all elements render fully opaque, upright, and without mid-animation distortion in the print preview.
