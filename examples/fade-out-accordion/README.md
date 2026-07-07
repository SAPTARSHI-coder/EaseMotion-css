# Fade-Out Accordion

A responsive dashboard-style accordion built using pure CSS.

## Features

- Pure CSS
- No JavaScript
- Keyboard Accessible
- Uses semantic `<details>` and `<summary>`
- Fade + Scale animation
- Responsive layout
- Customizable using CSS variables

## Usage

```html
<details class="em-fade-item">
    <summary class="em-fade-summary">
        Revenue
    </summary>

    <div class="em-fade-content">
        <div>
            <p>Your content...</p>
        </div>
    </div>
</details>
```

## CSS Variables

```css
--fade-accordion-duration
--fade-accordion-easing
--fade-accordion-scale
```

## Browser Support

Works in all modern browsers supporting `<details>` and CSS Grid.