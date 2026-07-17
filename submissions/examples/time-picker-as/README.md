# Time Picker

### What does this do?

It shows a time slot picker grouped into Morning and Afternoon sections. Each slot is a radio input styled as a chip; selecting one highlights it, and unavailable slots show a struck through, disabled state. It is fully interactive with no JavaScript.

### How is it used?

```html
<label class="tp-slot">
  <input type="radio" name="slot" />
  <span>10:00</span>
</label>
```

Each slot wraps a radio in a label. The visually hidden radio drives the styling: `input:checked + span` fills the chip, `input:hover + span` shows a hover border, and a `tp-off` class plus `disabled` marks a taken slot.

### Why is it useful?

Booking and scheduling flows need a clear time slot selector. This provides one as an accessible radio group styled entirely with CSS, so exactly one time can be chosen without any script.
