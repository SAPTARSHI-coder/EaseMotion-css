# Payment Methods

### What does this do?

It shows a list of saved payment methods where each row is a selectable radio option with a card brand mark, the last four digits, and the expiry. The selected card is highlighted with a radio dot, and the default card shows a badge. It works with no JavaScript.

### How is it used?

```html
<fieldset class="pay-methods">
  <legend>Payment method</legend>
  <label class="pm-row">
    <input type="radio" name="pm" checked aria-label="Visa ending 5540" />
    <span class="pm-radio"></span>
    <span class="pm-brand visa">VISA</span>
    <span class="pm-body"><span class="pm-num">•••• 5540</span><span class="pm-exp">Expires 08/28</span></span>
    <span class="pm-default">Default</span>
  </label>
</fieldset>
```

Give the rows the same radio `name` so only one is chosen. Brand classes are `visa`, `mc`, and `amex`. The `:has(:checked)` selector highlights the chosen row and fills its radio dot.

### Why is it useful?

Checkout screens let you pick from your saved cards. This presents a radio list of payment methods with brand marks and a selected state, using only CSS. The rows are keyboard operable with a focus ring and transitions are removed under reduced motion.
