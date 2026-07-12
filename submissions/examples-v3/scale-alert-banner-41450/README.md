# Scale Alert Banner

A minimalist **Scale Alert Banner** component built entirely with **HTML** and **CSS**. The component provides smooth scale animations for different alert states while remaining responsive, accessible, and fully customizable using CSS custom properties.

---

## Features

- Pure HTML & CSS
- Zero JavaScript
- Minimalist design
- Smooth scale animation
- Success, Warning and Error variants
- Responsive layout
- Keyboard accessible (`:focus-visible`)
- Supports `prefers-reduced-motion`
- Customizable with CSS variables

---

## Folder Structure

```
scale-alert-banner-41450/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Custom Properties

```css
:root{

    --em-duration:.55s;
    --em-delay:0s;
    --em-easing:cubic-bezier(.22,.61,.36,1);

    --em-scale:1.04;

    --success:#22c55e;
    --warning:#f59e0b;
    --error:#ef4444;

}
```

You can customize:

- Animation duration
- Animation delay
- Animation easing
- Scale amount
- Success color
- Warning color
- Error color

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="alert success">

    <span class="icon">✓</span>

    <div class="content">

        <h2>Success</h2>

        <p>Your project has been deployed successfully.</p>

    </div>

</div>
```

Open **demo.html** directly in any modern browser.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Accessibility

- Keyboard navigation supported
- Visible focus styles using `:focus-visible`
- Responsive layout
- Supports `prefers-reduced-motion`

---

## License

Created as a submission for the **EaseMotion CSS** examples library.