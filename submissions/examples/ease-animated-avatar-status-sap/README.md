## Pull Request Description

Adds `ease-animated-avatar-status-sap`, avatars with a pulsing online-status indicator.

---

## Type of Change

- [x] ✨ New animation / hover effect
- [x] 🧩 New component
- [ ] 📝 Documentation improvement
- [ ] 🐛 Bug fix

---

## Submission Checklist

- [x] All changes are inside `submissions/examples/ease-animated-avatar-status-sap/`
- [x] Includes complete `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Includes reduced-motion support
- [x] No changes to `core/`
- [x] No changes to `components/`
- [x] One feature per PR

---

## Implementation notes
- `demo.html` includes full `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags.
- Status is described via each avatar's `aria-label` (name + status text),
  so the state isn't conveyed by dot color alone.
- Pulse animation is scoped only to the `status-online` variant, so away/
  offline avatars are never animated.

## Feature Description

Adds a reusable avatar + pulsing online-status indicator component.

Level: Beginner

@SAPTARSHI-coder Please review the submission and validator requirements.

@github-actions Please validate the submission structure and required files.