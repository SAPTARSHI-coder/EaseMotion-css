# Cards: Neumorphic variant uses hardcoded rgba shadows

**Issue:** #5943
**File:** `components/cards.css`

## Problem

Lines 161-162 use hardcoded `rgba(15, 23, 42, 0.12)` and `rgba(255, 255, 255, 0.78)` for the neumorphic box-shadow instead of referencing `--ease-shadow-*` tokens.

## Expected

```css
.ease-card-neumorphic {
  box-shadow:
    var(--ease-shadow-neumorphic-dark, 8px 8px 20px rgba(15, 23, 42, 0.12)),
    var(
      --ease-shadow-neumorphic-light,
      -8px -8px 20px rgba(255, 255, 255, 0.78)
    );
}
```

## Demo

Open `demo.html` to see the neumorphic card with hardcoded shadow values.
