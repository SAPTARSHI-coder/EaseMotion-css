# disabled-state-qz9k

Two Sass mixins for disabled-looking UI: one for real form controls (where
`:disabled` already blocks interaction), and one for non-native elements
standing in for a control (a styled `<div>` or `<a>` acting as a button)
that need `pointer-events` handled explicitly.

## Usage

```scss
@use 'disabled-state' as *;

// A real <button disabled> or <input disabled>:
.submit-button {
  @include disabled-native;
}

// A <div role="button" aria-disabled="true"> standing in for a control:
.card-action[aria-disabled="true"] {
  @include disabled-appearance;
}
```

| Param | Default | Description |
|---|---|---|
| `$opacity` | `0.5` | Opacity applied when disabled. |

## Why is it useful?

`:disabled` is a real pseudo-class, but it only exists on form controls
(`button`, `input`, `select`, `fieldset`, etc.) — it isn't a general
"disabled" concept CSS provides for arbitrary elements. A `<div>` or `<a>`
styled to act like a disabled button needs `pointer-events: none` written
explicitly, because there's no native mechanism blocking its clicks or
keyboard activation the way there is for a real disabled `<button>`.
Providing two separate mixins keeps that distinction visible in the code
rather than accidentally applying `pointer-events: none` to a real form
control (which is unnecessary — `:disabled` already handles it and doing
both is redundant, if harmless) or forgetting it on a non-native stand-in
(which is a real bug — the "disabled" div stays clickable).

Matching on both `:disabled` and `[aria-disabled="true"]` in
`disabled-native` covers controls disabled by JS setting the ARIA attribute
rather than the native property, which some component libraries do to keep
a disabled-but-focusable state (native `disabled` also removes focusability,
which isn't always the desired behaviour, e.g. for a disabled button in a
toolbar that should still be reachable to explain why it's disabled).

## Choosing between native disabled and aria-disabled

The two approaches trade off differently and the mixin supports either:

```scss
// A button that becomes fully unreachable when disabled -- fine for a
// "Submit" button once a form is mid-submission, where there's nothing
// useful to communicate to a keyboard user who tabs to it.
.submit-button {
  @include disabled-native;
}
```

```html
<button disabled>Submit</button>
```

```scss
// A toolbar button that stays focusable while disabled, so a tooltip or
// aria-describedby message explaining *why* it's disabled remains
// reachable by keyboard -- native `disabled` would skip it entirely.
.toolbar-action {
  @include disabled-native;
}
```

```html
<button aria-disabled="true" aria-describedby="toolbar-hint" onclick="return false">
  Merge
</button>
<span id="toolbar-hint" class="visually-hidden">Resolve conflicts before merging</span>
```

The second pattern needs the click handler itself to check
`aria-disabled` and bail out (native `disabled` blocks the click
automatically; `aria-disabled` is purely presentational/semantic and
doesn't stop JS handlers from firing), which is a small but easy-to-forget
piece of wiring on top of the CSS this mixin provides.

## Non-native stand-ins: the harder case

`disabled-appearance` exists for elements that were never form controls to
begin with — a `<div role="button">` or a styled `<a>` acting as an action
trigger. These need the full treatment spelled out explicitly, since
nothing about the element natively participates in a disabled state:

```html
<a href="/checkout" role="button" aria-disabled="true" class="cta">
  Continue to checkout
</a>
```

```scss
.cta[aria-disabled="true"] {
  @include disabled-appearance;
}
```

Beyond the CSS, a non-native disabled control like this also needs its
click/keydown handlers to check `aria-disabled` before acting — `href` on
an `<a>` remains technically navigable via other means (right-click "open in
new tab," for instance) that `pointer-events: none` doesn't universally
block, so treating a styled link as a real disabled control is inherently
more fragile than using an actual `<button disabled>` wherever that's an
option.
