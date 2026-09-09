# CSS Dark Mode Form

A complete dark mode form set with all HTML input types styled — text, email, password, select, textarea, checkboxes, radios, toggle switch, and range slider.

## What does this do?

It provides a fully styled form component where every standard HTML input type looks polished in both light and dark mode. The dark mode is activated automatically via the `prefers-color-scheme` media query, requiring no toggle or JavaScript.

## How is it used?

Drop `demo.html` and `style.css` into your project. The form uses standard semantic HTML with CSS classes:

```html
<form class="dark-form" action="#" method="post">
  <div class="dark-form__group">
    <label for="email" class="dark-form__label">Email</label>
    <input type="email" id="email" name="email" class="dark-form__input" placeholder="jane@example.com">
  </div>
  <button type="submit" class="dark-form__button">Submit</button>
</form>
```

Every input type has a corresponding class: `dark-form__input`, `dark-form__select`, `dark-form__textarea`, `dark-form__checkbox`, `dark-form__radio`, `dark-form__toggle`, and `dark-form__range`.

## Why is it useful?

Forms are one of the most common UI elements on any website, and styling them consistently across light and dark modes is tedious. This component gives developers a complete, ready-to-use form kit with custom-styled checkboxes, radios, toggle switches, and range sliders, all using CSS custom properties for easy theming and automatic dark mode support.
