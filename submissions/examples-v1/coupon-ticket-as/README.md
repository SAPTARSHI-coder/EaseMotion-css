# Coupon Ticket Card

### What does this do?

It shows a coupon styled as a ticket, with notches cut into the top and bottom edges and a dashed divider separating the offer from the code stub, and it lifts on hover.

### How is it used?

```html
<div class="ticket">
  <div class="ticket-body">
    <strong>50% OFF</strong>
    <span>Your first order</span>
  </div>
  <div class="ticket-stub">
    <span>Code</span>
    <strong>SAVE50</strong>
  </div>
</div>
```

The notches are two pseudo element circles filled with the page background color, placed over the divider position on the top and bottom edges. The dashed divider lines up with them.

### Why is it useful?

Coupon and ticket cards appear in shops, events, and loyalty programs. This shapes the ticket with pseudo element notches and a dashed divider and adds a hover lift, using only CSS with no images. The hover lift is disabled under `prefers-reduced-motion: reduce`.
