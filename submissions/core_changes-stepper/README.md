# Stepper / Step Indicator

1. **What does this do?** Provides a multi-step progress indicator in horizontal and vertical orientations, with completed (checkmark), active (highlighted), and pending states, plus size variants — pure CSS.

2. **How is it used?**
   ```html
   <div class="stepper stepper-horizontal">
     <div class="step step-completed"><div class="step-circle">✓</div><div class="step-label">Cart</div></div>
     <div class="step step-active"><div class="step-circle">2</div><div class="step-label">Shipping</div></div>
     <div class="step"><div class="step-circle">3</div><div class="step-label">Payment</div></div>
   </div>
   ```

3. **Why is it useful?** Steppers guide users through multi-step processes like checkout or onboarding, reducing cognitive load and showing progress. This implementation is pure CSS, supports dark mode, respects reduced motion, and offers horizontal/vertical layouts through simple modifier classes.
