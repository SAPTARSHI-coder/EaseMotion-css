# Fix: ease-btn-icon Missing min-width/min-height — WCAG 2.5.5 Failure

**Issue:** [#7864](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/7864)

## Problem

`.ease-btn-icon` used `padding: var(--ease-space-3)` (0.75rem = 12px) with
no `min-width` or `min-height`. This produced approximately 38×38px buttons —
below the WCAG 2.5.5 minimum of **44×44px** for interactive touch targets.

Additionally, without `flex-shrink: 0`, icon buttons could collapse even
further inside narrow flex containers.

## Fix

Three properties added to `.ease-btn-icon`:

```css
/* ❌ Before — below WCAG minimum, can shrink */
.ease-btn-icon {
  padding: var(--ease-space-3);
  border-radius: 50%;
}

/* ✅ After — WCAG 2.5.5 compliant */
.ease-btn-icon {
  padding: var(--ease-btn-icon-padding);
  min-width: var(--ease-btn-icon-size); /* 44px default */
  min-height: var(--ease-btn-icon-size); /* 44px default */
  flex-shrink: 0; /* never collapse in flex */
  border-radius: 50%;
  line-height: 1;
}
```

## CSS Variable

```css
:root {
  --ease-btn-icon-size: 44px; /* WCAG 2.5.5 minimum */
}
```

Larger variant for critical actions:

```css
.ease-btn-icon.ease-btn-lg {
  --ease-btn-icon-size: 56px;
}
```

## WCAG Compliance

| Property          | Before      | After        |
| ----------------- | ----------- | ------------ |
| Touch target size | ~38×38px ❌ | 44×44px ✅   |
| Flex shrink       | Allowed ❌  | Prevented ✅ |
| WCAG 2.5.5        | Fail ❌     | Pass ✅      |

## How to Verify

1. Open `demo.html`
2. Size readout shows actual button dimensions (red = fail, green = pass)
3. Dashed red circle = 44px WCAG boundary
4. Flex shrink demo shows the fixed button holds size in a narrow container

## Files

- `style.css` — the fix
- `demo.html` — size readout + flex shrink comparison demo
