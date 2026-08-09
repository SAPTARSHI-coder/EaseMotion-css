# CSS Pulse-Active Accordion (E-Commerce Checkout)

A step-based checkout accordion designed for E-Commerce Checkout layouts. Uses a numbered step indicator, a pulsing active-step highlight, and structured order-line items inside each section to guide users through a multi-step purchase flow.

## Features
- **Step Indicator Pulse:** The current active step pulses with a green "in-progress" ring to clearly show where the user is in the checkout flow.
- **Numbered Step Circles:** Each header has a numbered circle that transitions from hollow (pending) to filled (active) to checked (complete).
- **Order Line Items:** Content sections contain structured product rows with quantity, name, and price — formatted like a real cart.
- **Connector Lines:** Vertical connector lines between step circles create a visual flow/timeline.
- **Pure CSS:** No JavaScript. Built on `<details>`/`<summary>`.

## Usage
Wrap items in `.checkout-accordion`. Each `<details>` gets `.checkout-step`. Use `.checkout-step--complete` for finished steps.

## Files
- `demo.html`: A 3-step checkout flow preview.
- `style.css`: Step indicators, connector lines, pulse animation, and order item rows.
