# Animated Progress Steps Component

A reusable **Animated Multi-Step Progress Tracker** built using HTML, CSS, and JavaScript. The component visually guides users through a sequence of steps using animated connectors, active step highlighting, and completion indicators, making it ideal for onboarding flows, checkout processes, and multi-step forms.

---

## Features

* ✨ Animated multi-step progress tracker
* 🔗 Connected steps with animated progress line
* 🎯 Active step pulse animation
* ✅ Checkmark appears for completed steps
* ⏭ Previous and Next navigation controls
* 📊 Dynamic progress percentage
* 📱 Responsive layout for desktop and mobile
* ♿ Accessibility support with `prefers-reduced-motion`
* 🎨 Easy customization using CSS variables

---

## Folder Structure

```text
u-progress-steps-animated-20568/
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
    --ease-success:#22c55e;
    --ease-bg:#f8fafc;
    --ease-card:#ffffff;
    --ease-radius:14px;
}
```

You can customize:

* Primary and secondary colors
* Success color
* Background color
* Card appearance
* Border radius
* Shadows
* Animation timing

---

## Component Highlights

* Animated connecting progress line
* Five-step workflow example
* Active step pulse effect
* Completed step checkmark animation
* Progress percentage display
* Previous/Next controls
* Responsive design
* Smooth transitions

---

## JavaScript Functionality

The demo includes lightweight JavaScript to:

* Move between steps
* Update the active step
* Display checkmarks for completed steps
* Animate the progress line
* Update the completion percentage
* Enable and disable navigation buttons

---

## Accessibility

The component respects user motion preferences.

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
* Flexbox
* CSS Animations

---

## Use Cases

* Multi-step forms
* Checkout processes
* User onboarding
* Registration flows
* Course progress tracking
* Setup wizards
* Project workflow tracking
* Application status indicators

---

## Customization

You can easily modify:

* Number of steps
* Step labels
* Progress colors
* Animation duration
* Pulse effects
* Checkmark style
* Button appearance
* Layout spacing

---

## Future Enhancements

* Clickable step navigation
* Vertical progress layout
* Gradient progress fills
* Icon support for each step
* Automatic progression
* Theme presets
* RTL language support

---

## License

This example is created for the **EaseMotion CSS** project and demonstrates a reusable animated multi-step progress tracker using HTML, CSS, and JavaScript.
