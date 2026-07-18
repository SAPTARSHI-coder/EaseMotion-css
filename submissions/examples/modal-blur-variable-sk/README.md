# Modal Backdrop Blur Variable Fix

Fixes hardcoded modal backdrop blur values by introducing a configurable `--ease-modal-blur` CSS custom property. This enables developers to adjust modal blur intensity without overriding component styles directly, improving consistency with existing glassmorphism tokens such as `--ease-navbar-glass-blur`.

## 1. What does this do?
Introduces a CSS variable `--ease-modal-blur` (defaulting to 4px) to control the intensity of the backdrop filter blur on modal overlays.

## 2. How is it used?
The variable is applied to the `.ease-modal-overlay` class (or `.modal-overlay` in this demo):

```css
:root {
  --ease-modal-blur: 4px;
}

.ease-modal-overlay {
  backdrop-filter: blur(var(--ease-modal-blur, 4px));
}
```

Users can customize the blur intensity globally or locally:

```css
/* Increase blur intensity for all modals */
:root {
  --ease-modal-blur: 8px;
}

/* Or for a specific modal */
.my-special-modal {
  --ease-modal-blur: 0px; /* Disable blur */
}
```

## 3. Why is it useful?
It aligns with EaseMotion CSS's token-driven design philosophy by exposing configurable visual properties through semantic CSS variables. It improves theming flexibility and reduces the need for direct component CSS overrides.

### Proposed Core Changes
To fully integrate this fix, the following changes should be made by the maintainer:

**core/variables.css:**
```css
  /* Glassmorphism tokens */
  --ease-modal-blur: 4px;
```

**components/modals.css:**
```css
  .ease-modal-overlay {
    backdrop-filter: blur(var(--ease-modal-blur, 4px));
    -webkit-backdrop-filter: blur(var(--ease-modal-blur, 4px));
  }
```

Closes #10422
