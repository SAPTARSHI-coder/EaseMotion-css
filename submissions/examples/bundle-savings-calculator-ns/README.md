# CSS Bundle Savings Calculator (#70979)

A zero-JavaScript interactive bundle configuration card that automatically calculates total pricing and dynamic savings amounts.

## Features
- **Pure CSS Logic:** Utilizes `counter-reset` and `counter-increment` tied to hidden checkboxes to track and accumulate prices and savings natively in the CSSOM.
- **Dynamic CSS Updates:** Uses `::before` and `::after` pseudo-elements via `content: counter()` to display live math without JavaScript.
- **Animated States:** Uses `:has()` to conditionally render the "You Save" badge and apply a pulse animation exclusively when items are toggled.
- **Accessible Inputs:** Real checkbox wrappers linked to semantic `<label>`s with full keyboard navigation and focus-rings.
