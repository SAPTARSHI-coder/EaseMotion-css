# List Style Utilities

A lightweight collection of CSS utility classes for controlling list markers and marker positioning. These utilities provide a simple and readable way to style ordered and unordered lists.

## Features

- Pure CSS implementation
- Human-readable utility classes
- Supports list style type and position
- Lightweight and reusable
- Cross-browser compatible
- No JavaScript required

## Available Classes

| Class               | Effect                              |
| ------------------- | ----------------------------------- |
| `ease-list-none`    | Removes list markers                |
| `ease-list-disc`    | Uses disc markers                   |
| `ease-list-decimal` | Uses decimal numbering              |
| `ease-list-inside`  | Places markers inside content flow  |
| `ease-list-outside` | Places markers outside content flow |

## Usage

```html
<ul class="ease-list-none">
  <li>Item</li>
</ul>

<ul class="ease-list-disc ease-list-inside">
  <li>Item</li>
</ul>

<ol class="ease-list-decimal ease-list-outside">
  <li>Step</li>
</ol>
```

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅        |
| Firefox | ✅        |
| Safari  | ✅        |
| Edge    | ✅        |

## Why is it Useful?

These utilities simplify list styling by providing readable class names for common list configurations. They align with EaseMotion CSS's philosophy of making UI styling intuitive and easy to understand.

---

**Submitted by:** @Muditapandey26  
**Date:** 2026-05-31  
**Status:** Ready for review
