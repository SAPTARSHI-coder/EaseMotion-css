# CSS-Only Origami Folding Menu

> Submission for issue [#17644](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17644)

## 1. What does this do?

A pure-CSS dropdown menu where each panel unfolds sequentially in 3D space like a piece of origami when the user hovers or focuses the trigger button — no JavaScript required.

## 2. How is it used?

Wrap the trigger button and panel list inside the menu container:

```html
<div class="ease-origami-folding-menu">
  <button class="ease-origami-folding-menu__trigger" type="button">
    Menu
    <span class="ease-origami-folding-menu__chevron" aria-hidden="true"></span>
  </button>
  <ul class="ease-origami-folding-menu__list">
    <li class="ease-origami-folding-menu__item">
      <a class="ease-origami-folding-menu__link" href="#home">Home</a>
    </li>
    <li class="ease-origami-folding-menu__item">
      <a class="ease-origami-folding-menu__link" href="#about">About</a>
    </li>
    <li class="ease-origami-folding-menu__item">
      <a class="ease-origami-folding-menu__link" href="#contact">Contact</a>
    </li>
  </ul>
</div>
```

The menu opens on `:hover` or `:focus-within`, so it's fully accessible via both mouse and keyboard.

### Structure cheatsheet

| Class                                       | Purpose                                |
| ------------------------------------------- | -------------------------------------- |
| `ease-origami-folding-menu`                 | Outer container (sets 3D perspective)  |
| `ease-origami-folding-menu__trigger`        | The button that opens the menu         |
| `ease-origami-folding-menu__chevron`        | Optional rotating arrow indicator      |
| `ease-origami-folding-menu__list`           | The `<ul>` holding the panels          |
| `ease-origami-folding-menu__item`           | Each folding `<li>` panel              |
| `ease-origami-folding-menu__link`           | The anchor inside each panel           |

## 3. Why is it useful?

This component showcases advanced CSS techniques that fit EaseMotion CSS's philosophy of **delightful, JavaScript-free motion**:

- **3D transforms** — `perspective`, `transform-style: preserve-3d`, and `rotateX()` create a true folding effect, not a fake fade.
- **Staggered transition delays** — each panel unfolds slightly after the last, producing a natural cascading paper-fold feel.
- **Elastic easing** — a `cubic-bezier(0.68, -0.55, 0.27, 1.55)` curve gives the panels a subtle bounce as they snap into place.
- **Keyboard-accessible** — uses `:focus-within` so the menu opens for keyboard users too.
- **Accessibility-first** — respects `prefers-reduced-motion` and disables the fold animation for users who need it.
- **Practical use cases** — perfect for navigation bars, account/profile dropdowns, action menus, or any dropdown where a little visual flair adds delight without sacrificing usability.

The component is fully self-contained, requires zero JavaScript, and works in all modern browsers.