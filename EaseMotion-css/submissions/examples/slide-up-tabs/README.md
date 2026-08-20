````markdown
# CSS Slide-Up Tabs for Fintech Dashboard

A responsive fintech dashboard component featuring CSS-only
Slide-Up Tabs.

## Features

- Pure HTML and CSS
- No JavaScript
- CSS-only tab switching
- Slide-up content animation
- Animated active-tab indicator
- Smooth transitions
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Accessible native radio-button controls
- `prefers-reduced-motion` support
- Fintech dashboard styling

## Files

```text
slide-up-tabs/
├── demo.html
├── style.css
└── README.md
````

## How It Works

The component uses hidden radio inputs to control the active tab.

Example:

```html
<input
    type="radio"
    name="tabs"
    id="overview"
    checked
>
```

Each radio input is connected to a label:

```html
<label for="overview">
    <span>Overview</span>
</label>
```

CSS sibling selectors then display the matching panel.

```css
#overview:checked ~ .panel-overview {
    display: block;
}
```

No JavaScript is required.

## Slide-Up Animation

The active panel uses a CSS keyframe animation:

```css
@keyframes slideUp {

    from {
        opacity: 0;
        transform: translateY(28px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

This creates a smooth upward entrance whenever the selected
dashboard tab changes.

## Active Tab Indicator

The active tab contains an animated bottom indicator.

The indicator moves upward using:

```css
transform: translateY(0);
```

combined with a CSS transition.

## CSS Custom Properties

The main colors and design values can be customized through:

```css
:root {
    --background: #070b14;
    --surface: #101827;
    --primary: #7c5cff;
    --primary-light: #a895ff;
    --text: #f5f7ff;
    --muted: #8995ad;
    --success: #35d49a;
    --danger: #ff6680;
    --border: rgba(255, 255, 255, 0.09);
}
```

## Responsive Design

The component supports:

* Desktop
* Tablet
* Mobile

On smaller screens the tab navigation becomes vertical and
dashboard cards adapt to the available width.

## Accessibility

The component uses native radio inputs and labels for tab selection.
This allows the controls to remain functional without JavaScript.

Motion is reduced for users who have enabled the
`prefers-reduced-motion` system preference.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Keyframes
* CSS Transitions
* Media Queries

## Usage

Copy `demo.html` and `style.css` into your project.

No external dependencies are required.

## License

This example is contributed to EaseMotion CSS according to the
repository contribution guidelines.

```
```
