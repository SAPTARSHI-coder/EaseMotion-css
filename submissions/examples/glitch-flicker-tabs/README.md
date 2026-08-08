````markdown
# CSS Glitch-Flicker Tabs for Fintech Dashboard

A responsive fintech dashboard component featuring animated
Glitch-Flicker Tabs built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- CSS-only tab switching
- Glitch-flicker active tab animation
- Smooth content transitions
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Accessible tab navigation structure
- `prefers-reduced-motion` support
- Fintech dashboard styling

## Files

```text
glitch-flicker-tabs/
├── demo.html
├── style.css
└── README.md
````

## How It Works

The tabs use hidden radio inputs and CSS selectors.

Example:

```html
<input
    type="radio"
    name="dashboard-tabs"
    id="tab-overview"
    checked
>
```

The corresponding label activates the radio button:

```html
<label
    for="tab-overview"
    class="tab-button"
>
    Overview
</label>
```

CSS then displays the matching content:

```css
#tab-overview:checked ~ .content-overview {
    display: block;
}
```

This provides tab functionality without JavaScript.

## Glitch-Flicker Effect

The active tab receives the `glitchFlicker` animation:

```css
@keyframes glitchFlicker {

    0% {
        filter: none;
        transform: translate(0);
    }

    10% {
        filter:
            brightness(1.7)
            contrast(1.3);

        transform:
            translate(-2px, 0);
    }

    18% {
        transform:
            translate(2px, 0);
    }

    48% {
        filter: none;
        transform: translate(0);
    }

    100% {
        filter: none;
        transform: translate(0);
    }
}
```

The short brightness and position changes create a digital
glitch/flicker effect when switching tabs.

## CSS Custom Properties

The component can be customized using:

```css
:root {
    --bg: #070b14;
    --surface: #101827;
    --primary: #7c5cff;
    --primary-light: #a895ff;
    --text: #f5f7ff;
    --muted: #8995ad;
    --success: #35d49a;
    --danger: #ff6680;
}
```

## Responsive Design

The component supports:

* Desktop
* Tablet
* Mobile

On smaller screens the tab navigation changes to a vertical layout.

## Accessibility

The tab controls use native radio inputs and labels, allowing keyboard
interaction without JavaScript.

The active state remains visually distinguishable from inactive tabs.

## Reduced Motion

Users who prefer reduced motion are respected through:

```css
@media (prefers-reduced-motion: reduce)
```

Animations and transitions are minimized for those users.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Keyframes
* CSS Transitions
* CSS Custom Properties
* CSS Media Queries
* CSS Radio-button state selectors

## Usage

Copy the component files into your project and customize the CSS
variables and dashboard content as required.

No JavaScript or external dependencies are required.

## License

This example is contributed to EaseMotion CSS according to the
repository contribution guidelines.

```
```
