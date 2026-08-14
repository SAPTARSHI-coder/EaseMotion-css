## Pull Request Description

Adds `ease-scroll-fade-sections-sap`, sections that fade/slide into view on scroll via IntersectionObserver.

---

## Type of Change

- [x] ✨ New animation / hover effect
- [x] 🧩 New component
- [ ] 📝 Documentation improvement
- [ ] 🐛 Bug fix

---

## Submission Checklist

- [x] All changes are inside `submissions/examples/ease-scroll-fade-sections-sap/`
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
- Uses `IntersectionObserver` with a 20% threshold and `unobserve` after first
  trigger, so each section animates exactly once regardless of scroll direction.
- Includes a no-`IntersectionObserver` fallback that marks all sections
  visible immediately, so content is never permanently hidden.

## Feature Description

Adds a reusable scroll-triggered fade-in section component.

Level: Beginner

@SAPTARSHI-coder Please review the submission and validator requirements.

@github-actions Please validate the submission structure and required files.