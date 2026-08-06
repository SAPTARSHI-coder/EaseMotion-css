````markdown
# CSS Scale-Hover Progress Bar

A responsive gaming-hub progress bar featuring a smooth
scale-hover interaction.

The component uses only HTML and CSS with no JavaScript
dependencies.

## Features

- Pure HTML and CSS
- No JavaScript
- Scale-hover progress effect
- Smooth CSS transitions
- Animated progress glow
- Interactive progress marker
- Responsive gaming dashboard layout
- CSS custom properties
- Accessible reduced-motion support
- Desktop, tablet and mobile support

## Files

```text
scale-hover-progress-bar/
├── demo.html
├── style.css
└── README.md
````

## Usage

Open `demo.html` directly in a modern browser.

No build tools or dependencies are required.

## Progress Bar

The main progress bar uses:

```html
<div class="scale-progress">
    <div class="progress-track">
        <div class="progress-fill">
            <span class="progress-glow"></span>
            <span class="progress-marker"></span>
        </div>
    </div>
</div>
```

## Change Progress

Change the width of `.progress-fill`:

```css
.progress-fill {
    width: 72%;
}
```

For example:

```css
.progress-fill {
    width: 50%;
}
```

creates a 50% progress state.

## Scale-Hover Effect

When the user hovers over the progress track, the progress
indicator scales vertically:

```css
.progress-track:hover .progress-fill {
    transform: scaleY(1.45);
}
```

The progress marker also scales during hover.

## CSS Custom Properties

The main colors can be customized using CSS variables:

```css
:root {
    --bg: #080910;
    --card: #121421;
    --primary: #7657ff;
    --secondary: #e94fc3;
    --accent: #4de5ff;
    --text: #f6f7ff;
    --muted: #898ba0;
}
```

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

The main progress component also uses semantic progressbar
attributes:

```html
role="progressbar"
aria-valuenow="72"
aria-valuemin="0"
aria-valuemax="100"
```

## Responsive Design

The layout adapts to:

* Desktop
* Tablet
* Mobile

CSS media queries adjust the grid and card layouts for
smaller screens.

## Technologies

* HTML5
* CSS3
* Flexbox
* CSS Grid
* CSS Custom Properties
* CSS Transitions
* CSS Keyframes
* CSS Transforms
* CSS Media Queries

## Contribution

Created as a pure HTML/CSS showcase for the EaseMotion CSS
gaming-hub component collection.

Closes #59195

```
```
