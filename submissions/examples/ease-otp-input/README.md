# Ease OTP Input

## What does this do?
An OTP (One-Time Password) verification input with auto-advancing focus,
a **staggered "wave" fill animation** when a code is pasted, and a
**shake-then-clear** error state — instead of a static focus-border-only
input.

## How is it different from a typical OTP input utility?
- Pasting a full code fills each box in sequence with a small delay,
  creating a wave-like cascading fill rather than instantly populating all
  boxes at once.
- Incorrect codes trigger a shake animation on every box, then automatically
  clear and refocus the first box — clear feedback without needing extra UI.
- Correct codes animate each box into a success state in a quick stagger,
  rather than all boxes changing color simultaneously.
- Backspace correctly moves focus to the previous box when the current one
  is empty.

## How is it used?
\`\`\`html
<div class="ease-otp">
  <div class="ease-otp__boxes" data-length="6">
    <input type="text" inputmode="numeric" maxlength="1" class="ease-otp__box" />
    <!-- repeat per digit -->
  </div>
  <button class="verify-btn">Verify</button>
</div>
\`\`\`

See `demo.html` for the JS handling auto-advance, paste distribution, and
verify/error logic (all animation styling itself is in `style.css`).

## Why is this useful?
OTP verification is one of the most common authentication UI patterns, and
small touches like paste support and clear error feedback significantly
improve real-world usability — a practical, beginner-friendly showcase for
EaseMotion CSS.