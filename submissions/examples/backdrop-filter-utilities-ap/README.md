# EaseMotion CSS — Backdrop Filter Utilities

This directory implements core utility classes for applying CSS `backdrop-filter` effects in EaseMotion CSS.

---

## What is Backdrop Filter?

The `backdrop-filter` CSS property applies graphical effects (such as blurring or color shifting) to the area _behind_ an element.

Unlike standard `filter` utilities (which apply effects to the element's own contents), `backdrop-filter` affects whatever is visible directly behind the element's boundaries. To make these effects visible, the element must be semi-transparent (using `rgba()` background colors or transparency values).

### Primary Design Use Cases:

1. **Frosted Glass (Glassmorphism)**: Blurring the background to create high-end aesthetic layers, modal sheets, and floating notifications.
2. **Context Preservation**: Focusing attention on an overlaid menu or alert panel while allowing users to maintain orientation context by keeping background shapes visible but blurred.
3. **Tinting and Color Shifting**: Adjusting color indices (e.g. saturation, contrast, hue-rotation) on background segments.

---

## Utility Classes Reference

EaseMotion CSS provides backdrop-filter categories including standard scales and vendor-prefixed properties (`-webkit-backdrop-filter` for iOS/Safari support).

### 1. Backdrop Blur Scale

| Utility Class         | CSS Effect   | Description                 |
| :-------------------- | :----------- | :-------------------------- |
| `.backdrop-blur-none` | `blur(0px)`  | Disables backdrop blurring. |
| `.backdrop-blur-sm`   | `blur(4px)`  | Soft frosted blur effect.   |
| `.backdrop-blur`      | `blur(8px)`  | Standard backdrop blur.     |
| `.backdrop-blur-md`   | `blur(12px)` | Medium backdrop blur.       |
| `.backdrop-blur-lg`   | `blur(16px)` | Heavy backdrop blur.        |
| `.backdrop-blur-xl`   | `blur(24px)` | Extra heavy backdrop blur.  |
| `.backdrop-blur-2xl`  | `blur(40px)` | Ambient blurred overlay.    |
| `.backdrop-blur-3xl`  | `blur(64px)` | Deep wash blurred overlay.  |

### 2. Backdrop Brightness Scale

| Utility Class              | CSS Effect         | Description                                |
| :------------------------- | :----------------- | :----------------------------------------- |
| `.backdrop-brightness-0`   | `brightness(0)`    | Completely dark background behind element. |
| `.backdrop-brightness-50`  | `brightness(0.5)`  | Dims background by 50%.                    |
| `.backdrop-brightness-75`  | `brightness(0.75)` | Dims background by 25%.                    |
| `.backdrop-brightness-100` | `brightness(1)`    | Normal brightness.                         |
| `.backdrop-brightness-125` | `brightness(1.25)` | Boosts background brightness by 25%.       |
| `.backdrop-brightness-150` | `brightness(1.5)`  | Boosts background brightness by 50%.       |
| `.backdrop-brightness-200` | `brightness(2)`    | Doubles background brightness.             |

### 3. Backdrop Contrast Scale

| Utility Class            | CSS Effect      | Description             |
| :----------------------- | :-------------- | :---------------------- |
| `.backdrop-contrast-50`  | `contrast(0.5)` | Lowers contrast by 50%. |
| `.backdrop-contrast-100` | `contrast(1)`   | Normal contrast.        |
| `.backdrop-contrast-150` | `contrast(1.5)` | Boosts contrast by 50%. |
| `.backdrop-contrast-200` | `contrast(2)`   | Doubles contrast.       |

### 4. Backdrop Color Modifiers

| Utility Class              | CSS Effect           | Description                                  |
| :------------------------- | :------------------- | :------------------------------------------- |
| `.backdrop-grayscale`      | `grayscale(1)`       | Converts background area to black and white. |
| `.backdrop-hue-rotate-90`  | `hue-rotate(90deg)`  | Rotates background hues by 90 degrees.       |
| `.backdrop-hue-rotate-180` | `hue-rotate(180deg)` | Rotates background hues by 180 degrees.      |
| `.backdrop-saturate-200`   | `saturate(2)`        | Doubles background saturation.               |
| `.backdrop-sepia`          | `sepia(1)`           | Applies vintage sepia tone to background.    |
| `.backdrop-invert`         | `invert(1)`          | Inverts background colors.                   |

---

## Usage Examples

### 1. Frosted Glass Dashboard Card (Glassmorphism)

Combine semi-transparent backgrounds with `.backdrop-blur-md` or `.backdrop-blur-lg` to construct glassmorphism layouts:

```html
<div
  class="card backdrop-blur-md"
  style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);"
>
  <h4>System Health</h4>
  <p>Status: All services operational.</p>
</div>
```

### 2. High-Contrast Modal Overlay

Use dimming brightness modulators like `.backdrop-brightness-50` with blur modifiers to guide focus:

```html
<div
  class="modal-backdrop backdrop-blur backdrop-brightness-50"
  style="position: fixed; inset: 0;"
>
  <div class="modal-dialog">
    <h3>Reboot Required</h3>
    <button>Confirm</button>
  </div>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

When applying backdrop filter adjustments, remember to prioritize legibility:

> [!WARNING]
> Semi-transparent glass boxes can fail **WCAG 2.1 Success Criterion 1.4.3 (Contrast ratio at least 4.5:1 for normal text)** if the background content is high-contrast or contains busy patterns that show through.

- **Double Down on Blur**: If text readability is an issue, increase the blur (e.g. from `.backdrop-blur-sm` to `.backdrop-blur-lg`) to smear high-contrast background elements into a uniform ambient glow.
- **Provide Fallback Colors**: In browsers that do not support backdrop filters, elements will render with their raw background color. Ensure your `rgba()` or transparent colors fallback safely (e.g., using a slightly more opaque background color).

---

## Browser Compatibility Notes

- **WebKit (iOS Safari, macOS Safari)**: Full support. Requires `-webkit-backdrop-filter` vendor prefix (included automatically in all EaseMotion CSS utilities).
- **Chromium / Gecko (Chrome, Edge, Firefox)**: Native support for standard `backdrop-filter` property.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox configuration options apply CSS values dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
