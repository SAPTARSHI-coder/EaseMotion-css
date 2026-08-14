# Checkout Progress

1. What does this do? A multi-step checkout progress component with four stages (Cart, Shipping, Payment, Confirm). The progress bar fills between steps as the user navigates forward and backward. Each step circle shows a check mark on completion with a smooth bounce transition.

2. How is it used? Add a `.progress-steps` container with `.progress-step` children connected by `.progress-line` bars with `.progress-fill` inner divs. Use `.active` for the current step and `.completed` for past steps. The JS navigates between panels and updates progress state.

3. Why is it useful? Checkout flows are a core e-commerce pattern. The animated progress bar gives clear orientation, reducing abandonment by showing users exactly how many steps remain and where they are in the process.
