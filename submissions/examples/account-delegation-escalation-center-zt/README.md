# Account Delegation & Escalation Center — EaseMotion CSS Example

Purpose
- A CSS-only admin panel demonstrating delegation, escalation chains, role assignment, and approval workflows.

Use cases
- Enterprise admin consoles for IT and security teams to manage account delegations.
- Support platforms showing escalation paths and approval status.
- Design system documentation for workflow and role components.

Structure
- `demo.html` — Static markup: delegated accounts list, escalation chain, timeline, role cards, and workflow steps.
- `style.css` — Visual tokens, layout grid, badges, avatars, and responsive rules.

Customization
- Theme variables live in `:root` in `style.css` (`--accent`, `--ok`, `--warn`, etc.).
- Add/remove `.delegation` items to model more accounts.
- Change escalation visuals by editing `.chain` and `.arrow` styles.

Accessibility
- Keyboard-focusable list items (`tabindex="0"`) and clear focus outlines.
- Semantic headings, lists, and aria attributes for assistive tech.
- `prefers-reduced-motion` respects reduced-motion preferences.

Why it fits EaseMotion CSS
- Token-driven, reusable UI pieces that map directly to enterprise admin patterns.
- Lightweight, CSS-only demonstration aligns with EaseMotion's component-first approach.

Limitations
- Interactive behaviors (approval flows, ownership transfer) require JavaScript in real applications.

License
- MIT (match repository)
