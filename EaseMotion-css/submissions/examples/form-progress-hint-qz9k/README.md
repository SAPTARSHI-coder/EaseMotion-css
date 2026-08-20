# Form Progress Hint

## What does this do?

A form completion indicator that tracks only the `required` fields —
optional fields don't count toward or against the percentage — updating
live via `oninput` on the form, with a status line announced through
`aria-live` alongside the visual bar.

## How is it used?

```html
<form class="fph-form" oninput="fphUpdate(this)">
  <div class="fph-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
    <div class="fph-progress-fill" id="fph-bar"></div>
  </div>
  <label for="fph-name">Full name <span class="fph-req">*</span></label>
  <input class="fph-field" id="fph-name" required />
  <!-- an optional field with no `required`, contributing nothing to the count -->
</form>
```

`fphUpdate` selects only `.fph-field[required]`, counts how many currently
have a non-empty trimmed value, and writes both the bar's inline `width`
and the `aria-valuenow`/status text from that ratio.

## Why is it useful?

A progress indicator based on "fields filled out of total fields" over-
counts completion whenever a form mixes required and optional fields — a
user who has filled every required field but skipped an optional "Company"
field sees a bar that never reaches 100%, which reads as an error state
even though the form is actually submittable. Scoping the count to
`[required]` specifically means the bar's 100% state corresponds exactly to
"this form can be submitted," not to an arbitrary field count that includes
fields the user is free to leave blank.

The bar's width changes are instant script writes (`style.width = pct +
'%'`), but the visible smooth fill comes entirely from the CSS
`transition: width` on `.fph-progress-fill` — the script never animates
anything itself, keeping the animation declarative and controllable
independently of the counting logic.
