````markdown
# CSS Morph-Glow Progress Bar

A responsive gaming-hub progress bar featuring a morphing shape,
animated glow, moving highlight and pulsing progress indicator.

The component is built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript
- Morphing progress-bar shape
- Animated glow effect
- Moving highlight/shimmer
- Pulsing progress indicator
- CSS keyframe animations
- Responsive desktop, tablet and mobile layouts
- CSS custom properties
- Gaming dashboard UI
- `prefers-reduced-motion` support

## Files

```text
morph-glow-progress-bar/
├── demo.html
├── style.css
└── README.md
````

## Usage

Open `demo.html` directly in a modern browser.

No external libraries or JavaScript are required.

## Main HTML Structure

```html
<div class="morph-progress">

    <div class="progress-track">

        <div class="progress-fill">

            <div class="glow-core"></div>

            <div class="progress-orb">
                <span></span>
            </div>

        </div>

    </div>

</div>
```

## Customization

The component uses CSS custom properties:

```css
:root {
    --bg: #07070d;
    --surface: #11111c;
    --primary: #9b5cff;
    --primary-light: #c39cff;
    --cyan: #43e7ff;
    --pink: #ff4fd8;
    --text: #f7f5ff;
    --muted: #88879d;
}
```

Change these values to create different themes.

## Progress Percentage

The main progress amount can be changed by modifying the width:

```css
.progress-fill {
    width: 86%;
}
```

For example:

```css
.progress-fill {
    width: 65%;
}
```

creates a 65% progress state.

## Animation

The morphing effect is created with CSS keyframes:

```css
@keyframes morphGlow {

    0% {
        border-radius: 30px 15px 15px 30px;
    }

    50% {
        border-radius: 20px 30px 18px 25px;
    }

    100% {
        border-radius: 30px 18px 30px 20px;
    }
}
```

The glow changes during the animation using `box-shadow` and
`filter`.

## Responsive Design

The component supports:

* Desktop
* Tablet
* Mobile

The achievement and secondary progress cards automatically switch
to single-column layouts on smaller screens.

## Accessibility

The component supports users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

This minimizes animation while preserving the component's visual
structure.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Keyframes
* CSS Transforms
* CSS Media Queries
* CSS Filters
* CSS Box Shadows

## Design

The component is designed for gaming dashboards, player profiles,
achievement systems, XP tracking and battle-pass interfaces.

## Contribution

This example follows the requested EaseMotion CSS contribution
structure and uses no external JavaScript frameworks.

```
```
