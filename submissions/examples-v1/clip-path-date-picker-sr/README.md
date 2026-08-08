# Clip Path Date Picker

A clean and responsive date picker component with a clip-path reveal animation. It is designed for SaaS dashboards, scheduling interfaces, and booking forms using only HTML and CSS.

---

## Features

- Pure HTML and CSS
- No JavaScript required
- Smooth clip-path reveal animation
- Responsive design
- SaaS dashboard inspired layout
- Accessible form controls
- Compatible with EaseMotion CSS utility classes

---

## Folder Structure

```text
clip-path-date-picker-sr/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

Add the following markup to your HTML:

```html
<section class="date-picker-card ease-fade-in">

    <form class="date-form">

        <label for="meeting-date">
            Meeting Date
        </label>

        <div class="input-wrapper ease-hover-lift">

            <span class="calendar-icon">
                📅
            </span>

            <input
                id="meeting-date"
                type="date">

        </div>

        <button class="book-btn">
            Schedule Meeting
        </button>

    </form>

</section>
```

Open `demo.html` in any modern browser to see the component.

---

## Why This Component?

Date pickers are commonly used in scheduling, booking, and dashboard applications. This component adds a subtle clip-path animation that enhances the user experience without relying on JavaScript. The result is a lightweight, reusable, and visually engaging component that fits naturally into modern SaaS interfaces.

---

## Browser Support

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Accessibility

- Uses semantic HTML elements
- Native `input[type="date"]`
- Associated labels for better usability
- Keyboard accessible
- Responsive on desktop, tablet, and mobile devices

---

## Customization

You can easily customize:

- Theme colors
- Border radius
- Animation speed
- Card spacing
- Button styles
- Calendar icon
- Typography

---

## License

Created as a community contribution for the **EaseMotion CSS** project.