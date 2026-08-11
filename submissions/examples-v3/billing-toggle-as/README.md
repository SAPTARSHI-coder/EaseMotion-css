# Billing Price Toggle

### What does this do?

It shows a monthly and yearly billing toggle that slides a switch and swaps the displayed price, with a save badge on the yearly option.

### How is it used?

```html
<div class="billing">
  <input type="checkbox" id="billing" class="bt-input" />
  <div class="billing-toggle">
    <span>Monthly</span>
    <label for="billing" class="bt-track"><span class="bt-knob"></span></label>
    <span>Yearly</span>
  </div>
  <div class="price"><span class="pm">$12<small> / mo</small></span><span class="py">$115<small> / yr</small></span></div>
</div>
```

The checkbox, the toggle, and the price are siblings, so the checked state can both slide the knob and swap which price is shown.

### Why is it useful?

Pricing pages often let users switch between monthly and yearly billing. This swaps the price and slides the switch from the `:checked` state, so it needs no JavaScript. The switch stays keyboard operable with a focus ring.
