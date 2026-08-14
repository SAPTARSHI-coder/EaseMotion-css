# OTP Input with SMS Autofill

## What does this do?

A six-digit verification code field built from a single real
`<input autocomplete="one-time-code">` overlaid transparently on six
purely decorative visual boxes, rather than six separate real inputs each
managing its own digit.

## How is it used?

```html
<div class="ioa-field">
  <div class="ioa-boxes" aria-hidden="true">
    <span class="ioa-box ioa-box--active"></span>
    <!-- ...6 boxes total -->
  </div>
  <input id="ioa-input" class="ioa-input" type="text" inputmode="numeric"
    autocomplete="one-time-code" maxlength="6" aria-label="6-digit verification code" />
</div>
```

The input's `input` event handler strips non-digits, updates each box's
`textContent` and `--filled`/`--active` state to mirror the current value,
and the boxes container forwards clicks to the (invisible) input so
tapping anywhere in the row focuses it.

## Why is it useful?

The common six-separate-inputs OTP pattern (used elsewhere in this
codebase, in `pin-code-input-qz9k`) needs real per-box focus management —
auto-advance on type, Backspace-to-previous — and specifically handles
multi-character paste/autofill by distributing digits across boxes. That
works, but mobile browsers' native SMS-autofill suggestion (the QuickType
bar above the keyboard offering to fill a detected code) anchors its
behavior to *one specific* focused input with `autocomplete="one-time-code"`
— autofilling into a six-input layout means the OS has to guess which of
six inputs to target and fire a synthetic paste-like event that the
six-input implementation then has to redistribute, which is exactly the
kind of edge case that's fragile across OS/browser combinations. This
single-input variant sidesteps that entirely: there's only ever one real
input for the OS to target, so autofill lands directly in the one place
it's designed to land, and the visual boxes are just a passive display
mirroring whatever that one input currently contains.

Positioning the real input exactly over the visual box row (not hidden
off-screen) matters specifically for iOS, where the autofill suggestion
bar's on-screen anchor point is tied to the focused input's actual
position — moving the input elsewhere visually disconnects the "tap to
autofill" prompt from the code field the user is looking at.
