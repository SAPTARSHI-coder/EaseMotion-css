# CSS Column-Gap Utilities (Issue #16550)

This submission introduces **column-gap** utility classes for the **EaseMotion CSS** framework. These utilities allow contributors to adjust spacing between grid/flex items using EaseMotion's spacing token scale.

## 📋 Features & Classes

| Utility Class | CSS Rule | Description |
| :--- | :--- | :--- |
| `.ease-column-gap-0` | `column-gap: 0 !important;` | Removes column gaps entirely. |
| `.ease-column-gap-1` | `column-gap: 0.25rem !important;` | Mapped to `--ease-space-1`. |
| `.ease-column-gap-2` | `column-gap: 0.5rem !important;` | Mapped to `--ease-space-2`. |
| `.ease-column-gap-3` | `column-gap: 0.75rem !important;` | Mapped to `--ease-space-3`. |
| `.ease-column-gap-4` | `column-gap: 1rem !important;` | Mapped to `--ease-space-4`. |
| `.ease-column-gap-6` | `column-gap: 1.5rem !important;` | Mapped to `--ease-space-6`. |
| `.ease-column-gap-8` | `column-gap: 2rem !important;` | Mapped to `--ease-space-8`. |
| `.ease-column-gap-10` | `column-gap: 2.5rem !important;` | Mapped to `--ease-space-10`. |
| `.ease-column-gap-12` | `column-gap: 3rem !important;` | Mapped to `--ease-space-12`. |
| `.ease-column-gap-16` | `column-gap: 4rem !important;` | Mapped to `--ease-space-16`. |

## 🛠️ Usage Example

Set vertical column spacing inside a flex container by applying `.ease-column-gap-4`:

```html
<div class="ease-flex ease-row ease-column-gap-4">
  <div>Column Item A</div>
  <div>Column Item B</div>
</div>
```

## 🎨 Interactive Demo

The included [demo.html](demo.html) showcases:
1. **Interactive Demo Container:** Displays flex child elements side-by-side.
2. **Interactive Controls:** Toggle spacing dynamically between `0` (no gap) and `16` (64px gap) to test visual layout alignment.
