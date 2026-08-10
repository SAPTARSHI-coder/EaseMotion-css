# Password Reveal

## What does this do?

A show/hide toggle for a password field that announces its state and preserves
the caret position across the switch.

## How is it used?

```html
<div class="pwr">
  <input class="pwr-i" id="pw" type="password" autocomplete="current-password" />
  <button class="pwr-b" type="button" aria-pressed="false" aria-label="Show password">
    <span class="pwr-eye" aria-hidden="true"></span>
  </button>
</div>
```

## Why is it useful?

Password reveal is a genuine accessibility win — it lets users verify what they
typed instead of guessing, which reduces lockouts — but it is usually implemented
in a way that undoes the benefit.

Switching `input.type` resets the text selection in most browsers, so the caret
jumps to the end. A user correcting the middle of a password loses their place at
exactly the moment they are trying to check it. Reading `selectionStart` before
the switch and restoring it after fixes that, and refocusing the input keeps the
keyboard in the field.

`aria-pressed` plus a label that flips between "Show password" and "Hide password"
is what makes the toggle usable without sight. A button with only an icon and no
state gives a screen reader user no way to know whether the password is currently
exposed — which matters, because exposure is a security-relevant state.

The two states differ by the presence of a slash, not by colour alone, so the
state is readable in High Contrast and for users with colour vision deficiency.
Keeping `autocomplete="current-password"` intact means password managers still
recognise the field.
