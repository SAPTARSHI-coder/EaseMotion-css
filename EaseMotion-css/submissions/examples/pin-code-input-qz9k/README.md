# PIN Code Input

## What does this do?

A six-box verification code input: typing a digit auto-advances to the
next box, Backspace on an empty box returns to the previous one, and
pasting (or SMS autofill delivering) a full code into any box distributes
its digits across the remaining boxes rather than discarding everything
but the first character.

## How is it used?

```html
<div class="pci-boxes" role="group" aria-label="6-digit verification code">
  <input class="pci-box" type="text" inputmode="numeric" maxlength="1"
    autocomplete="one-time-code" oninput="pciInput(event, 0)" onkeydown="pciKeydown(event, 0)"
    aria-label="Digit 1" />
  <!-- ...digits 2-6 -->
</div>
```

Only the first box carries `autocomplete="one-time-code"` — that's the
attribute mobile browsers use to offer autofilling an SMS-delivered code,
and it needs to land on one field for the browser to know where to place
the full code text, which `pciInput`'s multi-digit branch then redistributes.

## Why is it useful?

The naive version of this pattern only handles single-keystroke digit
entry and breaks the moment a code arrives any other way: pasting a
6-digit code copied from a messaging app, or a mobile browser's SMS
autofill inserting the whole code into one field at once. Both deliver
more than one character to a single `maxlength="1"` input in one `input`
event, and if that's not handled explicitly, only the first digit survives
while the rest of the typed/pasted code is silently dropped — the user
sees just one box filled and no indication anything went wrong.
`pciInput` checks the incoming value length and, when it's longer than
one character, walks the extra digits into subsequent boxes starting from
the current position.

Each digit lives in a real, separately-focusable `<input>` rather than one
input visually split into boxes via `letter-spacing` — that's what makes
individual `aria-label`s ("Digit 1", "Digit 2", ...) and per-box Backspace
navigation possible, giving screen reader users a clear sense of position
within the code as they move through it.
