# Ripple Radio Button

A modern **Ripple Radio Button** component built entirely with **HTML** and **CSS**, inspired by blog settings and preference panels. The component features a smooth ripple animation, custom radio indicators, responsive layouts, and accessibility support—all without requiring JavaScript.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Blog-inspired settings interface
- Smooth ripple selection animation
- Custom radio button design
- Responsive layout
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Easily customizable using CSS

---

## Folder Structure

```text
ripple-radio-button-amna/
├── demo.html
├── style.css
└── README.md
```

---

## Customization

You can easily customize the component by modifying the colors, border styles, and animation timing in `style.css`.

Common customizations include:

- Radio indicator color
- Ripple animation color
- Border radius
- Animation duration
- Typography
- Background colors

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<fieldset class="radio-group">

    <legend>Choose your reading theme</legend>

    <label class="radio">

        <input
            type="radio"
            name="theme"
            checked>

        <span class="indicator"></span>

        Light

    </label>

</fieldset>
```

Open **demo.html** directly in any modern browser to preview the component.

---

## Included Options

- Light
- Dark
- Sepia
- System

The demo showcases a blog-style reading preference selector using a reusable ripple radio button component.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Semantic HTML using `fieldset` and `legend`
- Keyboard navigation supported
- Visible focus styles using `:focus-visible`
- Responsive layout
- Supports `prefers-reduced-motion`
- High-contrast interface for improved readability

---

## License

Created as a submission for the **EaseMotion CSS** examples library.