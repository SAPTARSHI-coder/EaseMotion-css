# :has() Form Validation

Demonstrates form validation styling using the CSS `:has()` pseudo-class. Labels, inputs, buttons, and status messages react to form state without JavaScript for visual feedback.

## Usage

Apply `.has-form` to a `<form>` element, `.has-input` to inputs, and validation styles cascade automatically:

```css
/* Show red border on label whose child input is invalid */
label:has(.has-input:invalid:not(:placeholder-shown)) {
  color: #dc2626;
}
```

## What's Shown

- **Invalid state** — labels and inputs turn red when a value fails validation
- **Valid state** — labels and inputs turn green when a value passes
- **Error messages** — hidden by default, shown via `:has()` when input is invalid
- **Submit button** — disabled/enabled styling via `:has()`
- **Form status** — top-level message that reflects overall form validity

## Key Insight

`:has()` allows parent styling based on child state. This means form labels, wrappers, and even sibling elements can reflect input validity — no extra classes or JavaScript selectors needed.

## Browser Support

- Chrome 105+, Edge 105+, Safari 15.4+, Firefox 121+
- Degrades gracefully — form remains functional in older browsers

## Submission

- **Issue:** #12300
- **Files:** style.css, demo.html
