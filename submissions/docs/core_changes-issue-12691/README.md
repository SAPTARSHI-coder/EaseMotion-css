# ease-tabs

## What does this do?

Provides a CSS-only tabs component using radio inputs (`:checked` + sibling selectors) — no JavaScript required. Three variants: underline (default), pills, and boxed. Includes smooth fade transitions, responsive overflow scrolling, dark mode, and reduced-motion support.

## How is it used?

**Underline (default):**

```html
<div class="ease-tabs-wrapper">
  <div class="ease-tabs">
    <input type="radio" name="tabs" id="tab-1" class="ease-tab-input" checked />
    <label for="tab-1" class="ease-tab-label">Tab 1</label>
    <input type="radio" name="tabs" id="tab-2" class="ease-tab-input" />
    <label for="tab-2" class="ease-tab-label">Tab 2</label>
  </div>
  <div class="ease-tab-panel">Panel 1 content...</div>
  <div class="ease-tab-panel">Panel 2 content...</div>
</div>
```

**Pills variant:**

```html
<div class="ease-tabs-wrapper ease-tabs-pills">...</div>
```

**Boxed variant:**

```html
<div class="ease-tabs-wrapper ease-tabs-boxed">...</div>
```

### Available Classes

| Class                | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `.ease-tabs-wrapper` | Root container                                       |
| `.ease-tabs`         | Tab bar (flex row)                                   |
| `.ease-tab-input`    | Hidden radio input                                   |
| `.ease-tab-label`    | Clickable tab trigger                                |
| `.ease-tab-panel`    | Content panel (shown when matching input is checked) |
| `.ease-tabs-pills`   | Pill-shaped tab variant                              |
| `.ease-tabs-boxed`   | Boxed segmented variant                              |

### How it works

Each radio input and its label are siblings in the tab bar. When a radio is `:checked`, the corresponding label receives active styling (`+ .ease-tab-label`), and the matching panel is displayed via the general sibling combinator (`:checked ~ .ease-tab-panel`).

All inputs in a group share the same `name` attribute, ensuring only one tab is active at a time.

## Why is it useful?

Tabs are a fundamental UI pattern for organizing content into switchable panels. This CSS-only implementation eliminates JavaScript dependencies while providing smooth animations, three visual variants, and full accessibility via native radio button behavior.

## Variants

| Variant   | Class              | Visual                                           |
| --------- | ------------------ | ------------------------------------------------ |
| Underline | (default)          | Active tab has colored bottom border             |
| Pills     | `.ease-tabs-pills` | Active tab is a filled pill                      |
| Boxed     | `.ease-tabs-boxed` | Segmented control style with raised active state |

## Features

- CSS-only — no JavaScript required
- Three visual variants: underline, pills, boxed
- Smooth fade-in panel transition (respects `prefers-reduced-motion`)
- Horizontal scroll on overflow (hidden scrollbar)
- Dark mode support
- CSS custom properties for accent color and spacing
- Accessible via native radio button interaction
