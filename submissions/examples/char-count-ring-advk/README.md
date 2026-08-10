# Character Count Ring

## What does this do?

A compose field with a circular remaining-character indicator that fills as you
type and escalates through warning and danger states near the limit.

## How is it used?

```html
<div class="ccr">
  <label class="ccr-lbl" for="msg">Message</label>
  <textarea class="ccr-ta" id="msg" maxlength="180"></textarea>
  <div class="ccr-meter">
    <span class="ccr-ring" aria-hidden="true"></span>
    <output class="ccr-n" for="msg" aria-live="polite">180</output>
  </div>
</div>
```

## Why is it useful?

Character counters usually render as plain text that only becomes noticeable once
it turns red — by which point the user has already overrun. A ring gives
continuous peripheral feedback on how much room is left, without the user having
to read a number.

The ring is a `conic-gradient` whose stop is a single `--p` custom property, and
the three states are driven by one `data-state` attribute rather than by adding
and removing classes. That keeps the threshold logic in one place, and the tint
propagates to both the ring and the numeric readout from a single `--tint`
declaration.

The count sits in an `<output for="msg">` with `aria-live="polite"`. `polite` is
deliberate: an assertive region would interrupt the screen reader on every
keystroke, making the field unusable. Polite means the count is available when the
user pauses, which is when it is actually wanted.

`maxlength` on the textarea provides the real enforcement, so the limit holds even
if the script never runs.
