# Bug Fix #2087: Badge Naming Convention (.em-badge → .ease-badge-\*)

Fixes the `.em-*` naming drift in `components/badges.css`.

Changes:

- `.em-badge` -> `.ease-badge`
- `.em-badge-danger` -> `.ease-badge-danger`
- `.em-badge-success` -> `.ease-badge-success`
- `.em-badge-pulse` -> `.ease-badge-pulse`

Old `.em-*` selectors are preserved as aliases for backward compatibility.

Demo: open `demo.html` in a browser.

Issue: #2087
Labels: type:bug level:intermediate GSSoC-26
