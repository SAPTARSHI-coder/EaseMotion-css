# CSS Tip Calculator Widget

A pure CSS tip calculator widget featuring a bill amount input, selectable tip percentages, and dynamically displayed tip and total values without JavaScript.

## Features

- Pure HTML and CSS
- No JavaScript
- Bill amount input
- 10%, 15%, 20%, and 25% tip options
- CSS-driven tip and total display
- Responsive design
- Keyboard accessible
- Visible focus states
- Smooth hover interactions
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the calculator markup:

```html
<section class="tip-calculator" aria-labelledby="calculator-title">

    <div class="calculator-header">
        <span class="calculator-icon" aria-hidden="true">%</span>

        <div>
            <h1 id="calculator-title">Tip Calculator</h1>
            <p>Choose a tip percentage</p>
        </div>
    </div>

    <div class="input-group">
        <label for="bill-amount">Bill Amount</label>

        <div class="amount-input">
            <span aria-hidden="true">$</span>

            <input
                id="bill-amount"
                type="number"
                value="100"
                min="0"
                step="0.01"
                inputmode="decimal"
                aria-label="Bill amount"
            >
        </div>
    </div>

    <fieldset class="tip-options">
        <legend>Tip Percentage</legend>

        <input type="radio" id="tip-10" name="tip" checked>
        <label for="tip-10">10%</label>

        <input type="radio" id="tip-15" name="tip">
        <label for="tip-15">15%</label>

        <input type="radio" id="tip-20" name="tip">
        <label for="tip-20">20%</label>

        <input type="radio" id="tip-25" name="tip">
        <label for="tip-25">25%</label>
    </fieldset>

    <div class="calculation">
        <div class="result-row">
            <span>Tip</span>
            <strong class="tip-value">$10.00</strong>
        </div>

        <div class="result-row total-row">
            <span>Total</span>
            <strong class="total-value">$110.00</strong>
        </div>
    </div>

</section>
```

Place the calculator inside your desired container.

## Tip Options

The widget provides four predefined tip percentages:

```text
10% → $10 tip → $110 total
15% → $15 tip → $115 total
20% → $20 tip → $120 total
25% → $25 tip → $125 total
```

The demonstration uses a `$100` example bill.

## Customization

Change the calculator width:

```css
.tip-calculator {
    width: min(100%, 390px);
}
```

Change the calculator background:

```css
.tip-calculator {
    background: #181818;
}
```

Change the available tip percentages by adding or removing radio inputs and their associated labels.

## How It Works

The tip percentage options use native radio buttons and CSS selectors to update the displayed values.

For example:

```css
.tip-calculator:has(#tip-20:checked) .tip-value::after {
    content: "$20.00";
}

.tip-calculator:has(#tip-20:checked) .total-value::after {
    content: "$120.00";
}
```

The `:has()` selector detects the selected percentage and updates the corresponding result using CSS pseudo-elements.

No JavaScript or external libraries are required.

### CSS-Only Limitation

Because this component is intentionally implemented without JavaScript, CSS cannot perform arbitrary arithmetic on a user-entered text or number input.

The demo therefore uses a fixed `$100` example bill to demonstrate the tip percentage interactions.

For production use with arbitrary bill amounts, JavaScript or another calculation layer would be required.

## Accessibility

The bill amount uses a native number input with an associated label:

```html
<label for="bill-amount">Bill Amount</label>
```

The tip percentages are implemented using native radio buttons inside a `<fieldset>` with a `<legend>`.

Keyboard users can navigate and select the tip percentage options using the native form controls.

Visible `:focus-visible` states are provided for keyboard navigation.

The calculator icon is decorative and uses:

```html
aria-hidden="true"
```

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, hover transitions are disabled.

```css
@media (prefers-reduced-motion: reduce) {
    .amount-input,
    .tip-options label {
        transition: none;
    }

    .tip-options label:hover {
        transform: none;
    }
}
```

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS form controls, the `:has()` selector, pseudo-elements, transitions, responsive layouts, and accessible HTML can create an interactive calculator-style UI without JavaScript.

It can be used as a starting point for:

- Payment interfaces
- Restaurant billing UIs
- Checkout components
- Pricing interfaces
- Financial dashboards
- Interactive form designs

## Files

- `demo.html` — Demo page
- `style.css` — Calculator styling and CSS interactions
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.