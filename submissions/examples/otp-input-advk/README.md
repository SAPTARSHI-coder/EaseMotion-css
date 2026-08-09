# OTP Input

## What does this do?

A six-box one-time-code field where typing advances focus, backspace on an empty
box steps back, and OS-level SMS autofill populates the whole code.

## How is it used?

```html
<form class="otp">
  <label class="otp-lbl" for="o1">Verification code</label>
  <input class="otp-b" id="o1" inputmode="numeric" maxlength="1"
         autocomplete="one-time-code" aria-label="Digit 1" />
  <input class="otp-b" inputmode="numeric" maxlength="1" aria-label="Digit 2" />
</form>
```

## Why is it useful?

Most OTP components are a single hidden input with fake boxes drawn over it, or
six divs with a keydown handler. Both break the thing users actually rely on:
iOS and Android surface the code from SMS as an autofill suggestion, and that only
works against a real input carrying `autocomplete="one-time-code"`.

Using genuine inputs also means `inputmode="numeric"` raises the numeric keypad
on mobile, paste works per-field, and each box is individually focusable — so a
user correcting the third digit does not have to retype the rest.

The scripting is deliberately minimal: advance on input, retreat on backspace.
Everything else, including focus rings, selection and IME behaviour, is left to
the platform.

Each box carries its own `aria-label` ("Digit 3") because six identically-labelled
fields give a screen reader user no way to know their position in the sequence.
The visible label is present but visually hidden, so the group still has a name.
