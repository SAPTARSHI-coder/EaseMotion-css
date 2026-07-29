# Fix ease-form Asterisk aria-hidden

## What does this do?
Adds `aria-hidden="true"` to the required-field asterisk `<span>` so screen
readers skip it, and adds `aria-required="true"` to required `<input>` fields
so AT users hear "required" instead of "asterisk".

## How is it used?
```html
<label class="ease-label" for="email">
  Email <span class="ease-required" aria-hidden="true">*</span>
</label>
<input class="ease-input" id="email" type="email" aria-required="true">
```

## Why is it useful?
Screen readers literalize the `*` character as "asterisk", which is confusing.
`aria-hidden` removes it from the AT tree; `aria-required` communicates the
semantic requirement properly. Fixes: #35823
