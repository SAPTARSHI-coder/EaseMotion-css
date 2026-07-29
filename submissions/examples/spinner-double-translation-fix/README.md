# Spinner Double-Translation Layout Glitch Fix

## What does this do?

Resolves a layout glitch where the loading spinner inside `.ease-btn-loading::after` is positioned off-center and wobbles during animation. By removing the redundant `translate(-50%, -50%)` transform from the `@keyframes ease-kf-btn-spin` animation, the spinner remains perfectly aligned to the center of the button.

## How is it used?

The fix is applied directly to the framework's core button component stylesheets.

### Before (Buggy):

```css
/* components/buttons.css */
.ease-btn-loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  animation: ease-kf-btn-spin 0.7s linear infinite;
}

@keyframes ease-kf-btn-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
```

### After (Fixed):

```css
/* components/buttons.css */
.ease-btn-loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  animation: ease-kf-btn-spin 0.7s linear infinite;
}

@keyframes ease-kf-btn-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Why is it useful?

In modern rendering engines (e.g. Blink in Chrome 120+, WebKit in Safari 17+), both the independent `translate: -50% -50%` property and the `transform: translate(-50%, -50%)` inside `@keyframes` are applied simultaneously. This results in the element translating by -100% horizontally and vertically, shifting the spinner out of the center.

Removing the redundant `translate` inside keyframes preserves the original alignment set by `translate: -50% -50%` on the element itself, keeping the spinner perfectly centered at all times during its rotation.
