# Expandable Text Component

A reusable **Expandable Text** component built using HTML, CSS, and JavaScript. The component truncates long text using multi-line clamping and provides a smooth **Read More / Read Less** animation for an improved reading experience.

---

## Features

* 📄 Multi-line text truncation using `-webkit-line-clamp`
* 📖 Smooth expand and collapse animation
* 🔄 Read More / Read Less toggle
* 🎨 Responsive card layout
* ✨ Hover and transition effects
* 📱 Mobile-friendly design
* ♿ Accessibility support with `prefers-reduced-motion`
* 🎛 Easy customization using CSS variables

---

## Folder Structure

```text
u-expandable-text-20569/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Variables

```css
:root{
    --ease-primary:#2563eb;
    --ease-secondary:#1d4ed8;
    --ease-bg:#f8fafc;
    --ease-card:#ffffff;
    --ease-radius:16px;
    --ease-max-height:1200px;
}
```

These variables allow you to customize:

* Primary and secondary colors
* Background color
* Card appearance
* Border radius
* Maximum expanded height
* Animation timing
* Shadows

---

## Component Highlights

* Multi-line text truncation
* Grid-based expand/collapse animation
* Read More / Read Less toggle
* Smooth height transition
* Responsive cards
* Hover animations
* Keyboard focus support
* Lightweight JavaScript

---

## JavaScript Functionality

The demo includes JavaScript to:

* Toggle expanded and collapsed states
* Change the button label between **Read More** and **Read Less**
* Apply smooth content expansion
* Support multiple expandable cards independently

---

## Accessibility

The component respects reduced-motion preferences.

```css
@media (prefers-reduced-motion: reduce){
    *,
    *::before,
    *::after{
        animation:none !important;
        transition:none !important;
    }
}
```

---

## Browser Support

* Chrome
* Edge
* Firefox
* Safari
* Opera

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* CSS Variables
* CSS Grid
* CSS Animations

---

## Use Cases

* Blog previews
* News articles
* Product descriptions
* FAQs
* Documentation pages
* Course summaries
* Portfolio projects
* Knowledge base content

---

## Customization

You can customize:

* Number of visible lines
* Card colors
* Button styles
* Border radius
* Animation duration
* Maximum expanded height
* Typography
* Layout spacing

---

## Future Enhancements

* Expand/collapse icons
* Gradient fade overlay
* Accordion mode
* Markdown content support
* Nested expandable sections
* Theme presets
* RTL language support

---

## License

This example is created for the **EaseMotion CSS** project and demonstrates a reusable expandable text component using HTML, CSS, and JavaScript.
