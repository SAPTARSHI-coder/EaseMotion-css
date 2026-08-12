# Pure CSS Password Visibility Toggle

A password visibility toggle built with **zero JavaScript**, using the checkbox hack combined with `-webkit-text-security` for masking.

## How it works

- A hidden `<input type="checkbox">` sits alongside a normal `<input type="text">`.
- The text input is masked by default via `-webkit-text-security: disc`, which visually renders characters as dots without needing `type="password"`.
- The eye icon is a `<label>` bound to the checkbox — clicking it toggles `:checked`.
- CSS sibling selectors swap `-webkit-text-security` between `disc` and `none`, and swap the eye/eye-off icons, based on checkbox state.

## Browser support

`-webkit-text-security` is supported in Chrome, Edge, Safari, and Opera (WebKit/Blink). It is **not supported in Firefox** — Firefox users will see the password in plain text at all times, since there's no native CSS-only way to mask text in that engine. This is a known limitation of pure-CSS approaches; a JS-based fallback (toggling `type="password"`/`type="text"`) is more portable, but not "pure CSS."

## Usage

\`\`\`html
<label class="pw-toggle-wrap">
  <input type="checkbox" class="pw-toggle-checkbox" />
  <input type="text" class="pw-toggle-input" placeholder="Enter password" />
  <span class="pw-toggle-label"><!-- eye / eye-off SVGs --></span>
</label>
\`\`\`

## Acceptance criteria
- [x] Pure CSS — no JavaScript
- [x] Toggle button with eye / eye-off icon states
- [x] Masked-by-default input
- [x] Documented browser limitation (WebKit-only masking)

Related issue: #71874
