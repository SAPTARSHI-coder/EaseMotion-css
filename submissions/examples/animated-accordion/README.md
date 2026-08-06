# Animated Accordion

A smooth and reusable CSS-only accordion component for EaseMotion CSS.

## Features

- Pure HTML and CSS
- Smooth height animation
- Fade animation
- No JavaScript
- Keyboard accessible
- Responsive design
- Customizable CSS properties
- Reduced-motion support
- Uses native HTML `details` and `summary`

## Usage

Add the following structure:

```html
<details class="accordion-item">
    <summary>
        <span>Accordion Title</span>
        <span class="icon">+</span>
    </summary>

    <div class="content">
        <div class="content-inner">
            <p>
                Accordion content goes here.
            </p>
        </div>
    </div>
</details>