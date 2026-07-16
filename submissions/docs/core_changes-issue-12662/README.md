# ease-backdrop-*

## What does this do?

Provides backdrop filter utility classes (`.ease-backdrop-blur-*`, `.ease-backdrop-brightness-*`, `.ease-backdrop-saturate-*`) and convenience glass surface classes (`.ease-glass-sm`/`.md`/`.lg`) for creating glassmorphism effects on any element.

## How is it used?

**Glass card with blur:**

```html
<div class="ease-glass-md" style="background: rgba(255,255,255,0.2);">
  <p>Frosted glass effect</p>
</div>
```

**Standalone backdrop blur:**

```html
<div style="background: rgba(255,255,255,0.15);" class="ease-backdrop-blur-lg">
  Content with blurred background
</div>
```

**Backdrop brightness:**

```html
<div class="ease-backdrop-brightness-75">
  Dimmed background
</div>
```

**Remove backdrop filter:**

```html
<div class="ease-backdrop-none">
  No filter applied
</div>
```

### Available Classes

| Class | Effect |
|---|---|
| `.ease-backdrop-blur-sm` | 4px blur |
| `.ease-backdrop-blur-md` | 8px blur |
| `.ease-backdrop-blur-lg` | 16px blur |
| `.ease-backdrop-blur-xl` | 24px blur |
| `.ease-backdrop-blur-2xl` | 40px blur |
| `.ease-backdrop-brightness-50` | 50% brightness |
| `.ease-backdrop-brightness-75` | 75% brightness |
| `.ease-backdrop-brightness-100` | 100% brightness (default) |
| `.ease-backdrop-saturate-50` | 50% saturation |
| `.ease-backdrop-saturate-150` | 150% saturation |
| `.ease-backdrop-none` | Remove backdrop filter |

### Convenience Glass Classes

| Class | Blur | Background |
|---|---|---|
| `.ease-glass-sm` | 4px | `rgba(255,255,255,0.25)` / dark mode fallback |
| `.ease-glass-md` | 8px | `rgba(255,255,255,0.2)` / dark mode fallback |
| `.ease-glass-lg` | 16px | `rgba(255,255,255,0.15)` / dark mode fallback |

### Fallback

In browsers without `backdrop-filter` support, `.ease-glass-*` classes fall back to a solid opaque background (`rgba(255,255,255,0.92)` light, `rgba(15,23,42,0.92)` dark).

## Why is it useful?

Glassmorphism is a popular modern design trend that creates depth by blurring the content behind an element. These utility classes make glass effects reusable across any component — navbars, modals, cards, panels — without custom CSS.

## Features

- 5 blur levels from subtle (4px) to extreme (40px)
- Brightness adjustment (50%, 75%, 100%)
- Saturation adjustment (50%, 150%)
- Convenience glass classes with blur + translucent background combined
- Dark mode support for glass classes
- Fallback for browsers without `backdrop-filter` support
- Respects `prefers-reduced-motion`
