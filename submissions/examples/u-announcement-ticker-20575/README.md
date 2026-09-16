# Announcement Ticker Component

A reusable announcement ticker component built with HTML and CSS. It displays important announcements, news, release notes, and alerts in a continuously scrolling ticker with smooth animations and responsive behavior.

---

## Features

* 📢 Continuous scrolling marquee animation
* 🔄 Multiple announcement messages
* ❌ Dismiss button
* 🎨 Configurable CSS variables
* ⏸ Pause animation on hover
* 🌙 Light and dark theme support
* 📱 Fully responsive layout
* ♿ Accessibility support with `prefers-reduced-motion`
* 🚀 Easy to customize and reuse

---

## Folder Structure

```
u-announcement-ticker-20575/
├── demo.html
├── style.css
└── README.md
```

---

## CSS Variables

```css
:root{
    --ease-ticker-speed:20s;
    --ease-bg:#2563eb;
    --ease-bg-secondary:#3b82f6;
    --ease-dark:#0f172a;
    --ease-light:#ffffff;
    --ease-radius:12px;
}
```

Example:

```css
:root{
    --ease-ticker-speed:30s;
}
```

Increase the value for slower scrolling or decrease it for faster scrolling.

---

## Component Highlights

* Sticky announcement bar
* Infinite marquee animation
* Multiple announcements
* Call-to-action links
* Responsive layout
* Dismiss button
* Light theme example
* Dark theme example
* Smooth hover transitions

---

## Accessibility

The component respects user accessibility preferences.

```css
@media (prefers-reduced-motion: reduce){
    .ticker-track{
        animation:none;
    }
}
```

Users who prefer reduced motion will see a static announcement bar.

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
* CSS Variables
* Flexbox
* CSS Animations

---

## Use Cases

* Website announcements
* Product release notes
* System maintenance alerts
* Promotional banners
* News tickers
* Event updates
* Community announcements
* Dashboard notifications

---

## Customization

You can easily customize:

* Scroll speed
* Background colors
* Text colors
* Border radius
* Animation duration
* Theme colors
* Typography
* Spacing

using CSS variables.

---

## Responsive Design

The component adapts to desktop, tablet, and mobile devices while maintaining smooth scrolling behavior and readable content.

---

## Future Enhancements

* Vertical ticker mode
* Fade transition mode
* JavaScript-powered message rotation
* Dynamic content loading
* RTL language support
* Touch gesture controls

---

## License

This example is created for the **EaseMotion CSS** project and demonstrates a reusable animated announcement ticker component using only HTML and CSS.
