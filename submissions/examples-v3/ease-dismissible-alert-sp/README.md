## Pull Request Description

This PR adds a **Dismissible Alert** component with four alert variants: Success, Error, Warning, and Info.

Each alert includes a close button and smoothly slides out before being removed from the page.

---

## Type of Change

- [x] ✨ New animation / hover effect
- [ ] 🧩 New component
- [ ] 📝 Documentation improvement
- [ ] 🐛 Bug fix
- [ ] Other

---

## Submission Checklist

- [x] All changes are inside `submissions/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] No changes to `core/`
- [x] No changes to `components/`
- [x] One feature per PR

---

## Feature Description

### What does this add?

A dismissible alert component with Success, Error, Warning, and Info variants.

### How does a developer use it?

```html
<div class="alert success">
    <span>Success! Your changes have been saved.</span>
    <button class="close-btn">&times;</button>
</div>
```

### Why does it fit EaseMotion CSS?

It provides a lightweight, reusable, and interactive alert component with smooth animations that enhance user experience while following EaseMotion CSS's animation-first philosophy.

---

## Demo

- [x] Demo added (`demo.html` opens directly in a browser)

---

## Browser Testing

- [x] Chrome
- [x] Edge
- [ ] Firefox
- [ ] Safari

---

## Notes for Maintainer

- Built using HTML, CSS, and JavaScript.
- Includes smooth slide-out animation.
- Fully responsive and easy to customize.

Fixes #30255