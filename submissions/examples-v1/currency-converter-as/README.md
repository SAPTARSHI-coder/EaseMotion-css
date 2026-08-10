# Currency Converter

### What does this do?

It shows a currency converter card: a from amount with its currency chip, a circular swap button, a converted amount with its currency chip, and an exchange rate line. The swap button rotates on hover, and the two fields are visually distinct.

### How is it used?

```html
<span class="cc-field">
  <input class="cc-amt" type="text" value="1,000.00" readonly />
  <span class="cc-cur"><span class="cc-flag">&#127482;&#127480;</span> USD</span>
</span>
```

Each row pairs an amount input with a currency chip that holds a flag emoji and code. The swap button sits centered on a thin divider line between the two fields, and the rate line summarizes the conversion.

### Why is it useful?

Banking, travel, and checkout apps offer currency conversion. This provides a clean converter layout with a swap control and rate display, styled entirely with CSS and ready to wire up to real rates.
