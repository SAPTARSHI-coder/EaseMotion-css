# ease-otp-input — Verification Code Input Boxes

1. **What does this add?** A CSS-first, styled OTP/verification code input group: individual single-character boxes with focus glow, filled state, an error shake animation, and `-sm`/`-lg` size variants. A minimal JS snippet (auto-advance, backspace-to-previous, paste support) is included since the issue explicitly requests "auto-advance handled by JS."
2. **How is it used?**
```html
<div class="ease-otp-group">
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
  <input class="ease-otp-input" type="text" inputmode="numeric" maxlength="1" />
</div>

<!-- Size variants -->
<div class="ease-otp-group ease-otp-group-sm">...</div>
<div class="ease-otp-group ease-otp-group-lg">...</div>

<!-- Error state -->
<input class="ease-otp-input ease-otp-error" ... />
```
```js
// Required: auto-advance, backspace navigation, paste support
const inputs = document.querySelectorAll('.ease-otp-group .ease-otp-input');
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, '');
    input.classList.toggle('ease-otp-filled', input.value.length > 0);
    if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) inputs[index - 1].focus();
  });
});
```
3. **Why is it useful?** OTP/verification screens are extremely common in auth flows (login, signup, password reset). All visual states — focus glow, filled, error shake, size — are pure CSS using EaseMotion's existing design tokens (`--ease-color-primary`, `--ease-speed-fast`, `--ease-radius-md`); only the auto-advance/paste logic needs JS, which the issue itself calls for. Includes `prefers-reduced-motion` support to disable the focus-lift and error-shake animations.