# ease-combobox-aria-live

Autocomplete combobox with a screen-reader live-announcements region. Fixes the bug where screen readers stayed silent when the options dropdown expanded.

## What does this do?

- **`aria-live="polite"` status region** — a `role="status" aria-live="polite" aria-atomic="true"` element announces:
  - the number of available options when the list opens/updates (e.g. "5 options available"),
  - the currently highlighted option as the user arrows through ("5 options available. Germany highlighted"),
  - "No matches" when the filter is empty,
  - the selected value on choose ("Germany selected").
- **Full WAI-ARIA combobox semantics** — `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-controls`, `aria-haspopup="listbox"`, `aria-activedescendant`; the list is `role="listbox"` with `role="option"` children carrying `aria-selected`.
- **Keyboard** — `↑`/`↓` move the highlight (roving via `aria-activedescendant`), `Enter` selects, `Esc` closes.

## Why is this useful?

- **Directly fixes the issue** — the root cause was a missing live region; the status element makes the dropdown's state and result count perceivable to assistive technology.
- **Keeps focus on the input** — using `aria-activedescendant` (instead of moving DOM focus) preserves the typing cursor while still announcing the highlighted option.
- **Polite, not assertive** — `aria-live="polite"` avoids interrupting the user mid-keystroke; announcements queue after the current speech.

## How is it used?

```html
<div class="combobox">
  <input role="combobox" aria-autocomplete="list" aria-expanded="false"
         aria-controls="listbox" aria-activedescendant="" aria-haspopup="listbox" id="combo" />
</div>
<!-- THE FIX -->
<p class="combobox__status" role="status" aria-live="polite" aria-atomic="true" id="status"></p>
<ul id="listbox" role="listbox" hidden><!-- role="option" items --></ul>
<script>
  // on open/filter: status.textContent = n + ' options available' (+ highlighted)
  // on select:      status.textContent = value + ' selected'
</script>
```

## Files

- `demo.html` — self-contained combobox with a country list. No CDNs/frameworks.
- `style.css` — field, input, listbox, live status styling, reduced-motion.
- `README.md` — this documentation.

## Notes for the maintainer

Contributor used the `-sbh` suffix per the naming policy to avoid collisions.
