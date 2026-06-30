# EaseMotion CSS — Text Underline Offset Utilities

This directory implements core utility classes for controlling the CSS `text-underline-offset` property in EaseMotion CSS.

---

## What is Text Underline Offset?

The `text-underline-offset` property sets the distance between a text underline decoration and the text's baseline. By default, underlines are drawn very close to or directly on the baseline of the text.

Adjusting this offset serves two key design purposes:

1. **Clear Descender Collisions**: Letters with descending glyphs like `g`, `j`, `p`, `q`, and `y` cross through standard underlines, creating visual noise. Offsetting the line keeps characters clean and legible.
2. **Aesthetic Enhancements**: Pushing the underline further down can create a modern, spacious navigation link or heading style, acting as a styled border that animates beautifully.

> [!NOTE]
> The `text-underline-offset` property has no visual effect unless a text decoration (specifically `underline`) is active on the element.

---

## Utility Classes Reference

EaseMotion CSS provides standard classes and shorter alternative aliases for configuring underline offsets.

| Utility Class            | Alias Class                   | CSS Rule                                  | Description                                                                    |
| :----------------------- | :---------------------------- | :---------------------------------------- | :----------------------------------------------------------------------------- |
| `.underline-offset-auto` | `.text-underline-offset-auto` | `text-underline-offset: auto !important;` | Browser default: determines standard offset dynamically based on font metrics. |
| `.underline-offset-0`    | `.text-underline-offset-0`    | `text-underline-offset: 0px !important;`  | Positions the underline directly on the baseline.                              |
| `.underline-offset-1`    | `.text-underline-offset-1`    | `text-underline-offset: 1px !important;`  | 1px baseline offset gap.                                                       |
| `.underline-offset-2`    | `.text-underline-offset-2`    | `text-underline-offset: 2px !important;`  | 2px baseline offset gap.                                                       |
| `.underline-offset-3`    | `.text-underline-offset-3`    | `text-underline-offset: 3px !important;`  | 3px baseline offset gap.                                                       |
| `.underline-offset-4`    | `.text-underline-offset-4`    | `text-underline-offset: 4px !important;`  | 4px baseline offset gap (Recommended standard for clean descender clearance).  |
| `.underline-offset-6`    | `.text-underline-offset-6`    | `text-underline-offset: 6px !important;`  | 6px baseline offset gap.                                                       |
| `.underline-offset-8`    | `.text-underline-offset-8`    | `text-underline-offset: 8px !important;`  | 8px baseline offset gap (Generous spacing for navigation items).               |
| `.underline-offset-10`   | `.text-underline-offset-10`   | `text-underline-offset: 10px !important;` | 10px baseline offset gap.                                                      |
| `.underline-offset-12`   | `.text-underline-offset-12`   | `text-underline-offset: 12px !important;` | 12px baseline offset gap.                                                      |

---

## Supporting Decoration Helper Classes

To easily showcase and pair offsets, the following utility helpers are also included in the demo system:

- **Trigger**: `.underline` (`text-decoration: underline !important;`)
- **Style**: `.decoration-solid`, `.decoration-double`, `.decoration-wavy`, `.decoration-dashed`, `.decoration-dotted`
- **Color**: `.decoration-pink`, `.decoration-blue`, `.decoration-violet`, `.decoration-muted`
- **Thickness**: `.thickness-1` through `.thickness-6`

---

## Usage Examples

### 1. Basic Link Clearance (Optimal 4px Offset)

Apply `.underline-offset-4` alongside `.underline` to give inline links high readability:

```html
<p>
  Read our latest article on
  <a href="#" class="underline decoration-blue thickness-2 underline-offset-4"
    >responsive layout rhythms</a
  >
  today.
</p>
```

### 2. Modern Interactive Menu Links (Spacious 8px Offset)

For larger navigational links, a larger offset prevents collisions with box shadows or border designs:

```html
<a
  href="#"
  class="nav-link underline decoration-pink thickness-3 underline-offset-8"
>
  Explore Dashboard
</a>
```

### 3. Styled Wavy Underline (6px Offset)

Using wavy decorations often requires extra offset spacing to prevent the waves from cutting into the actual body of the glyphs:

```html
<span
  class="warning-text underline decoration-wavy decoration-pink thickness-2 underline-offset-6"
>
  This is a critical alert message.
</span>
```

---

## Accessibility (WCAG 2.1) & Dyslexia Best Practices

- **Improving Dyslexic Readability**: Clear spacing between underlines and text characters has been shown to reduce visual crowding, which significantly helps readers with dyslexia track text lines more easily.
- **Maintain High Contrast (Success Criterion 1.4.3)**: When applying custom colors to underlines (e.g. `.decoration-pink` or `.decoration-blue`), ensure the underline line color provides sufficient contrast against the page background, especially if the underline is serving as a primary visual indicator of a hyperlink.
- **Provide Visual Link States**: Ensure you maintain clear hover and focus styles on all links using these utilities to guarantee keyboard-only users can trace focus positioning easily.

---

## Browser Compatibility Notes

- **Chrome, Edge, Firefox, Safari (Modern)**: Full standard support for `text-underline-offset` property.
- **Legacy Browsers**: Gracefully falls back to browser default underline placement without breaking the rest of the text styling rules.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox configuration options apply CSS values dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
