# Ease Ticket Booking Progress

An animated multi-step progress indicator for ticket booking flows (Seat → Payment → Confirm).

## What does this do?
Shows a 3-step progress tracker with animated circles and connecting lines. Each step animates as it becomes active, and lines fill in green as steps are completed.

## How is it used?
Open `demo.html` and click "Next Step" to advance through the booking flow. Completed steps turn green with a checkmark, the connecting line fills in, and the active step scales up with a glow. Clicking through all 3 steps resets the flow.

```html
<div class="ease-ticket-progress">
  <div class="ease-ticket-step ease-ticket-step-active">
    <div class="ease-ticket-step-circle">1</div>
    <span class="ease-ticket-step-label">Seat</span>
  </div>
  <div class="ease-ticket-line"></div>
  <div class="ease-ticket-step">
    <div class="ease-ticket-step-circle">2</div>
    <span class="ease-ticket-step-label">Payment</span>
  </div>
</div>
```

## Why is it useful?
Common pattern for booking flows (tickets, checkouts, onboarding). Provides clear visual feedback of progress with lightweight, dependency-free animation, matching EaseMotion's animation-first philosophy.
